import connectToDatabase from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log(body, "this is the body");

    // Connect to MongoDB
    const db = await connectToDatabase();

    // Insert document into UserMessage collection
    const result = await db.collection("UserMessage").insertOne({
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    console.log(result, "this is the response from db");

    return NextResponse.json({
      success: true,
      message: "successfully added",
      id: result.insertedId,
    });
  } catch (error) {
    console.error("Error inserting user message:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to save message",
    });
  }
}
