# mymoms
yet another JavaScript library for [Jeremy Osborne](http://jeremyosborne.com)



## TODO
* Change the names for various items:
    * makebindable -> mixinBind
    * makepublisher -> mixinPubSub
        * Also change the method signatures to .pub() and .sub().
* Resolve any shared library requirements (which right now looks like is a problem for makepublisher and simpletimer).
* Change extend string to only support extension of the string prototype.
    * Bring the new string method in.
* Need the following doc tags:
    * singleton
    * mixin



## Why?
My mom wanted a JavaScript library, so I made her one. This is also a dumping ground for random code.

Most of the code is nothing special, and rather than collected within a single library is designed to be ripped out of its file and placed into your own code.



## Stability

    Stability: 1 Experimental

I'm adopting the [Node.js Stability Index](http://nodejs.org/api/documentation.html#documentation_stability_index) in most of my code. Since `mymoms` is really just for me, it will likely forever be experimental and any and all module names, functional signatures, really anything may change at a moments notice. Should that ever change, I will update the stability index.



## What is in the directories?

* `src/`: Probably what you're looking for. Contains the snippets of code that make up the mymoms "library."
* `test/`: Where the [Qunit](http://qunitjs.com/) tests go. Names of test files should equate to their equivalent `src/` modules. Files in this directory are also assumed to be, and will be, run during any automated tests.
* `examples/`: Sometimes automated testing doesn't help, or sometimes we need black box examples. What is available of this flavor of things will be found here.



## Developer notes



### General developer requirements
* [Node.js](http://nodejs.org/): Required by the build tools (see below).
* [npm](http://npmjs.org): Node Package Manager. Usually installed by default these days during the node installation.



### Documentation
The [Node port](https://npmjs.org/package/jsdoc-toolkit) of [jsdoc-toolkit](http://code.google.com/p/jsdoc-toolkit/) is used to generate the API documentation, mainly because:

* Most people are at least somewhat familiar with the funky syntax of applying JavaDoc style tags to JavaScript.
* As much as I want to like the other documentation toolkits, in particular the ones that support markdown, I don't really care for the other autodoc toolkits out there at the moment (which opinion might change in the future).

#### Generating the documentation
Documentation is not checked in and will need to be autogenerated if needed. To generate the documentation:

* Before anything else, within this directory run:

        npm install

* After all the dependencies are installed run:

        npm run-script gendoc

Many of the objects and functions are global functions, since I assume most of the code will be cut-and-pasted. When looking at the resuling documentation in the `docs/` directory, check out the global object.



### Testing
Tests are written for the mymoms modules using [Qunit](http://qunitjs.com/) because it is simple and I like it. If you don't care about automated testing, any of the tests should work just fine when run manually in a browser. The following info is only required if you wish to run the automated tests.

#### Requirements for automated testing
Since the appropriate Qunit is already included in the code repo, the following is the list of platforms/libraries/packages that need be manually installed.
* [Grunt](http://gruntjs.com/): Build tools. Assumes version 0.3.x globally installed.
* [PhantomJS](http://phantomjs.org/index.html): Headless browser for testing. Grunt 0.3.x, which is the build system that is currently being used, needs a globally installed PhantomJS.

#### How to run automated tests
* Before testing, within this directory, run:

        npm install

* If you have everything installed as stated in the requirements for automated testing, you can then run:
		
		npm test
