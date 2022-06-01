const music_name = ["稻香","夏天的风","爱你","一人行者"];
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
function init_music()
{
    for(var i=0;i<music_name.length;i++)
    {
        var l = document.getElementsByClassName("music-list");
        var di = document.createElement("div");
        di.setAttribute("class","music-item");
        var dino = document.createElement("span");
        dino.setAttribute("class","music-item-no");
        var dina = document.createElement("dina");
        dina.setAttribute("class","music-item-name");
        dina.setAttribute("onclick","musicdown(this)");
        dina.innerText = music_name[i];
        di.appendChild(dino);
        di.appendChild(dina);
        l[0].appendChild(di);
    }
}
function init()
{
    init_music();
    init_no();
}
var cloneObj = function (obj) {
    var newObj = {};
    if (obj instanceof Array) {
      newObj = [];
    }
    for (var key in obj) {
      var val = obj[key];
      newObj[key] = typeof val === 'object' ? cloneObj(val) : val;
    }
    return newObj;
};