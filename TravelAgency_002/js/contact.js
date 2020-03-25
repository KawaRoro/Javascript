

const wrapper = document.getElementById('wrapper');
const titleH3 = document.getElementById('titleH3');

const name = document.getElementById('name'); // input
const nameL = document.getElementById('nameL'); // label
const email = document.getElementById('email'); // input
const emailL = document.getElementById('emailL'); // label
const formPC = document.getElementById('formPC'); // Paragraph
const formPR = document.getElementById('formPR'); // Paragraph
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

