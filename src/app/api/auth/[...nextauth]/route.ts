import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
    providers: [GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as String,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as String,
    })],
    pages: {
        signIn: "/login", // Ruta personalizada para el inicio de sesión
      },
});

export { handler as GET, handler as POST };