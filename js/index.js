window.onscroll = function() {scrollFunction()};

function scrollFunction() { {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  
      document.getElementById("navbar").style.backgroundColor = "#FFFFFF";
      document.getElementById("navbar").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
      document.getElementById("logo").style.fontSize = "25px";
    } else {

      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("navbar").style.boxShadow = "none";
      document.getElementById("logo").style.fontSize = "35px";
    }
  }
  
}


const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function() {
        
        links.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});
