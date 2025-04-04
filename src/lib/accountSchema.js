import { z } from "zod";

export const accountSchema = z.object({
  email: z
    .string()
    .email(),
  username: z
    .string()
    .min(3, { message: " Name must be 3 or more character long " })
    .max(50, { message: " Name must be 50 or less character long " }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password must be at most 20 characters long")
    .regex(/[a-z]/, "Must include a lowercase letter")
    .regex(/[A-Z]/, "Must include an uppercase letter")
    .regex(/[0-9]/, "Must include a number")
    .regex(/[@$!%*?&]/, "Must include a special character (@, $, !, %, *, ?, &)"),
});
