let counter=0

const increment=()=>{
    counter++;
    document.querySelector(".couter").innerHTML=counter;
}

let interval = setInterval(increment, 1000, 'Parameter 1', 'Parameter 2');