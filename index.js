const dobInput = document.getElementById("dob");
//const calculateAge = document.getElementById("calculateAge");

function calculateAge() {
    const dobInput = document.getElementById("dob").value; //value gives the exact value of the date given in the input
    const currentDate = new Date(); //prints the currentdate and time

    const dobObject = new Date(dobInput);
    const ageDifference = currentDate - dobObject;
    console.log(dobObject);
    console.log(currentDate);
    console.log(Math.round( (ageDifference) / (1000 * 3600 * 24 * 365.25) ) );

    const age = Math.round( (ageDifference) / (1000 * 3600 * 24 * 365.25) );
    document.getElementById("output").innerHTML = "Your age is " + age + " year old";

    //return "Your age is " + age + "year old";
    // var year = currentDate.getFullYear();
    // var month = currentDate.getMonth() + 1;
    // var
    //  day = currentDate.getDate();

    // // Add leading zero if the day is less than 10
    // if (day < 10) {
    //     day = '0' + day;
    // } 

    // // Add leading zero if the month is less than 10
    // if (month < 10) {
    //     month = '0' + month;
    // } 

    // const formattedDate = year + '-' + month + '-' + day;

    // console.log(formattedDate);
    // const value = new Date(formattedDate - dobInput);
    // console.log(value);
    // const age = value.getFullYear();
    // console.log(age);
    // return age;
    
    
}

