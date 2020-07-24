AOS.init();

var btnContainer = $(".btn-container")[0];
var btns = btnContainer.getElementsByClassName("btn");
var tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    const current = $(".btn-container .active")[0];
    current.className = current.className.replace(" active", "");
    this.className += " active";
    // console.log(this.value);
    const buttonMadeActive = this.value;
    console.log(buttonMadeActive);
    for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    document.getElementById(buttonMadeActive).style.display = "block";
  });
}
