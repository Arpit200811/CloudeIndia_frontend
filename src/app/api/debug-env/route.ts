import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        hasClientId: !!process.env.GOOGLE_CLIENT_ID,
        hasClientSecret: !!process.env.GOOGLE_CLIENT_SECRET,
        hasNextAuthUrl: !!process.env.NEXTAUTH_URL,
        hasNextAuthSecret: !!process.env.NEXTAUTH_SECRET,
        nextAuthUrl: process.env.NEXTAUTH_URL,
        // Don't expose actual secrets, just confirm they exist
        clientIdPrefix: process.env.GOOGLE_CLIENT_ID?.substring(0, 20) + "...",
    });
}
