import { Client } from 'faunadb';

console.log("key do fauna");
console.log(process.env.FAUNADB_KEY);

export const fauna = new Client({
    secret: process.env.FAUNADB_KEY as string,
    domain:"db.us.fauna.com"
})