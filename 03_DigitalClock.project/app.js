const clock = document.getElementById('clock');
// const click = document.querySelector('#clock')

setInterval(function(){
    let date = new Date();
    //console.log(date.toLocalTimeString());
    clock.innerHTML = date.toLocaleTimeString();
    // clock.innerHTML = date.toLocaleDateString();
},1000);