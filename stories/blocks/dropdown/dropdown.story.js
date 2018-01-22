import React from 'react';
import '../../../semantic/dist/semantic.min.css';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import { action } from '@storybook/addon-actions';

import _ from 'lodash';

import {
    PDropdown,PSelect, PMultiSelect
} from '../../../src/blocks/dropdown/dropdown';

const testOptions = [
    {text: 'One', value: 1},
    {text: 'Two', value: 2},
    {text: 'Three', value: 3}
]


storiesOf('Dropdowns', module)
    .addDecorator(centered)
    .add('Default Dropdown',
        withInfo({
            header: false,
            inline: true,
            source: true,
            text: `
            Pisgah Default Selectable Dropdown
            
            [Based On](https://react.semantic-ui.com/modules/dropdown)
            
            `
        })(
            () =>  <PDropdown options={testOptions}/>
        )
    )
    .add('Select',
        withInfo({
            header: false,
            inline: true,
            source: true,
            text: `
            Pisgah Select Dropdown
            
            [Based On](https://react.semantic-ui.com/modules/dropdown)
            
            `
        })(
            () =>  <PSelect options={testOptions}/>
        )
    )
    .add('Multi Select',
        withInfo({
            header: false,
            inline: true,
            source: true,
            text: `
            Pisgah Multi Select Dropdown
            
            [Based On](https://react.semantic-ui.com/modules/dropdown)
            
            `
        })(
            () =>  <PMultiSelect options={testOptions}/>
        )
    )

;
    