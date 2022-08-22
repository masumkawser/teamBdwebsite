document.getElementById('Calculate').addEventListener('click',function(){

const perplayer=document.getElementById('player');
const perplayerString=perplayer.value ;
const perplayerAmount=parseFloat(perplayerString);

perplayer.value ='' ;
console.log(perplayerAmount);


const playerDam=document.getElementById('pexpense');
const playerDamString=playerDam.innerText;
const playerDamTaka=parseFloat(playerDamString);
const playerExpense=perplayerAmount*5;
playerDam.innerText=playerExpense;

})



