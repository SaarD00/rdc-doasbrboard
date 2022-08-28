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
          credentials?.username === "Samayara Srivastava" &&
          credentials?.password === "amongus6969"
        ) {
          return {
            id: 1,
            name: "Samayara Srivastava",
            email: "srivastavasamayara30@gmail.com",
          };

        } 
        if (
          credentials?.username === "Shilpa Sawalkar" &&
          credentials?.password === "amogus6969"
        ) {
          return {
            id: 2,
            name: "Shilpa Sawalkar",
            email: "shilpa.sawalkar@vgos.org",
          };

        } 


        if (
          credentials?.username === "SaarDOO" &&
          credentials?.password === "pass@123"
        ) {
          return {
            id: 3,
            name: "SaarDOO",
            email: "astrosaard@gmail.com",
          };
        }
        return null;




      },
    }),
  ],
});
