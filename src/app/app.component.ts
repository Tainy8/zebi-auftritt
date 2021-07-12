/*
Created by Ramon, Jordan, 8. Juli 2021
*/
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  errorText: string[] = [];

  title = 'zebi2angeler';

  validateAndProcess(username: string, name: string, nachname: string, email: string, adresse: string, plz: string, ort: string, agbChecked: boolean, newsChecked: boolean) {
    this.errorText=[];
    // @ts-ignore
    let formsIsValid: boolean = true;

    if(isEmptyOrSpaces(username)){
      this.errorText.push("Username Darf nicht leer sein.");
      formsIsValid = false;
    }

    let reName = /[^a-z]/i;
    if (reName.test(name)) {
      this.errorText.push("Vorname darf nur Buchstaben enthalten.");
      formsIsValid = false;
    }

    if (reName.test(nachname)) {
      this.errorText.push("Nachname darf nur Buchstaben enthalten.");
      formsIsValid = false;
    }

    const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!reEmail.test(email.toLowerCase())) {
      this.errorText.push("Die E-Mail ist nicht gültig.");
      formsIsValid = false;
    }

    if(isEmptyOrSpaces(adresse)){
      this.errorText.push("Adresse darf nicht leer sein.");
      formsIsValid = false;
    }

    let numberPLZ: number = +plz;
    if (numberPLZ > 9999 || numberPLZ < 1000) {
      formsIsValid = false;
      this.errorText.push("PLZ muss eine 4-Stellige Zahl sein.");
    }

    if(isEmptyOrSpaces(ort)){
      this.errorText.push("Ort darf nicht leer sein.");
      formsIsValid = false;
    }

    if(!agbChecked){
      this.errorText.push("AGB bitte akzeptieren.");
      formsIsValid = false;
    }

    formsIsValid=true;

    if(formsIsValid){
      console.log(username+" "+name+" "+nachname+" "+email+" "+adresse+" "+plz+" "+ort+" "+agbChecked+" "+newsChecked);
      localStorage.setItem("username", username);
      localStorage.setItem("name", name);
      localStorage.setItem("nachname", nachname);
      localStorage.setItem("email", email);
      localStorage.setItem("adresse", adresse);
      localStorage.setItem("plz", plz);
      localStorage.setItem("ort", ort);
      localStorage.setItem("agbChecked", String(agbChecked));
      localStorage.setItem("newsChecked", String(newsChecked));
    }
  }
}

function isEmptyOrSpaces(str: string){
  return str === null || str.match(/^ *$/) !== null;
}
