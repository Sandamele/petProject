import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-change',
  templateUrl: './form-change.component.html',
  styleUrls: ['./form-change.component.css'],
})
export class FormChangeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  formValues: any = {
    txtColor: 'black',
    backgroundColor: 'white',
    txtFontSize: '16px',
    padding: '0px',
  };
  changeStyle(
    formColor: any, formBackgroundColor: any, formFontSize: any, formPadding: any
  ) {

    // The values from the form are store in object
    this.formValues = {
      txtColor: formColor,
      backgroundColor: formBackgroundColor,
      txtFontSize: formFontSize+'px',
      padding: formPadding+'px',
    };
  }
}
