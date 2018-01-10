import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const PDropdown             = ({options}) => <Dropdown options={options} fluid selection/>;
const PSelect               = () => <PDropdown/>;
const PMultiSelect          = ({options, placeholder}) => <Dropdown options={options} fluid multiple selection placeholder={placeholder}/>;
const PAsyncDropdown        = () => <div>Define Async Dropdown</div>;
const PAsyncAutoComplete    = () => <div>Define Async Auto Complete</div>;

export {
    PDropdown,
    PSelect,
    PMultiSelect,
    PAsyncDropdown,
    PAsyncAutoComplete
}