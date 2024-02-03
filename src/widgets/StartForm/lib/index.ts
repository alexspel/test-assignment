export function formatPhone(value: string, c: string) {
    const format = {
        c0: '+',
        c1: '7',
        c2: ' ',
        c3: '(',
        c4: '9',
        c7: ')',
        c8: ' ',
        c12: '-',
        c15: '-',
    };
    let result = '';
    // @ts-ignore
    while (format[`c${result.length}`]) {
        // @ts-ignore
        result = `${result}${format[`c${result.length}`]}`;
        value = value.substring(1);
    }
    const valuec = `${result}${value}${c}`;
    result = valuec.split('').map((x, i) => {
        if (i >= 18) return '';
        // @ts-ignore
        if (format[`c${i}`] !== undefined) {
            // @ts-ignore
            return format[`c${i}`];
        }
        return x;
    }).join('');

    // @ts-ignore
    while (format[`c${result.length}`]) {
        // @ts-ignore
        result = `${result}${format[`c${result.length}`]}`;
    }
    return result;
}
