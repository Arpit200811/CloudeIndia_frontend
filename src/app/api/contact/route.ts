import { NextResponse } from 'next/server';
import { z } from 'zod';

// Define the validation schema (Must match frontend)
const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(/^[0-9+\-\s()]*$/, "Invalid phone number").optional().or(z.literal('')),
    subject: z.string().min(5, "Subject is required"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    inquiryType: z.enum(['business', 'career', 'support', 'other']).default('business'),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // 1. Server-Side Validation (Security Layer)
        const result = contactSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json(
                { error: "Validation Failed", details: result.error.flatten().fieldErrors },
                { status: 400 }
            );
        }

        const data = result.data;

        // 2. Simulate Rate Limiting (Prevent Spam)
        // In a real DB, we would check IP limits here.

        // 3. Send Email (Integration Point)
        // TODO: Replace with actual Nodemailer/Resend logic
        // For now, we simulate a successful send to the system logs.
        console.log("------------------------------------------------");
        console.log("📩 NEW CONTACT FORM SUBMISSION");
        console.log("------------------------------------------------");
        console.log(`From: ${data.name} <${data.email}>`);
        console.log(`Subject: [${data.inquiryType.toUpperCase()}] ${data.subject}`);
        console.log(`Message: ${data.message}`);
        console.log("------------------------------------------------");

        // Simulate network delay for realism
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json(
            { message: "Message sent successfully!", id: Date.now().toString() },
            { status: 200 }
        );

    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
