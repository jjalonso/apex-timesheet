import prompt from 'prompts';

import { getWeekRange } from './libs/dates.js';

const WEEK_1 = getWeekRange();
const WEEK_2 = getWeekRange(-1);
const WEEK_3 = getWeekRange(-2);
const WEEK_4 = getWeekRange(-3);

const DATE_DISPLAY_FORMAT = 'DD/MM/YYYY';

const questions = [
    {
      type: 'select',
      name: 'week',
      message: 'Pick a week',
      choices: [WEEK_1, WEEK_2, WEEK_3, WEEK_4].map((week, index) => ({
          title: `${week[0].format(DATE_DISPLAY_FORMAT)} > ${week[6].format(DATE_DISPLAY_FORMAT)}`,
          value: week,
          description: index === 0 ? '* Current week' : undefined
      }))
    },
    {
      type: 'text',
      name: 'description',
      message: `What have you been working on?`,
      validate: (v) => v ? true : '* Mandatory.'
    },
];

const answers = await prompt(questions, {onCancel:() => {}, onSubmit:() => {}});
