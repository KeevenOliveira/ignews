import NextAuth from "next-auth";
import { query as q } from 'faunadb';
import GithubProvider from "next-auth/providers/github";
// console.log("environment variables:")
// console.log(process.env.GITHUB_CLIENT_ID);
// console.log(process.env.GITHUB_CLIENT_SECRET);
import { fauna } from '../../../services/fauna';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'read:user'
        }
      },
    }),
  ],
  secret: "T29d91s5PC+GlG4MhStgwmghgkVRQq2+rsQAb0qkkko",
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log(user);
      console.log("entrou")
      console.log(email);
      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index('user_by_email'),
                  q.Casefold(user.email)
                )
              )
            ),
            q.Create(
              q.Collection('users'),
              {data: {email: user.email}}
            ),
            q.Get(
              q.Match(
                q.Index('user_by_email'),
                q.Casefold(user.email)
              )
            )
          )
        )
      return true
      } catch (error) {
        return false
      }
    },
  }
})