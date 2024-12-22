import db from "@/db";
import { NextRequest, NextResponse } from "next/server";
import { UserInputSchema } from "@/components/FormElement";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log(body, "this is the body");
    // const { success, error } = UserInputSchema.safeParse(body);
    // console.log(success, "this is the validation");
    // console.log(error);
    // if (!success) {
    //   return NextResponse.json({
    //     success: false,
    //     message: "validation error",
    //   });
    // }
    // console.log(body, "this is the post request");
    await db.userMessage.create({
      data: body,
    });
    return NextResponse.json({
      success: true,
      message: "successfully added",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error,
    });
  }
}
