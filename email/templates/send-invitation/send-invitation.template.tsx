import * as React from 'react';
import { SendEmailTemplateProps } from './send-invitation-template.types';

export const SendEmailTemplate: React.FC<Readonly<SendEmailTemplateProps>> = ({
  secretSanta,
  name,
}) => {
  return (
    <div>
      <h1>Hi {name}</h1>
      <p>Your secret santa is: </p>
      <h3>{secretSanta}</h3>
    </div>
  );
};
