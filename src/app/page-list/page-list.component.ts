import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  // in the html we are gonna reference that property.
  // input decorator tells that pagesList will be provided from the app component
  @Input() pagesList = [];
  constructor() {}

  ngOnInit(): void {}
}
