import * as React from 'react';
import { MatchPersonItemProps } from './match-person-item.types';
import { Edit, Trash2 } from 'lucide-react';
import MatchNewParticipantItem from '../match-new-participant-item';
import Button from '@/components/core/button';
import { motion } from 'framer-motion';

const MatchPersonItem: React.FC<MatchPersonItemProps> = ({
  participant,
  onRemove,
  onSave,
}) => {
  const [isEdit, setIsEdit] = React.useState(false);

  const toggleIsEdit = (): void => {
    setIsEdit((prev) => !prev);
  };

  const onUpdate: MatchPersonItemProps['onSave'] = (uid, values): void => {
    onSave(uid, values, true);
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
    <motion.li
      className="px-2 sm:px-4 py-4 border-b flex justify-between items-center gap-4"
      key={participant.uid}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-between flex-1">
        <p>{participant.name}</p>
        <p>
          <span className="py-1 px-2 text-white bg-primary rounded-full">
            {participant.email}
          </span>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Button
          onClick={toggleIsEdit}
          title="Confirm Changes"
          className="cursor-pointer"
          variant="base"
          size="base"
          icon={<Edit className="w-4 h-4 text-primary" />}
        />
        <Button
          title="Remove participant"
          className="cursor-pointer"
          variant="base"
          size="base"
          onClick={() => onRemove(participant.uid)}
          icon={<Trash2 className="w-4 h-4 text-gray-400" />}
        />
      </div>
    </motion.li>
  );
};

export default MatchPersonItem;
