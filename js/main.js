
function tiklandi(e){
    if(e == 'retweet') alert(e + " yapildi")
    if(e == 'yorum') alert(e + " yapildi")
    if(e == 'begeni') alert(e + " yapildi")
    if(e == 'takip') alert(e + " edildi")
    if(e == 'link') alert(e + " kopyalandi")
}

function acil(e) {
    var tweetHTML = document.getElementById("tweet")
    console.log(tweetHTML)
  if ( tweetHTML.style.display == "none") {
    tweetHTML.classList.add("active")
    console.log(tweetHTML)
  } else {
    tweetHTML = "none"
  }
}
function kapan(e) {
  if ( tweetHTML.classList == "active")  {
    tweetHTMLL.classList.remove("active")
  } 
}