
console.log("Question 1");
let employees = '{"employees": [' +
      '{"firstName":"Sam", "department":"Tech", "designation":"Manager", "salary":"40000", "raise":"true"},' +
      '{"firstName":"Mary", "department":"Finance", "designation":"Trainee", "salary":"18500", "raise":"true"},' +
      '{"firstName":"Bill", "department":"HR", "designation":"Executive", "salary":"21200", "raise":"false"}' +
      ']}';

console.log(employees);
const obj = JSON.parse(employees);

console.log("Question 2");
let company = '{"company": [' + '{"companyName":"Tech Stars", "website":"www.techstars.site", "employees":' + employees + '}]}'; 

let obj2 = JSON.parse(company);
console.log(obj2);
console.log(obj2["company"][0]["employees"]);

console.log("Question 3");
let newEmployee = employees + '{"firstName":"Anna", "department":"Tech", "designation":"Executive", "salary":"25600", "raise":"false"}';

//console.log(newEmployee);   