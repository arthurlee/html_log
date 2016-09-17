# Introduction

I am studying ES6 (ES2015) following the document [Learn ES2015](https://babeljs.io/docs/learn-es2015/). 
And I want to use some online editor and interpreters. That's [JSFiddle](https://jsfiddle.net).

But the problem is how to see the output of console.log() function in that online platform? 
I shall open the error console provided by each browser. It is not so convinence for me.
  
So the html_log library is here. It provide a log() function to show the output in the html content.
It is so useful when I was studying the ES6 langauge and trial out the features.

# Getting Start

- First, link the web_log.css in your head of the html file.
``` html5
log('Welcome to html_log');
```

- Second, put these codes in top of your contents of the body element.

``` javascript
	<!-- show log message in the html page instead of console -->
	<div id="logger"></div>
	<script type="application/javascript" src="../src/web_log.js"></script>
	<!-- end -->
```

- Third, call the log function to output the messages whatever you want.

``` javascript
log('Welcome to html_log!');
```

- That's all. Please see the source code of [scaffold.html](./es6_samples/scaffold.html) for detail.

# Acknowledgements

Most of the sample codes of ES6 samples is come from [Learn ES2015](https://babeljs.io/docs/learn-es2015/) and other websites.
Let me say thanks for all of the guys who are contributing their code and time.

