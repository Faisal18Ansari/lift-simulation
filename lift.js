let floor_container=document.querySelector(".floorcont");
console.log(floor_container);
let btn_cont=floor_container.querySelectorAll(".butt");
console.log(btn_cont);
btn_cont.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        lift_selection(ele);
        // console.log("helo");
    })
    
});
let lift_state=[
    {
        "id":"lift1",
        "current_floor":"1",
        "state":"rest"
    },
    {
        "id":"lift2",
        "current_floor":"1",
        "state":"rest"
    },
    {
        "id":"lift3",
        "current_floor":"1",
        "state":"rest"
    },
    {
        "id":"lift4",
        "current_floor":"1",
        "state":"rest"
    }
];
function lift_selection(btn){
    let free_lift=lift_state.filter((ele)=>{
        return ele.state=="rest";
    })
    lift_mover(free_lift,btn)
}
function lift_mover(free_lift,btn){
    let floor_call=parseInt(btn.value);
    console.log(floor_call);
    console.log(free_lift);
    let lift=document.querySelector(`.${free_lift[0].id}`)
    let x=free_lift[0].current_floor-floor_call;
    if (x<0){
        x=x*-1
    }
    console.log(lift);
    free_lift[0].state="working";
    free_lift[0].current_floor=floor_call;
    lift.style.transitionTimingFunction="linear";
    lift.style.transitionDuration=`${x*3}s`;
    lift.style.bottom=`${(floor_call-1)*150+30}px`;
    btn.disabled=true;
    setTimeout(()=>{
        free_lift[0].state="rest";
        btn.disabled=false;
    },`${x*4000}`)
}

