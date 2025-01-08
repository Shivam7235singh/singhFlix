import Contact from "@/models/contact";
import connectDB  from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the request body

    await connectDB(); // Connect to the database
    await Contact.create(body); // Save the contact data

    // Respond with success
    return NextResponse.json(
      { message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting contact form:", error);

    // Respond with error
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
