var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Defining a class - User -  types of its properties and methods
var User = /** @class */ (function () {
    //constructor function to assign values of its parameters - got from function call
    function User(id, name, birthDy, birthMth, birthYr, locality, city, district, state, country, pincode, profession, college, school, followers, mobile, email, imgSrc) {
        var _this = this;
        //getter function to get id
        this.getUserID = function () {
            return _this.id;
        };
        //setter function to set id
        this.setUserID = function (changedID) {
            _this.id = changedID;
        };
        //getterfunction to get name
        this.getUserName = function () {
            return _this.name;
        };
        //setter function to set name
        this.setUserName = function (changedName) {
            _this.name = changedName;
        };
        //getter function to get mobile number
        this.getMobileNumber = function () {
            return _this.mobileNumber;
        };
        //setter function to set mobile number
        this.setMobileNumber = function (changedMobile) {
            _this.mobileNumber = changedMobile;
        };
        //getter function to get email
        this.getEmail = function () {
            return _this.email;
        };
        //setter function to set email
        this.setEmail = function (changedEmail) {
            _this.email = changedEmail;
        };
        //class method  to display birthday message and calculate age on birthday
        this.displayBirthdayMessage = function () {
            var today = new Date();
            var day = today.getDate();
            var month = today.getMonth() + 1;
            var year = today.getFullYear();
            console.log("Day : " + day + "Month : " + month + "Year : " + year);
            if (day === _this.birthDay && month === _this.birthMonth) {
                console.log("Today is " + _this.name + "'s Birthday . Send him a message.");
                var age = year - _this.birthYear;
                console.log("He is " + age + " years now");
            }
        };
        //class method to show profile details and about info
        this.displayBasicInfo = function () {
            console.log("-----------------------------------------------------------------");
            console.log("----------" + _this.name + "  : Profile Info -------------------");
            console.log("---------------------Contact :" + _this.mobileNumber + "-------------------------");
            console.log("-----------------------------------------------------------------");
            console.log("DOB                  : " + _this.birthDay + "/" + _this.birthMonth + "/" + _this.birthYear);
            console.log("Profession           : " + _this.profession);
            console.log("Live in              : " + _this.addressCity + " - " + _this.addressCountry);
            console.log("College Education    : " + _this.college);
            console.log("School Education     : " + _this.school);
            console.log("Followers            : " + _this.followers);
            console.log("-----------------------------------------------------------------");
        };
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
    return User;
}());
//creating instance using new function and User class - amend  date argument as today date go get birthday message
var user1 = new User("user_1", "Ramesh Kumar Munjal", 16, 8, 1962, "Sector-6", "Bahadurgarh", "Jhajjar", "Haryana", "India", 124507, "Retired", "Vaish PG College Rohtak", "K D A V school Bahadurgarh", 125, 9467399172, "rkm@gmail.com", "images/user-1.jpg");
user1.displayBasicInfo(); //function call to show profile info
user1.displayBirthdayMessage(); //function call to show birthday message and age
console.log("-----------------------------------------------------------------");
console.log("User ID : " + user1.getUserID()); //getter to get ID
user1.setUserID("user_123");
console.log("User ID : " + user1.getUserID()); //getter to get ID
console.log("-----------------------------------------------------------------");
console.log("User Name : " + user1.getUserName()); //getter to get name
user1.setUserName("Ramesh Munjal"); //setter to set name
console.log("User Name : " + user1.getUserName()); //getter to get name
console.log("-----------------------------------------------------------------");
console.log("User Mobile Number  : " + user1.getMobileNumber()); //getter to get mobile number
user1.setMobileNumber(9999999999); //setter to set mobile number
console.log("User Mobile Number : " + user1.getMobileNumber()); //getter to get mobile number
console.log("-----------------------------------------------------------------");
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, birthDy, birthMth, birthYr, locality, city, district, state, country, pincode, profession, college, school, followers, mobile, email, imgSrc, job, role, salary) {
        var _this = _super.call(this, id, name, birthDy, birthMth, birthYr, locality, city, district, state, country, pincode, profession, college, school, followers, mobile, email, imgSrc) || this;
        _this.getEmployeeSalary = function () {
            return _this.salary;
        };
        _this.setEmployeeSalary = function (changedSalary) {
            _this.salary = changedSalary;
        };
        _this.showEmployeeDetails = function () {
            console.log("----------------------------------------------------------");
            console.log("----------------Employee Information----------------------");
            console.log("----------------------------------------------------------");
            console.log("Name   : " + _this.name);
            console.log("ID     : " + _this.id);
            console.log("Job    : " + _this.job);
            console.log("Role   : " + _this.role);
            console.log("Salary : " + _this.salary);
            console.log("Moblie : " + _this.mobileNumber);
            console.log("----------------------------------------------------------");
        };
        _this.job = job;
        _this.role = role;
        _this.salary = salary;
        return _this;
    }
    return Employee;
}(User));
console.log("-----------------------------------------------------------------");
//creating instance using Employee class    
var employee1 = new Employee("emp_1", "RKM", 12, 5, 1962, "Sector-6", "Bahadurgarh", "Jhajjar", "Haryana", "india", 124507, "Service", "RamJas College", "Model Public School", 124, 9369365933, "rm@gmail.com", "image-2.jpg", "Software Engineer", "Team Lead", 1200000);
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
