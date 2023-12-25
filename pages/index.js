import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push("/login")
  }, [])

  return (
    <>
      <Link href="/hostelbooking" className="text-white border-1">Welcome on Tournaments</Link>
    </>
  )
}
