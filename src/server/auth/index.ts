import NextAuth, { getServerSession } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import db from "@/src/server/db/db";
import {
  userInfos,
  accounts,
  sessions,
  verificationTokens,
  authenticators,
} from "@/src/server/db/schema";

export const authOptions = {
  adapter: DrizzleAdapter(db as any, {
    usersTable: userInfos,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
    authenticatorsTable: authenticators,
  }),
  providers: [
    GitHubProvider({
      clientId: "Ov23liEB06F2GY0XHmKO",
      clientSecret: "4f8f8317a2b24428f8c7e1abd2c0fa47c8e87f89",
    }),
  ],
};

export const getServerAuthSession = () => {
  return getServerSession(authOptions);
};
