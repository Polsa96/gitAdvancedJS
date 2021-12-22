// 2.1 Insert dynamically in a html an empty div with javascript.
// 2.2 Insert dynamically in a html a div containing a p with javascript.
// 2.3 Insert dynamically in a html a div containing 6 p's using a loop with javascript.
// 2.4 Insert dynamically with javascript in a html a p with the text 'I am dynamic!'.
// 2.5 Insert in the h2 with the class .fn-insert-here the text 'Wubba Lubba dub dub'.
// 2.6 Based on the following array create a list ul > li with the array texts. const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
// 2.7 Remove all nodes that have the class .fn-remove-me.
// 2.8 Insert a p with the text "I'm going in the middle!" between the two divs. Remember that you can not only insert elements with .appendChild.
// 2.9 Insert p with the text "I'm going inside!", inside all divs with the class .fn-insert-here


// 2.1 Insert dynamically in a html an empty div with javascript.
let newDiv1$$ = document.createElement(`div`);
newDiv1$$.textContent=`Aquest text l'he creat jo, es troba dins d'un <div> jejejej`;  
document.body.appendChild(newDiv1$$);

// 2.2 Insert dynamically in a html a div containing a p with javascript.
let newDiv2$$ = document.createElement(`div`);
let newP2$$ = document.createElement(`p`);
newP2$$.textContent=`He creat un nou text dins d'una <p>`;
newDiv2$$.appendChild(newP2$$);
document.body.appendChild(newDiv2$$);

// 2.3 Insert dynamically in a html a div containing 6 p's using a loop with javascript.
let newDiv3$$ = document.createElement(`div`);

for(let i=0;i<6;i++){
    let newP3$$ = document.createElement(`p`);
    newP3$$.textContent=`Exercit de 6 Ps`;
    newDiv3$$.appendChild(newP3$$);
}

document.body.appendChild(newDiv3$$);

// 2.4 Insert dynamically with javascript in a html a p with the text 'I am dynamic!'.
let newP4$$ = document.createElement(`p`);
newP4$$.textContent=`I am dynamic!`;
document.body.appendChild(newP4$$);

// 2.5 Insert in the h2 with the class .fn-insert-here the text 'Wubba Lubba dub dub'.
let showH2$$ = document.querySelector(`.fn-insert-here`);
showH2$$.textContent=`Wubba Lubba dub dub`;

// 2.6 Based on the following array create a list ul > li with the array texts. 
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let newUl$$= document.createElement(`ul`);
for(let i=0;i<apps.length;i++){
    let newLi$$=document.createElement(`li`);
    newLi$$.textContent=apps[i];
    newUl$$.appendChild(newLi$$);
}
document.body.appendChild(newUl$$);

// 2.7 Remove all nodes that have the class .fn-remove-me.
let showRemove$$ = document.querySelectorAll('.fn-remove-me');

for(let i=0;i<showRemove$$.length;i++){
    showRemove$$[i].remove();
}

// 2.8 Insert a p with the text "I'm going in the middle!" between the two divs. Remember that you can not only insert elements with .appendChild.

let showDiv8$$=document.querySelectorAll(`div`)[1];
let newP8$$=document.createElement(`p`);
newP8$$.textContent=`I'm going in the middle!`;
document.body.insertBefore(newP8$$,showDiv8$$);

// 2.9 Insert p with the text "I'm going inside!", inside all divs with the class .fn-insert-here
let showDiv9$$=document.querySelectorAll(`.fn-insert-here`);
for(let i=0;i<showDiv9$$.length;i++){
    let newP9$$=document.createElement(`p`);
    newP9$$.textContent=`I'm going inside!`;
    showDiv9$$[i].appendChild(newP9$$);
}


