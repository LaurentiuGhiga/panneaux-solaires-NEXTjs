import { getToken } from "next-auth/jwt";
import { nextResponse } from "next/server";

export async function middleware(req) {
  if (req.nextUrl.pathName === "/") {
    const session = await getToken({
      req,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });
    if (!session) return nextResponse.redirect("/home");
  }
}
