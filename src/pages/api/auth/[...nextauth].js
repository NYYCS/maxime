import NextAuth from "next-auth"
import Providers from "next-auth/providers"

import bcrypt, { compare } from "bcrypt"

import getDatabase from "../../../lib/getDatabase"
import { JWT } from "jose";

async function getUser(email) {
  const conn = getDatabase();
  const user = await conn.query("SELECT * FROM users WHERE email = $1", [email])
    .then(res => res.rows[0]);
  return user || null;
}

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await getUser(credentials.email);
        if (!user) throw new Error("Wrong Email or Password.");
        return await compare(credentials.password, user.password).then((result) => {
          if (!result) throw new Error("Wrong Email or Password.");
          return user;
        });
      }
    }),
  ],
  session: {
    jwt: true,
    maxAge: 3 * 24 * 60 * 60,
  },
  callbacks: {
    async session(session, token) {
      session.user = token.user;
      return session;
    },
    async jwt(token, user, account, profile, isNewUser) {
      if (user) {
        token.sub = user.uuid;
        token.user = {
          uuid: user.uuid,
          firstName: user.firstname,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
        }
      }
      return token;
    }
  },
  database: false,
});