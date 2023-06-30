import { Level } from '../types';
import { animationClass } from './animationClass';

export const levels: Level[] = [
  {
    description: '1 Level 1',
    task: '1. Select fancy plate',
    layout: `
      <plate class="animate__animated ${animationClass} animate__infinite" id="fancy"></plate>
      <plate></plate>`,
    helper: '#fancy',
  },
  {
    description: '2 Level 23',
    task: '23. Select the apple on the middle plate',
    layout: `
      <plate id="fancy">
        <apple class="small"></apple>
        <apple></apple>
      </plate>
      <plate>
        <apple class="animate__animated ${animationClass} animate__infinite small"></apple>
      </plate>
      <plate>
        <pickle for="Sania" from="Viktor"></pickle>
      </plate>`,
    helper: 'apple: only-child()',
  },
  {
    description: '3 Level 17',
    task: '17. Select the small apple and the pickle',
    layout: `
      <plate id="fancy">
        <apple class="animate__animated ${animationClass} animate__infinite small"></apple>
      </plate>
      <plate></plate>
      <plate>
        <orange class="small"></orange>
        <orange></orange>
      </plate>
      <pickle class="animate__animated ${animationClass} animate__infinite small"></pickle>`,
    helper: '.small:last-child',
  },
  {
    description: '4 Level 16',
    task: '16. Select the apple and the pickle on the plates',
    layout: `
      <plate>
        <apple class="animate__animated ${animationClass} animate__infinite"></apple>
      </plate>
      <plate>
        <pickle class="animate__animated ${animationClass} animate__infinite"></pickle>
      </plate>
      <bento>
        <pickle></pickle>
      </bento>
      <plate>
        <orange class="small"></orange>
        <orange></orange>
      </plate>
      <pickle class="small"></pickle>`,
    helper: 'plate :only-child',
  },
];
