import { z } from "zod"

export const fikirSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Your project name should not be that short!" })
    .max(255),
  description: z
    .string()
    .min(3, { message: "Your project description should not be that short!" })
    .max(255),
})
