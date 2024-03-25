import axios from "axios";
import Loading from "./loading";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function getUserDetails() {
  try {
    const user = await client.user.findFirst({});
    return {
      name: user?.username,
      email: user?.username,
    };
  } catch (e) {
    console.log(e);
  }
}

export default async function Home() {
  const userDetails = await getUserDetails();
  return !userDetails ? (
    <Loading />
  ) : (
    <div className="flex h-screen flex-col justify-center">
      <div className="flex justify-center">
        <div className="rounded border p-8">
          <div>Name: {userDetails?.name}</div>
          Email: {userDetails?.email}
        </div>
      </div>
    </div>
  );
}
