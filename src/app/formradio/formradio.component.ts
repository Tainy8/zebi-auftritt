import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-formradio',
  templateUrl: './formradio.component.html',
  styleUrls: ['./formradio.component.css']
})
export class FormradioComponent implements OnInit {

  //@ts-ignore
  @Input() text: string;
  //@ts-ignore
  @Input() type: string;
  //@ts-ignore
  @Input() name: string;
  //@ts-ignore
  @Input() checked: string;

  constructor() { }

  ngOnInit(): void {
  }

}
