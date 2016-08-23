export const repeat = (str, times) => (new Array(times + 1)).join(str);

export const padStart = (num, maxLength, char = ' ') => repeat(char, maxLength - num.toString().length) + num;

export const formatTime = (time) => {
    const h = padStart(time.getHours(), 2, '0');
    const m = padStart(time.getMinutes(), 2, '0');
    const s = padStart(time.getSeconds(), 2, '0');
    const ms = padStart(time.getMilliseconds(), 3, '0');
    return `${h}:${m}:${s}.${ms}`;
};

export const now = () => formatTime(new Date());