import prompt from 'prompts';

import { getWeekRange } from './libs/dates.js';

const WEEKS = [
  getWeekRange(),
  getWeekRange(-1),
  getWeekRange(-2),
  getWeekRange(-3)
];

const DATE_DISPLAY_FORMAT = 'Do MMM/YYYY';

const questions = [
    {
      type: 'select',
      name: 'week',
      message: 'Pick a week',
      choices: WEEKS.map((week, i) => ({
          title: `${week[0].format(DATE_DISPLAY_FORMAT)} > ${week[6].format(DATE_DISPLAY_FORMAT)}`,
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
];

const answers = await prompt(questions, {onSubmit:() => console.log('---> TODO: Send Email')});
