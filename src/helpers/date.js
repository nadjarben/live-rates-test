import moment from 'moment';

export const convertFormatDate = (date) =>
  moment(+date).fromNow(true)
