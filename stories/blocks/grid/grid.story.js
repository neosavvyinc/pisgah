import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import { action } from '@storybook/addon-actions';

import _ from 'lodash';

import {
    PLayout, PRow, PColumn
} from '../../../src/blocks/grid/grid';

storiesOf('Grid', module)
    .addDecorator(centered)
    .add('Testing some Layout for a Form',
        withInfo({
            header: false,
            inline: true,
            source: true,
            text: `
            This is an example of how to create a 3 column x 3 row grid
            
            [Based On](https://react.semantic-ui.com/collections/grid)
            
            `
        })(
            () => <PLayout celled ui grid>
                <PRow three column row>
                    <PColumn width={5}>One</PColumn>
                    <PColumn width={5}>Two</PColumn>
                    <PColumn width={5}>Three</PColumn>
                </PRow>
                <PRow two column row>
                    <PColumn width={10}>One</PColumn>
                    <PColumn width={5}>Two</PColumn>
                </PRow>
                <PRow two column row>
                    <PColumn width={10}>One</PColumn>
                    <PColumn width={5}>Two</PColumn>
                </PRow>
                <PRow two column row>
                    <PColumn width={10}>One</PColumn>
                    <PColumn width={5}>Two</PColumn>
                </PRow>
                <PRow three column row>
                    <PColumn width={3}>One</PColumn>
                    <PColumn width={10}>Spacer</PColumn>
                    <PColumn width={3}>Two</PColumn>
                </PRow>
            </PLayout>
        )
    );
    