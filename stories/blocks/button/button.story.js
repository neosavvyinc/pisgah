import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../../../src/blocks/button/button';

console.log('Button', Button);

storiesOf('Button', module)
    .add('simple', () => <Button
        onClick={action('Clicked ze button')}
        label={'This is a Button'}/> );
