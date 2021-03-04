var holder = document.getElementById('main_span');
var text = ['Welcome to my webpage.','Scroll down for required links.','What you waiting for?','Go.'];
var t = text.length;
var location = [0,0];
var sen = text.length;
function loop(){
    var len = 0;
    if(location[0]>=sen){
        location[1] = 0;
        len = 1;    
    }
    else{
        len = text[location[0]].length;
    }
    holder.style.width = str(location[1]*100/len)+'%';
    location[1]++;
    if(location[1]>len){
        location[1]-=2;
    }
    else if(location[1]<0){
        location[1] = 0;
        location[0]++;
        holder.innerHTML = text[location[0]];
    }
}
var myVar = setInterval(loop, 1);