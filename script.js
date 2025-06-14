let birthdateInput = document.querySelector("#birthdate-input");
let calculateBTn = document.querySelector("#calculate-btn");
let output = document.querySelector("#output");

const getAge = () =>{
    let birthdateVal = birthdateInput.value;
    let age = calculateAge(birthdateVal);
    let currDate = new Date();
    let birthdate = new Date(birthdateVal);
    let month = currDate.getMonth() - birthdate.getMonth();
    let date = currDate.getDate() - birthdate.getDate();

    if(birthdateVal === ""){
        alert("Enter a valid Date of Birth");
        output.innerText = `-- Years`;
    }
    else if(age<0){
        output.innerText = `not defined`;
    }
    else{
        // let age = calculateAge(birthdateVal);
        // let currDate = new Date();
        // let birthdate = new Date(birthdateVal);
        // let month = currDate.getMonth() - birthdate.getMonth();
        // let date = currDate.getDate() - birthdate.getDate();
        if(age>=1){
            output.innerText = `${age} ${age > 1 ? "Years" : "Year"}`;
        }
        else if(age>=0 && age<1){
            if(month<1){
                output.innerText = `${date} ${date > 1 ? "Days" : "Day"}`;
            }
            else if(month>=1){
            output.innerText = `${month} ${month > 1 ? "Months" : "Month"}`;
            }
        }
        else{
            output.innerText = `${age}`;
        }
   }
};

const calculateAge = (birthdateVal) =>{
    let currDate = new Date();
    let birthdate = new Date(birthdateVal);
    let age = currDate.getFullYear() - birthdate.getFullYear();
    let month = currDate.getMonth() - birthdate.getMonth();
    let date = currDate.getDate() - birthdate.getDate();

    if( month < 0 || (month === 0 && date<0)){
        age--;
    }
    else if(age <0){
        age = "not defined";
    }
    return age;
}

calculateBTn.addEventListener("click",getAge);