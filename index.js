const prompt = require('prompt-sync') () ;
// generates total marks based on total 

function generateGrade (marks) {
if (marks>=80 ) {
    return `Your grade is A `;
}else if (marks>=60 &&marks<=79) {
    return `Your grade is B`;
}else if (marks>=49 &&marks<=59){
    return`Your grade is C` ;
}else if(marks>=40 &&marks<=49) {
    return `Your grade is D` ;
}else {
    return 'E'
}
}
// prompt user to enter total const grade = prompt("please enter your total,")
// output correct total
const grade = prompt("please enter your total,") ; 
console.log(`You scored a: ${generateGrade(grade)}`);
