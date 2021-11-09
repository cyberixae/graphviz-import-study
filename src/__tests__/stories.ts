import initStoryshots from '@storybook/addon-storyshots';
import { multiSnapshotWithOptions } from '@storybook/addon-storyshots';

import { mount } from 'enzyme';
import { configure } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import seedrandom from 'seedrandom';

import Adapter from 'enzyme-adapter-react-16';

import { name as packageName } from '../../package.json';

/* eslint-disable fp/no-mutation */
Math.random = seedrandom(packageName);
console.error = (...args: any) => {
  throw new Error(`console.error: ${args.join(',')}`);
};
/* eslint-enable fp/no-mutation */

configure({ adapter: new Adapter() });

initStoryshots({
  snapshotSerializers: [createSerializer() as any],
  test: multiSnapshotWithOptions({
    renderer: mount,
  }),
});
