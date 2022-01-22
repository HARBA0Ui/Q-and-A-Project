const questions = document.querySelectorAll('.question')

questions.forEach(function(question){
    const btn = question.querySelector('.buttons')
    const prevBtn = question.querySelector('.prev-btn')
    btn.addEventListener('click', function(){
        question.classList.toggle('active')
    })
})
