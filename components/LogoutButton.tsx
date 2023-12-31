"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

import { buttonVariants } from "@/components/ui/button"

export default function LogoutButton() {
  const router = useRouter()

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient()

  const signOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    /*     <button
      className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
      onClick={signOut}
    >
      Logout
    </button> */
    <Link
      href="/login"
      rel="noreferrer"
      className={buttonVariants({ variant: "outline" })}
      onClick={signOut}
      /*                 className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
       */
    >
      Logout
    </Link>
  )
}
