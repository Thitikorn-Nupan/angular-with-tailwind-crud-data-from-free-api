import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-forms-input',
  templateUrl: './forms-input.component.html',
  styleUrl: './forms-input.component.css'
})
export class FormsInputComponent {
  protected option : string = ""
  protected alertFormOption1 = false
  protected alertFormOption2 = false

  protected formOption1 = {
    email : "",
    password : "",
    acceptVerify : false
  }

  protected formOption2 = {
    username : "",
    country : "Thailand",
    comment : "",
    skills : {
      ot1 : false,
      ot2 : false,
      ot3 : false
    },
    age : ""
  }

  protected onOptionClicked(option : string) {
    this.option = option
  }

  protected onFormOption1Clicked(formInput: NgForm) {
    this.formOption1.email = formInput.form.value.email
    this.formOption1.password = formInput.form.value.password
    this.formOption1.acceptVerify = formInput.form.value.acceptVerify
    this.alertFormOption1 = true
  }

  protected onFormOption2Clicked() {
    console.log(this.formOption2)
    this.alertFormOption2 = true
  }

}
