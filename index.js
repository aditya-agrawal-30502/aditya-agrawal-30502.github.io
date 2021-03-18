var holder = document.getElementById('main_span');
var text = ['Welcome to my webpage.','Scroll down for required links.','What are you waiting for?','Go.'];
var bod = document.getElementById('bg');
var x = document.cookie;
if(x == ''){
    console.log('enter')
    var person = prompt("Please enter your name (We will remember you next time)", "Name");
    if(person!= null){
    person = 'Hello '+person+',';
    document.cookie = "username="+person+"; expires=Thu, 18 Dec 2025 12:00:00 UTC";
    }
    else{
        person = '';
    }
}
else{
    person = x.substring(9,x.length);
}
text = [person].concat(text);
console.log(text);
var t = text.length;
var l = [0,0];
var flag = 0;
var c = 0;
var f = 0;
var sen = text.length;
function loop(){
    var len = 0;
    len = text[l[0]].length;
    holder.innerHTML = text[l[0]].substring(0,l[1]);
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
    }
}
function ani_r(){
    bod.style.animationPlayState = 'running';
}
function ani_p(){
    bod.style.animationPlayState = 'paused';
}
var myVar = setInterval(loop, 100);
