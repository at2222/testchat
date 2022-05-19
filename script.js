function validareForm() {
    let form = document.forms.textAreaForm; 
    let insertText=form.textarea.value;
    if (!insertText) {
        return alert("Insert some text");
        
    }
    else if (insertText.length<5) {
        return alert("Too short text");
    }
    else if (6<insertText.length<=50) {
        return insertText;
    }
    else if (insertText.length>50) {
        return alert("Too long text");
    }
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

let btn = document.querySelector(".button");
btn.addEventListener("click", function () {
    let formText=validareForm();
    if (formText) {
        let insertText = createElement(formText);
        insertElement(insertText);
        document.getElementById("textarea").value = ""; 
    }
    else {
        document.getElementById("textarea").value = ""; 
    }
    
    
});