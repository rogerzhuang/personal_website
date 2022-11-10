const courseList = [
    {code:"ACIT 1420", name:"Introduction to Systems Administration"},
    {code:"ACIT 1620", name:"Fundamental Web Technologies"},
    {code:"ACIT 1630", name:"Database System"},
];

let input = prompt("Please input 4-digit course number");
while (isNaN(Number(input)) || Math.floor(Number(input)/1000) < 1) {
    alert("The input is invalid, either not a number or less than 4-digit");
    input = prompt("Please input 4-digit course number");
}

let isInList = false;
for (let course of courseList) {
    if (course.code.includes(input)) {
        console.log(`Yes I am taking the course: ${course.code} – ${course.name}`);
        isInList = true;
        break;
    }
}

if (!isInList) {
    courseList.push({code:input, name:null});
    console.log(`Add course ${input} successful`);
}