import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox } from 'semantic-ui-react';

const PCheckbox             = ({options}) => <Checkbox/>;
const PToggle               = ({options}) => <Checkbox toggle/>;
const PSlideToggle         = ({options}) => <Checkbox slider/>;

export {
    PCheckbox,
    PToggle,
    PSlideToggle
}