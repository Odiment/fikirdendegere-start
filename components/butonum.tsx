"use client"

import { Button } from "./ui/button"

export function Butonum() {
  return (
    <Button
      onClick={() => {
        console.log("tıklandı!!!")
      }}
    >
      Tıkla Beni!
    </Button>
  )
}
