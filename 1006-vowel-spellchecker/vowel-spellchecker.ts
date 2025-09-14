function spellchecker(wordlist: string[], queries: string[]): string[] {
   let answer = [];
   let wordlistSmall = [];
   let modifiedWordlist = [];
   
   for(let i = 0; i < wordlist.length; i++) {
       wordlistSmall[i] = wordlist[i].toLowerCase();
       modifiedWordlist[i] = wordlistSmall[i].replace(/[aeiou]/gi,"*");
   }

   for(let i = 0; i < queries.length; i++) {
       let index = modifiedWordlist.indexOf(queries[i].toLowerCase().replace(/[aeiou]/gi,"*"));
       (index !== -1) ? answer.push(modifiedWordlist[index]) : answer.push("");
   }

   for(let i = 0; i < answer.length; i++) {
       if(answer[i]!=="") {
           if(wordlist.indexOf(queries[i]) !== -1){ 
               const index = wordlist.indexOf(queries[i]);
               answer[i]=wordlist[index];
           }
           else if(wordlistSmall.indexOf(queries[i].toLowerCase()) !== -1) {
               const index = wordlistSmall.indexOf(queries[i].toLowerCase());
             answer[i]=wordlist[index];
           } else if(modifiedWordlist.indexOf(answer[i]) !== -1){
               const index = modifiedWordlist.indexOf(answer[i]);
               answer[i]= wordlist[index];
           }
       }
   }
    return answer;
};