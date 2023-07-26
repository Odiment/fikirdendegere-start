import React from 'react'
import { cookies } from "next/headers"
import Link from "next/link"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import LogoutButton from "../components/LogoutButton"

export default async function LoginHeader() {
    const supabase = createServerComponentClient({ cookies })
    const {
        data: { user },
      } = await supabase.auth.getUser()

  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
    <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
      <div />
      <div>
        {user ? (
          <div className="flex items-center gap-4">
            Hey!, {user.email}
            <LogoutButton />
          </div>
        ) : (
          <Link
            href="/login"
            rel="noreferrer"
            className={buttonVariants({ variant: "emerald" })}
            /*                 className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
             */
          >
            Login
          </Link>
        )}
      </div>
    </div>
  </nav>
  )
}
