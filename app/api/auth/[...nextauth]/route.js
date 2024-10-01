import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import connectToDb from '../../../../utils/database'

console.log("clientId:", process.env.GOOGLE_ID);
console.log("clientSecret:", process.env.GOOGLE_CLIENT_SECRET);

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
        try {
         await connectToDb();
         
        } catch (error) {
            
        }
        // Your sign-in logic here
    }
})

export { handler as GET, handler as POST };
