const jokes = document.querySelector('#jokes');
const button = document.querySelector('#click');
const reset = document.querySelector('#reset');


const addNewJoke = async () => {
    const joketext = await getDadJoke();
    const newLI = document.createElement('li');
    newLI.append(joketext);
    jokes.append(newLI)
}

const getDadJoke = async() =>{
    try {
        const config = {headers : {Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke ;
        
    } catch (err) {
        return "NO JOKES AVAILABLE!! :(";
    }

   
}

button.addEventListener('click', addNewJoke)
reset.addEventListener('click', function(e){
    e.preventDefault();
    jokes.innerHTML= "";
})