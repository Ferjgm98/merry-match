import { z } from "zod";

export const matchPersonSchema = z.object({
	id: z.number().optional(),
	uid: z.string().uuid(),
	name: z.string().min(1, { message: "Name is required" }),
	email: z.string().min(1, { message: "Email is required" }).email(),
});
