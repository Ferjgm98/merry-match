'use server';

import { Resend } from 'resend';
import { MatchPerson } from '@/types/core';
import { randomNumberFromRange } from '@/utils';
import MatchResultEmail from '@/emails/match-result';

const resend = new Resend(process.env.RESEND_API_KEY);

const getRandomNumberDifferentThanCurrent = (
  min: number,
  max: number,
  current: number,
): number => {
  let randomNumber = -1;
  do {
    randomNumber = randomNumberFromRange(min, max);
  } while (randomNumber === current);

  return randomNumber;
};

export async function sendMatchEmail(
  participants: MatchPerson[],
): Promise<void> {
  const matchMap = new Map<MatchPerson, MatchPerson>();
  const avSecret = [...participants];
  for (let i = 0; i < participants.length; ++i) {
    const randomSecretIdx = getRandomNumberDifferentThanCurrent(
      0,
      avSecret.length - 1,
      i,
    );

    const deleted = avSecret.splice(randomSecretIdx, 1);
    matchMap.set(participants[i], deleted[0]);
  }

  for (const [giver, receiver] of matchMap) {
    console.log('Sending email to', { giver });
    const data = await resend.emails.send({
      from: `Merry Match <hello@merry-match.ferjgm98.dev>`,
      to: [giver.email],
      text: '',
      subject: `Spread the Cheer: Your Secret Santa Match Revealed! 🎅🎁`,
      react: MatchResultEmail({
        name: giver.name,
        receiverName: receiver.name,
      }),
    });

    console.log({ data });
  }
}
