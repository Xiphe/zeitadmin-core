import ZeitInterface from './interfaces/ZeitInterface';
import ZeitConfigInterface from './interfaces/ZeitConfigInterface';
import uuid from './acl/uuid';
import date from './acl/date';

export default function createZeit({ issue, duration }: ZeitConfigInterface): ZeitInterface {
  if (typeof duration !== 'number' || duration <= 1000) {
    throw new Error(`Can not create zeit with duration of ${duration}`);
  }

  const now = date.getTime();

  return {
    _id: uuid.create(),
    issue: {
      owner: issue.owner,
      repo: issue.repo,
      number: issue.number,
    },
    duration,
    start: now,
    end: now + duration
  };
}

