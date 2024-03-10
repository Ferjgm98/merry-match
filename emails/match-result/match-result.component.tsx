import * as React from 'react';
import {
  Body,
  CodeInline,
  Container,
  Head,
  Html,
  Preview,
  Tailwind,
  Text,
} from '@react-email/components';

export interface MatchResultEmailProps {
  name: string;
  receiverName: string;
}

export const MatchResultEmail: React.FC<Readonly<MatchResultEmailProps>> = ({
  name = 'giver',
  receiverName = 'receiver',
}) => {
  return (
    <Html>
      <Head />
      <Preview>🎁 {name}, Discover Your Secret Santa Match 🎅✨</Preview>
      <Tailwind>
        <React.Fragment>
          <Body className="bg-white">
            <Container>
              <Text className="text-black">Dear {name}</Text>
              <Text className="text-black">
                The anticipation is over! You're officially the Secret Santa for
                a very special person in our holiday gift exchange. It's time to
                infuse the season with joy and warmth.
              </Text>
              <Text>
                Wishing you both a magical exchange filled with laughter and
                joy. May your gift make this season even more special for
              </Text>

              <CodeInline className="font-bold text-xl py-2">
                {receiverName}
              </CodeInline>
              <Text>Happy gifting and happy holidays!</Text>
            </Container>
          </Body>
        </React.Fragment>
      </Tailwind>
    </Html>
  );
};

export default MatchResultEmail;
