'use client';
import { sendMatchEmail } from '@/actions';
import Button from '@/components/core/button';
import MatchNewParticipantItem from '@/components/match/match-new-participant-item';
import MatchPersonItem from '@/components/match/match-person-item';
import { MatchPerson } from '@/types/core';
import { generateUid } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useMemo, useState } from 'react';

const NewMatchPage = () => {
  const [participants, setParticipants] = useState<
    (MatchPerson | Partial<MatchPerson>)[]
  >([{ uid: generateUid() }]);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const onAdd = (): void => {
    setParticipants((prev) => [...prev, { uid: generateUid() }]);
  };

  const readyToMatchParticipants = useMemo(() => {
    return participants?.filter(
      (value) => value?.name && value?.email,
    ) as unknown as MatchPerson[];
  }, [participants]);

  const participantsMissingToPopulate = useMemo(
    () =>
      participants?.filter(
        (value) => !value?.name || !value?.email,
      ) as unknown as MatchPerson[],
    [participants],
  );

  const onSave = (
    uuid: string,
    values: Partial<MatchPerson>,
    isEdit = false,
  ): void => {
    setParticipants((prev) => {
      const clone = [...prev];
      const item = clone.find((participant) => participant.uid === uuid);

      if (!!item) {
        item.name = values.name;
        item.email = values.email;
      }

      if (participantsMissingToPopulate?.length < 2 && !isEdit) {
        onAdd();
      }

      return clone;
    });
  };

  const onRemove = (uuid: string): void => {
    setParticipants((prev) => {
      return prev.filter((participant) => participant.uid !== uuid);
    });
  };

  const onMatch = async () => {
    try {
      setIsSendingEmail(true);
      await sendMatchEmail(readyToMatchParticipants);
    } catch (e: unknown) {
      setIsSendingEmail(false);
      console.log(e);
    } finally {
      setIsSendingEmail(false);
    }
  };

  return (
    <main className="py-4">
      <h1 className="text-center text-5xl font-bold py-8">New Match</h1>
      <section className="w-full md:w-2/3 md:max-w-screen-xl border mx-auto">
        {!participants.length && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            exit={{ opacity: 0 }}
            className="text-center my-2 mt-4 font-semibold"
          >
            Add new participants to your secret santa list!
          </motion.p>
        )}
        <ul className="sm:px-2">
          <AnimatePresence mode="sync">
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
                  uuid={participant.uid || ''}
                  onSave={onSave}
                  onRemove={onRemove}
                  key={participant.uid}
                />
              ),
            )}
          </AnimatePresence>
        </ul>

        <div className="p-4 pt-8">
          <AnimatePresence mode="popLayout">
            <Button
              variant="secondary"
              onClick={onAdd}
              className="text-sm md:text-base"
              isLoading={isSendingEmail}
            >
              Add participant
            </Button>
            {readyToMatchParticipants?.length > 2 && (
              <Button
                initial={{ opacity: 0 }}
                transition={{ ease: 'easeInOut', duration: 0.5 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                isLoading={isSendingEmail}
                variant="primary"
                className="mt-4 text-sm md:text-base"
                onClick={onMatch}
              >
                Match!
              </Button>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default NewMatchPage;
