function musicdown(obj)
{
    var mname = obj.innerText;
    window.open("./Musics/" + mname + ".flac");
}
function init_no()
{
    var nos = document.getElementsByClassName("music-item-no");
    for(var i=0;i<nos.length;i++){
        nos[i].innerText = i+1;
    }
}
function init()
{
    init_no();
}