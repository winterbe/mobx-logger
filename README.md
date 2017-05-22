# MobX Logger

> Always know what is really going on in your MobX application by logging just the right information.

![mobx-logger](https://raw.githubusercontent.com/winterbe/mobx-logger/master/docs/screenshot.png)

<p align="center">
   <i>Follow on <a href="https://twitter.com/winterbe_">Twitter</a> for Updates</i>
</p>

## Install

NPM: `npm install mobx-logger`
 
CDN: `https://unpkg.com/mobx-logger/mobx-logger.umd.js` 

## Usage

```js
import {enableLogging} from 'mobx-logger';

// optional
const config = {...};

enableLogging(config);
```

## Options

Unlike MobX DevTools you can simply configure which particular information should be logged to the console. Currently Actions, Reactions, Transactions and Computations are supported.

```js
{
    predicate: () => true|false,
    action: true|false,
    reaction: true|false,
    transaction: true|false,
    compute: true|false
}
```

## Logger Config

You can disable logging for actions and computed properties by providing a static `mobxLoggerConfig`. This is useful to keep the console log clean, e.g. when using a large amount of Mobx models which would result in alot of console logs.

Here's an example of how to disable logging for all actions and computed properties for a given class:

```js
class MyModel {
    static mobxLoggerConfig: {
        enabled: false
    };
    
    // ...
}
```

Alternatively you can disable logging for particular class methods:

```js
class MyStore {
    static mobxLoggerConfig: {
        methods: {
            myAction: false
        }
    };
    
    @action myAction() {
        // calls to this method won't be logged
    }
}
```

You can combine the above examples to whitelist certain actions for being logged:

```js
class MyStore {
    static mobxLoggerConfig: {
        enabled: false,
        methods: {
            myAction: true
        }
    };
    
    @action myAction() {
        // only calls to this method are being logged
    }
    
    // other methods won't be logged ...
}
```

> Please keep in mind that at this point `mobxLoggerConfig` is only available for actions (`@action`) and computed properties (`@computed`).

#### ReactNative

For ReactNative development use this predicate to only enable logging in dev mode with JS debugging enabled:

```js
enableLogging({
    predicate: () => __DEV__ && Boolean(window.navigator.userAgent),
    ...
});
```

## License

MIT
