import {getName} from './utils';

export default class LogContext {
    options = {};
    filterRules = [];

    constructor(options) {
        this.options = options;
        this.filterRules = options.rules.map(
            rule => new FilterRule(rule)
        );
    }

    shouldLog(ev) {
        if (this.options.logFilter(ev) === true) {
            return true;
        }

        if (this.filterRules.length === 0) {
            return true;
        }

        return this.evaluateRules(ev);
    }

    evaluateRules(ev) {
        const type = ev.type.toLowerCase();
        const name = getName(ev).toLowerCase();

        for (let i = this.filterRules.length - 1; i > 0; i--) {
            const filterRule = this.filterRules[i];
            const match = filterRule.match(type, name);
            if (match.isMatch) {
                return match.isInclude === true;
            }
        }

        return true;
    }


}