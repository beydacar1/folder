
function tiklandi(e){
    if(e == 'retweet') alert(e + " yapildi")
    if(e == 'yorum') alert(e + " yapildi")
    if(e == 'begeni') alert(e + " yapildi")
    if(e == 'takip') alert(e + " edildi")
    if(e == 'link') alert(e + " kopyalandi")
}


var tweetHTML = document.getElementById("tweet")
function acil(e) {
  if ( tweetHTML.style.display == "none") {
    tweetHTML.classList.add("active")
  } else {
    tweetHTML = "none"
  }
}
function kapan(e) {
  if ( tweetHTML.classList == "active")  {
    tweetHTML.classList.remove("active")
  } 
}