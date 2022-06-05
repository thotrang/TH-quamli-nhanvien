import{Employee} from './employee'
import{Gender} from './employee'
let employeeList: Employee[] = [];

let x=new Employee("Nguyen Van A", Gender.MALE, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789")

let x2=new Employee("Tran Thi A", Gender.FEMALE, new Date("1991-10-12"), "btran@gmail.com", "0123456790")

let x3=new Employee("Huynh An Nhien", Gender.OTHER, new Date("1990-09-19"), "nhienhuynh@gmail.com", "0123456791")


employeeList.push(x);
employeeList.push(x2);
employeeList.push(x3);

for(let i=0;i<employeeList.length;i++){
    console.log(employeeList[i]);
    
}