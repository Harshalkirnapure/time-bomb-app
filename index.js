let timmerEl=document.getElementById("timmer");
let blastEl=document.getElementById("Blast");
let defuserEl=document.getElementById("defuser"); 


let counter = 10;

let timecount= setInterval(() => {
    counter=counter-1;
    timmerEl.textContent=counter;
     
    if (counter===0){
        clearInterval(timecount);

       blastEl.src="blast.jpg";
    
      
    }

    
}, 1000);


function defuser(){
    if (counter >0 && defuserEl.value=="defuse"){
         blastEl.src="happy people.jpg";
         clearInterval(timecount)
         timmerEl.style.display="none";
    }
    else{

        clearInterval(timecount);
        timmerEl.style.display="none";
        blastEl.src="blast.jpg";
    }
}





//  key up key down function( none of part of this code )
// function readInput(e){
//     console.log(e.target.value);
// }

// defuserEl.addEventListener("keyup",readInput);