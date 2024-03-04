"use server";

import { MatchPerson } from "@/types/core";
import { randomNumberFromRange } from "@/utils";

const getRandomNumberDifferentThanCurrent = (
	min: number,
	max: number,
	current: number
): number => {
	let randomNumber = -1;
	do {
		randomNumber = randomNumberFromRange(min, max);
	} while (randomNumber === current);

	return randomNumber;
};

export async function sendMatchEmail(
	participants: MatchPerson[]
): Promise<void> {
	const matchMap = new Map<MatchPerson, MatchPerson>();
	const avSecret = [...participants];

	for (let i = 0; i < participants.length; ++i) {
		const randomSecretIdx = getRandomNumberDifferentThanCurrent(
			0,
			avSecret.length - 1,
			i
		);

		console.log({ randomSecretIdx });

		const deleted = avSecret.splice(randomSecretIdx, 1);
		matchMap.set(participants[i], deleted[0]);
	}

	for (const [key, value] of matchMap) {
		console.log(`${key?.email} gives to ${value?.email}`);
	}
}
