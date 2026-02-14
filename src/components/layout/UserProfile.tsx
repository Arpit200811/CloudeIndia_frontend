"use client";

import { useSession, signOut } from "next-auth/react";
import NextImage from "next/image";
import { User, LogOut } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function UserProfile() {
    const { data: session, status } = useSession();
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (status === "loading") {
        return (
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 animate-pulse">
                <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                <div className="w-20 h-3 bg-gray-300 rounded"></div>
            </div>
        );
    }

    if (!session?.user) {
        return null;
    }

    return (
        <div className="hidden md:block relative" ref={dropdownRef}>
            <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200"
            >
                {session.user.image ? (
                    <NextImage
                        src={session.user.image}
                        alt={session.user.name || "User"}
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full"
                    />
                ) : (
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <User size={14} className="text-primary" />
                    </div>
                )}
                <span className="text-sm font-semibold text-slate-700 max-w-[100px] truncate">
                    {session.user.name?.split(' ')[0] || 'User'}
                </span>
            </button>

            {showDropdown && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-semibold text-slate-900 truncate">{session.user.name}</p>
                        <p className="text-xs text-slate-500 truncate">{session.user.email}</p>
                    </div>
                    <button
                        onClick={() => {
                            signOut({ callbackUrl: '/' });
                            setShowDropdown(false);
                        }}
                        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2"
                    >
                        <LogOut size={14} />
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
}
