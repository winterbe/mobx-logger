import {padStart, now} from './utils';

const style = (color, bold = true) => {
    return `color:${color};font-weight:${bold ? '600' : '300'};font-size:11px`;
};

const logAction = (ev) => {
    console.groupCollapsed('%c%s  %s  %s.%s()', style('#000'), now(), padStart('ACTION', 8), ev.target, ev.name);
    console.log('%cFunction %o', style('#777'), ev.fn);
    console.log('%cArguments %o', style('#777'), ev.arguments);
    console.log('%cTarget %o', style('#777'), ev.target);
    console.log('%cEvent %o', style('#777'), ev);
    console.groupEnd();
};

const logReaction = (ev) => {
    const name = ev.object.name.replace('#null', '');
    console.groupCollapsed('%c%s  %s  %s', style('#9E9E9E'), now(), padStart('REACTION', 8), name);

    const observables = ev.object.observing || [];
    const names = observables.map(it => it.name);
    if (names.length > 0) {
        console.log('%cObserving %o', style('#777'), names);
    }

    console.log('%cEvent %o', style('#777'), ev);
    console.groupEnd();
};

const logTransaction = (ev) => {
    console.groupCollapsed('%c%s  %s  %s', style('#7B7B7B'), now(), padStart('TX', 8));
    console.log('%cEvent %o', style('#777'), ev);
    console.groupEnd();
};

const logCompute = (ev) => {
    const name = ev.object.name;
    console.groupCollapsed('%c%s  %s  %s', style('#9E9E9E'), now(), padStart('COMPUTE', 8), name);
    console.log('%cEvent %o', style('#777'), ev);
    console.groupEnd();
};

const logEvent = (ev) => {
    switch (ev.type) {
        case 'action':
            logAction(ev);
            return;
        case 'reaction':
            logReaction(ev);
            return;
        case 'transaction':
            logTransaction(ev);
            return;
        case 'compute':
            logCompute(ev);
            return;
    }
};

export default (ev, options) => {
    if (options[ev.type] !== true) {
        return;
    }

    if (options.logFilter(ev) !== true) {
        return;
    }

    logEvent(ev);
}