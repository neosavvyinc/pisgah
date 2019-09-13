import React from 'react';
import '../../../semantic/dist/semantic.min.css';

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
            
            [Based On](http://airbnb.io/react-dates/?selectedKind=SDP%20-%20Input%20Props&selectedStory=default&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)
            
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
                
                [Based On](http://airbnb.io/react-dates/?selectedKind=DateRangePicker)
                
                `
        })(
            () => <PDateRangePicker/>
        )
    );

