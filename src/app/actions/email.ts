"use server";

import { resend } from "@/lib/resend";
import { ReactNode } from "react";

export async function sendEmail(formData: {
  name: string;
  email: string;
  project: string;
  message: string;
}) {
  const { name, email, project, message } = formData;

  try {
    const { data, error } = await resend.emails.send({
      from: "IM Realty Inquiry <onboarding@resend.dev>", // Replace with your verified domain in production
      to: ["imrealtyoffical@gmail.com"], // The user specified this email in the code comments
      subject: `New Inquiry: ${project} - ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Project: ${project}
        Message: ${message}
      `,
      replyTo: email,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error: any) {
    console.error("Server Action Error:", error);
    return { success: false, error: error.message };
  }
}
