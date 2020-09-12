// EventEmitter and Output are used for the child-to-parent communication. from here to the app component
// we are writing our custom event system
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  //we are going to write a property, used to trigger some infromation and send it back out to parent "app" component
  // in this case we are sending "term" to the "to the app component"
  //submitted  event is used to trigger events that get sent back up to the parent app component
  // we are emitting "string". "submitted" is an object, an instance.
  @Output() submitted = new EventEmitter<string>();
 
  // this is like state in React. we are taking the form input value and store it here. 
  term = '';
  constructor() {}

  ngOnInit(): void {}

  onFormSubmit(event: any) {
    // by default, browser sends all input values to the backend server
    event.preventDefault();
    //we are sending "this.emit" to the parent app via the <app-search-bar>
    this.submitted.emit(this.term);
  }

  //--------------with the second approach insse html, we do not need this anymore
  // onInput(value: string) {
  //   this.term = value;
  // }
}
