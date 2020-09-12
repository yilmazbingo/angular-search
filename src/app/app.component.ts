import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

//it is listenig from html for the "submitted" event. once it occurs, AppComponent has access to search term.
//then it will pass the "term" to the services component.
export class AppComponent {
  // this will be passed to the page-list component
  pages = [];
  //when ever user submits the "term", we can access from here and we fetch the data here
  //so we need to connect to wikipedia.service.ts we are not going to access WikipediaService directly. instead we define constructor
  // type WikipediaService. when we use a class as a type imitation, that means "wikipedia" must be an instance of WikipediaSErvice class
  // since "private wikipedia" is inside constructor, wikipedia will be added as a private property automatically.
  // this is dependency injection
  constructor(private wikipedia: WikipediaService) {}
  // this is not a regular js. we created an instance without calling "new"
  // everything in this file processed by the typescript compiler before it even gets executed inside the browser. it is also running some tooling like webpack part of the angular. that tooling automatically parses the constructor.
  // webpack is compiling this constructor to a normal js constructor. browser does not understand ts. in the compiler code there is "AppComponent.ctorParameters=()=>{type:__wikipedia_service__WEBPACK__IMPORTED_MODULE_2__["WikipediaService"]}" like ast token, defines the constructor parameters.
  onTerm(term: string) {
    // we use callback not promise
    // we should avoid annotation any
    this.wikipedia.search(term).subscribe((res: any) => {
      this.pages = res.query.search;
    });
  }
}
