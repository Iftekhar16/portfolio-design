// ---------------------------------------------------------------------------------------------------------------------------------------
// loader
// ---------------------------------------------------------------------------------------------------------------------------------------
var body = document.querySelector('.body');
var loaderContainer = document.querySelector('.loader-container');
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function(){
        // document.querySelector('.skills-container').scrollIntoView(false);
        body.scrollIntoView({ inline: "start"});
        loaderContainer.style.transform = "translateY(200%)";
        body.style.overflow = "auto";
        body.style.height = "auto";
    });
});

// ---------------------------------------------------------------------------------------------------------------------------------------
// hero
// ---------------------------------------------------------------------------------------------------------------------------------------


var btnHero = document.querySelector('.btn-hero');
var contactContainer = document.querySelector('.contact-container');
btnHero.addEventListener("click",()=>{
    contactContainer.scrollIntoView({ inline: "start", behavior: "smooth"}); 
});



// ---------------------------------------------------------------------------------------------------------------------------------------
// skills details
// ---------------------------------------------------------------------------------------------------------------------------------------

document.querySelector('.skills-grid-item1').addEventListener("click",()=>{
    document.querySelector('.skill-detail1').scrollIntoView({ block: "start", behavior: "smooth"}); 
});
document.querySelector('.skills-grid-item2').addEventListener("click",()=>{
    document.querySelector('.skill-detail2').scrollIntoView({ block: "start", behavior: "smooth"}); 
});
document.querySelector('.skills-grid-item3').addEventListener("click",()=>{
    document.querySelector('.skill-detail3').scrollIntoView({ block: "start", behavior: "smooth"}); 
});
document.querySelector('.skills-grid-item4').addEventListener("click",()=>{
    document.querySelector('.skill-detail4').scrollIntoView({ block: "start", behavior: "smooth"}); 
});


// ---------------------------------------------------------------------------------------------------------------------------------------
// works
// ---------------------------------------------------------------------------------------------------------------------------------------
var workLeft = document.querySelector('.btn-work-left');
var workRight = document.querySelector('.btn-work-right');
var workCardsContainer = document.getElementById('works-cards-container');
var translationValue = 0;
var inPosition = 1;
var workChildrenLength = workCardsContainer.children.length;
var workChildrenWidth = workCardsContainer.children[0].offsetWidth;

const workComputedStyle = window.getComputedStyle(workCardsContainer);
var workGap = parseInt(workComputedStyle.gap, 10);

workLeft.addEventListener("click", () => {
    if(inPosition>1){
        workLeft.style.opacity = "100%";
        translationValue += (workChildrenWidth+workGap);
        workCardsContainer.style.transform = "translateX(" + translationValue + "px)";
        inPosition--;
        if(inPosition<=1){
            workLeft.style.opacity = "30%";
        }
        if(inPosition<workChildrenLength){
            workRight.style.opacity = "100%";
        }
    }
});

workRight.addEventListener("click", () => {
    if(inPosition<workChildrenLength){
        translationValue -= (workChildrenWidth+workGap);
        workCardsContainer.style.transform = "translateX(" + translationValue + "px)";
        inPosition++;
        if(inPosition>=workChildrenLength){
            workRight.style.opacity = "30%";
        }
        if(inPosition>1){
            workLeft.style.opacity = "100%";
        }
    }
});



// ---------------------------------------------------------------------------------------------------------------------------------------
// designs
// ---------------------------------------------------------------------------------------------------------------------------------------
var designLeft = document.querySelector('.btn-design-left');
var designRight = document.querySelector('.btn-design-right');
var designCardsContainer = document.getElementById('designs-cards-container');
var translationValue = 0;
var inPosition = 1;
var designChildrenLength = designCardsContainer.children.length;
var designChildrenWidth = designCardsContainer.children[0].offsetWidth;

const designComputedStyle = window.getComputedStyle(designCardsContainer);
var designGap = parseInt(designComputedStyle.gap, 10);

designLeft.addEventListener("click", () => {
    if(inPosition>1){
        designLeft.style.opacity = "100%";
        translationValue += (designChildrenWidth+designGap);
        designCardsContainer.style.transform = "translateX(" + translationValue + "px)";
        inPosition--;
        if(inPosition<=1){
            designLeft.style.opacity = "30%";
        }
        if(inPosition<designChildrenLength){
            designRight.style.opacity = "100%";
        }
    }
});

designRight.addEventListener("click", () => {
    if(inPosition<designChildrenLength){
        translationValue -= (designChildrenWidth+designGap);
        designCardsContainer.style.transform = "translateX(" + translationValue + "px)";
        inPosition++;
        if(inPosition>=designChildrenLength){
            designRight.style.opacity = "30%";
        }
        if(inPosition>1){
            designLeft.style.opacity = "100%";
        }
    }
});