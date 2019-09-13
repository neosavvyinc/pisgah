import React from 'react';
import '../../../semantic/dist/semantic.min.css';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import { action } from '@storybook/addon-actions';

import _ from 'lodash';

import {
    PEditable, PTextArea, PText
} from '../../../src/blocks/input/string';

storiesOf('String Input', module)
    .addDecorator(centered)
    .add('Editable',
        withInfo({
            header: false,
            inline: true,
            source: true,
            text: `
            
            
            [Based On](https://react.semantic-ui.com/elements/input#input-example-input)
            
            `
        })(
            () => <PEditable label="Text: " placeholder="Placeholder"/>
        )
    )
    .add('Text',
        withInfo({
            header: false,
            inline: true,
            source: true,
            text: `
            
            
            [Based On](https://react.semantic-ui.com/addons/text-area)
            
            `
        })(
            () => <PText placeholder="Enter your text here"/>
        )
    )
    .add('Text Area',
        withInfo({
            header: false,
            inline: true,
            source: true,
            text: `
            
            
            [Based On](https://react.semantic-ui.com/addons/text-area)
            
            `
        })(
            () => <PTextArea placeholder="Enter Your Text Here"/>
        )
    )
;
