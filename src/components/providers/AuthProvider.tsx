"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { useEffect, useRef } from "react";

function SessionSync() {
    const { data: session, status } = useSession();
    const isSyncing = useRef(false);

    useEffect(() => {
        // Sync NextAuth session with backend to set HTTP-only cookie
        const syncSession = async (retryCount = 0) => {
            if (status === "authenticated" && session?.user && !isSyncing.current) {
                // @ts-ignore
                const idToken = session.user.id_token;

                if (idToken) {
                    isSyncing.current = true;
                    let response: Response | null = null;
                    try {
                        response = await fetch('/api/auth/google', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ idToken }),
                        });

                        if (response.ok) {
                            console.log("Backend session synced successfully");
                        } else if (response.status === 401 && retryCount < 3) {
                            console.warn(`Backend session sync failed with status 401. Retrying... (Attempt ${retryCount + 1})`);
                            // Retry if it's a potential timing issue
                            setTimeout(() => syncSession(retryCount + 1), 2000);
                        } else {
                            console.error(`Backend session sync failed with status: ${response.status}`);
                        }
                    } catch (error) {
                        console.error("Failed to sync session with backend", error);
                        if (retryCount < 3) {
                            console.warn(`Retrying backend session sync... (Attempt ${retryCount + 1})`);
                            setTimeout(() => syncSession(retryCount + 1), 3000);
                        }
                    } finally {
                        // Only reset isSyncing if no retry is scheduled
                        if (retryCount >= 3 || (response && response.ok) || (response && response.status !== 401)) {
                            isSyncing.current = false;
                        }
                    }
                }
            }
        };

        syncSession();

        // Silent auth check every 5 minutes
        const checkInterval = setInterval(async () => {
            if (status === "authenticated") {
                try {
                    await fetch('/api/auth/me');
                } catch (e) {
                    console.error("Silent auth check failed");
                }
            }
        }, 5 * 60 * 1000);

        return () => clearInterval(checkInterval);
    }, [status, session]);

    return null;
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <SessionSync />
            {children}
        </SessionProvider>
    );
}
