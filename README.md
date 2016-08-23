# MobX Logger

![mobx-logger](https://raw.githubusercontent.com/winterbe/mobx-logger/master/docs/screenshot.png)

<p align="center">
   <i>Follow on <a href="https://twitter.com/winterbe_">Twitter</a> for Updates</i>
</p>

## Install

NPM: `npm install mobx-logger`
 
CDN: `https://npmcdn.com/mobx-logger/mobx-logger.umd.js` 

## Usage

```js
import {enableLogging} from 'mobx-logger';

// optional
const config = {...};

enableLogging(config);
```

## Options

```js
{
    predicate: () => true|false,
    action: true|false,
    reaction: true|false,
    transaction: true|false,
    compute: true|false
}
```