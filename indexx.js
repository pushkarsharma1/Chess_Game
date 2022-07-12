let a=new Array(9);
 for(let i=0;i<a.length;i++){
   a[i]=new Array(9);
}

for(let i=1;i<=8;i++){
  for(let j=1;j<=8;j++){
    var ele=document.getElementById(`col${i}-box${j}`).children;
    a[i][j]=ele[0].id;
    console.log(a[i][j]);
    
  }
  
  
//   console.log(a[i]);
}