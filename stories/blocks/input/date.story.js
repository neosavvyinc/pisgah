import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import { action } from '@storybook/addon-actions';

import _ from 'lodash';

import {
    PDatePicker,
    PDateTimePicker,
    PDateRangePicker
} from '../../../src/blocks/input/date';

storiesOf('Date Pickers', module)
    .addDecorator(centered)
    .add('PDatePicker',
        withInfo({
            header: false,
            inline: true,
            source: true,
            text: `
            Pisgah Default Date Picker
            
            [Based On](none)
            
            `
        })(
            () => <PDatePicker/>
        )
    )
    .add('PDateTimePicker',
        withInfo({
            header: false,
            inline: true,
            source: true,
            text: `
            Pisgah Default Date Time Picker
            
            [Based On](none)
            
            `
        })(
            () => <PDatePicker/>
        )
    )
    .add('PDateRangePicker',
        withInfo({
            header: false,
            inline: true,
            source: true,
            text: `
                Pisgah Default Date Range Picker
                
                [Based On](none)
                
                `
        })(
            () => <PDateRangePicker/>
        )
    );

