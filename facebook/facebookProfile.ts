//Defining a class - User -  types of its properties and methods
class User {
    protected id : string;    
    protected name:string;   
    public birthDay:number;
    public birthMonth:number; 
    public birthYear:number;    
    public addressLocality:string;
    public addressCity:string;
    public addressDistrict:string;
    public addressState:string;
    public addressCountry:string;
    public addressPincode:number;

    public profession:string;
    public college:string;
    public school:string;
    public followers: number;
    protected mobileNumber:number;
    protected email:string;
    public userImageSrc: string; 
    //getter function to get id
    getUserID=()=>{        
        return this.id;
    }
    //setter function to set id
    setUserID=(changedID:string)=>{
        this.id = changedID;
    }
    //getterfunction to get name
    getUserName=()=>{
        return this.name;
    }
    //setter function to set name
    setUserName=(changedName:string)=>{
        this.name = changedName;
    }
    //getter function to get mobile number
    getMobileNumber=()=>{        
        return this.mobileNumber;
    }
    //setter function to set mobile number
    setMobileNumber =(changedMobile:number)=>{
        this.mobileNumber = changedMobile;
    }
    //getter function to get email
    getEmail=()=>{        
        return this.email;
    }
    //setter function to set email
    setEmail =(changedEmail:string)=>{
        this.email = changedEmail;
    }
    //class method  to display birthday message and calculate age on birthday
    displayBirthdayMessage=()=>{
        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth()+1;
        let year = today.getFullYear();
        console.log( "Day : " + day + "Month : "+ month +"Year : "+ year);

        if(day=== this.birthDay && month=== this.birthMonth){
            console.log("Today is "+ this.name +"'s Birthday . Send him a message." );
            let age = year - this.birthYear;
            console.log("He is "+age + " years now");
        }
    }
    //class method to show profile details and about info
    displayBasicInfo=()=>{
        console.log("-----------------------------------------------------------------");
        console.log("----------"+ this.name +"  : Profile Info -------------------");
        console.log("---------------------Contact :" + this.mobileNumber+"-------------------------");
        console.log("-----------------------------------------------------------------");
        console.log("DOB                  : "+ this.birthDay +"/"+this.birthMonth +"/"+ this.birthYear );        
        console.log("Profession           : "+ this.profession);        
        console.log("Live in              : "+ this.addressCity +" - "+ this.addressCountry);                
        console.log("College Education    : "+ this.college);
        console.log("School Education     : "+ this.school);        
        console.log("Followers            : "+ this.followers);
        console.log("-----------------------------------------------------------------");
    }

    //constructor function to assign values of its parameters - got from function call
    constructor (id:string, name:string, birthDy:number, birthMth:number, birthYr:number, locality:string, city:string, district:string , state:string, country:string, pincode:number, profession:string, college:string, school:string, followers:number, mobile:number, email:string, imgSrc:string ){
        this.id = id;
        this.name = name;
        this.birthDay = birthDy;
        this.birthMonth = birthMth;
        this.birthYear = birthYr;
        this.addressLocality = locality;
        this.addressCity = city;
        this.addressDistrict = district;
        this.addressState = state;
        this.addressCountry = country;
        this.addressPincode = pincode;

        this.profession = profession;
        this.college = college;
        this.school = school;
        this.followers = followers;
        this.mobileNumber = mobile;
        this.email = email;
        this.userImageSrc = imgSrc;
    }
} 
    
//creating instance using new function and User class - amend  date argument as today date go get birthday message
let user1 = new User("user_1", "Ramesh Kumar Munjal", 16, 8, 1962, "Sector-6", "Bahadurgarh", "Jhajjar", "Haryana", "India", 124507,  "Retired", "Vaish PG College Rohtak", "K D A V school Bahadurgarh", 125, 9467399172, "rkm@gmail.com",  "images/user-1.jpg");
user1.displayBasicInfo(); //function call to show profile info
user1.displayBirthdayMessage(); //function call to show birthday message and age

console.log("-----------------------------------------------------------------");
console.log("User ID : " + user1.getUserID()); //getter to get ID
user1.setUserID("user_123");
console.log("User ID : " + user1.getUserID()); //getter to get ID
console.log("-----------------------------------------------------------------");
console.log("User Name : "+ user1.getUserName()); //getter to get name
user1.setUserName("Ramesh Munjal"); //setter to set name
console.log("User Name : "+ user1.getUserName()); //getter to get name
console.log("-----------------------------------------------------------------");
console.log("User Mobile Number  : " + user1.getMobileNumber()); //getter to get mobile number
user1.setMobileNumber(9999999999); //setter to set mobile number
console.log("User Mobile Number : " + user1.getMobileNumber()); //getter to get mobile number
console.log("-----------------------------------------------------------------");

class Employee extends User {
    public job:string;
    public role:string;
    private salary:number;
    //getter method to get salary
    getEmployeeSalary=()=>{
        return this.salary;
    }
    //setter method to change salary
    setEmployeeSalary=(changedSalary:number)=>{
        this.salary = changedSalary;
    }
    //method to show employee details
    showEmployeeDetails=()=>{
        console.log("----------------------------------------------------------");
        console.log("----------------Employee Information----------------------");
        console.log("----------------------------------------------------------");
        console.log("Name   : "+ this.name);
        console.log("ID     : " + this.id);
        console.log("Job    : "+ this.job);
        console.log("Role   : "+ this.role);
        console.log("Salary : "+ this.salary);
        console.log("Moblie : "+ this.mobileNumber);
        console.log("----------------------------------------------------------");
    }
    //constructor function to getting values from its parameters and used to create an instance
    constructor (id:string, name:string, birthDy:number, birthMth:number, birthYr:number, locality:string, city:string, district:string , state:string, country:string, pincode:number, profession:string, college:string, school:string, followers:number, mobile:number, email:string, imgSrc:string, job:string, role:string, salary:number ){
        super( id, name, birthDy, birthMth, birthYr, locality, city, district, state, country, pincode, profession, college, school, followers, mobile, email, imgSrc );
        this.job=job;
        this.role = role;    
        this.salary= salary;
    }        
}
console.log("-----------------------------------------------------------------");
//creating instance using Employee class    
let employee1 = new Employee("emp_1", "RKM", 12, 5, 1962, "Sector-6", "Bahadurgarh", "Jhajjar", "Haryana", "india", 124507, "Service", "RamJas College", "Model Public School", 124, 9369365933, "rm@gmail.com", "image-2.jpg", "Software Engineer", "Team Lead", 1200000 );
console.log(employee1); //printing employee instance details
employee1.showEmployeeDetails(); //showing employee details

//using getter and setter - setting employee salary
console.log(employee1.getEmployeeSalary());
employee1.setEmployeeSalary(1500000);
console.log(employee1.getEmployeeSalary());
console.log("----------------------------------------------------------");
//using getter and setter - setting employee email
console.log(employee1.getEmail());
employee1.setEmail("rkm_123@gmail.com");
console.log(employee1.getEmail());
console.log("----------------------------------------------------------");