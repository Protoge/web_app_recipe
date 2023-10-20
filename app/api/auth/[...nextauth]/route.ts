import NextAuth, { NextAuthOptions,User } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import {PrismaAdapter} from '@auth/prisma-adapter'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

declare module "next-auth" {
  interface Session {
    user: User
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    // ...add more providers here
  ],
  secret:process.env.NEXTAUTH_SECRET,
  callbacks:{
    session: async ({ session, user }:{session:any,user:any}) => {
      if (session?.user) {
        session.user.id = user.id;
      }
      return session;
    },
    async profile (profile:any,tokens:any){
      profile.id = tokens.id
      return profile
    }
  }
  
} as any

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }