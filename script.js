console.log("Portfolio Ready 🚀");  
const text = "Informatics Student | Network Enthusiast";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}

typing();