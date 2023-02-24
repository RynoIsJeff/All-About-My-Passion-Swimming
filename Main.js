let saveForLaterList = [];

$(document).ready(function() {
  // Save for later
  let htmlSelect = document.getElementById("saveLater");

    if (sessionStorage.getItem("hasCodeRunBefore") === null) {
        sessionStorage.setItem("Save", JSON.stringify(saveForLaterList));
        sessionStorage.setItem("hasCodeRunBefore", true);
    } else {
      saveForLaterList = JSON.parse(sessionStorage.getItem("Save"));
        if (saveForLaterList.length>0 && htmlSelect!=null){
        let i = 0;
        console.log(saveForLaterList)
        saveForLaterList.forEach(function(s) {
          const newLink = document.createElement ("a")
          newLink.href = s.fileName + "#" + s.id
          newLink.innerHTML = s.id
          htmlSelect.append(newLink)
        });
        if (i > 0) {
            htmlSelect.style.visibility = "visible";
      }  
        }
    }

    //Create link to file & div ID
function SaveLink(fileName,id){
  this.fileName = fileName
  this.id = id
}

// Save for Later button
$(".saveforLater").click(function(e){
  saveForLaterList = JSON.parse(sessionStorage.getItem("Save"));
  let savePath = location.href.split("/").slice(-1)
  let routePath = savePath[0].split("#")[0] //Make sure not to double stack div ID's
  let newSaveForLater = new SaveLink (routePath,e.target.parentNode.id)
  saveForLaterList.push(newSaveForLater)
  sessionStorage.setItem("Save", JSON.stringify(saveForLaterList));
})
})

//Hide & Show image buttons
$(document).ready(function(){
  $("#hide").click(function(){
    $("img").hide();
  });
  $("#show").click(function(){
    $("img").show();
  });
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//Break Page button 
$(document).ready(function(){
  $("#Break").click(function(){
    $("div").animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  });
});


//Go Crazy button
$(document).ready(function(){
  $("#crazyButton").click(function(){
    $("#img1").css("color", "red").slideUp(2000).slideDown(2000);
  });
});