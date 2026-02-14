"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Chrome, AlertCircle, Loader2, ArrowRight } from "lucide-react";

export default function LoginPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const callbackUrl = searchParams.get("callbackUrl") || "/";
    const errorParam = searchParams.get("error");

    useEffect(() => {
        if (status === "authenticated") {
            router.push(callbackUrl);
        }
    }, [status, router, callbackUrl]);

    useEffect(() => {
        if (errorParam) {
            if (errorParam === "OAuthCallback") {
                setError("Google sign-in was cancelled or failed. Please try again.");
            } else {
                setError("Authentication failed. Please try again.");
            }
        }
    }, [errorParam]);

    const handleGoogleSignIn = async () => {
        setIsLoading(true);
        setError(null);
        try {
            await signIn("google", { callbackUrl });
        } catch (err) {
            console.error("Sign-in error:", err);
            setError("Failed to initiate Google sign-in. Please try again.");
            setIsLoading(false);
        }
    };

    if (status === "loading") {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 w-full max-w-md px-6"
            >
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl">
                    {/* Logo/Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-black text-white mb-2 tracking-tight">
                            Welcome to <span className="text-primary">CloudeIndia</span>
                        </h1>
                        <p className="text-slate-400 text-sm">
                            Sign in to continue your mission
                        </p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3"
                        >
                            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                            <p className="text-red-400 text-sm font-medium">{error}</p>
                        </motion.div>
                    )}

                    {/* Google Sign-In Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleGoogleSignIn}
                        disabled={isLoading}
                        className="w-full flex items-center justify-center gap-3 bg-white text-slate-900 font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span>Connecting...</span>
                            </>
                        ) : (
                            <>
                                <Chrome className="w-5 h-5 text-primary" />
                                <span>Continue with Google</span>
                                <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </motion.button>

                    {/* Info Text */}
                    <p className="text-center text-slate-500 text-xs mt-6">
                        By signing in, you agree to our{" "}
                        <a href="/terms" className="text-primary hover:underline">
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="/privacy" className="text-primary hover:underline">
                            Privacy Policy
                        </a>
                    </p>

                    {/* Callback URL Info (for debugging) */}
                    {callbackUrl !== "/" && (
                        <p className="text-center text-slate-600 text-xs mt-4">
                            You'll be redirected to: {callbackUrl}
                        </p>
                    )}
                </div>

                {/* Back to Home */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => router.push("/")}
                    className="mt-6 mx-auto block text-slate-400 hover:text-white transition-colors text-sm font-medium"
                >
                    ← Back to Home
                </motion.button>
            </motion.div>
        </div>
    );
}
