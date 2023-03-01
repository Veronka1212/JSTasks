function maxSalary(salaries) {

    let max = 0;
    let employee = null;

    for(const [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            employee = name;
        }
    }
    return employee;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert(maxSalary(salaries));