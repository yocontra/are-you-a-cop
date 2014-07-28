# are-you-a-cop [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Support us][gittip-image]][gittip-url]


## Information

<table>
<tr>
<td>Package</td><td>are-you-a-cop</td>
</tr>
<tr>
<td>Description</td>
<td>Blocks cops from visiting your site. If they are they have to tell you.</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.10</td>
</tr>
</table>

## Usage

```javascript
var copCheck = require('are-you-a-cop');
var express = require('express');
var app = express();

app.use(copCheck(false));

app.get('/safezone', function(req, res, next){
  
});
```

Want to allow cops but still mark the request as `.cop = true`? Set the `allow` param to true.

```javascript
app.use(copCheck(true));
```

### How does this work?

Around the world there is one universal constant: If you ask a cop if they are a cop, they have to tell you. What this module does is attach an "X-Are-You-A-Cop" header (RFC520520) to each response. If the requesting party sends back a "X-I-Am-A-Cop" header the request will be flagged as a cop, and you can choose to allow or deny it. Normal users will not be affected by this, but all cops will need to modify their browser to send this legally mandated header.

## Like what we do?

[gittip-url]: https://www.gittip.com/WeAreFractal/
[gittip-image]: http://img.shields.io/gittip/WeAreFractal.svg

[downloads-image]: http://img.shields.io/npm/dm/are-you-a-cop.svg
[npm-url]: https://npmjs.org/package/are-you-a-cop
[npm-image]: http://img.shields.io/npm/v/are-you-a-cop.svg