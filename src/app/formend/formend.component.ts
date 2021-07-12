import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-formend',
  templateUrl: './formend.component.html',
  styleUrls: ['./formend.component.css']
})
export class FormendComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  agbChecked: boolean = false;
  newsChecked: boolean = true;

  storeVal(whichOne: string) {
    if (whichOne == 'agb') {
      // @ts-ignore
      this.agbChecked = document.getElementById('agbBox').checked;
    }
    if (whichOne == 'news') {
      // @ts-ignore
      this.newsChecked = document.getElementById('newsBox').checked;
    }
  }

}
