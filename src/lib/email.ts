"use server";

import { formSchema } from "@/components/HomePage/ContactForm";
import { z } from "zod";

export const send = async (emailFormdata: z.infer<typeof formSchema>) => {
  try {
    const response = await fetch(
      `https://emailoctopus.com/api/1.6/lists/${process.env.LIST_ID}/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: process.env.EMAILOCTOPUS_KEY,
          email_address: emailFormdata.email,
          fields: {
            Name: emailFormdata.name,
          },
        }),
      }
    );

    if (response.ok) {
      return { status: 200, message: "Email submitted successfully!" };
    } else {
      const errorData = await response.json();
      return {
        status: response.status,
        error: errorData.error?.message || "Failed to submit email.",
      };
    }
  } catch (error: any) {
    console.error("EmailOctopus error:", error);
    return { status: 500, error: "Internal server error" };
  }
};
