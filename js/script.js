/// <reference types="../@types/jquery"/>
// close nav
$(".close").on("click", function(){
    $(".left-side").css("width","0" )
    $("nav").css("display", "none")
    
})
// open nav
$(".open").on("click", function(){
    $(".left-side").css("width", "200px" )
    $(".left-side").css("left", "0")
    $("nav").css("display", "block")
    })
    

// slide toggle
$(".parent h3").on("click", function(){
    $(this).next().slideToggle()
    
})

// count down
$(window).on("scroll", function(){
let countDownDate= new Date("july 30, 2024 23:59:59").getTime()
// console.log(countDownDate);

let counter= setInterval(() => {
    let currentDate= new Date().getTime();

    let distanceDate= countDownDate-currentDate;


    let days= Math.floor(distanceDate / (1000*60*60*24)) ;
    // console.log(days);
    $(".days").text(days + " D");

    let hours= Math.floor((distanceDate % (1000*60*60*24)) /(1000*60*60));
    // console.log(hours);
    $(".hours").text(hours + " h")

    let minutes= Math.floor( distanceDate % (1000*60*60)/ (1000*60));
    $(".min").text(minutes + " m")


    let seconds= Math.floor( distanceDate % (1000*60)/ (1000));
    $(".sec").text(seconds + " s")

    

    if(distanceDate<0){
        clearInterval(counter)
    }

}, 1000);
})
    






// limit char in text area
$("textarea").on("keyup", function(){
    const char= $(this).val().length
    // console.log(char);
    $(".count").text(
        100-char <=0? "your available character finished" : 100-char
    )
    
    
})


