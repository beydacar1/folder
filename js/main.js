function takip() {
    alert("Takip edildi.")
}
function yorum() {
    alert("Yorum yapıldı.")
}
function retweet() {
    alert("Retweet yapıldı.")
}
function begen() {
    alert("Beğenildi.")
}
function paylas() {
    alert("Link kopyalandı.")
}
function tweetlendi() {
    alert("Tweet gönderildi.")
}
function olustur() {
    alert("Liste oluşturuldu.")
}
var acilan = document.getElementById("acilan").addEventListener("click", acil );
function acil() {
    document.getElementById("aa").style.display= "block";
    document.getElementById("aa").style.position= "absolute";
    document.getElementById("aa").style.margin= "auto";
}