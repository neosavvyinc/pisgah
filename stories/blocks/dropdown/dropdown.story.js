import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import { storiesOf } from '@storybook/react';

import {
    PDropdown
} from '../../../src/blocks/dropdown/dropdown';

const testOptions = [
    {text: 'One', value: 1},
    {text: 'Two', value: 2},
    {text: 'Three', value: 3}
]

storiesOf('Dropdowns', module)
    .add('Basic', () => <PDropdown options={testOptions}/>);