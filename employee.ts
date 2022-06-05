export enum Gender{MALE,FEMALE,OTHER}

export class Employee{
    name:string;
    gender:Gender=Gender.OTHER;
    birthday:Date;
    email:string;
    numberPhone:string;
    constructor(_fullname: string, _gender: Gender, _birthday: Date, _email: string, _phoneNumber: string) {

        this.name = _fullname;
     
        this.gender = _gender;
      
        this.birthday = _birthday;
    
        this.email = _email;
    
        this.numberPhone = _phoneNumber;
      }
    
    
    }

