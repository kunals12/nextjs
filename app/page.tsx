import axios from "axios";
import Loading from "./loading";

async function getUserDetails() {
  try {
    const response = await axios.get("http://localhost:3000/api/user");
    return response.data;
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

          {userDetails?.email}
        </div>
      </div>
    </div>
  );
}
