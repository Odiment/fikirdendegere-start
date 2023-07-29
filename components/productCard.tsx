"use client"

import { useState } from "react"
import supabase from "@/utils/supabase"
import { BellRing, Check, Pencil, XCircle } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

/* import { Button, Card, Form } from "react-bootstrap" */

type CardProps = React.ComponentProps<typeof Card>

export function productCard({ className, ...props }: CardProps) {
  /* function productCard(props) { */
  const product = props.product

  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(product.name)
  const [description, setDescription] = useState(product.description)

  async function updateProduct() {
    try {
      const { data, error } = await supabase
        .from("products")
        .update({
          name: name,
          description: description,
        })
        .eq("id", product.id)

      if (error) throw error
      window.location.reload()
    } catch (error) {
      alert(error.message)
    }
  }

  async function deleteProduct() {
    try {
      const { data, error } = await supabase
        .from("products")
        .delete()
        .eq("id", product.id)

      if (error) throw error
      window.location.reload()
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <>
      <Card className={cn("w-[380px]", className)} {...props}>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <p>deneme</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="destructive" onClick={() => deleteProduct()}>
            <XCircle className="mr-2 h-4 w-4" /> Delete Product
          </Button>
          <Button variant="blueish" onClick={() => setEditing(true)}>
            <Pencil className="mr-2 h-4 w-4" /> Edit Product
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default productCard
