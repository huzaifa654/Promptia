import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { signIn } from 'next-auth/react';

console.log("clientId:", process.env.GOOGLE_ID,
    "clientSecret: :", process.env.GOOGLE_CLIENT_SECRET,)

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,

        })
    ],
    async session({ session }) {
        // Your session logic here

    },
    async signIn({ profile }) {

    }
})
export { handler as GET, handler as POST };