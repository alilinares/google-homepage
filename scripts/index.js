let results = document.getElementById('results');
let resultContainer = document.getElementById('result-container');
let input = document.getElementById('google-search');
let inputContainer = document.querySelector('.input-container');
let mainSection = document.getElementById('main-section');
let randomSearches = [
'how to create a list',
'how to use the dom',
'how to be a good programmer',
'python',
'javascript',
'what is node.js?',
'java vs javascript',
'what is the difference between var, let and const?',
"Why do we separate HTML and CSS?",
"What are classes and IDs?",
"What are elements?",
"What are tags?",
"What are attributes?",
"What are forms?",
"What is a div?",
"What are selectors?",
"What are properties?",
"What are values?",
"What is the “query string” in a URL and what does it do?",
"What is the difference between “pixels” and “ems”?",
"How do CSS styles for a particular element get inherited?",
"css grid",
"css flexbox",
"javascript dom",
"javascript prototypes",
"how to be a good programmer",
"stackoverflow",
"the odin project",
"freecodecamp",
"mdn",
"What is the “default stylesheet” or “user agent stylesheet”?",
"Why use a CSS reset file?",
"why is googling google dangerous?"];

for(let i = 0; i <= 5;i++){
    let div = createDiv();   
    let p = createPara();
    let xIcon = createX();
    insertSearches(randomSearches,p);
    appendNodes(div,p); //appending p to div
    appendNodes(div,xIcon) //append xIcon to div
    appendNodes(results,div);//append div to results
    div.addEventListener('mouseover',(e)=>{
        xIcon.style.display ='block';
        e.stopPropagation();
    });
    div.addEventListener('mouseout',(e)=>{
        xIcon.style.display ='none';
        e.stopPropagation();
    });
    xIcon.addEventListener('click',(e)=>{
        div.remove();
        e.stopPropagation();
    });  
}


input.addEventListener('click',(e)=>{
    if(results.children.length > 0){
        results.style.display = "block";
        resultContainer.style.display = "block";
        insertStyles();
    }
    e.stopPropagation();
});





mainSection.addEventListener('click',(e)=>{
    resetStyles();
    e.stopPropagation();
});


function insertStyles(){
    //container that contains form
    inputContainer.style.border = '1px solid hsl(192, 7%, 90%)';
    inputContainer.style.borderRadius = '25px';
    inputContainer.style.boxShadow = '0 0 5px rgb(213, 213, 216)';
    //input field 
    input.style.border = 'none';
    input.style.boxShadow = 'none';
}

function resetStyles(){
    results.style.display = "";
    input.removeAttribute('style');
    inputContainer.removeAttribute('style');
}

function createDiv(){
    let div = document.createElement('div');
    div.setAttribute('id','result-para');
    return div;
}

function createPara(){
    let p = document.createElement('p');
    p.setAttribute('class','list-item');
    return p;
}

function insertSearches(arr,p){
    p.textContent = chooseRandomText(arr);
}

function appendNodes(parentNode,childNode){
    parentNode.appendChild(childNode);
}

function createX(){
    let xIcon = document.createElement('i');
    xIcon.setAttribute('class','fas fa-times');
    xIcon.setAttribute('id','x-icon');
    return xIcon;
}


function chooseRandomText(arr){
    let randomPhrase = Math.floor(Math.random() * arr.length); 
    return arr[randomPhrase];
}

function remove(parentNode,childNode){
    
}
