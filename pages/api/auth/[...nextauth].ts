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
          credentials?.username === "Test" &&
          credentials?.password === "test"
        ) {
          return {
            id: 1,
            name: "Dont redirect to /profile",
            email: "srivastavasamayara30@gmail.com",
            image: "https://teams.microsoft.com/api/mt/apac/beta/users/8:orgid:63669451-7df9-4554-857d-22811e51df50/profilepicturev2?displayname=Samaira%20Srivastav&size=HR64x64",
            description: ""
          };

        } 
        if (
          credentials?.username === "Samayara Srivastava" &&
          credentials?.password === "amongus6969"
        ) {
          return {
            id: 2,
            name: "Samayara Srivastava",
            email: "srivastavasamayara30@gmail.com",
            image: "https://teams.microsoft.com/api/mt/apac/beta/users/8:orgid:63669451-7df9-4554-857d-22811e51df50/profilepicturev2?displayname=Samaira%20Srivastav&size=HR64x64",
            description: ""
          };

        } 
        if (
          credentials?.username === "Shilpa Sawalkar" &&
          credentials?.password === "amogus6969"
        ) {
          return {
            id: 3,
            name: "Shilpa Sawalkar",
            email: "shilpa.sawalkar@vgos.org",
            image: "https://teams.microsoft.com/api/mt/apac/beta/users/8:orgid:711fb9cf-6843-404c-9dc7-e1c7dc772e7b/profilepicturev2?displayname=Shilpa%20Sawalkar&size=HR64x64",
           
          };

        } 


        if (
          credentials?.username === "SaarDOO" &&
          credentials?.password === "pass@123"
        ) {
          return {
            id: 4,
            name: "SaarDOO ",
            email: "astrosaard@gmail.com",
            image: "https://scontent.cdninstagram.com/v/t1.15752-9/300417312_3197264107178178_4927050632140574989_n.jpg?stp=dst-jpg_s480x480&_nc_cat=109&ccb=1-7&_nc_sid=5a057b&_nc_ohc=kTeXDCkVFYgAX90Pls6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=03_AVJYssrnODS254oKL9_MQpVjHUAjdRe3yzmVbRECiWJWlw&oe=6330FAD8",
           
          };
        }
        return null;




      },
    }),
  ],
});
