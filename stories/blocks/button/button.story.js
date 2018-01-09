import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import { action } from '@storybook/addon-actions';

import _ from 'lodash';

import {
    PButton,
    PPrimaryButton,
    PSecondaryButton,
    PToggleButtonBar
} from '../../../src/blocks/button/button';

storiesOf('Buttons', module)
    .addDecorator(centered)
    .add('Basic',
        withInfo({
            header: false,
            inline: true,
            source: true,
            text: `
            This is the Pisgah button component
            
            [Based On](https://react.semantic-ui.com/elements/button)
            
            `
        })(
            () => <PButton
                onClick={action('Clicked ze button')}
                label={'This is a Button'}/>
        )
    )
    .add('Primary',
        withInfo({
            header: false,
            inline: true,
            source: true,
            text: `
            This is the Pisgah Primary button component
            
            [Based On](https://react.semantic-ui.com/elements/button#button-example-emphasis)
            
            `
        })(
            () => <PPrimaryButton
                onClick={action('Clicked ze button')}
                label={'This is a Button'}/>
            )
    )
    .add('Secondary',
        withInfo({
            header: false,
            inline: true,
            source: true,
            text: `
            This is the Pisgah Primary button component
            
            [Based On](https://react.semantic-ui.com/elements/button#button-example-emphasis)
            
            `
        })(
            () => <PSecondaryButton
                onClick={action('Clicked ze button')}
                label={'This is a Button'}/>
        )
    )
    .add('Toggle Button Bar',
        withInfo({
            header: false,
            inline: true,
            source: true,
            text: `
                This is the Pisgah Toggle Button Barcomponent
                
                [Based On](https://react.semantic-ui.com/elements/button#button-example-group)
                
                `
        })(
            () => <PToggleButtonBar
                    labels={["One", "Two", "Three"]}
                    onClick={action("Clicked Button with args: ")}
                    />
        )
    );


