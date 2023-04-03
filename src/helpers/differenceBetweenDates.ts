import moment, { unitOfTime } from 'moment';

const differenceBetweenDates = (
  firstDate: moment.Moment | string,
  secondDate: moment.Moment | string,
  unit: unitOfTime.Diff = 'days'
): number => {
  if (typeof firstDate === 'string') {
    return moment(firstDate).diff(secondDate, unit);
  }

  if (moment.isMoment(firstDate)) return firstDate.diff(secondDate, unit);

  return 0;
};

export { differenceBetweenDates };
