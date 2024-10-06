// Task 1: Create a Department Structure
const company = { 
    departments: [
        {
            departmentName: 'Accounting',
            employees: [
                {
                    name: 'Cameron', salary: 100000, subordinates: [
                        {
                            name: 'Kori', salary: 120000, subordinates: [
                                {
                                    name: 'Dorothy', salary: 80000, subordinates: []
                                }
                            ]
                        },
                        {
                            name: 'Amari', salary: 95000, subordinates: []
                        }
                    ]
                }
            ]
        },
        {
            departmentName: 'Human Resource',
            employees: [
                {
                    name: 'Myia', salary: 90000, subordinates: [
                        {
                            name: 'Eboni', salary: 115000, subordinates: [
                                {
                                    name: 'Braylin', salary: 100500, subordinates: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
// Sample data used

// Task 2: 

function calculateDepartmentSalary(department) {
    let totalSalary = 0; // Set salary to 0 

    function calculateEmployeeSalary(employee) { // Function used to calculate the salary of an employee and subordinates. 
        totalSalary += employee.salary; // Calculation to add employee's salary to total. 
        if(employee.subordinates.length > 0 ) { // If employee has subordinates, 
            employee.subordinates.forEach(subordinate => {
                calculateEmployeeSalary(subordinate); // the salary of each subordinate will be calculated. 
            });
        }
    }
    department.employees.forEach(employee => { // Used to find every employee in the department and add their salaries. 
        calculateEmployeeSalary(employee);
    });
    return totalSalary; 
};

let accounting = calculateDepartmentSalary(company.departments[0]); // Used to format message. 
let HR = calculateDepartmentSalary(company.departments[1]); // Used to format message. 

console.log(`The total salary for the Accounting department is: $${accounting}`); // Message displays total. 
console.log(`The total salary for HR is: $${HR}`); // Message displays total.  

//Task 3: Create a Function to Calculate the Total Salary for All Departments

function calculateCompanySalary(company) { // Function used to calculate total salary for entire company. 
    let totalCompanySalary = 0; // Sets company total salary to 0. 

    company.departments.forEach(department => { // Used to search each department in the company.
        totalCompanySalary += calculateDepartmentSalary(department); // Used to calculate the total salary of each department to the company total. 
    });
    return totalCompanySalary;
}

let overallSalary = calculateCompanySalary(company); // Used to format message. 

console.log(`The total salary for the entire company is: $${overallSalary}`); // Message displays total salary for the whole company. 

