import { Workout } from '../types/workoutData.type';

export const sampleData = [
  {
    workoutName: 'test',
    date: '2023/03/20',
    startTimestamp: '2023/04/03',
    endTimestamp: '2023/03/20',
    exercises: [],
    totalFinishedSets: 2,
    totalWeight: 12,
    note: '',
  },
];

export const workoutSample: Workout = {
  id: '2',
  name: 'sample-but-new-new-new',
  note: '',
  days: [
    {
      id: 'fnirn3i',
      name: 'day 1',
      exercise: [
        {
          bodyPart: 'biceps',
          equipment: 'handbell',
          gifUrl: '',
          id: '#41412',
          name: 'hammer curly biceps',
          target: 'biceps',
        },
      ],
    },
  ],
};
