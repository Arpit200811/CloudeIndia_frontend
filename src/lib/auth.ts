import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    pages: {
        signIn: "/login",
    },
    debug: true, // Always enable debug to catch issues
    callbacks: {
        async signIn({ user, account, profile }) {
            // Save user to MongoDB when they sign in with Google
            if (account?.provider === "google" && user.email) {
                console.log('🔵 signIn callback triggered for:', user.email);
                try {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/google`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            googleId: user.id,
                            email: user.email,
                            name: user.name,
                            avatar: user.image,
                        }),
                    });
                    const data = await response.json();
                    console.log('✅ User save response:', data);
                } catch (error) {
                    console.error('❌ Failed to save user to database:', error);
                    // Don't block sign-in if database save fails
                }
            }
            return true;
        },
        async redirect({ url, baseUrl }) {
            // Handle callback URL redirection
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
        },
        async jwt({ token, account, user }) {
            if (account) {
                token.accessToken = account.access_token;
                token.idToken = account.id_token;
            }
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (token && session.user) {
                // @ts-ignore
                session.user.id = token.id;
                // @ts-ignore
                session.accessToken = token.accessToken;
                // @ts-ignore
                session.idToken = token.idToken;
            }
            return session;
        },
    },
};
