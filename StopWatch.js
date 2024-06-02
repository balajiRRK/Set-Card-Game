/* 
Stopwatch object that takes the parameters step which is whether the timer will increment or increment and duration if there is a time limit for decrements.
*/
function Stopwatch(step, duration){
    this.step =step;
    this.duration = duration; // duration is in seconds.
    this.time=0;
    this.test=0;
    
    /*
    If the timer is incrementing then step is +, otherwise  it is decrementing.
    */
    if(step=="+"){
       incInterval(this);
       
    }else{
        decInterval(this,this.duration);
    }
    this.tostring= function(){
        return this.time;
    }
    
}
/*
Increments the timer up by one, takes the Stopwatch object as a parameter.
*/
function incInterval(Stopwatch){
    // let initial = Stopwatch.time;
    Stopwatch.Interval= setInterval(function(){
        Stopwatch.time+=1;
    },1000); // 1000 miliseconds as that is equal to one second.
    // console.log("the id is "+ Stopwatch.Interval); // for debugging 
}
/*
decrements the timer up by one, takes the Stopwatch object as a parameter.
*/
function decInterval(Stopwatch, duration ){
    Stopwatch.time=duration;
    // let initial = Stopwatch.time;
    Stopwatch.Interval= setInterval(function(){Stopwatch.time-=1},1000); // settimeout is easier to implement for decrement.
}
/* erases the time and stops the interval */
function clearTime(Stopwatch){
    // console.log("Clearing interval with id "+Stopwatch.Interval); // for debugging
    clearInterval(Stopwatch.Interval);
    Stopwatch.time=0;
    
}
/* stops the interval but keeps the time */
function pauseTime(Stopwatch){
    // console.log("Pausing interval with id "+Stopwatch.Interval); // for debugging
    clearInterval(Stopwatch.Interval);
}
/* resumes the time after a pause */
function resumeIncTime(Stopwatch){
    Stopwatch.Interval= setInterval(function(){Stopwatch.time+=1},1000);
}
/* resumeDecTime was removed because I do not think it is needed for the game*/


