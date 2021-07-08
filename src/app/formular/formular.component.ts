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

  onsubmit(): void{
    // @ts-ignore
    document.getElementById("anmeldeForm").submit;
}

}
