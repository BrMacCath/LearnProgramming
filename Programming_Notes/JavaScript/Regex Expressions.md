---
fileClass: JavaScript
---
Regex expressions are select text in certain conditions. I used this tutorial^[https://regexone.com/] to learn about them.



<%*
let str = "Hello, this is Mike (example)";
let str2 = "\\obsidianCite{Test}";
let test = str.replace(/\s*\(.*?\)\s*/g, '');
const text = "This is a sample text with some numbers like 123 and 456.";  
const regex = /\d+/g; // Matches one or more digits globally  
  
console.log(regex.test(text)); // true, because the text contains digits  
console.log(text.match(regex)); // ["123", "456"], returns an array of all matches  
console.log(text.search(regex)); // 38, returns the index of the first match  
console.log(text.replace(regex, "")); // "This is a sample text with some numbers like and ."  
console.log(text.split(regex));


//console.log(/\(.+?\)/g.test(str2))
let test2 =str.replace(/\(.+?\)/g, function(string, first){
  // string is the full result of the regex "[2]"
  //first is the number 2 from "draft [2]"
  console.log(string)
  return "^["+ string.substring(1) +"]";
})
//
console.log(str2)
console.log(/\\obsidianCite{.+}/g.test(str2))
// This is the right regex function
let test3 = str2.replace(/\\obsidianCite\{.+\}/g, function(string, first){
  // string is the full result of the regex "[2]"
  //first is the number 2 from "draft [2]"
  console.log(string)
  
  return "temp^[" + string.slice(14,-1)+"]";
})

%>

<% test %>


<% test2 %>


<% test3 %>
