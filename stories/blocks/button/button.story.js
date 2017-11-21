import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
    PButton,
    PPrimaryButton,
    PSecondaryButton } from '../../../src/blocks/button/button';

storiesOf('Buttons', module)
    .add('Basic', () => <PButton
        onClick={action('Clicked ze button')}
        label={'This is a Button'}/> )
    .add('Primary', () => <PPrimaryButton
        onClick={action('Clicked ze button')}
        label={'This is a Button'}/> )
    .add('Secondardy', () => <PSecondaryButton
        onClick={action('Clicked ze button')}
        label={'This is a Button'}/> );


