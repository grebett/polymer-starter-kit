![](https://cloud.githubusercontent.com/assets/110953/7877439/6a69d03e-0590-11e5-9fac-c614246606de.png)
## Forked Polymer Starter Kit - using TypeScript and some micro-libraries for routing, DI, AJAX, etc...

This [Polymer](https://www.polymer-project.org/1.0/) Starter Kit has been modified for my personal use.

It uses [Typescript](http://www.typescriptlang.org/) as a superset of JavaScript, [Inversify](http://inversify.io/) for Dependency Injections, [Oboe.js](https://github.com/jimhigson/oboe.js) for AJAX queries (and streams!) and [Page.js](https://visionmedia.github.io/page.js/) for routing.

This repository is very likely to change in the near future since I am still experimenting. Issues and pull requests are so very welcome but remember this is an __opinionated repository__ and some of your preferences might not fit mine. If you want to scaffold Polymer and Typescript your own way, feel free to fork it!


## Route map

This route map is not set in the stone. Some features are basically just ideas and may not be implemented ever.

+ replace Oboe.js by [RxJS Observables](https://github.com/Reactive-Extensions/RxJS) – 25% chances to be implemented
+ add optional services (for Crypto, LocalStorage, FileAPI) – 75% chances to be implemented
