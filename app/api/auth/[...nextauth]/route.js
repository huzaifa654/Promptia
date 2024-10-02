import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDb } from '../../../../utils/database'
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
    callbacks: {
        async session({ session }) {
            try {
                await connectToDb(); // Ensure the DB is connected
                const sessionUser = await User.findOne({ email: session.user.email });

                if (sessionUser) {
                    session.user.id = sessionUser._id.toString();
                } else {
                    console.error("User not found during session");
                }

                return session;
            } catch (error) {
                console.error("Error in session callback:", error);
                throw new Error("Session error");
            }
        },
        async signIn({ profile }) {
            try {
                await connectToDb(); // Ensure the DB is connected

                // Check if user exists in the database
                const userExists = await User.findOne({
                    email: profile?.email
                });

                // If user does not exist, create a new user
                if (!userExists) {
                    await User.create({
                        email: profile?.email,
                        username: profile?.name?.toLowerCase(),
                        image: profile?.picture
                    });
                    console.log("New user created");
                }

                return true; // Allow sign-in
            } catch (error) {
                console.error("Error during sign-in:", error);
                return false; // Reject sign-in
            }
        }
    }
});


export { handler as GET, handler as POST };
