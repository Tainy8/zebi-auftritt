/*
Created by Ramon, Jordan, 8. Juli 2021
*/

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
    let formsIsValid: boolean = true;

    let reName = /[^a-z]/i;
    if (reName.test(name)) {
      alert("Der Eingegeben Vorname darf nur aus Buchstaben");
      formsIsValid = false;
    }

    if (reName.test(nachname)) {
      alert("Der Eingegeben Nachname darf nur aus Buchstaben");
      formsIsValid = false;
    }

    let numberPLZ: number = +plz;
    if (numberPLZ > 9999 || numberPLZ < 1000) {
      formsIsValid = false;
      // alert("Die Postleitzahl ist nicht 4-Stellig");
    }

    const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!reEmail.test(email.toLowerCase())) {
      //alert("Bitte gib eine valide Emailadresse ein");
      formsIsValid = false;
    }
  }

}
