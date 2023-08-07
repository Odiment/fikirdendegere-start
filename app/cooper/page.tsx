"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import supabase from "@/utils/supabase"
import { fikirSchema } from "@/validators/fikir"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Butonum } from "@/components/butonum"
/* import { Button, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap" */

import ProductCard from "@/components/productCard"

export default function Cooper() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [products, setProducts] = useState([])

  const form = useForm<Input>({
    resolver: zodResolver(fikirSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  })

  function onSubmit(data: Input) {
    if (data.confirmPassword !== data.password) {
      toast({
        title: "Passwords do not match",
        variant: "destructive",
      })
      return
    }
    alert(JSON.stringify(data, null, 4))
    console.log(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  async function getProducts() {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .limit(10)
      if (error) throw error
      if (data != null) {
        setProducts(data)
      }
    } catch (error) {
      alert(error.message)
    }
  }

  async function createProduct() {
    try {
      const { data, error } = await supabase
        .from("products")
        .insert({
          name: name,
          description: description,
        })
        .single()

      if (error) throw error
      window.location.reload()
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      <section className="container grid items-center gap-8 pb-8 pt-6 md:py-10">
        <p className="text-3xl font-bold">Fikirden Değere</p>
        <p className="text-2xl font-bold">Mevcut Fikirleriniz</p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl onChange={(e) => setName(e.target.value)}>
                    <Input
                      placeholder="örn. Akıllı termo aktüatör..."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Proje Fikrinizin Adını Giriniz
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Description</FormLabel>
                  <FormControl onChange={(e) => setDescription(e.target.value)}>
                    <Input
                      placeholder="örn. Termo aktüatörlerin cevap gecikmesini azaltan bir çözüm..."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Projenizi Kısaca Nasıl Tanımlarsınız
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" onClick={() => createProduct()}>
              Create Product in Supabase DB
            </Button>
          </form>
        </Form>

        <div>
          {products.map((product) => (
            <div>
              <ProductCard key={product} product={product} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
