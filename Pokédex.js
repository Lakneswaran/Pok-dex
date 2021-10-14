
(() => { 
    
     
    var heroid = 1;
    id = document.getElementById("poke-id");
    id.addEventListener("keyup", (event)=>{
        
    if (event.keyCode === 13) {
        var id = document.querySelector("#poke-id").value;
        heroid = id;
        getApi(heroid);
        } 
    });


    async function getApi(a){

        var pokeimg = document.getElementById("choosenoneimg");
        var nameid = document.getElementById("header");

        var id = a;   
        let data = await fetch("https://pokeapi.co/api/v2/pokemon/"+id+ "/");
        let main = await data.json();
        
        pokeimg.src= main["sprites"]["front_default"];
        nameid.innerHTML = " "+main["id"]+" : "+main["name"];
        
        console.table(main);
       
        // var target= document.getElementById(target);
        // target.setAttribute('img', "pokemon");
    
    }

    getApi(heroid);
  
   
})()



// console.log(event.keyCode === 13 ? console.log('yes') : console.log("no"));