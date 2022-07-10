Array.from(document.getElementsByClassName("pawn-green")).forEach((elem) => {
  elem.addEventListener("mouseenter", showMovesPawnGreen);
  elem.addEventListener("mouseout", removeMovesPawnGreen);
});

function showMovesPawnGreen(event) {
  console.log(event.target.id);
  let id = event.target.id;
  let a = +id.split("-")[1];
  console.log(typeof a);
  let rowNum = +id.split("-")[1];
  let colNum = +id.split("-")[2];
  // document.getElementById(`col3-box1`).style.backgroundColor = "yellow";
  console.log(colNum, rowNum, id);
  //col3-box1
  document.getElementById(
    `col${colNum + 1}-box${rowNum}`
  ).style.backgroundColor = "yellow";
  //col4-box1
  document.getElementById(
    `col${colNum + 2}-box${rowNum}`
  ).style.backgroundColor = "yellow";
}
// TODO
// change colour according to  BG colour if yellow then change the class name
// from black to white

function removeMovesPawnGreen(event) {
  let col3Children = document.getElementById("col3").children;
  for (let i = 0; i < col3Children.length; i++) {
    if (i % 2 == 0) {
      col3Children[i].style.backgroundColor = "black";
    } else {
      col3Children[i].style.backgroundColor = "white";
    }
  }
  let col4Children = document.getElementById("col4").children;
  for (let i = 0; i < col4Children.length; i++) {
    if (i % 2 == 0) {
      col4Children[i].style.backgroundColor = "white";
    } else {
      col4Children[i].style.backgroundColor = "black";
    }
  }
}
document.getElementById("col3-box1").addEventListener("click", myFunction);
  document.getElementById("col4-box1").addEventListener("click",myFunction);
  let l=1;
  function myFunction(event){
    let col3Box1Key=document.getElementById("col3-box1-key");
    let col2box1Key = document.getElementById("pawn-1-2");
    let col4Box1Key =document.getElementById("col4-box1-key")
    let id=event.target.id;

    console.log(col2box1Key, "------1---------------", id);

    if(id=='col3-box1' && l==1){
      l++;
      console.log(col2box1Key, "------2---------------");
    console.log(col3Box1Key.innerHTML, "64 line");
    // [col2box1Key.innerHTML,col3Box1Key.innerHTML]=[col3Box1Key.innerHTML,col2box1Key.innerHTML];
   [col3Box1Key.innerHTML,col2box1Key.innerHTML]=[col2box1Key.innerHTML,col3Box1Key.innerHTML];
    }
    // console.log(id, "------1---------------");


  if(id=='col4-box1' && l==1){
    l++;
    console.log(col4Box1Key);
    [col4Box1Key.innerHTML,col2box1Key.innerHTML]=[col2box1Key.innerHTML,col4Box1Key.innerHTML]
  }
  }
//----------------------------------------------------------
Array.from(document.getElementsByClassName("horse1")).forEach((elemm) => {
  elemm.addEventListener("mouseenter", showMoveshorseGreen);
  elemm.addEventListener("mouseout", removeMovesHorseGreen);
});

function showMoveshorseGreen(event) {
  console.log(event.target.id);
  let id = event.target.id;
  console.log(id.split("-"));
  let colNum = +id.split("-")[1];
  let Num = +id.split("-")[1];
  // document.getElementById(`col3-box1`).style.backgroundColor = "yellow";
  console.log(colNum, Num, id);
  //col3-box1
  if (id == "horse-1-1") {
    document.getElementById(
      `col${colNum + 2}-box${Num}`
    ).style.backgroundColor = "yellow";
    
    document.getElementById(
      `col${colNum + 2}-box${Num + 2}`
    ).style.backgroundColor = "yellow";
  }
  if (id == "horse-2-1") {
    document.getElementById(`col${colNum + 1}-box${Num + 4}`).style.backgroundColor = "yellow";
    console.log(colNum+1,Num+4);
    document.getElementById(
      `col${colNum + 1}-box${Num + 6}`
    ).style.backgroundColor = "yellow";
  }
}

