import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formfield',
  templateUrl: './formfield.component.html',
  styleUrls: ['./formfield.component.css']
})
export class FormfieldComponent implements OnInit {

  //@ts-ignore
  @Input() text: string;
  //@ts-ignore
  @Input() type: string;
  //@ts-ignore
  @Input() name: string;

  val: string = " ";

  constructor() { }

  ngOnInit(): void {
  }

  storeVal(){
    // @ts-ignore
    this.val = document.getElementById(this.name+"Input").value;
  }

}
