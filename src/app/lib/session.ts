import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";

export async function getSession() {
  return auth.api.getSession({
    headers: await headers(),
  });
}

export async function getSessionUser() {
  const session = await getSession();
  return session?.user ?? null;
}
