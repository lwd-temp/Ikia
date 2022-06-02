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
var min,sec,msec;
var now_selected=0;
var now_playing = false;
var now_index=0;
var lrc_,nstep;
var end;
function changeimg(obj){
    var c = Number(obj.innerText) - 1
    document.getElementById("author").innerText=images[c][0];
    document.getElementById("date").innerText=images[c][3];
    document.getElementById("2_img").setAttribute("src","./Images/"+(c+1)+".webp");
    document.getElementById("2_img").setAttribute("onclick","window.open('http://t.bilibili.com/" + images[c][2] + "')");
}
function musicdown(t)
{
    window.open("./Musics/" + t + ".flac");
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
    var ma = document.getElementById("m-audio");
    ma.addEventListener("ended",musicstop());
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
        dina.setAttribute("onclick","select(this)");
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
function select(obj){
    now_selected=obj.innerText;
    var a = document.getElementById("music-list");
    for(var i=0;i<a.children.length;i++)
    {
        a.children[i].children[1].style.backgroundColor = "#2D3748";
    }
    obj.style.backgroundColor = "#435169";
    now_index = obj.parentNode.children[0].innerText;
}
function musicplay(t){
    var ma = document.getElementById("m-audio");
    if(now_selected!=0){
        ma.setAttribute("src","./Musics/" + t + ".flac");
        ma.play();
        now_playing=true;
        document.getElementById("play-button").setAttribute("src","./Icons/pause.png");
        lrc_ = parseLyric(lyrics[now_index-1]);
        nstep=0
        var date = new Date();
        end = new Date(date.getTime() + 5 * 60 * 1000);
        document.getElementsByClassName("lyrics-bar")[0].innerText="";
        countTime()
    }
}
function musicstop(){
    var ma = document.getElementById("m-audio");
    ma.pause();
    now_playing=false;
    document.getElementById("play-button").setAttribute("src","./Icons/play.png");
}
function music2p(t){
    if(now_playing)musicstop();
    else{
        musicplay(t);
    }
}
const lyrics=[
    `[ti:稻香]
    [00:31.34]对这个世界如果你有太多的抱怨
    [00:34.72]跌倒了就不敢继续往前走
    [00:37.66]为什么人要这么的脆弱堕落
    [00:41.62]请你打开电视看看
    [00:43.65]多少人为生命在努力勇敢的走下去
    [00:47.46]我们是不是该知足
    [00:49.87]珍惜一切就算没有拥有
    [00:54.24]还记得你说家是唯一的城堡
    [00:58.09]随着稻香河流继续奔跑
    [01:00.93]微微笑小时候的梦我知道
    [01:05.97]不要哭让萤火虫带着你逃跑
    [01:09.78]乡间的歌谣永远的依靠
    [01:12.62]回家吧回到最初的美好
    [01:41.85]不要这么容易就想放弃就像我说的
    [01:45.26]追不到的梦想换个梦不就得了
    [01:48.14]为自己的人生鲜艳上色
    [01:50.50]先把爱涂上喜欢的颜色
    [01:52.70]笑一个吧功成名就不是目的
    [01:56.27]让自己快乐快乐这才叫做意义
    [01:59.24]童年的纸飞机现在终于飞回我手里
    [02:04.28]所谓的那快乐赤脚在田里追蜻蜓
    [02:08.15]追到累了偷摘水果被蜜蜂给叮到
    [02:11.54]怕了谁在偷笑呢
    [02:13.90]我靠着稻草人吹着风唱着歌睡着了
    [02:17.22]哦哦 午后吉它在虫鸣中更清脆
    [02:20.14]哦哦 阳光洒在路上就不怕心碎
    [02:23.06]珍惜一切就算没有拥有
    [02:28.29]还记得你说家是唯一的城堡
    [02:31.86]随着稻香河流继续奔跑
    [02:34.84]微微笑小时候的梦我知道
    [02:39.83]不要哭让萤火虫带着你逃跑
    [02:43.74]乡间的歌谣永远的依靠
    [02:46.53]回家吧回到最初的美好
    [02:51.59]还记得你说家是唯一的城堡
    [02:55.15]随着稻香河流继续奔跑
    [02:58.34]微微笑小时候的梦我知道
    [03:03.18]不要哭让萤火虫带着你逃跑
    [03:06.87]乡间的歌谣永远的依靠
    [03:09.87]回家吧回到最初的美好`,
    `[00:16.77]七月的风懒懒的 连云都变热热的
    [00:25.37]不久后天闷闷的 一阵午后雨下过
    [00:32.64]喔 yeah
    [00:35.45]气温 爬升到无法再忍受
    [00:42.06]索性闭上了双眼 让想象任意改变
    [00:49.91]曾经两个人一起散着步
    [00:54.69]我的脸也轻轻贴着你胸口
    [00:59.08]听到心跳 喔 在乎我
    [01:02.57]和天气一样温度
    [01:07.39]夏天的风 我永远记得
    [01:11.70]清清楚楚的说你爱我
    [01:15.94]我看见你酷酷的笑容
    [01:20.09]也有腼腆的时候
    [01:24.28]夏天的风 正暖暖吹过
    [01:28.55]穿过头发穿过耳朵
    [01:32.76]你和我的夏天 风轻轻说着
    [01:42.53]温柔暖暖的海风 吹到高高的山峰
    [01:46.96]温的风 山的风 吹成我山峰
    [01:51.05]温柔暖暖的海风 吹到高高的山峰
    [01:55.19]温的风 山的风 吹成我山峰
    [01:59.44]温柔暖暖的海风 吹到高高的山峰
    [02:03.57]温的风 山的风 吹成我山峰
    [02:07.85]为什么你不在 为什么你不回来
    [02:14.25]曾经两个人一起散着步
    [02:18.86]我的脸也轻轻贴着你胸口
    [02:23.30]听到心跳 喔 在乎我
    [02:27.09]和天气一样温度
    [02:31.67]夏天的风 我永远记得
    [02:36.10]清清楚楚的说你爱我
    [02:40.15]我看见你酷酷的笑容
    [02:44.20]也有腼腆的时候
    [02:48.54]夏天的风 正暖暖吹过
    [02:52.83]穿过头发穿过耳朵
    [02:56.96]你和我的夏天 风轻轻说着
    [03:05.47]夏天的风 我永远记得
    [03:09.61]清清楚楚的说你爱我
    [03:13.83]我看见你酷酷的笑容
    [03:17.88]也有腼腆的时候
    [03:22.22]夏天的风 正暖暖吹过
    [03:26.52]穿过头发穿过耳朵
    [03:30.71]你和我的夏天 风轻轻说着`,
    `[00:03.58]yo yo yo yo Cyndi what~what's wrong with me
    [00:09.72]yo yo Cyndi baby what's wrong with me
    [00:14.54]Cyndi give me your love you make me sneeze all the time
    [00:22.77]Now now怎么我一直狂打喷嚏 在凌晨三点二十六分
    [00:28.34]let me sing let me sing a song陪人入睡
    [00:31.31]what is love嗯哼我正在听 你要什么都say yes
    [00:37.92]Cyndi I really do love you so
    [00:40.55]如果你突然打了个喷嚏 那一定就是我在想你
    [00:45.24]如果半夜被手机吵醒 啊那是因为我关心
    [00:49.52]常常想 你说的话是不是别有用心 明明很想相信
    [00:56.90]却又忍不住怀疑 在你的心里 我是否就是唯一
    [01:04.28]爱 就是有我常烦着你
    [03:04.66]So-baby 情话多说一点 想我就多看一眼
    [03:09.12]表现多一点点 让我能 真的看见 Oh-Bye 少说一点
    [03:16.16]想陪你不只一天 多一点 让我 心甘情愿--爱你
    [01:43.89]喜欢在你的臂弯里胡闹 你的世界是一座城堡
    [01:47.51]在大头贴画满心号 贴在手机上对你微笑 常常想
    [01:53.04]我说的话你是否听得进去 明明很想生气 却又止不住笑意
    [02:01.79](Oh-)在我的心里 你真的就是唯一 爱 就是有我常赖着你
    [02:30.17]就这样 一天多一点 慢慢地累积感觉
    [02:35.78]两人的世界 就能够贴近一点
    [03:23.54](多一点 才会慢慢发现 因为你 让我心甘情愿)`,
    `[00:05.00]嘿呀 嘿呀 嘿呀 嘿呀 
    [00:12.58]嘿呀 嘿呀 嘿呀 嘿呀 
    [00:20.76]嘿呀  嘿朋友
    [00:24.35]你也睡不着吗
    [00:28.69]你也在困扰吗
    [00:32.28]来陪我唱唱歌儿
    [00:35.95]说说话
    [00:38.39]像孤单的旅行家
    [00:42.12]这人生一路风沙
    [00:46.15]却固执相信着前方
    [00:50.12]有为我开出的花
    [00:54.33]原谅我总是分不清 坚强和倔强
    [01:00.49]原谅我总是看着 没有尽头的远方
    [01:08.56]天亮 那路在呼唤
    [01:12.43]我的行囊和我的吉他
    [01:16.99]原谅我的不陪伴
    [01:20.65]我已经出发
    [01:24.61]原谅我 像孤单的旅行家
    [01:29.78]这人生一路风沙
    [01:33.39]却固执看着前方
    [01:42.07]也许我不太听话
    [01:45.51]也许我早该停下
    [01:49.67]果然还是不行吗
    [01:53.73]やっぱり無理でした
    [01:57.96]像孤单的旅行家
    [02:01.58]骗自己我不害怕
    [02:05.69]再让我相信这一次
    [02:09.67]也许明天会到达
    [02:13.79]原谅我总是分不清 坚强和倔强
    [02:19.95]原谅我总是看着 没有尽头的远方
    [02:28.15]天亮 那路在呼唤
    [02:32.25]我的行囊和我的吉他
    [02:36.66]原谅我的不陪伴
    [02:40.39]我已经出发
    [02:44.33]原谅我 像孤单的旅行家
    [02:49.72]这人生一路风沙
    [02:53.31]却固执看着前方
    [02:58.80]原谅我 像孤单的旅行家（我总是分不清）
    [03:06.39]这人生一路风沙（坚强和倔强 原谅）
    [03:10.44]却固执看着前方（我总是看着 没有尽头的远方）
    [03:14.21]却固执看着前方 （天亮 那路在呼唤）
    [03:18.27]像孤单的旅行家 （我的行囊）
    [03:22.17]这人生一路风沙 （和我的吉他）
    [03:26.23]却固执看着前方`
];
function countTime() {
    var date = new Date();
    var now = date.getTime();
    var leftTime = end - now; //时间差                              
    var d, h, m, s=1, ms;
    if(leftTime >= 0) {
        d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
        m = Math.floor(leftTime / 1000 / 60 % 60);
        s = Math.floor(leftTime / 1000 % 60);
        ms = Math.floor(leftTime % 1000);
        if(ms < 100) {
            ms = "0" + ms;
        }
        if(s < 10) {
            s = "0" + s;
        }
        if(m < 10) {
            m = "0" + m;
        }
        if(h < 10) {
            h = "0" + h;
        }
    } else {
    }
    min = 5-m-1;
    sec = 60-s;
    msec = 1000-ms;
    
    //递归每秒调用countTime方法，显示动态时间效果
    if(now_playing){setTimeout(countTime, 100);checklrc();}
    
}
function checklrc(){
    if(min==Number(lrc_.lrc[nstep].time.m)&&sec==Number(lrc_.lrc[nstep].time.s)){
        document.getElementsByClassName("lyrics-bar")[0].innerText=lrc_.lrc[nstep].lyric;
        nstep++;
    }
    if(min+1==Number(lrc_.lrc[nstep].time.m)&&0==Number(lrc_.lrc[nstep].time.s)&&sec==60){
        document.getElementsByClassName("lyrics-bar")[0].innerText=lrc_.lrc[nstep].lyric;
        nstep++;
    }
    console.log(min,sec,msec,lrc_.lrc[nstep].time.m,lrc_.lrc[nstep].time.s,Number(lrc_.lrc[nstep].time.m),Number(lrc_.lrc[nstep].time.s));
}