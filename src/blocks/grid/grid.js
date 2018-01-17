import React from 'react';
import PropTypes from 'prop-types';

import { Container, Grid } from 'semantic-ui-react';


const PLayout          = ({children, ...props}) => <Container><Grid {...props}>{children}</Grid></Container>;
const PRow             = ({children, ...props}) => <Grid.Row {...props}>{children}</Grid.Row>;
const PColumn          = ({children, ...props}) => <Grid.Column {...props}>{children}</Grid.Column>;

export {
    PLayout,
    PRow,
    PColumn
}