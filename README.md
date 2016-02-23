![](https://cloud.githubusercontent.com/assets/110953/7877439/6a69d03e-0590-11e5-9fac-c614246606de.png)

src: @PolymerElements

## Forked Polymer Starter Kit - using TypeScript and some micro-libraries for services (routing, AJAX, etc.)

This [Polymer](https://www.polymer-project.org/1.0/) Starter Kit has been modified for my personal use.

It uses [Typescript](http://www.typescriptlang.org/) as a superset of JavaScript thanks to [PolymerTS](https://github.com/nippur72/PolymerTS). For now, micro-libraries are:

+ [Oboe.js](https://github.com/jimhigson/oboe.js) for AJAX queries (and streams!)
+ [Page.js](https://visionmedia.github.io/page.js/) for routing

As far as possible, they are bound into reusable elements.

## Cave at

This repository is still a work in progress and is very likely to change in the near future since I am still experimenting.
Issues and pull requests are so very welcome but remember this is an __opinionated repository__ and some of your preferences might not fit mine.
If you want to scaffold Polymer and Typescript your own way, feel free to fork it!

## How to use this kit

First, you will need to have the following dependencies installed globally with npm:

+ [TypeScript](https://github.com/Microsoft/TypeScript) `you don't say?`
+ [Gulp](https://github.com/gulpjs/gulp)
+ [concurrently](https://github.com/kimmobrunfeldt/concurrently)
+ [lite-server](https://github.com/johnpapa/lite-server)

To run the project, just enter:
```shell
$ npm start
```

## Route map

This route map is not set in the stone. Some features are basically just ideas and may not be implemented ever.

+ replace Oboe.js by [RxJS Observables](https://github.com/Reactive-Extensions/RxJS) – 25% chances to be implemented
+ add optional services (for Crypto, LocalStorage, FileAPI) – 75% chances to be implemented
+ add gulp tasks – 90% chances to be implemented


## Author
grebett, 2016, with open source code from:

+ [@nippur72](https://github.com/nippur72)
+ [@PolymerElements](https://github.com/PolymerElements)
+ [@bsorrentino](https://github.com/bsorrentino)

## Scaffolding
You can of course clone this repository directly, but If you are lazy like me, you may be interested in the [generator I built for yeoman](https://github.com/grebett/generator-polytype).
