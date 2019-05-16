import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, number } from '@storybook/addon-knobs';
import withPropsCombinations from 'react-storybook-addon-props-combinations'; // https://github.com/evgenykochetkov/react-storybook-addon-props-combinations
import Button from '../src/components/Button/Button';
import Page from '../src/components/Page/page';
import Container from '../src/components/Container/Container';

const stories = storiesOf('Button', module);
const pageStory = storiesOf('Page with CSS GRID', module);
const containerStory = storiesOf('Container', module);

containerStory.add('Size 100 with knobs', () => (
  <Container
    isCenterd={boolean('isCentered', false)}
    verticalCenter={boolean('VerticalCenter', false)}
    horizontalCenter={boolean('HorizontalCenter', false)}
    size={number('Size with values = (33,50,66,100)', 100)}
  >
    Container with knobs
  </Container>
));

pageStory
  .add('With Header', () => (
    <Page>
      <div style={{ gridArea: 'header', textAlign: 'center', backgroundColor: 'green' }}>
        Navbar
      </div>
    </Page>
  ))
  .add('With Both header/hooter', () => (
    <Page>
      <div style={{ gridArea: 'header', textAlign: 'center', backgroundColor: 'green' }}>
        Navbar
      </div>
      <div style={{ gridArea: 'footer', textAlign: 'center', backgroundColor: 'yellow' }}>
        Footer
      </div>
    </Page>
  ))
  .add('Filled Grid', () => (
    <Page>
      <div style={{ gridArea: 'header', textAlign: 'center', backgroundColor: 'green' }}>
        Navbar
      </div>
      <div style={{ gridArea: 'container', textAlign: 'center', backgroundColor: 'blue' }}>
        Container
      </div>
      <div style={{ gridArea: 'footer', textAlign: 'center', backgroundColor: 'yellow' }}>
        Footer
      </div>
    </Page>
  ));

stories
  .add('Basic', () => <Button>Basic</Button>)

  .add('with Actions', () => <Button onClick={action('button-with-actions')}>Actions</Button>)

  .add('with Knobs', () => (
    <Button type="button" disabled={boolean('Disabled', false)}>
      {text('Label', 'Knobs')}
    </Button>
  ))

  .add('with Notes', () => <Button>Notes</Button>, {
    notes: 'A very simple component'
  })

  .add('with Console', () => <Button onClick={() => console.log('Data:', 1, 3, 4)}>Console</Button>) // eslint-disable-line

  .add(
    'with Props Combinations',
    withPropsCombinations('button', {
      disabled: [false, true],
      onClick: [action('clicked')],
      children: ['hello world', <b>some elements</b>]
    })
  );
