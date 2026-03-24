import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { registerSchema } from "./schema";

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
const [rows]: any = await db.query("SELECT * FROM users WHERE email = ?", [
  email,
]);

if (rows && rows.length > 0) {
  return NextResponse.json({ message: "User already exists" }, { status: 409 });
}
 
    //  encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // insert to database
    await db.query(
      "INSERT INTO users (first_name, last_name,country,mobile_no, email, password) VALUES (?, ?, ?,?,?,?)",
      [first_name, last_name, country, mobile_no, email, hashedPassword],
    );

    return NextResponse.json(
      {
        message: "User Registration Successful!",
        status: "success",
      },
      { status: 201 },
    );
  } catch (error:any) {
    console.error("DB Error:", error);
    console.log("❌ 数据库操作失败:", error.message);
    return NextResponse.json(
      { message: "Internal Server Error", devError: error.message },
      { status: 500 },
    );
  }
}
