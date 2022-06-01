const music_name = ["稻香","夏天的风","爱你","一人行者"];
const records_name = ["第二次测试直播"];
const records_link = [
    "https://storage.wildfire.vtb.link/d/%E9%87%8E%E7%81%AB%E5%AD%98%E6%A1%A3/%E5%BD%95%E6%92%AD/%E9%87%8E%E7%81%AB%E4%BC%81%E5%88%92%E6%B5%8B%E8%AF%95%E7%9B%B4%E6%92%AD.mp4"
];
//作者名称，作者uid，图片b站链接，图片日期
const images = [
    ["反野火吧主",321874439,"666438985751461890","2022-5-31"],
    ["烛庇",6578211,"665942448897261623","2022-5-30"]
];
function changeimg(obj){
    var c = Number(obj.innerText) - 1
    document.getElementById("author").innerText=images[c][0];
    document.getElementById("date").innerText=images[c][3];
    document.getElementById("2_img").setAttribute("src","./Images/"+(c+1)+".webp");
    document.getElementById("2_img").setAttribute("onclick","window.open('http://t.bilibili.com/" + images[c][2] + "')");
}
function musicdown(obj)
{
    var mname = obj.innerText;
    window.open("./Musics/" + mname + ".flac");
}
function recorddown(obj)
{
    var mname = obj.parentNode.childNodes[0].innerText;
    window.open(records_link[Number(mname)-1]);
}
function init_no()
{
    var nos = document.getElementsByClassName("item-no");
    for(var i=0;i<nos.length;i++){
        nos[i].innerText = i+1;
    }
}
function init_music()
{
    for(var i=0;i<music_name.length;i++)
    {
        var l = document.getElementsByClassName("list");
        var di = document.createElement("div");
        di.setAttribute("class","item");
        var dino = document.createElement("span");
        dino.setAttribute("class","item-no");
        dino.innerText = i+1
        var dina = document.createElement("dina");
        dina.setAttribute("class","item-name");
        dina.setAttribute("onclick","musicdown(this)");
        dina.innerText = music_name[i];
        di.appendChild(dino);
        di.appendChild(dina);
        l[1].appendChild(di);
    }
}
function init_records()
{
    for(var i=0;i<records_name.length;i++)
    {
        var l = document.getElementsByClassName("list");
        var di = document.createElement("div");
        di.setAttribute("class","item");
        var dino = document.createElement("span");
        dino.setAttribute("class","item-no");
        dino.innerText = i+1
        var dina = document.createElement("dina");
        dina.setAttribute("class","item-name");
        dina.setAttribute("onclick","recorddown(this)");
        dina.innerText = records_name[i];
        di.appendChild(dino);
        di.appendChild(dina);
        l[0].appendChild(di);
    }
}
function init_images()
{
    for(var i=0;i<images.length;i++)
    {
        var l = document.getElementsByClassName("list");
        var dino = document.createElement("span");
        dino.setAttribute("class","image-item");
        dino.setAttribute("onclick","changeimg(this);")
        dino.innerText = i+1
        l[2].appendChild(dino);
    }
}
function init()
{
    init_music();
    init_records();
    init_images();
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