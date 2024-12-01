
let gen = document.getElementById('general');
let prog = document.getElementById('program');
let btn = document.getElementById('gen');
btn.addEventListener('click',myfunc);
function myfunc(){
    let url;
    let specific;
    if(gen.checked == true){
        url = `https://official-joke-api.appspot.com/jokes/general/random`;
        specific = true;
    }
    else if(prog.checked == true) {
        url = `https://official-joke-api.appspot.com/jokes/programming/random`;
        specific = true;
    }
    else{
        url = `https://official-joke-api.appspot.com/random_joke`;
        specific = false;
    }
    async function getDataRandom() {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if(specific){
            document.querySelector('.middle-part').innerHTML = `
            <h3><strong>Setup : </strong>${data[0].setup}</h3>
            <h3><strong>Punchline : </strong>${data[0].punchline}</h3>
            `
        }
        else{
            document.querySelector('.middle-part').innerHTML = `
            <h3><strong>Setup : </strong>${data.setup}</h3>
            <h3><strong>Punchline : </strong>${data.punchline}</h3>
            `
        }
    }
    getDataRandom();
}