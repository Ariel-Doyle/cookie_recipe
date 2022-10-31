window.onload = function() {
  let h1 = document.querySelector("h1");
  h1.onclick = function() {
    window.alert("I am a heading element.");
  };

  let p = document.querySelector("p");
  p.onmouseover = function() {
    document.querySelector("p>em").innerText = "Don't be surprised";
  };

  let img = document.querySelector("img");
  img.onmouseover = function() {
    img.style.height = "700px";
  };

  let darkButton = document.querySelector("darkButton");
  button.onclick = function() {
    button.style.backgroundColor = "black";
  };
  }

  
};