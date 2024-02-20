import * as React from "react";
import { MatchNewParticipantItemProps } from "./match-new-participant-item.types";
import { Save, Trash2, UserPlus } from "lucide-react";
import Input from "../core/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { MatchPerson } from "@/types/core";
import { zodResolver } from "@hookform/resolvers/zod";
import { matchPersonSchema } from "./match-new-participant-item.schema";

const MatchNewParticipantItem: React.FC<MatchNewParticipantItemProps> = ({
	uuid,
	onSave,
	initialValues,
	onRemove,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<MatchPerson>({
		resolver: zodResolver(matchPersonSchema),
		values: {
			uid: uuid,
			name: initialValues?.name || "",
			email: initialValues?.email || "",
		},
	});

	console.log({ errors, isValid });

	const onSubmit: SubmitHandler<MatchPerson> = (values) => {
		onSave(uuid, values);
	};

	return (
		<li>
			<form
				className="py-2 px-4 border-b flex justify-between items-center gap-4"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="flex justify-between flex-1">
					<Input
						placeholder="Participant name"
						className="p-2 rounded focus:outline-primary/25 focus:outline-1 focus:ring-0 border-b"
						autoFocus
						wrapperClass="w-auto"
						error={errors.name?.message}
						{...register("name")}
					/>
					<Input
						placeholder="email@example.com"
						className="p-2 rounded focus:outline-primary/25 focus:outline-1 focus:ring-0 border-b"
						type="email"
						wrapperClass="w-auto"
						error={errors.email?.message}
						{...register("email")}
					/>
				</div>
				<div className="flex items-center gap-3">
					<button
						title="Save participant"
						className="cursor-pointer"
						type="submit"
					>
						{!!initialValues ? (
							<Save className="w-4 h-4 text-primary" />
						) : (
							<UserPlus className="w-4 h-4 text-primary" />
						)}
					</button>
					<button
						title="Remove participant"
						className="cursor-pointer"
						type="button"
						onClick={() => onRemove(uuid)}
					>
						<Trash2 className="w-4 h-4 text-gray-400" />
					</button>
				</div>
			</form>
		</li>
	);
};

export default MatchNewParticipantItem;
