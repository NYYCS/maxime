import NextAuth from "next-auth"
import Providers from "next-auth/providers"

import getDatabase from "../../../lib/getDatabase";
 
export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const conn = getDatabase();
        const res = conn.query("SELECT * FROM users WHERE email == $1", [credentials.email]);
        if (!res) return null;
        const user = res[0];
        if (credentials.password != user.password) return null;
        return user;
      }
    })
  ],
});