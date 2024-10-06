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