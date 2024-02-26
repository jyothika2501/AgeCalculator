function calculateAge() {
    const dobInput = document.getElementById("dob").value; // .value gives the exact value of the date given in the input
    const dobObject = new Date(dobInput); //instance of date object

    const currentDate = new Date(); //prints the currentdate and time

    const ageDifference = currentDate - dobObject;

    const age = Math.round( (ageDifference) / (1000 * 3600 * 24 * 365.25) );
    document.getElementById("output").innerHTML = "Your age is " + age + " year old";
}

