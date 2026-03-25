import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { loginSchema } from "./schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = loginSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { message: "Invalid format", errors: validation.error.format() },
        { status: 400 },
      );
    }

    const { email, password } = validation.data;

    // find the user in database
    const [rows]: any = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    const user = rows[0];

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    
// compare the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 },
      );
    }

    // login sucess
    return NextResponse.json(
      {
        message: "Login success!",
        user: { email: user.email, name: `${user.first_name} ${user.last_name}`},
      },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Server error", devError: error.message },
      { status: 500 },
    );
  }
}
