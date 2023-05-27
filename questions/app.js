//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function () {
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        });
        question.classList.toggle('show-text');
    });
});
// traversing the dom

// const plusIcon = document.querySelectorAll('.plus-icon');
// const minusIcon = document.querySelectorAll('.minus-icon');
// const question = document.querySelectorAll('.question');

// plusIcon.forEach((plusIcon, index) => {
//     plusIcon.addEventListener('click', () => {
//         question[index].classList.add('show-text');
//     });
// });

// minusIcon.forEach((plusIcon, index) => {
//     plusIcon.addEventListener('click', () => {
//         question[index].classList.remove('show-text');
//     });
// });

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });
