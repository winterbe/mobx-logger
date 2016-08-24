# MobX Logger

> Always know what is really going on in your MobX application by logging just the right information.

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

Unlike MobX DevTools you can simply configure via which particular information should be logged to the console. Currently Actions, Reactions, Transactions and Computations are supported. MobX Logger won't log information about updating observables, use devTools instead.

```js
{
    predicate: () => true|false,
    action: true|false,
    reaction: true|false,
    transaction: true|false,
    compute: true|false
}
```

#### ReactNative

For ReactNative development use this predicate to only enable logging in dev mode with JS debugging enabled:

```js
enableLogging({
    predicate: () => __DEV__ && Boolean(window.navigator.userAgent),
    ...
});
```

## LICENSE

MIT
