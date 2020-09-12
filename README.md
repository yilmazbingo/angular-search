# WikipediaAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Generating Services

```
$ ng generate service wikipedia
```

- .service will be added to to wikipedia.service
- service files make requests

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

**Dependency Injection**

- Components,services and other things in Angular ask for dependencies,rather than creating them directly. in this project, app component needs WikipediaService.
- our app component could create an instance manually. the goal of dependecy injection is to make testing easier. it helps to reuse the code.
