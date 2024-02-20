import * as React from "react";
import { MatchPersonItemProps } from "./match-person-item.types";
import { Edit, Trash2 } from "lucide-react";
import MatchNewParticipantItem from "../match-new-participant-item";

const MatchPersonItem: React.FC<MatchPersonItemProps> = ({
	participant,
	onRemove,
	onSave,
}) => {
	const [isEdit, setIsEdit] = React.useState(false);

	const toggleIsEdit = (): void => {
		setIsEdit((prev) => !prev);
	};

	const onUpdate: MatchPersonItemProps["onSave"] = (uid, values): void => {
		onSave(uid, values);
		toggleIsEdit();
	};

	return isEdit ? (
		<MatchNewParticipantItem
			uuid={participant.uid}
			initialValues={participant}
			onRemove={onRemove}
			onSave={onUpdate}
		/>
	) : (
		<li
			className="px-4 py-4 border-b flex justify-between items-center gap-4"
			key={participant.uid}
		>
			<div className="flex justify-between flex-1">
				<p>{participant.name}</p>
				<p>
					<span className="py-1 px-2 text-white bg-green-600 rounded-full">
						{participant.email}
					</span>
				</p>
			</div>
			<div className="flex items-center gap-3">
				<button
					onClick={toggleIsEdit}
					title="Confirm Changes"
					className="cursor-pointer"
				>
					<Edit className="w-4 h-4 text-primary" />
				</button>
				<button
					title="Remove participant"
					className="cursor-pointer"
					onClick={() => onRemove(participant.uid)}
				>
					<Trash2 className="w-4 h-4 text-gray-400" />
				</button>
			</div>
		</li>
	);
};

export default MatchPersonItem;
