function lengthOfLastWord(s: string): number {
    const last_word = s.trim().split(" ");
    return last_word[last_word.length - 1].length;
};