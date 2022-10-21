import moment from 'moment';

moment.updateLocale('en', {
    week: {
      dow : 1, // Monday as first day of the week.
    }
  });
  
export const getWeekDays = () => moment.weekdays(true);

export const getWeekRange = (week = 0) => {
    var weekStart = moment().add(week, 'weeks').startOf('week');
    var days = [];
    for (var i = 0; i < 7; i++) {
      days.push(weekStart.clone().add(i, 'day').format('DD/MM/YYYY'));
    }
    return days;
}

export const displayEasyDate = date => moment(date, 'DD/MM/YYYY').format('Do MM/YYYY')

export const isWeekend = dayOfWeek => dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
