##jQuery Spinner Control
Converts the text input control to a spinner control. This plugin works fine with ASP.net for the post backs.

[![release][github-release]][github-release-url] [![NPM version][npm-image]][npm-url] [![Bower version][bower-image]][bower-url] [![NPM downloads][npm-downloads-image]][npm-downloads-url] [![license][license-image]][license-url]

###Installation
####bower
```
bower install spinner-control --save
```

####npm
```
npm install spinner-control --save
```

#### dependencies
1. jQuery 1.11.0


### Usage
#### Simple
```JavaScript
$(function(){
    $('#txtNumberSpinner').SpinnerControl();
});
```
#### Advanced
```JavaScript
$(function(){
    $('#txtListSpinner').SpinnerControl({
        type:'list',
        typedata:{
            list:'Item 1,Item 2,Item 3'
        },
        defaultVal:'Item 1',
        looping:true
    });
});
```
###Documentation
http://github.mindzgroup.com/spinner-control/docs/

###Demo
http://github.mindzgroup.com/spinner-control/

[npm-image]: https://img.shields.io/npm/v/spinner-control.svg
[npm-url]: https://npmjs.org/package/spinner-control
[npm-downloads-image]: https://img.shields.io/npm/dt/spinner-control.svg
[npm-downloads-url]: https://npmjs.org/package/spinner-control
[bower-image]: https://img.shields.io/bower/v/spinner-control.svg
[bower-url]: http://bower.io/search/?q=spinner-control
[github-release]: https://img.shields.io/github/release/mindzgrouptechnologies/spinner-control.svg
[github-release-url]: https://github.com/MindzGroupTechnologies/spinner-control/releases
[license-image]: http://img.shields.io/badge/license-MIT-green.svg
[license-url]: LICENSE
