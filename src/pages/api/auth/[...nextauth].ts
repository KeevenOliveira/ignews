import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
// import log from "loggin"
console.log("environment variables:")
console.log(process.env.GITHUB_CLIENT_ID);
console.log(process.env.GITHUB_CLIENT_SECRET);


export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
          params: {
            scope: 'read:user'
          }
      }
    }),
  ],
  secret: "T29d91s5PC+GlG4MhStgwmghgkVRQq2+rsQAb0qkkko="
})