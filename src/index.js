// import the datepickercomponent
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import { createRoot } from 'react-dom/client';

import './styles.css';
import DatePickerComp from './DatePickerComp';
export default class App extends React.Component {
  render() {
    return <div>
      <DatePickerComp />
    </div>;
  }
}
createRoot(document.getElementById('element')).render(<App />);
