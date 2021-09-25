
// dashboard.style.width ='500px'
console.log()
// console.log()
// console.log(document.getElementsByClassName('dashboard'))
let slide =0 
function showDashboard(){
    if (slide ===0){
    document.querySelector('.dashboard-wrapper').style.display = 'Block'
    document.querySelector('.dashboard-wrapper').style.left = '0px'
    document.querySelector('.home-dashboard-slider').style.minWidth = '270px'
    document.querySelector('.home-dashboard-slider').style.position = 'absolute'
    document.querySelector('.dashboard-wrapper').style.transition = 'left .9s ease-in-out'
    document.querySelector('.dashboard-wrapper').style.position = 'relative'
    // document.querySelector('.dashboard-wrapper').style.zIndex = '1'
    document.querySelector('.show-hide-dashboard').style.background = 'linear-gradient(135deg, rgba(255, 248, 134, 0.7) 0%, rgba(240, 114, 182, 0.7) 100%)'
    // document.querySelector('.dashboard-pointer').style.display = 'none'
    document.querySelector('.dashboard-pointer').style.width = '8px'
    document.querySelector('.dashboard-pointer').style.borderColor = 'rgba(251, 36, 255, 0.22)'
    document.querySelector('.dashboard-pointer').style.boxShadow = '0px 2px 4px rgba(221, 102, 202, 0.58)'
    document.querySelector('.dashboard-pointer > img').style.width = '0px'
    console.log('called showDashboard function by clicking "button.dashboard"')
    slide = 1
    }
    else{
        document.querySelector('.home-dashboard-slider').style.position = 'relative'
        document.querySelector('.dashboard-wrapper').style.position = 'absolute'
        document.querySelector('.dashboard-wrapper').style.left = '-300px'
        document.querySelector('.home-dashboard-slider').style.minWidth = '0px'
        document.querySelector('.dashboard-wrapper').style.transition = 'left .5s ease-in-out'
        slide = 0
    }

}



let container = document.querySelectorAll('.rate-star')

for (let i=0;i<container.length;i++){
        container[i].addEventListener("mouseover", mySecondFunction);
        function mySecondFunction() {
          console.log(container[i].attributes) 
        }
}


  console.log('hello')
  
// console.log(container.children)


// .parent()
// .parents()
// .children()
// .find()
// .siblings()

// $(tag)
// $(.class)
// $(#ID)
