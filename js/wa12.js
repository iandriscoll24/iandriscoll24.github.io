// Problem 1
console.log("Question 1");
let employees = '{"employees": [' +
      '{"firstName":"Sam", "department":"Tech", "designation":"Manager", "salary":"40000", "raise":"true"},' +
      '{"firstName":"Mary", "department":"Finance", "designation":"Trainee", "salary":"18500", "raise":"true"},' +
      '{"firstName":"Bill", "department":"HR", "designation":"Executive", "salary":"21200", "raise":"false"}' +
      ']}';

const obj = JSON.parse(employees);
console.log(obj);
// Problem 2
console.log("Question 2");
let company = '{"name":"Tech Stars", "website":"www.techstars.site" }';

let obj2 = JSON.parse(company);
console.log(obj2["website"]);
obj2["employees"] = obj["employees"];
console.log(obj2["employees"][0]["firstName"]);
console.log(obj2["employees"][1]["firstName"]);
console.log(obj2["employees"][2]["firstName"]);
// Problem 3
console.log("Question 3");
let newEmployee = '{"firstName":"Anna", "department":"Tech", "designation":"Executive", "salary":"25600", "raise":"false"}';
employees = JSON.parse(employees);
employees.employees.push(JSON.parse(newEmployee));
employees = JSON.stringify(employees);
console.log(obj);
// Problem 4
console.log("Question 4");
let totalSalary = 0;

for (let i = 0; i < obj.employees.length; i++) {
      totalSalary += parseInt(obj.employees[i].salary);
}
console.log("Total Salary:", totalSalary);

//Problem 5
console.log("Question 5");
for (let i = 0; i < obj.employees.length; i++) {
      if (obj.employees[i].raise === "true") {
        obj.employees[i].salary = parseInt(obj.employees[i].salary) * 1.10;
        obj.employees[i].raise = "false";
      }
    }
console.log(obj);

//Problem 6
console.log("Question 6");
let wfh = ['Anna', 'Sam'];
for (let i = 0; i < obj.employees.length; i++) {
  if (wfh.includes(obj.employees[i].firstName)) {
    obj.employees[i].wfh = true;
  } else {
    obj.employees[i].wfh = false;
  }
}
console.log(obj);