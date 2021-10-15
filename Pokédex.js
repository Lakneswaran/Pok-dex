
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
        var movenames = document.getElementById("imagemoves");
        movenames.innerHTML="";

        var id = a;   
        let data = await fetch("https://pokeapi.co/api/v2/pokemon/"+id+ "/");
        let main = await data.json();

        var spiecesoneurl =main["species"]["url"];
        // const url= spiecesone.url;
        console.table(spiecesoneurl);
        fetch(spiecesoneurl)
        .then(response => response.json())
        .then(data1 => {
            // console.log(data1);
            var evolvedone = data1["evolves_from_species"];
            var evonename = evolvedone["name"];
            // console.log(evonename);

            fetch("https://pokeapi.co/api/v2/pokemon/"+evonename+ "/")
            .then(response => response.json())
            .then(data2 => {
            // console.log(data2);
           var pokeevolved = data2.sprites.front_default;
           console.log(pokeevolved);
           evolveurl.innerHTML = `<img src="${pokeevolved}" alt="">`;
           

            })  

        })





        
        pokeimg.src= main["sprites"]["front_default"];
        nameid.innerHTML = " "+main["id"]+" : "+main["name"];

        var pokemove = main.moves;
        
        //  console.log(pokemove);
        var powernames = [];
        pokemove.forEach(function(object,i){
        powernames.push(object.move.name);

         
        }) 
        if(powernames.length<4){
            for(var i=0;i<powernames.length;i++){
                movenames.innerHTML += "<li>" +powernames[i]+"</li>"; 
            }
        }
        else{
        for(var i=0;i<4;i++){
           movenames.innerHTML += "<li>" +powernames[i]+"</li>";
            
             }
    
        }
        //console.table(main);
       
        // var target= document.getElementById(target);
        // target.setAttribute('img', "pokemon");
    
    }

    getApi(heroid);
    
    

  
//    var div= document.getElementsByTagName("BODY")[0]; 
// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++ ) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }


//     div.style.backgroundColor=color;
// }

// setInterval(getRandomColor,2000);
  
   
})()



// console.log(event.keyCode === 13 ? console.log('yes') : console.log("no"));