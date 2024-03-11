import { MatchPerson } from '@/types/core';

export interface MatchPersonItemProps {
  participant: MatchPerson;
  onRemove: (uid: string) => void;
  onSave: (
    uuid: string,
    values: Partial<MatchPerson>,
    isEdit?: boolean,
  ) => void;
}
