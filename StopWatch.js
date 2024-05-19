function Stopwatch(step, duration){
    this.step =step;
    this.duration = duration;
    this.time=0;
    this.test=0;
    
    if(step=="+"){
       incInterval(this);
       
    }else{
        decInterval(this,this.duration);
    }
    this.tostring= function(){
        return this.time;
    }
    
}

function incInterval(Stopwatch){
    // let initial = Stopwatch.time;
    Stopwatch.Interval= setInterval(function(){Stopwatch.time+=1},1000);
    console.log("the id is "+ Stopwatch.Interval);
}

function decInterval(Stopwatch, duration ){
    Stopwatch.time=duration;
    // let initial = Stopwatch.time;
    return setInterval(function(){Stopwatch.time-=1},1000);
}

function clearTime(Stopwatch){
    console.log("Clearing interval with id "+Stopwatch.Interval);
    clearInterval(Stopwatch.Interval);
    Stopwatch.time=0;
    
}
function pauseTime(Stopwatch){
    clearInterval(Stopwatch.Interval);
}
function resumeIncTime(Stopwatch){
    return setInterval(Stopwatch.time+=1,1000);
}
function resumeIncTime(Stopwatch){
    return setInterval(Stopwatch.time-=1,1000);
}

