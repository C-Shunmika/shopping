const file = require('fs');
const student = {"name":"jey","department":"ECE" , "Section" : "A","age":20} 
const jsonstr = JSON.stringify(student);
console.log(jsonstr);
const jsonstring = '{"name":"jey","department":"ECE" , "Section" : "A","age":20}'
console.log(jsonstring);
const studentjsonarray = [{"name":"jey","department":"ECE" , "Section" : "A","age":20},
{"name":"jey1","department":"ECE" , "Section" : "A","age":30} ]
console.log(studentjsonarray);
console.log(JSON.stringify(studentjsonarray));
const studentfromfile = file.readFileSync('student.json');
const stfromfilestring = JSON.parse(studentfromfile);
console.log(stfromfilestring);