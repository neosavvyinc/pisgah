import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'semantic-ui-react'

import _ from 'lodash';

const PButton               = ({label, onClick}) => <Button onClick={onClick}>{label}</Button>;
const PPrimaryButton        = ({label, onClick}) => <Button onClick={onClick} primary>{label}</Button>;
const PSecondaryButton      = ({label, onClick}) => <Button onClick={onClick} secondary>{label}</Button>;
const PToggleButtonBar      = ({labels, onClick}) => <Button.Group>{_.map(labels, (label) => <Button key={label} onClick={_.partial(onClick, label)}>{label}</Button>)}</Button.Group>;

PButton.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func.isRequired
};
PButton.defaultProps = {
    onClick: _.noop
};

PPrimaryButton.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func.isRequired
};
PPrimaryButton.defaultProps = {
    onClick: _.noop
};

PSecondaryButton.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func
};
PSecondaryButton.defaultProps = {
    onClick: _.noop
};

PToggleButtonBar.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func
};
PToggleButtonBar.defaultProps = {
    labels: [],
    onClick: _.noop
};

export {
    PButton,
    PPrimaryButton,
    PSecondaryButton,
    PToggleButtonBar
};