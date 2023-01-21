'strict mode'
const usersoreEl = document.getElementById('user-score');
const computerscoreEl = document.getElementById('comp-score');
const userchoiceEl = document.getElementById('user-choice');
const computerchoiceEl = document.getElementById('comp-choice');
const resultEl = document.getElementById('results');

let usersore = 0;
let computerscore = 0 ;

const getcomouterchoice = function(){
    const weapons = ['rock','paper','scissor'];
    const randomnumber = Math.trunc(Math.random()* 3);
    return randomchoice = weapons[randomnumber];
};


const getresults = function(userchoice,computerchoice){
    if (userchoice ==='rock') {
        if (computerchoice === 'rock') {
            return 'draw';
        }else if (computerchoice === 'paper') {
            return "loss"    
        }
        else if (computerchoice === 'scissor') {
            return "won"
            
        }
        }
    if (userchoice === 'paper') {
            if (computerchoice === 'rock') {
            return 'won';
        }else if (computerchoice === 'paper') {
            return "draw"    
        }
        else if (computerchoice === 'scissor') {
            return "loss"
            
        }
        }
    if (userchoice === 'scissor'){
        if (computerchoice === 'rock') {
            return 'won';
        }else if (computerchoice === 'paper') {
            return "loss"    
        }
        else if (computerchoice === 'scissor') {
            return "draw"
            
        }
    }
    };




const updatescore = function(result,userchoice,computerchoice){
    

    if (result === 'won') {
      usersore++; 
      usersoreEl.innerText= usersore; 
    }else if (result === 'loss') {
        computerscore++;
        computerscoreEl.innerText= computerscore ;
    }else if ( result === "draw"){

    }
    userchoiceEl.innerText= `you choose: ${userchoice}`;
    computerchoiceEl.innerText= `computer choose: ${computerchoice}`;
}

const playgame = function(weapon){
 const  userchoice = weapon;
 const computerchoice = getcomouterchoice();
 const result = getresults(userchoice,computerchoice);
 updatescore (result,userchoice,computerchoice);
};


