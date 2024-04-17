export function scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

let scrollBtn = document.getElementById("scrollBtn");
scrollBtn.addEventListener("click", scrollTop);

// 기본 정보
function scrollbasicInfo() {

    window.scrollTo({
        top: basicInfo.offsetTop,
        behavior: "smooth"
    });
}
let basicInfo = document.getElementById('basicInfo');
item_basicInfo.addEventListener('click', scrollbasicInfo);

// MBTI
function scrollmbti() {


    window.scrollTo({
        top: mbti.offsetTop,
        behavior: "smooth"
    });
}

let mbti = document.getElementById('mbti');
item_mbti.addEventListener('click', scrollmbti);

// 나의 장점
function scrollStrength() {


    window.scrollTo({
        top: strength.offsetTop,
        behavior: "smooth"
    });
}

let strength = document.getElementById('strength');
item_strength.addEventListener('click', scrollStrength);

// 협업 스타일
function scrollWorkingStyle() {


    window.scrollTo({
        top: workingStyle.offsetTop,
        behavior: "smooth"
    });
}

let workingStyle = document.getElementById('workingStyle');
item_workingStyle.addEventListener('click', scrollWorkingStyle);

// 취미
function scrollHobby() {

    window.scrollTo({
        top: hobby.offsetTop,
        behavior: "smooth"
    });

    
}
let hobby = document.getElementById('hobby');
    item_hobby.addEventListener('click', scrollHobby);