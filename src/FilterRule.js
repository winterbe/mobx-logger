export default class FilterRule {
    included = null;
    typePattern = '.*';
    namePattern = '.*';

    constructor(ruleString) {
        if (ruleString == null) {
            throw Error("ruleString must not be `null` or `undefined`");
        }

        ruleString = ruleString.toLowerCase();
        if (!ruleString.match(/.*/)) {  // TODO
            throw Error('ruleString must match the rule pattern: [+|-]:[action]:[name]')
        }

        // TODO: `name` could contain the character `:`

        const split = ruleString.split(':');
        this.included = split[0] === '+';
        this.typePattern = split[1].replace('*', '.*');
        if (split.length > 2) {
            this.namePattern = split[2].replace('*', '.*');
        }
    }

    match(type, name) {
        const isMatch = type.match(this.typePattern) && name.match(this.namePattern);
        return {
            isMatch,
            isInclude: this.included
        };
    }

}