let birthdateInput = document.querySelector("#birthdate-input");
let calculateBTn = document.querySelector("#calculate-btn");
let output = document.querySelector("#output");

const getAge = () =>{
    let birthdateVal = birthdateInput.value;
    if(birthdateVal === ""){
        alert("Enter a valid Date of Birth");
    }
    else{
        let age = calculateAge(birthdateVal);
        if(age>=0){
            output.innerText = `${age} ${age > 1 ? "Years" : "Year"}`;
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

    if( month < 0 || (month === 0 && currDate.getDate() < birthdate.getDate())){
        age--;
    }
    else if(age <0){
        age = "not defined";
    }
    return age;
}

calculateBTn.addEventListener("click",getAge);