class App
{
    runApplication()
    {}
}

function dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  const button = document.getElementById("js--tickets");

  const navigation = document.getElementById("js--nav");
  
  const body = document.getElementById("js--body");

  const Top = document.getElementById("js--top");
  
  button.onclick = function() {
      navigation.style.visibility = "visible";
      navigation.style.opacity = 1;
      body.style.overflow = "hidden";
      Top.style.visibility = "hidden";
  }

let app = new App();
app.runApplication();