// // src/db.ts
// import { MongoClient } from "mongodb";

// declare global {
//   var _mongoClientPromise: Promise<MongoClient> | undefined;
// }

// const MONGODB_URI = process.env.MONGODB_URI as string;

// let client: MongoClient;

// if (!global._mongoClientPromise) {
//   client = new MongoClient(MONGODB_URI);
//   global._mongoClientPromise = client.connect();
// }

// const clientPromise: Promise<MongoClient> = global._mongoClientPromise;

// export { clientPromise as client };

// src/db.ts
import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI as string;
export const client = new MongoClient(MONGODB_URI);

await client.connect(); // ensure connection before using
