// When we have data inside of our service that we have obtained by making that a network request or something similar,we are always going to try to access that data from a component. We will never try to hookup a service template directly. instead services get connected to components.
// Services are always implemented as classes.
// Angular will automatically create a single instance of each service for us. We do not create ourselves like "new WikipediaService()" angular will make it for us and make it available to all the different components of our app.
// in any component that we want to access this instance, we write in the constructor

import { Injectable } from '@angular/core';
//we first imported { HttpClientModule } in app.module.ts
//HttpClient is a dependency class here, we also added "HttpClientModule" to app.module.imports
import { HttpClient } from '@angular/common/http';

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
    return this.http.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*',
      },
    });
  }
}

// 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space'
