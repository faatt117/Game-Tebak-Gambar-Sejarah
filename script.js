document.addEventListener("DOMContentLoaded", function(){

let quesDivs = document.querySelectorAll(".questions"),
    nextButtons = document.querySelectorAll(".nextbtn");

    let answerInputs = document.querySelectorAll(".ansInput")
    let userScore = 0

    let correctAnswers = ["ir soekarno","demokrasi","kabinet","berkhianat","komunis","partai tunggal","fatmawati","indonesia merdeka","muso pentolan pki","supersemar sebelas maret"]

    function hideAllQuestions(){
      quesDivs.forEach(function(div){
        div.style.display = "none"
      })
    }
// now display visible to first ques 1

quesDivs[0].style.display = "block"


nextButtons.forEach(function(button,index){
button.addEventListener("click", function(){
  hideAllQuestions();
  if(index < quesDivs.length-1){
    quesDivs[index+1].style.display = "block"
  }
  else{
    userScore = 0
    
    for(let i=0;i<correctAnswers.length;i++){
      if(answerInputs[i].value.toLowerCase() === correctAnswers[i]){
        userScore++
      }
    }
  
    let scoreMessage = document.querySelector(".message")
    scoreMessage.style.display = "block"
    if(userScore<3){
      scoreMessage.textContent = "Lo Kalah, Score lo " + userScore + " 🤣"
    }
    else{
      scoreMessage.textContent = "Keren Amat !! Score lo " + userScore + " 🥳"
    }
  
  }


})
})

var closeButton = document.getElementById("closeButton");

closeButton.addEventListener("click", function() {

  var confirmClose = confirm("Apakah Anda yakin ingin menutup halaman?");

  if (confirmClose) {
    window.close();
  }
});

})

