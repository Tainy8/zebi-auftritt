import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formbutton',
  templateUrl: './formbutton.component.html',
  styleUrls: ['./formbutton.component.css']
})
export class FormbuttonComponent implements OnInit {

  //@ts-ignore
  @Input() text: string;
  //@ts-ignore
  @Input() id: string;

  constructor() { }

  ngOnInit(): void {
  }

}
