import prompt from 'prompts';
import * as excel from './libs/excel.js';
import { getWeekRange, getWeekDays, displayEasyDate, isWeekend } from './libs/dates.js';

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

addValueInWorksheeet({ 
  workbook_name: 'base.xlsx',
  number_sheet: 1, 
  number_row: 1, 
  number_cell: 2, 
  value: 'sergio' 
});

console.log(answers)
// await excel.handleReadFile('./template/base.xlsx');
// excel.handleWriteFile(1, 5, 3, 'PRUEBA')
// excel.handleCreateWorkbook('output.xlsx')