function removeMovesHorseGreen(event) {
  console.log(event.target.id);
  let id = event.target.id;
  console.log(id.split("-"));
  let colNum = +id.split("-")[1];
  let Num = +id.split("-")[1];
  // document.getElementById(`col3-box1`).style.backgroundColor = "yellow";
  console.log(colNum, Num, id);
  //col3-box1
  if (id == "horse-1-1") {
    document.getElementById(
      `col${colNum + 2}-box${Num}`
    ).style.backgroundColor = "black";
    document.getElementById(
      `col${colNum + 2}-box${Num + 2}`
    ).style.backgroundColor = "black";
  }
  if (id == "horse-2-1") {
    document.getElementById(
      `col${colNum + 1}-box${Num + 4}`
    ).style.backgroundColor = "white";
    document.getElementById(
      `col${colNum + 1}-box${Num + 6}`
    ).style.backgroundColor = "white";
  }
}

//------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------

//Blue key

Array.from(document.getElementsByClassName("pawn-blue")).forEach((elemm) => {
  elemm.addEventListener("mouseenter", showMovesPawnBlue);
  elemm.addEventListener("mouseout", removeMovesPawnBlue);
});
function showMovesPawnBlue(event) {
  let id = event.target.id;
  let rowNum = +id.split("-")[1];
  let colNum = +id.split("-")[2];
  document.getElementById(
    `col${colNum - 1}-box${rowNum}`
  ).style.backgroundColor = "red";
  document.getElementById(
    `col${colNum - 2}-box${rowNum}`
  ).style.backgroundColor = "red";
}

function removeMovesPawnBlue() {
  let col5Children = document.getElementById("col5").children;
  for (let i = 0; i < col5Children.length; i++) {
    if (i % 2 == 0) {
      col5Children[i].style.backgroundColor = "black";
    } else {
      col5Children[i].style.backgroundColor = "white";
    }
  }
  let col6Children = document.getElementById("col6").children;
  for (let i = 0; i < col6Children.length; i++) {
    if (i % 2 == 0) {
      col6Children[i].style.backgroundColor = "white";
    } else {
      col6Children[i].style.backgroundColor = "black";
    }
  }
}
//--------------------------------------------------------------------------
Array.from(document.getElementsByClassName("horse2")).forEach((elem) => {
  elem.addEventListener("mouseenter", showMoveshorseBlue);
  elem.addEventListener("mouseout", removeMovesHorseBlue);
});
function showMoveshorseBlue(event) {
  let id = event.target.id;
  console.log(id);
  let rowNum = +id.split("-")[2];
  let colNum = +id.split("-")[1];
  console.log(colNum, rowNum, id);
  // console.log(`col${colNum+5}-box${rowNum-7}`)
  // console.log(`col${colNum+5}-box${rowNum-5}`)
  if (id == "horse-1-8") {
    document.getElementById(
      `col${colNum + 5}-box${rowNum - 7}`
    ).style.backgroundColor = "red";
    document.getElementById(
      `col${colNum + 5}-box${rowNum - 5}`
    ).style.backgroundColor = "red";
  }
  if (id == "horse-2-8") {
    //   console.log(`col${colNum+4}-box${rowNum-2}`)
    // console.log(`col${colNum+4}-box${rowNum}`)
    document.getElementById(
      `col${colNum + 4}-box${rowNum - 2}`
    ).style.backgroundColor = "red";
    document.getElementById(
      `col${colNum + 4}-box${rowNum}`
    ).style.backgroundColor = "red";
  }
}

function removeMovesHorseBlue(event) {
  let id = event.target.id;
  console.log(id);
  let rowNum = +id.split("-")[2];
  let colNum = +id.split("-")[1];
  console.log(colNum, rowNum, id);
  // console.log(`col${colNum+5}-box${rowNum-7}`)
  // console.log(`col${colNum+5}-box${rowNum-5}`)
  if (id == "horse-1-8") {
    document.getElementById(
      `col${colNum + 5}-box${rowNum - 7}`
    ).style.backgroundColor = "white";
    document.getElementById(
      `col${colNum + 5}-box${rowNum - 5}`
    ).style.backgroundColor = "white";
  }
  if (id == "horse-2-8") {
    //   console.log(`col${colNum+4}-box${rowNum-2}`)
    // console.log(`col${colNum+4}-box${rowNum}`)
    document.getElementById(
      `col${colNum + 4}-box${rowNum - 2}`
    ).style.backgroundColor = "black";
    document.getElementById(
      `col${colNum + 4}-box${rowNum}`
    ).style.backgroundColor = "black";
  }
}
// ----------------------------------------------------