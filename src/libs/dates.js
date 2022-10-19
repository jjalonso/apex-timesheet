
import moment from 'moment';

moment.updateLocale('en', {
    week: {
      dow : 1, // Monday is the first day of the week.
    }
  });
  


// export const getCurrentWeek = () => {
//     var currentDate = moment();
  
//     var weekStart = currentDate.clone().startOf('week');
//     var weekEnd = currentDate.clone().endOf('week');
  
//     console.log(weekStart.format("MMMM Do,dddd"), weekEnd.format("MMMM Do,dddd"))
//     // var days = [];
  
//     // for (var i = 0; i <= 6; i++) {
//     //   days.push(moment(weekStart).add(i, 'days').format("MMMM Do,dddd"));
//     // }

//     // return days;
//   }

export const getWeekRange = (week = 0) => {
    var weekStart = moment().add(week, 'weeks').startOf('week');
    var days = [];
    for (var i = 0; i < 7; i++) {
      days.push(weekStart.clone().add(i, 'day'));
    }
    return days;
}