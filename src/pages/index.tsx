import { NextPageContext } from "next";
import { useSession, signIn, signOut, getSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  // console.log(session);
  return (
    <>
    <h1 className="text-red-500">welcome</h1>
    <img
                src={session?.user?.image!}
                alt={`${session?.user?.name} image`}
                className="rounded-full h-40 w-40"
              />

              {session ? (<button onClick={() => signOut()}>Sign out</button> ) : (<button onClick={() => signIn()}>Sign in</button>)}
    
    
    </>
  );
}
export async function getServerSideProps(ctx: NextPageContext) {
  const session = await getSession(ctx);
  return {
    props: {
      session,
    },
  };
}
