function findTheDifference(s: string, t: string): string {
    let count = 0;
    for(let i = 0; i < t.length; i++){
        if(s[i] !== undefined && s.includes(t[i]) && findOccurences(t, t[i]) === findOccurences(s, t[i])) continue
        else return t[i]
    }
    return ''
};

function findOccurences(str: string, chr: string): number {
    return str.split("").map((element, index) => (
        element === chr ? index : -1
    )).filter(index => index !== -1).length
}

