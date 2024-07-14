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
        firstNameErrorMsgEl.style.color = 'Red';
        firstNameErrorMsgEl.style.fontWeight = 'Bold';
    }
    if (lastName === "") {
        lastNameErrorMsgEl.textContent = "Required*";
        lastNameErrorMsgEl.style.color = 'Red';
        lastNameErrorMsgEl.style.fontWeight = 'Bold';
    } 
    if (email === ""){
        emailErrorMsgEl.textContent = "Required*";
        emailErrorMsgEl.style.color = 'Red';
        emailErrorMsgEl.style.fontWeight = 'Bold';
    }
    if (mobileNumber === ""){
        mobileNumberErrorMsgEl.textContent = "Required*";
        mobileNumberErrorMsgEl.style.color = 'Red';
        mobileNumberErrorMsgEl.style.fontWeight = 'Bold';
    }
    if (comments === ""){
        commentsErrorMsgEl.textContent = "Required*";
        commentsErrorMsgEl.style.color = 'Red';
        commentsErrorMsgEl.style.fontWeight = 'Bold';
    }
  }


function submitFormData(){
    let checkboxEl = document.getElementById('checkBox_id');
    let checkboxErrorMsgEl = document.getElementById("checkboxErrorMsg");
    if(checkboxEl.checked===true){
        let options={
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body:JSON.stringify(formData)
        };
        let url = "http://localhost:3000/contactus";
        fetch(url,options)
        .then(function(response){
            return response.json()
        })
        .then(function(jsonData){
            console.log(jsonData);
        })

    }else{
        checkboxErrorMsgEl.textContent="Tick the Checkbox to submit the data";
        checkboxErrorMsgEl.style.color = 'Red';
        checkboxErrorMsgEl.style.fontWeight='bold';
    }
}


let contactUsFormEl = document.getElementById("contactUsForm");
contactUsFormEl.addEventListener('submit',function(event){
    event.preventDefault()
    //console.log('Defalut Prevented')
    validateFormData(formData)
    submitFormData(formData)
})


//LOCATIONS
let northAmericaEl = document.getElementById('northAmerica');
let americaOfficesEl = document.getElementById('americaOffices');

let europeEl = document.getElementById('europe');
let europeOfficesEl = document.getElementById('europeOffices');

let asiaEl = document.getElementById('asia');
let asiaOfficesEl = document.getElementById('asiaOffices');

let middleEastEl = document.getElementById('middleEast');
let middleEastOfficesEl = document.getElementById('middleEastOffices');

europeEl.addEventListener('click',function(){
    if(europeOfficesEl.hasAttribute('hidden')){
        europeOfficesEl.removeAttribute('hidden');
        europeEl.classList.add('location-img-card');
        
    }

    if(!americaOfficesEl.hasAttribute('hidden')){
        americaOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        northAmericaEl.classList.remove('location-img-card')
    }

    if(!asiaOfficesEl.hasAttribute('hidden')){
        asiaOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        asiaEl.classList.remove('location-img-card')
    }

    if(!middleEastOfficesEl.hasAttribute('hidden')){
        middleEastOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        middleEastEl.classList.remove('location-img-card')
    }

})



asiaEl.addEventListener('click',function(){
    if(asiaOfficesEl.hasAttribute('hidden')){
        asiaOfficesEl.removeAttribute('hidden')
        asiaEl.classList.add('location-img-card')
    }

    if(!americaOfficesEl.hasAttribute('hidden')){
        americaOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        northAmericaEl.classList.remove('location-img-card')
    }

    if(!europeOfficesEl.hasAttribute('hidden')){
        europeOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        europeEl.classList.remove('location-img-card')
    }

    if(!middleEastOfficesEl.hasAttribute('hidden')){
        middleEastOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        middleEastEl.classList.remove('location-img-card')
    }
})

middleEastEl.addEventListener('click',function(){
    if(middleEastOfficesEl.hasAttribute('hidden')){
        middleEastOfficesEl.removeAttribute('hidden')
        middleEastEl.classList.add('location-img-card')
    }

    if(!americaOfficesEl.hasAttribute('hidden')){
        americaOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        northAmericaEl.classList.remove('location-img-card')
    }

    if(!europeOfficesEl.hasAttribute('hidden')){
        europeOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        europeEl.classList.remove('location-img-card')
    }

    if(!asiaOfficesEl.hasAttribute('hidden')){
        asiaOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        asiaEl.classList.remove('location-img-card')
    }
})

northAmericaEl.addEventListener('click',function(){
    if(americaOfficesEl.hasAttribute('hidden')){
        americaOfficesEl.removeAttribute('hidden')
        northAmericaEl.classList.add('location-img-card')
    }

    if(!middleEastOfficesEl.hasAttribute('hidden')){
        middleEastOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        middleEastEl.classList.remove('location-img-card')
    }

    if(!europeOfficesEl.hasAttribute('hidden')){
        europeOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        europeEl.classList.remove('location-img-card')
    }

    if(!asiaOfficesEl.hasAttribute('hidden')){
        asiaOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        asiaEl.classList.remove('location-img-card')
    }
})