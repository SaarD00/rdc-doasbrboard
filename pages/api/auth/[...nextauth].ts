import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentailProvder from "next-auth/providers/credentials";
import { User } from "../../../typings";
import { useState } from "react";



export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    // GoogleProvider({
    //   //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //   //
    // }),
    CredentailProvder({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "SaarDOO" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {


        if (
          credentials?.username === "SaarDOO" &&
          credentials?.password === "IloveSam"
        ) {
          return {
            id: 1,
            name: "SaarDOO",
            email: "astrosaard@gmail.com",
          };
        }
        return null;




      },
    }),
  ],
});
