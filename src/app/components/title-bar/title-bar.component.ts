import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['../../app.component.css']
})
export class TitleBarComponent implements OnInit {

  constructor() { }

  @Input() title: string;

  ngOnInit() {
  }

}
