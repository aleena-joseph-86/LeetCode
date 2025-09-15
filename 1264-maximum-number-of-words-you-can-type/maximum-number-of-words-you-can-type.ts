
function canBeTypedWords(text: string, brokenLetters: string): number {
    let count = 0;
    const textArray = text.split(" ");
    const regex = new RegExp("["+brokenLetters+"]");
    for(let i = 0; i < textArray.length; i++) 
        if(!regex.test(textArray[i])) count++;
    return count;
};