import { matchPersonSchema } from "@/components/match/match-new-participant-item";
import { z } from "zod";

export type MatchPerson = z.infer<typeof matchPersonSchema>;
