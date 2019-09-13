import { configure } from '@storybook/react';
//import 'semantic-ui-css/semantic.min.css';

const req = require.context('../stories', true, /\.story\.js$/)

function loadStories() {
    req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';