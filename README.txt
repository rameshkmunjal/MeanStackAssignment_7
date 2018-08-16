Assignment Name - Typescript

##Problem Statement
	As a solution to this problem statement , you are suppposed to create Classes for 
	following scenarios , create the necessary properties , constructor and methods and then
	demonstrate the use of the class by creating an object of the same and printing
	messages in console of the website as output.

	1) Youtube Video Class - Go to youtube.com and look at a video page. Now, try and 
	create a class with properties (for example: video title) and methods (for example : 
	getNumberofViews) with proper types using typescript. Think of as many properties and 
	methods as you can imagine and write all of them.
	
	2)Social Profile Class - Go to facebook.com profile page, about section. Now try and 
	create a class with properties (like birthday) and methods (like getAge()) with proper 
	types using typescript. Think of as many properties and methods as you can imagine 
	and write all of them. 

## Synopsis
	Youtube Video Class -
	1) We have created a Class Video to show youtube video like properties and methods.
	2) Properties in this class include id, src, title, category, description, publisher, publishDate, likes, dislikes, views and subscriptions.
	3) While access to all properties has been made public only id has been termed as private.
	4) We have used getter and setter methods to access/change id .
	5) We have created three instances by using this class and showed their details after storing them in an array.
	6) We have used methods to count likes/dislikes/subcriptions, share URL of video, showRelatedVideos with a purpose to make search.	
	
	Social Profile Class -
	1) We have created a Class User while  keeping in view a facebook user .
	2) Properties in this class include id, name, address(locality, city, state, country, pincode), mobileNumber, email, education(school, college), imageSrc.
	3) While access to all properties has been made public except  id , name , mobileNumber and email termed as protected.
	4) We have used getter and setter methods to access/change  - id / name / mobileNumber / email.
	5) Using User class as parent we have created a derived class - Employee since they also share same properties.	
	6) We have given Employee class some its own distinct properties like job, role, salary. salary has been termed a private property.
	7) We have used a getter setter to access/change salary.
	8) We have used methods to show user details and employee details and displayBirthdayMessage.
	
	
## Technical Specifications

	Technologies used in this project are - HTML, Typescript and Javascript.   

## Installation

    	Complete code has been uploaded to my github page and address is :
 
		https://github.com/rameshkmunjal/MeanStackAssignment_7

## Contributors

    1. Ramesh Kumar Munjal
