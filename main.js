'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getGrade(score) {
    let grade='F';
    // Write your code here
    switch(true){
    case score<=5:
    grade='F';
    break;
    case score<=10:
    grade='E';
    break;
    case score<=15:
    grade='D';
    break;
    case score<=20:
    grade='C';
    break;
    case score<=25:
    grade='B';
    break;
    case score<=30:
    grade='A';
    break;
        }
    return grade;
}


function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}
