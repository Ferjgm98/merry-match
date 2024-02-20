"use client";
import MatchNewParticipantItem from "@/components/match/match-new-participant-item";
import MatchPersonItem from "@/components/match/match-person-item";
import { MatchPerson } from "@/types/core";
import { generateUid } from "@/utils";
import { useState } from "react";

const NewMatchPage = () => {
	const [participants, setParticipants] = useState<
		(MatchPerson | Partial<MatchPerson>)[]
	>([]);

	const onAdd = (): void => {
		setParticipants((prev) => [...prev, { uid: generateUid() }]);
	};

	const onSave = (uuid: string, values: Partial<MatchPerson>): void => {
		setParticipants((prev) => {
			const clone = [...prev];
			const item = clone.find((participant) => participant.uid === uuid);

			if (!!item) {
				item.name = values.name;
				item.email = values.email;
			}

			return clone;
		});
	};

	const onRemove = (uuid: string): void => {
		setParticipants((prev) => {
			return prev.filter((participant) => participant.uid !== uuid);
		});
	};

	return (
		<main className="py-4">
			<h1 className="text-center text-3xl font-semibold py-8">New Match</h1>
			<section className="w-full md:max-w-md lg:max-w-xl border mx-auto">
				{!participants.length && (
					<p className="text-center my-2 mt-4 font-semibold">
						Add new participants to your secret santa list!
					</p>
				)}
				<ul className="px-2">
					{participants?.map((participant) =>
						participant.name && participant.email ? (
							<MatchPersonItem
								key={participant.uid}
								participant={participant as MatchPerson}
								onRemove={onRemove}
								onSave={onSave}
							/>
						) : (
							<MatchNewParticipantItem
								uuid={participant.uid || ""}
								onSave={onSave}
								onRemove={onRemove}
								key={participant.uid}
							/>
						)
					)}
				</ul>

				<div className="p-4 pt-8">
					<button
						className="bg-primary text-white py-3 px-8 rounded-md w-full"
						onClick={onAdd}
					>
						Add participant
					</button>
					{participants.length > 1 && (
						<button className="bg-green-600 py-3 px-8 rounded-md w-full mt-4 text-white font-bold">
							Match!
						</button>
					)}
				</div>
			</section>
		</main>
	);
};

export default NewMatchPage;
