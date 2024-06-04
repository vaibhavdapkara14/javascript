const buttons = document.querySelectorAll('.button1');
const body = document.querySelector('body');

buttons.forEach(function (button1) {
    console.log(button1);
    button1.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor  = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id  ;
        }
        if(e.target.id === 'pink'){
            body.style.backgroundColor =  e.target.id;
        }
    });
});