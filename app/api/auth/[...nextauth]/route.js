import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import connectToDb from '../../../../utils/database'
import User from "../../../../models/users"

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
        const sessionUser = await User.findOne({
            email: session.user.email
        })
        session.user.id = sessionUser._id.toString();
        return session
    },
    async signIn({ profile }) {
        try {
            await connectToDb();
            const userExists = await User.findOne({
                email: profile?.email,
                username: profile?.name?.toLowerCase(),
                iamge: profile?.picture
            })

        } catch (error) {

        }
        // Your sign-in logic here
    }
})

export { handler as GET, handler as POST };
