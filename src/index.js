import {spy} from 'mobx';
import log from './log';

const defaultOptions = {
    action: true,
    reaction: true,
    transaction: true,
    compute: true,
    logFilter: () => true
};

const mergeOptions = (options) => {
    if (options == null) {
        return defaultOptions;
    }
    return Object.assign({}, defaultOptions, options);
};

export const enableLogging = (options) => {
    const mergedOptions = mergeOptions(options);
    return spy(ev => log(ev, mergedOptions));
};

export default enableLogging;