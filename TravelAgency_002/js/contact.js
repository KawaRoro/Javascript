
let contact = document.getElementById('contact');

//alert(contact.children[0]);

let h3 = document.getElementsByTagName('h3');
h3[0].setAttribute("id", "titleH3");

var elements = document.getElementsByTagName("form");
elements[0].setAttribute("action", "#contact");

var elements = document.getElementsByTagName("input");
for (let i = 0; i < elements.length; i++) {
    if(i == 0){
        elements[i].setAttribute("id", "name");
    }
    if(i == 1){
        elements[i].setAttribute("id", "email");
    }
    if(i == 2){
        elements[i].setAttribute("id", "button-3");
    }
}

var elements = document.getElementsByTagName("label");
for (let i = 0; i < elements.length; i++) {
    if(i == 0){
        elements[i].setAttribute("id", "nameL");
    }
    if(i == 1){
        elements[i].setAttribute("id", "emailL");
    }
}

//'<p align="center" id="formPC"></p><p align="right" id="formPR"><small><span style="color:red">*</span>Champs obligatoires</small></p>';
let para = document.createElement("p");
para.setAttribute("id", "formPC");
//let node = document.createTextNode("");
contact.appendChild(para);

let para2 = document.createElement("p");
para2.setAttribute("id", "formPR");
//let small = document.createElement("small");
//let span = document.createElement("span");
//span.setAttribute("style", "color:red");
//span.style.color = "red";
//let node = document.createTextNode('*Champs obligatoires');
//contact.appendChild(node);
contact.appendChild(para2);
//small.appendChild(span);
//para2.appendChild(small);


//const wrapper = document.getElementById('wrapper');
const titleH3 = document.getElementById('titleH3');

const name = document.getElementById('name'); // input
const nameL = document.getElementById('nameL'); // label
nameL.innerHTML = 'Nom<span style="color:red">*</span>';
const email = document.getElementById('email'); // input
const emailL = document.getElementById('emailL'); // label
emailL.innerHTML = 'Email<span style="color:red">*</span>';
const formPC = document.getElementById('formPC'); // Paragraph
const formPR = document.getElementById('formPR'); // Paragraph
formPR.innerHTML = '<small><span style="color:red">*</span>Champs obligatoires</small></p>';
const buttonContact = document.getElementById('button-3'); // button 

buttonContact.style.visibility = "hidden"; // visible 

let disableAlertForm = true;
//buttonContact.disable = true;

function checkText(inputText)
{
    // validation fails
    if(inputText.value == "") {
        if(!disableAlertForm){
            alert('Le champ "Nom" est vide');
        }
      inputText.focus();
      return false;
    }

    // validation success
    return true;
}

function checkEmail(inputText)
{
    // Solution 1
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    // Solution 2
    //if(inputText.value.search("@")) // not finish
    {
        email.focus();
        return true;
    }else{
        if(!disableAlertForm){
            alert("Veuillez entrer une adresse email valide.");
        }
        email.focus();
        return false;
    }
}

function checkForm()
{
    if(checkText(name) == true){
        if(checkEmail(email) == true){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

name.addEventListener('change', function (event) {
    if( (checkText(name) == true) && (checkEmail(email) == true) ){
        buttonContact.style.visibility = "visible";
    }else{
        buttonContact.style.visibility = "hidden";
    }
});

email.addEventListener('change', function (event) {
    if( (checkText(name) == true) && (checkEmail(email) == true) ){
        buttonContact.style.visibility = "visible";
    }else{
        buttonContact.style.visibility = "hidden";
    }
});

email.addEventListener('keyup', function (event) {
    if( (checkText(name) == true) && (checkEmail(email) == true) ){
        buttonContact.style.visibility = "visible";
    }else{
        buttonContact.style.visibility = "hidden";
    }
});

buttonContact.addEventListener('click', function (event) {
    disableAlertForm = false;
    if(checkForm()){
        //wrapper.style.display = "none";
        titleH3.innerHTML = "Déjà Contacté";
        titleH3.style.background = "red";
        name.style.display = "none";
        nameL.style.display = "none";
        email.style.display = "none";
        emailL.style.display = "none";
        formPR.style.display = "none";
        formPC.style.color = "#ff7a00";
        formPC.innerHTML = "Votre demande à été prise en compte.<br> Vous serez contacté ces prochains jours.";
        buttonContact.style.display = "none";
        //buttonContact.submit();
    }
});

