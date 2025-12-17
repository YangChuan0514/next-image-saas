import { getServerAuthSession } from "@/src/server/auth";
import { redirect } from "next/navigation";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerAuthSession();
  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
