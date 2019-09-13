import React from 'react';
import '../../../semantic/dist/semantic.min.css';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import { action } from '@storybook/addon-actions';

import _ from 'lodash';

import {
    PRadioButton
} from '../../../src/blocks/radio/radio.js';

storiesOf('Radio Buttons', module)
    .addDecorator(centered)
    .add('RadioButton Single',
        withInfo({
            header: false,
            inline: true,
            source: true,
            text: `
            This is a single labeled radio button
            
            [Based On](https://react.semantic-ui.com/addons/radio)
            
            `
        })(
            () => <PRadioButton/>
        )
    );
    