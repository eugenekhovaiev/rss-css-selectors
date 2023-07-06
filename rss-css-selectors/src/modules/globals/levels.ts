import { Level } from '../../types';
import { animationClass } from './animationClass';

export const levels: Level[] = [
  {
    description: '1 Tag',
    task: 'Select apple',
    layout: `
    <pickle></pickle>
    <apple class="animate__animated ${animationClass} animate__infinite"></apple>`,
    helper: 'apple',
  },
  {
    description: '2 Class',
    task: 'Select all small items',
    layout: `
    <apple class="small animate__animated ${animationClass} animate__infinite"></apple>
    <apple></apple>
    <orange class="small animate__animated ${animationClass} animate__infinite"></orange>
    <orange></orange>
    <pickle class="small animate__animated ${animationClass} animate__infinite"></pickle>`,
    helper: '.small',
  },
  {
    description: '3 Id',
    task: 'Select fancy plate',
    layout: `
    <plate id="fancy" class="animate__animated ${animationClass} animate__infinite"></plate>
    <plate></plate>`,
    helper: '#fancy',
  },
  {
    description: '4 Inner tag',
    task: 'Select pickle on plate',
    layout: `
    <plate>
      <pickle class="animate__animated ${animationClass} animate__infinite"></pickle>
    </plate>
    <pickle></pickle>
    <bento>
      <pickle></pickle>
    </bento>`,
    helper: 'plate pickle',
  },
  {
    description: '5 Tag with class',
    task: 'Select all small apples',
    layout: `
    <plate>
      <apple class="small animate__animated ${animationClass} animate__infinite"></apple>
      <orange></orange>
    </plate>
    <apple class="small animate__animated ${animationClass} animate__infinite"></apple>
    <bento>
      <orange class="small"></orange>
    </bento>`,
    helper: 'apple.small',
  },
  {
    description: '6 Everything',
    task: 'Select all items',
    layout: `
    <plate id="fancy" class="animate__animated ${animationClass} animate__infinite">
      <orange class="animate__animated ${animationClass} animate__infinite"></orange>
    </plate>
    <bento class="animate__animated ${animationClass} animate__infinite">
      <pickle class="small animate__animated ${animationClass} animate__infinite"></pickle>
    </bento>
    <apple class="animate__animated ${animationClass} animate__infinite"></apple>
    <plate class="animate__animated ${animationClass} animate__infinite"></plate>`,
    helper: '*',
  },
  {
    description: '7 Tag with everything',
    task: 'Select all items on bentos',
    layout: `
    <bento>
      <apple class="small animate__animated ${animationClass} animate__infinite"></apple>
      <orange class="animate__animated ${animationClass} animate__infinite"></orange>
    </bento>
    <plate>
      <pickle></pickle>
    </plate>
    <bento>
      <orange class="small animate__animated ${animationClass} animate__infinite"></orange>
    </bento>
    <bento>
      <apple class="small animate__animated ${animationClass} animate__infinite"></apple>
      <apple class="animate__animated ${animationClass} animate__infinite"></apple>
    </bento>`,
    helper: 'bento *',
  },
  {
    description: '8 Top apples',
    task: 'Select top apples',
    layout: `
    <plate id="fancy">
      <apple class="animate__animated ${animationClass} animate__infinite"></apple>
      <apple></apple>
      <apple></apple>
    </plate>
    <bento>
      <apple class="small animate__animated ${animationClass} animate__infinite"></apple>
      <orange></orange>
      <orange></orange>
    </bento>
    <bento>
      <apple class="small animate__animated ${animationClass} animate__infinite"></apple>
      <orange></orange>
    </bento>`,
    helper: 'apple:first-child',
  },
  {
    description: '9 Top items',
    task: 'Select all top items on plates',
    layout: `
    <plate>
      <orange class="small animate__animated ${animationClass} animate__infinite"></orange>
      <apple></apple>
    </plate>
    <orange></orange>
    <plate id="fancy">
      <pickle class="animate__animated ${animationClass} animate__infinite"></pickle>
    </plate>
    <bento>
      <pickle class="small"></pickle>
    </bento>
    <plate>
      <apple class="animate__animated ${animationClass} animate__infinite"></apple>
      <orange></orange>
    </plate>`,
    helper: 'plate *:first-child',
  },
  {
    description: '10 Lonely orange',
    task: 'Select lonely orange',
    layout: `
    <orange class="small"></orange>
    <plate>
      <pickle for="Sania" from="Viktor"></pickle>
    </plate>
    <plate id="fancy">
      <apple class="small"></apple>
    </plate>
    <bento>
      <orange></orange>
    </bento>
    <plate>
      <orange class="small animate__animated ${animationClass} animate__infinite"></orange>
    </plate>`,
    helper: 'orange.small:only-child',
  },
];
