var holder = document.getElementById('main_span');
var text = ['Welcome to my webpage.','Scroll down for required links.','What are you waiting for?','Go.'];
var t = text.length;
var l = [0,0];
var flag = 0;
var c = 0;
var f = 0;
var sen = text.length;
function loop(){
    var len = 0;
    len = text[l[0]].length;
    holder.style.width = String(l[1]*100/len)+'%';
    l[1]++;
    if (flag ==1){
        l[1]-=2;
        if(l[0] == sen-1){
            l[1]++;
        }
    }
    if (flag ==2){
        l[1]++;
    }
    if(l[1]>len){
        flag = 1;
    }
    else if(l[1]<0){
        flag = 0;
        l[1] = 0;
        l[0]++;
        holder.innerHTML = text[l[0]];
    }
}
var myVar = setInterval(loop, 100);