import React, { useRef, useState, useEffect } from "react";
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import {
    DropDownListComponent,
  } from "@syncfusion/ej2-react-dropdowns";

function DatePickerInputComponent(props){
    const fields = { text: "text", value: "value" };
    const getDateFormatForDatePicker = (format) => {
        switch (format) {
          case "MM/DD/YYYY": return "MM/dd/yyyy";
          case "DD/MM/YYYY": return "dd/MM/yyyy";
          case "MMM-YYYY": return "MMM-yyyy";
          case "MMM-YY": return "MMM-yy";
          case "MM-DD-YYYY": return "MM-dd-yyyy";
          case "DD-MM-YYYY": return "dd-MM-yyyy";
          default: return "MM/dd/yyyy";
        }
      };
    const constantValueRef = useRef();
    const [datePickerFormat, setDatePickerFormat] = useState(
        (props.selectedColumnInfo && props.selectedColumnInfo.targetType && props.selectedColumnInfo.targetType.format) ?
          getDateFormatForDatePicker(props.selectedColumnInfo.targetType.format) :
          "MM/dd/yyyy"
      );
    
      useEffect(() => {
        setDatePickerFormat((props.selectedColumnInfo && props.selectedColumnInfo.targetType && props.selectedColumnInfo.targetType.format) ?
          getDateFormatForDatePicker(props.selectedColumnInfo.targetType.format) :
          "MM/dd/yyyy");
      }, [props && props.selectedColumnInfo && props.selectedColumnInfo.targetType && props.selectedColumnInfo.targetType.format]);

    return (
        <div>
            <DropDownListComponent
                          value={props.selectedColumnInfo.targetType.format}
                          cssClass="e-outline ESMTable-CreateColumnSidebar-DropDown"
                          floatLabelType="Auto"
                          dataSource={props.dateFormatTypes}
                          fields={fields}
                          change={(e) => {
                            props.handleDateFormatChange(e.itemData.value);
                            setDatePickerFormat(getDateFormatForDatePicker(e.itemData.value));
                          }}
                          placeholder="Date Format"
                        />
                        <div style={{ padding: "50px" }}></div>
                        <DatePickerComponent
                        ref={constantValueRef}
                        placeholder="Constant Value"
                        cssClass="e-outline"
                        floatLabelType="Auto"
                        format={datePickerFormat}
                        inputFormats={['MM/dd/yyyy', 'dd/MM/yyyy', 'MMM-yyyy', 'MMM-yy', 'MM-dd-yyyy', 'dd-MM-yyyy']}
                        openOnFocus={true}
                        showClearButton={false}
                        value={props.getDateObjBasedOnDefaultFormat(props.selectedColumnInfo.targetType.defaultValue)}
                        blur={(e) => {
                          let value = constantValueRef.current.value;
                          console.log(e);
                          console.log("DatePicker blur event value: ", value);
                        }}
                        open={(e) => {
                          console.log("DatePicker open event: ", e);
                          console.log("DatePicker open event value: ", constantValueRef.current.value);
                        }}
                        close={(e) => {
                          console.log("DatePicker close event: ", e);
                          console.log("DatePicker close event value: ", constantValueRef.current.value);
                        }}
                      />
        </div>
    );
}

export default DatePickerInputComponent;