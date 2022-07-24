console.log(`hello world`)
function playSound() {
    const audio = new Audio('./gun.mp3');
    audio.play();
}

const gunshot = document.querySelector(`#die`);
gunshot.onclick = () => {
    playSound();
    gunshot.style.bottom = '-10px';
    gunshot.style.right = '-10px';
    setTimeout (() => {
        gunshot.style.bottom = '-0px';
        gunshot.style.right = '-0px';
    },300)
}
var count = 0;
function myFunction() {
  count+=1;
  document.getElementById("demo").innerHTML = count;
 
 }