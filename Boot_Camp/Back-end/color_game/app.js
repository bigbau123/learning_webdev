// Variables
let correct_square = [];
let difficulty = 6;
var times = 0;
var time = 5;
var x = [];
var k = new Boolean;

// Initialization
newColors(6);

/*****  Events  *******/
// NEW COLORS
let tag = document.querySelector('#reset');
tag.addEventListener('click', function(){
    newColors(difficulty)
});
tag.addEventListener('mouseenter', function(){
    this.classList.add('btn-bg-change');
});
tag.addEventListener('mouseleave', function(){
    this.classList.remove('btn-bg-change');
});

// EASY and HARD
tag = document.getElementsByClassName('mode');
for (let i=0;i<2;i++){
    tag[i].addEventListener('click', function(){
        click_btn(tag,i);
    });
    tag[i].addEventListener('mouseenter', function(){
        toggle_btn(this);
    });
    tag[i].addEventListener('mouseleave', function(){
        toggle_btn(this);
    });
}

let tag_1 = document.getElementsByClassName('square');
let tag_text = document.querySelector('#message');
for (let i=0;i<difficulty;i++){
    tag_1[i].addEventListener('click', function(){
        if (!this.classList.value.includes('square-true')){
            this.style.backgroundColor = 'transparent';
            tag_text.textContent = 'Try Again'
            times = 0;
            if (k)
                time = 5;
            x = setInterval(function() { me(tag_text)},100);
            k=true;
            // if (tag_text.backgroundColor === 'red')
            //     tag_text.backgroundColor = 'white';
        }

        
    });
}

/********** FUNCTIONS **********/
function randomColor(){
    return [Math.round(Math.random()*256),Math.round(Math.random()*256),Math.round(Math.random()*256)];
}

function newColors(nmbr){
    let tag = document.querySelector('square-true');
    if (tag !== null)
        tag.classList.remove('square-true');
    let colors = new Array;
    for (let i=0;i<nmbr;i++)
        colors[i] = randomColor();
    
    // Define the 'right' square and the respective color
    tag = document.getElementsByClassName('square');
    let rand = Math.round(Math.random()*(nmbr-1));
    tag[rand].classList.add('square-true');
    correct_square = rand;
   
    
    // Define colors
    for (let i=0;i<nmbr;i++) 
        tag[i].style.backgroundColor = 'rgb(' + colors[i][0] + ',' + colors[i][1] + ',' + colors[i][2] + ')';
    
    // Update RGB title
    tag = document.querySelector('#RGB');
    tag.textContent = '(' + colors[correct_square][0] + ',' + colors[correct_square][1] + ',' + colors[correct_square][2] + ')';

    tag = document.querySelector('#message');
    tag.textContent = '';
}

function click_btn(btn,index) {
    if (btn[index].classList.value.includes('btn-active'))
        return;
    else{
        btn[index].classList.add('btn-active');
        btn[1-index].classList.remove('btn-active');

        change_difficulty(index);
        

        btn[index].classList.remove('btn-bg-change');
    }
}

function toggle_btn(btn) {
    if (btn.classList.value.includes('btn-active'))
        return;
    btn.classList.toggle('btn-bg-change');
}

function change_difficulty (idx) {
    let tag = document.getElementsByClassName('square');
    for (let i=3;i<6;i++){
        tag[i].classList.toggle('square-hide');
    }
    newColors(difficulty);
}

function me(t) {
    if (times > time) 
        clearInterval(x);
    times++;
    if (t.style.backgroundColor == 'white')
        t.style.backgroundColor = 'red';
    else
        t.style.backgroundColor = 'white';
}
