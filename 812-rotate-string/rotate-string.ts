function rotateString(s: string, goal: string): boolean {
   if (s.length !== goal.length) return false;
   const searchSpace = goal+goal;
   return searchSpace.indexOf(s) !== -1;
};