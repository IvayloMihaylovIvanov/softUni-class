class Company {
    departmentData = {}

    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
            this.departmentData[department] = {
                sumSalary: 0,
                avaregeSalary: 0
            }
        }
        let employee = { name, salary, position };

        this.departments[department].push(employee);
        this.departmentData[department].sumSalary += Number(salary);
        this.departmentData[department].avaregeSalary =
            this.departmentData[department].sumSalary / this.departments[department].length;

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let [bestDepartmentName, salaryData] = Object.entries(this.departmentData).sort((a, b) => b[1].avaregeSalary - a[1].avaregeSalary)[0];


        let buff = `Best Department is: ${bestDepartmentName}\n`
        buff += `Average salary: ${salaryData.avaregeSalary.toFixed(2)}\n`

        this.departments[bestDepartmentName].sort((objA, objB) => {
            return objB.salary - objA.salary || objA.name.localeCompare(objB.name);
        }).forEach(obj => {
            return buff += `${obj.name} ${obj.salary} ${obj.position}\n`
        });

        return buff.trim();
    }
}



let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment())