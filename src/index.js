import prompt from 'prompts';
import { getWeekRange, getWeekDays, displayEasyDate, isWeekend } from './libs/dates.js';
import * as excel from './libs/excel.js';

const WEEKS = [
  getWeekRange(),
  getWeekRange(-1),
  getWeekRange(-2),
  getWeekRange(-3)
];

const questions = [
  {
    type: 'select',
    name: 'week',
    message: 'Pick a week',
    choices: WEEKS.map((week, i) => ({
      title: `${displayEasyDate(week[0])} > ${displayEasyDate(week[6])}`,
      value: week,
      description: i === 0 ? '* Current week' : undefined
    }))
  },
  {
    type: 'text',
    name: 'description',
    message: `What have you been working on?`,
    validate: (v) => v ? true : '* Mandatory.'
  },
  ...getWeekDays().map(day => ({
    type: 'number',
    name: `tracked${day}`,
    initial: isWeekend(day) ? 0 : 8,
    message: `${day} hours?`,
    validate: value => value < 0 || value > 8 ? `Only 0 to 8 allowed` : true
  })),
  {
    type: 'confirm',
    name: 'confirm',
    message: 'Do you want to send this timesheet?',
  }
];

const answers = await prompt(questions);

const formalizedAnswers = [
  { date: answers.week[0], hours: answers.trackedMonday, description: answers.description },
  { date: answers.week[1], hours: answers.trackedTuesday, description: answers.description },
  { date: answers.week[2], hours: answers.trackedWednesday, description: answers.description },
  { date: answers.week[3], hours: answers.trackedThursday, description: answers.description },
  { date: answers.week[4], hours: answers.trackedFriday, description: answers.description },
  // { date: answers.week[5], hours: answers.trackedSaturday, description: answers.description },
  // { date: answers.week[6], hours: answers.trackedSunday, description: answers.description },
];

const path = new URL('./template/base.xlsx', import.meta.url);

const workbook = await excel.readWorkbook(path);

formalizedAnswers.forEach((elem, index) => {
  excel.addValueToWorkbook({
    workbook,
    sheetNumber: 1,
    rowNumber: index + 5,
    cellNumber: 3,
    value: elem.date
  })
  excel.addValueToWorkbook({
    workbook,
    sheetNumber: 1,
    rowNumber: index + 5,
    cellNumber: 5,
    value: elem.hours
  })
  excel.addValueToWorkbook({
    workbook,
    sheetNumber: 1,
    rowNumber: index + 5,
    cellNumber: 6,
    value: elem.description
  })
});

excel.writeWorkbook(workbook, path)