import React from 'react';
import PropTypes from 'prop-types';

import { Input, TextArea } from 'semantic-ui-react';

const PEditable             = ({label, placeholder}) => <Input label={label} placeholder={placeholder}/>;
const PText                 = ({placeholder}) => <TextArea placeholder={placeholder}/>;
const PTextArea             = ({placeholder}) => <TextArea placeholder={placeholder}/>;

export {
    PEditable,
    PText,
    PTextArea
}