import { MatchPerson } from "@/types/core";

export interface MatchNewParticipantItemProps {
	uuid: string;
	onSave: (uuid: string, values: Partial<MatchPerson>) => void;
	onRemove: (uuid: string) => void;
	initialValues?: MatchPerson;
}
