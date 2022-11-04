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

  const darkButton = document.getElementById("darkMode");
  darkButton.onclick = function() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  };

  const lightButton = document.getElementById("lightMode");
  lightButton.onclick = function() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  };

  const defaultFontButton = document.getElementById("defaultFont");
  defaultFontButton.onclick = function() {
    document.body.style.fontSize = '16px';
  };

  const largeFontButton = document.getElementById("largeFont");
  largeFontButton.onclick = function() {
    document.body.style.fontSize = '45px';
  };
  
}