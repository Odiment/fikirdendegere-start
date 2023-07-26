import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Butonum } from "@/components/butonum"
import { Formum } from "@/components/formum"
import { Uyarim } from "@/components/uyarim"

/* import { ConfirmEventButton } from "@/components/confirm-event-button"
import { EventCalendar } from "@/components/event-calendar" */

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center gap-2">
        {/*     TAMVİM BLOĞU    */}
        {/*
        <p className="text-2xl font-bold">Shedule An Initial Meeting</p>        
          <EventCalendar />
          <ConfirmEventButton /> */}
        <p className="text-3xl font-bold">Fikirden Değere</p>
        <p className="text-2xl font-bold">Fikir Öneri Formu</p>

        <Formum />
        <Butonum />
      </div>
    </section>
  )
}
