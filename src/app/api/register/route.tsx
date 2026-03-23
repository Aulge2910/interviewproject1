import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { email, password, username } = await request.json();

    // 1. 简单校验（虽然前端有 Zod，但后端也要守好最后关卡）
    if (!email || !password) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    // 2. 检查用户是否已存在
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

    // 3. 加密密码 (不要存明文！)
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. 插入数据库
    await db.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username || "New User", email, hashedPassword],
    );

    return NextResponse.json(
      { message: "User registered successfully!" },
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
