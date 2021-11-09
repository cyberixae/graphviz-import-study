import { storiesOf } from '@storybook/react';

import React from 'react';

import { Graphviz } from '../graphviz';

export const GraphvizBase: React.FC<unknown> = () => {
  return (
    <Graphviz dot={'digraph { FOO -> BAR }'} />
  );
};

storiesOf(`Graphviz`, module)
  .add('base', () => <GraphvizBase />)
