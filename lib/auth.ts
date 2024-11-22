// "use client"
import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import NextAuth, { NextAuthOptions } from "next-auth";
// import bcrypt from "bcryptjs";

const client = new PrismaClient();

export const NEXT_AUTH_CONFIG: NextAuthOptions = {
  providers: [
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: { label: "Email", type: "text" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   authorize: async (credentials, req) => {
    
    //     // if (!credentials?.email || !credentials?.password) {
    //     //   throw new Error("Email and Password are required");
    //     // }
      
    //     // Fetch user from database
    //     // const user = await client.user.findUnique({
    //     //   where: { email: credentials.email },
    //     // });
      
    //     // if (!user || !(await bcrypt.compare(credentials.password, user.password))) {
    //     //   throw new Error("Invalid email or password");
    //     // }

    //     return {
    //       id: user.id.toString(),
    //       email: user.email,
    //       name: user.name,
    //     };
    //   },
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account && (account.provider === "google" || account.provider === "github")) {
        const { email } = user;
  
        let existingUser = await client.user.findUnique({
          where: { email: email ?? undefined },
         
        });
  
        if (!existingUser) {
          existingUser = await client.user.create({
            data: {
              name: user.name ?? "",
              email: email ?? "",
              profile_url: user.image,
              provider: account?.provider ?? "",
              isVerified:true,
            },
           
          });
        }
  
       
      }
      return true; // Ensure boolean return type
    },
  
  
    async jwt({ token, user }) {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      return { ...session, user: { ...session.user, id: token.uid as string} };
    },
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
};

const handler = NextAuth(NEXT_AUTH_CONFIG);

export { handler as GET, handler as POST };