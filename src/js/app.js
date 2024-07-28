import goblin from './img/goblin.png';

document.addEventListener("DOMContentLoaded", () => { 
  const cells = document.querySelectorAll('itemcell');
  const image = document.createElement("img");
  image.src = goblin;
  let goblinCell = null;
  let victorCaunt = 0;
  let loserCaunt = 0;

  function indexCell (){
    const index = Math.floor(Math.random() * cells.length);
    return cells[index];
  }

  function playGoblin (){
    const newIndex = indexCell();
    if(goblinCell != newIndex) {
      goblinCell = newIndex;
      goblinCell.appendChild(image);
      loserCaunt ++;
    }
  }
  setInterval(playGoblin, 1000);
  
  function playGame(stepGoblin) {
    cells.forEach((cell, index) => cell.addEventListener("click", (e)=> {
      if(e.currentTarget[index] = stepGoblin)  {
        victorCaunt ++;
        if(victorCaunt == 5) {
          victorCaunt = 0;
          loserCaunt = 0;
          return document.querySelectorAll('gametable').insertAdjacentHTML('afterbegin',`
            <div class="showwiner"}>
            ${'Вы выиграли!'}
            </div>`);

      }
    }
      else {
        if(loserCaunt > 5) {
          victorCaunt = 0;
          loserCaunt = 0;
          return  document.querySelectorAll('gametable').insertAdjacentHTML('afterbegin',`
            <div class="showwiner"}>
            ${'Вы проиграли!'}
            </div>`);
        }
      }
    }));
    playGame(goblinCell);
}
  
  


});




