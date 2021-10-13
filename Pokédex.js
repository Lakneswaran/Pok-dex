
(() => { 
    
    document.getElementById("hero-id").addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            document.getElementById("myFormID").submit();
            return false;
        }
    });


async function getApi(){


        let data = await fetch("https://pokeapi.co/api/v2/");
        let main = await data.json();
        var heroID = parseInt(document.getElementById('hero-id').value);
        var target = document.getElementById('target');

            console.table(main)
            

        }   
   getApi();
})()