const ratingButtons = document.querySelectorAll('.rating-button');
const submitButton = document.querySelector('.submit-button');
const front = document.querySelector('.front');
const back = document.querySelector('.back');
const result = document.querySelector('.result span');

back.style.display= 'none';

submitButton.addEventListener('click', function(){
    let selected = document.querySelector('.selected');
    
    if(!selected) {
        alert('Please, select a rating.');
    } else {
        result.textContent = selected.textContent;
        front.style.display = 'none';
        back.style.display ='flex';
    }
})


ratingButtons.forEach(btn => {
    btn.addEventListener('click', function(e){
        ratingButtons.forEach(btn => {
            btn.classList.remove('selected');
        })
        e.target.classList.add('selected');
    });
    
});
