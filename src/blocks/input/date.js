import React from 'react';
import PropTypes from 'prop-types';

import {  DayPickerRangeController } from 'react-dates';
import DateRangePickerWrapper from './date_range_picker_wrapper';
import SingleDatePickerWrapper from './single_date_picker_wrapper';

const PDatePicker             = ({options}) => <SingleDatePickerWrapper showDefaultInputIcon numberOfMonths={1} />;
const PDateTimePicker         = ({options}) => <Input onDateChange={_.noop} />;
const PDateRangePicker        = ({options}) => <DateRangePickerWrapper showDefaultInputIcon/>;

export {
    PDatePicker,
    PDateTimePicker,
    PDateRangePicker
}