import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  console.log(session);
  return (
    <>
    <h1 className="text-red-500">welcome</h1>
    </>
  );
}
