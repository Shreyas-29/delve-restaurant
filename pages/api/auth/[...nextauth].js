import GoogleProvider from 'next-auth/providers/google';
import NextAuth from 'next-auth/next';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUCLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        })
    ],
    secret: process.env.NEXT_PUBLIC_JWT_SECRET
});