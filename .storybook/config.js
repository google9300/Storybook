import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { withConsole } from '@storybook/addon-console';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import customViewports from './viewports';

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

addParameters({ viewport: { viewports: { ...INITIAL_VIEWPORTS, ...customViewports } } });

function loadStories() {
  const req = require.context('../stories', true, /.stories.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
