import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { registerSchema } from "@/app/_utils/Register/useRegisterSchema";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = registerSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: "Invalid input data", errors: validation.error.format() },
        { status: 400 },
      );
    }

    const {
      first_name,
      last_name,
      country,
      mobile_no,
      email,
      password,
      confirmed_password,
    } = validation.data;

    // check if user already exists
    const [existingUser]: any = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
    );

    if (existingUser.length > 0) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 },
      );
    }

    //  encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // insert to database
    await db.query(
      "INSERT INTO users (first_name, last_name,country,mobile_no, email, password) VALUES (?, ?, ?)",
      [first_name, last_name, country, mobile_no, email, hashedPassword],
    );

return NextResponse.json(
  {
    message: "User Registration Successful!",
    status: "success",
  },
  { status: 201 },
);
  } catch (error) {
    console.error("DB Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
