import * as React from 'react';
import {
  Body,
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
                <strong className="text-gray-600 px-2">{receiverName}</strong>in
                our holiday gift exchange. It's time to infuse the season with
                joy and warmth.
              </Text>
            </Container>
          </Body>
        </React.Fragment>
      </Tailwind>
    </Html>
  );
};

export default MatchResultEmail;
