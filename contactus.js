function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display='flex';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display='none';
}

//FORM SECTION
let formData={
    firstName:"",
    lastName:"",
    email:"",
    mobileNumber:"",
    comments:""
}
let submitStatusMsgEl = document.getElementById("submitStatusMsg");


let firstNameEl =  document.getElementById("firstName");
let firstNameErrorMsgEl = document.getElementById("firstNameErrorMsg");
firstNameEl.addEventListener("blur",function(event){
    //console.log("blur event triggered")
    if(event.target.value===""){
        firstNameErrorMsgEl.textContent = "Required";
        firstNameErrorMsgEl.style.color = 'Red';
        firstNameErrorMsgEl.style.fontWeight = 'Bold'
    }else{
        firstNameErrorMsgEl.textContent = '';
    }
    formData.firstName = event.target.value;
    //console.log(formData.firstName)
})

let lastNameEl =  document.getElementById("lastName");
let lastNameErrorMsgEl = document.getElementById("lastNameErrorMsg");
lastNameEl.addEventListener("blur",function(event){
    //console.log("blur event triggered")
    if(event.target.value===""){
        lastNameErrorMsgEl.textContent = "Required*";
        lastNameErrorMsgEl.style.color = 'Red';
        lastNameErrorMsgEl.style.fontWeight = 'Bold'
    }
    else{
        lastNameErrorMsgEl.textContent = "";
    }
    formData.lastName = event.target.value;
    //console.log(formData.lastName)
})

let emailEl =  document.getElementById("email");
let emailErrorMsgEl = document.getElementById("emailErrorMsg");
emailEl.addEventListener("blur",function(event){
    //console.log("blur event triggered")
    if(event.target.value===""){
        emailErrorMsgEl.textContent = "Required*";
        emailErrorMsgEl.style.color = 'Red';
        emailErrorMsgEl.style.fontWeight = 'Bold'
    }
    else{
        emailErrorMsgEl.textContent = "";
    }
    formData.email = event.target.value;
    //console.log(formData.email)
})

let mobileNumberEl =  document.getElementById("mobileNumber");
let mobileNumberErrorMsgEl = document.getElementById("mobileNumberErrorMsg");
mobileNumberEl.addEventListener("blur",function(event){
    //console.log("blur event triggered")
    if(event.target.value===""){
        mobileNumberErrorMsgEl.textContent = "Required*";
        mobileNumberErrorMsgEl.style.color = 'Red';
        mobileNumberErrorMsgEl.style.fontWeight = 'Bold'
    }
    else{
        mobileNumberErrorMsgEl.textContent = "";
    }
    formData.mobileNumber = event.target.value;
    //console.log(formData.mobileNumber)
})

let commentsEl =  document.getElementById("comments");
let commentsErrorMsgEl = document.getElementById("commentsErrorMsg");
commentsEl.addEventListener("blur",function(event){
    //console.log("blur event triggered")
    if(event.target.value===""){
        commentsErrorMsgEl.textContent = "Required*";
        commentsErrorMsgEl.style.color = 'Red';
        commentsErrorMsgEl.style.fontWeight = 'Bold'
    }
    else{
        commentsErrorMsgEl.textContent = "";
    }
    formData.comments = event.target.value;
    //console.log(formData.comments)
})


function validateFormData(formData) {
    let {firstName, lastName, email, mobileNumber, comments} = formData;
    if (firstName === "") {
      firstNameErrorMsgEl.textContent = "Required*";
    }
    if (lastName === "") {
        lastNameErrorMsgEl.textContent = "Required*";
    } 
    if (email === ""){
        emailErrorMsgEl.textContent = "Required*";
    }
    if (mobileNumber === ""){
        mobileNumberErrorMsgEl.textContent = "Required*";
    }
    if (comments === ""){
        commentsErrorMsgEl.textContent = "Required*";
    }
  }



let checkboxEl = document.getElementById('checkbox');
let checkboxErrorMsgEl = document.getElementById("checkboxErrorMsg");

function submitFormData(){
    if(checkboxEl.checked===true){
        let options={
            method:'POST',
            headers:{
                'Content-Type':'Application/json',
                Accept:'Application/json',
            },
            body:JSON.stringify(formData)
        }
        let url = 'http://localhost:3000/contactus';
        fetch(url,options)
    
        .then(function(response){
            return response.json()
        })
        .then(function(jsonData){
            console.log(jsonData);
        })
    }
    else{
        checkboxErrorMsgEl.textContent = 'Tick the Checkbox and Other Feilds before Submitting';
        checkboxErrorMsgEl.style.color="Red"
    }
}

let contactUsFormEl = document.getElementById("contactUsForm");
contactUsFormEl.addEventListener('submit',function(event){
    event.preventDefault()
    //console.log('Defalut Prevented')
    validateFormData(formData)
    submitFormData(formData)
})