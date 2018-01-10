import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import { action } from '@storybook/addon-actions';

import _ from 'lodash';

import {
    PCheckbox,
    PSlideToggle,
    PToggle
} from '../../../src/blocks/checkbox/checkbox';

storiesOf('Checkbox', module)
    .addDecorator(centered)
    .add('Checkbox',
        withInfo({
            header: false,
            inline: true,
            source: true,
            text: `
            Pisgah Default Checkbox Component
            
            [Based On](https://react.semantic-ui.com/modules/checkbox#checkbox-example-checkbox)
            
            `
        })(
            () => <PCheckbox/>
        )
    )
    .add('Toggle',
        withInfo({
            header: false,
            inline: true,
            source: true,
            text: `
            Pisgah Default Toggle Component
            
            [Based On](https://react.semantic-ui.com/modules/checkbox#checkbox-example-toggle)
            
            `
        })(
            () => <PToggle/>
        )
    )
    .add('Slide Toggle',
        withInfo({
            header: false,
            inline: true,
            source: true,
            text: `
            Pisgah Slide Toggle Component
            
            [Based On](https://react.semantic-ui.com/modules/checkbox#checkbox-example-slider)
            
            `
        })(
            () => <PSlideToggle/>
        )
    );;
