import {spy} from 'mobx';
import log from './log';
import LogContext from './LogContext';

const defaultOptions = {
    logFilter: () => true,
    rules: []
};

const mergeOptions = (options) => {
    if (options == null) {
        return defaultOptions;
    }
    return Object.assign({}, defaultOptions, options);
};

export const enableLogging = (options) => {
    const mergedOptions = mergeOptions(options);
    const context = new LogContext(mergedOptions);
    return spy(ev => log(ev, context));
};

export default enableLogging;