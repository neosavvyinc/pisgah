import React from 'react';
import PropTypes from 'prop-types';

import {  DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import DateRangePickerWrapper from './date_range_picker_wrapper';

const PDatePicker             = ({options}) => <SingleDatePicker onDateChange={_.noop} onFocusChange={_.noop}/>;
const PDateTimePicker         = ({options}) => <Input onDateChange={_.noop} />;
const PDateRangePicker        = ({options}) => <DateRangePickerWrapper />;

export {
    PDatePicker,
    PDateTimePicker,
    PDateRangePicker
}