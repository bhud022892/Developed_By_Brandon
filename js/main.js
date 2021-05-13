// Typing Effect
const typeTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ['Developer', 'Designer', 'Content Creator', 'Father', 'Coffee Enthusiast'];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1500;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    // Type Text
    if(charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing')
        typeTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        // Erase Current Displayed Text
        cursorSpan.classList.remove('typing')
        setTimeout(erase, newTextDelay)
    }
}

function erase() {
    if(charIndex > 0) {
        if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing')
        typeTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay)
    }
    else {
        // Type New Word
        cursorSpan.classList.remove('typing')
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0
        setTimeout(type, typingDelay + 1000);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newTextDelay);
});

// Navigation Menu Toggle
const bodyElement = document.querySelector('body')
const menuToggle = document.querySelector('.hamburger-menu')
const heroElement = document.querySelector('.hero')
const navList = document.querySelector('.nav-list')

menuToggle.addEventListener('click', function (){
    bodyElement.classList.toggle('is-open')
    heroElement.classList.add('is-open')
})

navList.addEventListener('click', function (e) {
    let clickedElement = e.target

    if (clickedElement.classList[0] === 'nav-link'){
        bodyElement.classList.remove('is-open')
    }
})

// Click Off Nav
window.addEventListener('click', function (e) {
    let clickedElement = e.target

    if (clickedElement.matches('.is-open')){
        bodyElement.classList.remove('is-open')
        heroElement.classList.remove('is-open')
    }
})