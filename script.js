let answer = ['Dynamo', 'ManCity', 'ManUntd', 'Arsenal', 'Aston villa', 'Liverpool', 'Everton', 'Newcastle', 'Chelsea', 'West ham'];

function validareForm() {
    let form = document.forms.textAreaForm; 
    let insertText=form.textarea.value;
    if (!insertText) {
        return alert("Insert some text, min 5 characters");
    }
    else if (insertText.length<5) {
        return alert("Too short text, min 5 characters");
    }
    else if (6<insertText.length<=50) {
        return insertText;
    }
    else if (insertText.length>50) {
        return alert("Too long text, max 50 characters");
    }
}

function createBotElement() {
    let comment = document.querySelector(".left-block");
    let deepCopy = comment.cloneNode(true);  
    let innerText=deepCopy.querySelector(".left-text");
    let rand = Math.floor(Math.random()*answer.length);
    let text=answer[rand];
    innerText.textContent=text;
    return deepCopy;
}

function insertBotElement() {
    let avatars = document.querySelector(".avatars"); 
    botAnswer=createBotElement();
    return avatars.appendChild(botAnswer);
}

function createElement(text) {
    let comment = document.querySelector(".right-block");
    let deepCopy = comment.cloneNode(true);  
    let innerText=deepCopy.querySelector(".right-text");
    innerText.textContent=text;
    return deepCopy;
}
           
function insertElement(insertText) {
    let avatars = document.querySelector(".avatars"); 
    return avatars.appendChild(insertText);
}

function botAnswer() {
    createBotElement();
    insertBotElement();
}

document.querySelector(".button").addEventListener("click", function () {
    let formText=validareForm();
    if (formText) {
        let insertText = createElement(formText);
        insertElement(insertText);
        setTimeout(botAnswer, 2000);
        document.getElementById("textarea").value = "";
    }
    else {
        document.getElementById("textarea").value = ""; 
    }
});