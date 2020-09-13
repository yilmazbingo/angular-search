// When we have data inside of our service that we have obtained by making that a network request or something similar,we are always going to try to access that data from a component. We will never try to hookup a service template directly. instead services get connected to components.
// Services are always implemented as classes.
// Angular will automatically create a single instance of each service for us. We do not create ourselves like "new WikipediaService()" angular will make it for us and make it available to all the different components of our app.
// in any component that we want to access this instance, we write in the constructor

import { Injectable } from '@angular/core';
//we first imported { HttpClientModule } in app.module.ts
//HttpClient is a dependency class here, we also added "HttpClientModule" to app.module.imports
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

interface WikipediaResponse {
  // we write annotation only for the properties that we are going to use
  query: {
    // array of objects
    search: {
      title: string;
      snippet: string;
      pageid: number;
    }[];
  };
}

// this tells angular, take this class and load it to the injector/container which WikipediaService==>new WikipediaService
// this is on top of the components, whenever someone calls WIkipediaService, it gets new WikipediaService. by default only one isntance gets created.
@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  // we are not creating any instance, we are injecting
  constructor(private http: HttpClient) {}

  // we are defining our method here. in app component we have access to WikipediaSearch instance. we are going to execute this method inside the app.component
  search(term: string) {
    // http.get returns an observable. as soon as the request is over, the observable is going to emit a value consisting of all the data that are retrieved from the api.
    // since we will be using this value in all different components, we have to define its type
    // we use pluck() because we dont wanna carry entire res obj to the component
    // http.get() is a generic function
    return this.http
      .get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          srsearch: term,
          origin: '*',
        },
      })
      .pipe(pluck('query', 'search'));
  }
}

// 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space'
