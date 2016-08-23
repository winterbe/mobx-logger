import {spy} from 'mobx';
import log from './log';

const defaultOptions = {
    action: true,
    reaction: true,
    transaction: true,
    compute: true,
    predicate: () => true
};

export const enableLogging = (options = defaultOptions) => {
    const predicate = options.predicate || defaultOptions.predicate;
    if (predicate() === true) {
        return spy(ev => log(ev, options));
    }
    return () => void(0);
};

export default enableLogging;