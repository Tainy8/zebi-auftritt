import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.css']
})
export class FormularComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  onsubmit(username: string, name: string, nachname: string, email: string, adresse: string, plz: string, ort: string): void {
    // @ts-ignore
    document.getElementById("anmeldeForm").submit;
    let formsIsValid: boolean = true;
    // if (username != null) {
    //   if (!/[^a-zA-Z]/.test(username)) {
    //     alert(username)
    //   }
    // }

    let numberPLZ: number = +plz;
    if (numberPLZ > 9999 || numberPLZ < 1000) {
      formsIsValid = false;
      alert("Die Postleitzahl ist nicht 4-Stellig")
    }

  }

}
