import { Level } from '../types';

export const levels: Level[] = [
  {
    description: '1 Level 1',
    task: '23. Select the apple on the middle plate',
    layout: `
      <plate id="fancy">
        <apple class="small"></apple>
        <apple></apple>
      </plate>
      <plate>
        <apple class="animate__animated animate__heartBeat animate__infinite small"></apple>
      </plate>
      <plate>
        <pickle for="Sania" from="Viktor"></pickle>
      </plate>`,
    helper: 'apple: only-child()',
  },
  {
    description: '2 Level 2',
    task: '17. Select the small apple and the pickle',
    layout: `
      <plate id="fancy">
        <apple class="animate__animated animate__heartBeat animate__infinite small"></apple>
      </plate>
      <plate></plate>
      <plate>
        <orange class="small"></orange>
        <orange></orange>
      </plate>
      <pickle class="animate__animated animate__heartBeat animate__infinite small"></pickle>`,
    helper: '.small:last-child',
  },
  {
    description: '3 Level 3',
    task: '16. Select the apple and the pickle on the plates',
    layout: `
      <plate>
        <apple class="animate__animated animate__heartBeat animate__infinite"></apple>
      </plate>
      <plate>
        <pickle class="animate__animated animate__heartBeat animate__infinite"></pickle>
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
