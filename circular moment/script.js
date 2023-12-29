var w = parseInt($(".outer").css("width"));
var h = parseInt($(".outer").css("height"));
for(var i = 0 ; i< 150 ; i++){
  var create = document.createElement("div")
  document.body.appendChild(create);
  create.classList.add("stars");
  create.style.top = Math.floor(( Math.random()*h) + 1 ) + "px";
  create.style.left = Math.floor(( Math.random()*w) + 1 ) + "px";
  var size = Math.floor(( Math.random()*2) + 1 );
  create.style.width = size + "px";
  create.style.height = size + "px";
  create.style.animationDelay = i*0.01 + "s";
}


function myFunction() {

    document.getElementById("Pear").style.animation = "move 10s infinite linear";
    document.getElementById("Pmer").style.animation = "move 2s infinite linear";
    document.getElementById("Pven").style.animation = "move 5s infinite linear";
    document.getElementById("moon").style.animation = "move 1s infinite linear";
    document.getElementById("Pmar").style.animation = "move 20s infinite linear";
    document.getElementById("Pjup").style.animation = "move 40s infinite linear";
    document.getElementById("Psat").style.animation = "move 70s infinite linear";
    document.getElementById("Pura").style.animation = "move 100s infinite linear";
    document.getElementById("Pnep").style.animation = "move 130s infinite linear";
  }

  function stopp(){
    
    
      document.getElementById("Pear").style.animation = null;
    document.getElementById("Pmer").style.animation =  null;
    document.getElementById("Pven").style.animation =  null;
    document.getElementById("moon").style.animation =  null;
    document.getElementById("Pmar").style.animation =  null;
    document.getElementById("Pjup").style.animation =  null;
    document.getElementById("Psat").style.animation =  null;
    document.getElementById("Pura").style.animation =  null;
    document.getElementById("Pnep").style.animation =  null;
    

  }



    

 