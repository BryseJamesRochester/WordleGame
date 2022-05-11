import React, {useState} from "react"
import bootstrap from "bootstrap"
import { Container,Col,Row } from "react-bootstrap"
import axios from "axios"
import { useEffect } from "react"
import Game from "./Game"
import {useNavigate,Routes,Route} from "react-router-dom";
import App from "../App"
const enabled = "btn btn-outline-dark dropdown-toggle"
const disabled = "btn btn-outline-dark dropdown-toggle disabled"
const margin = {
    marginTop:  10,
    marginBottom :  10,
}

var props = {
    difficulty : 'easy',
    useDefaultWordlist : false,
    wordlist : 'names',
    userName : 'test'
}




const userName = "test"

const url = 'http://localhost:5001/users/' + userName + '/profile'

function GameParams() {

const[wordlists,getWordlists] = useState(null) 
const[fetchCount, increment] = useState(0)
const[loopCount, incrementLoop] = useState(0)
const [isDisabled, setDisabled] = useState(enabled)
const [selected, setSelected] = useState('easy')
const[gameParams, setParams] = useState(props)
const navigate = useNavigate()
const handleChange = event => {
    setSelected(event.target.value);
};

const handleCheckbox = event => { 
    if(isDisabled === enabled)
        setDisabled(disabled)
    else
        setDisabled(enabled)
}

const handleStart = event => {

    

    event.preventDefault()
    var difficulty; 
    if(document.getElementById('difficulty_0').checked === true)
        difficulty = 'easy'
    else if(document.getElementById('difficulty_1').checked === true)
        difficulty = 'medium'
    else if(document.getElementById('difficulty_2').checked === true)
        difficulty = 'hard'
    else if(document.getElementById('difficulty_all').checked === true)
        difficulty = 'all'
    var useDefaultWordlist
    if(document.getElementById('checkbox_0').checked === true)
        useDefaultWordlist = true;
    else
        useDefaultWordlist = false;
    var wordlist = null
    if(!useDefaultWordlist){
        wordlist = document.getElementById('selectWordlist').value
    }


   props.difficulty = difficulty
   props.useDefaultWordlist = useDefaultWordlist 
   props.wordlist = wordlist
   props.userName = userName
   console.log(props)
   
    navigate({
        pathname: '/singleplayer',
        state: {props}
    })
}

var loop = 0;
const options = {method: 'GET', url: url};

axios.request(options).then(function (response) {
if(fetchCount < 1){
  getWordlists(response.data.wordlists);
}
}).catch(function (error) {
  console.error(error);
});

useEffect(() => {
    if(wordlists === null)
        return 
    increment(fetchCount + 1)
    incrementLoop(loopCount + 1)
    const parent = document.getElementById('selectWordlist')
    if(loopCount < 1){
        for(let i = 0; i < wordlists.length; i++){
            var opt = document.createElement('option')
            opt.value = wordlists[i].name
            opt.innerHTML = wordlists[i].name
            parent.appendChild(opt)
        }
    }
},[wordlists])

return (
<form>
<Container className='justify-content-center'>
  <div class="form-group row" style={margin}>
    <label class="col-4">Difficuty</label> 
    <div class="col-8">
      <div class="custom-control custom-radio custom-control-inline" id="difficultySelect">
        <input name="difficulty" id="difficulty_0" type="radio" class="custom-control-input" value="easy" checked={selected === 'easy'} onChange={handleChange}/> 
        <label for="difficulty_0" class="custom-control-label active">Easy</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="difficulty" id="difficulty_1" type="radio" class="custom-control-input" value="medium" checked={selected === 'medium'} onChange={handleChange}/> 
        <label for="difficulty_1" class="custom-control-label">Medium</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="difficulty" id="difficulty_2" type="radio" class="custom-control-input" value="hard" checked={selected === 'hard'} onChange={handleChange}/> 
        <label for="difficulty_2" class="custom-control-label">Hard</label>
      </div >
      <div class="custom-control custom-radio custom-control-inline">
        <input name="difficulty" id="difficulty_all" type="radio" class="custom-control-input" value="all" checked={selected === 'all'} onChange={handleChange}/> 
        <label for="difficulty_all" class="custom-control-label">All</label>
        </div>
     </div>
  </div>


  <div class="form-group row" style={margin}>
    <label for="selectWordlist" class="col-4 col-form-label">Custom Wordlists</label> 
    <div class="col-8">
      <select id='selectWordlist' name="selectWordlist" class={isDisabled} aria-describedby="selectWordlistHelpBlock" style={{padding: '-0.625rem'}}/>
      <span id="selectWordlistHelpBlock" class="form-text text-muted"  style={margin}>Choose a custom wordlist to play with</span>
    </div>
  </div>
  <div class="form-group row" style={margin}>
    <label class="col-4">Use Default Wordlist</label> 
    <div class="col-8">
      <div class="custom-control custom-checkbox custom-control-inline">
        <input name="checkbox" id="checkbox_0" type="checkbox" class="custom-control-input" value="rabbit" onChange={handleCheckbox}/> 
        <label for="checkbox_0" class="custom-control-label"></label>
      </div>
    </div>
  </div> 
  <div class="form-group row">
    <div class="offset-4 col-8">
      <button name="start" class="btn btn-primary" onClick={handleStart}>Start Game</button>
    </div>
  </div>
  </Container>
<Routes>
    <Route exact path="/singleplayer" render={<Game data={props}/>}/>
</Routes>

</form>



)
}   


export default GameParams