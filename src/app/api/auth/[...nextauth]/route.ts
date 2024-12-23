import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";


// Initialize Prisma Client
const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "", // Ensure environment variables are set
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "your-secret-key", // Default fallback for testing
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id; // Ensure `id` is attached to the session
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
