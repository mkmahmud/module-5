// const black = document.getElementById('black')
// const red = document.querySelector('#red');
// const green = document.querySelector('#green');
// const blue = document.querySelector('#blue');

// red.onclick = bRed; 

// function bRed(){
//     document.body.style.background = 'red';
// }

// green.addEventListener('click', function(){
//     document.body.style.background = 'green';
//     green.innerText = 'Green,  You Already checked this ';
// });


// blue.addEventListener('click', function(){
//     const div = document.createElement('div');
//     const divText = div.innerText = 'This is new Div'
//     const mainDiv = document.querySelector('.main').appendChild(divText);
// })

// const submit = document.querySelector('#submit');


// submit.addEventListener('click',function(){
//    const commVal = document.querySelector('#userComment').value;
   
//    const commUl = document.querySelector('.comment-list');
//    const createComm = document.createElement("li");
//    const innerText = createComm.innerText = commVal;
//    commUl.appendChild(createComm);
//    document.querySelector('#userComment').value = '';

// });


// //  Matched 

// const mainNumber = document.querySelector('.board h2');
// const randomNumber = Math.round(Math.random() * 909089);
// mainNumber.innerText = randomNumber;

// const userClicked = document.querySelector('#userNum');



// userClicked.addEventListener('keyup', function(e){

// // console.log(randomNumber);
// // console.log(e.target.value);

//     if(randomNumber == e.target.value){
//         document.querySelector('#matchBtn').style.background = 'green';
//         document.querySelector('#matchBtn').innerText = 'Matched';
//         userClicked.setAttribute('disabled', true)
//     }else{
//         document.querySelector('#matchBtn').style.background = 'red';
//         document.querySelector('#matchBtn').innerText = 'please correct the number';
//     }
// });

// 


const h2s = document.getElementsByTagName('h1');
const h21 = document.querySelector('.heading1');
const headings = document.querySelectorAll ('.heading');

const parent = h21.parentNode;
parent.style.background = 'lightblue';
// console.log(parent)

for(h2 of h2s){
    h2.style.color = 'red';
}


for(heading of headings){
    heading.style.border = '5px solid black'
    heading.style.borderRadius = '30px'
}

const clickMe = document.querySelector('.clickMe');

clickMe.addEventListener('click', function(){
    console.log('Hey');
});

const buyNowBtn = document.querySelectorAll('.buyNow button');
for(buynow of buyNowBtn){
    buynow.addEventListener('click',function(e){
        const clickedBtn = e.target;
        clickedBtn.parentNode.removeChild(clickedBtn);
    })
}

const image = document.querySelector('.image');
const sliderImg = document.querySelectorAll('.sliderImg');

const sliderLength = sliderImg.length - 1;

image.addEventListener('mouseenter', function(e){
    const getRandom = Math.round(Math.random() * sliderLength);
    sliderImg[getRandom].style.display = 'block';
    console.log(sliderImg[getRandom])
});

const dblClick = document.querySelector('.dblClick');
dblClick.addEventListener('dblclick', function(e){
    dblClick.style.background = 'red';
}) 

