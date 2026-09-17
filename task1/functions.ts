// subtask 4
console.log("subtask 4:");

function calculateWisdom (education: string, age: number = 18): string {
    let mark = 0;
    let adjective: string = '';
    education = education.toLowerCase();
    if (age < 18) {
        adjective += 'young ';
        mark += 100;
    }
    if (age > 60) {
        adjective += 'with respect ';
    }
    if (education == 'lawyer') {
        adjective += 'knowledgeable ';
        mark += 10;
    }
    if (education == 'bachelor' || education == 'baccalaureate') {
        adjective += 'basic ';
        mark += 1;
    }
    if (education == 'arts') {
        adjective += 'hero ';
        mark -= 3663;
    }
    return adjective + "human with the rate " + mark.toString();
}

console.log(calculateWisdom('arts'));
console.log(calculateWisdom('lawyer', 90));
console.log(calculateWisdom('somebody not mentioned in the list', 5));