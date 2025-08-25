function mergeAlternately(word1: string, word2: string): string {
    let new_word = ""
    const n = Math.max(word1.length, word2.length);
    for(let i = 0; i < n; i++) {
        if(word1[i] !== undefined && word2[i] !== undefined) {
            new_word += word1[i]
            new_word += word2[i]
        }
        else if(word1[i] !== undefined) {
            new_word += word1[i]
        } else {
             new_word += word2[i]
        }
    }
    return new_word
};