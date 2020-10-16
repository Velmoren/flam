const quiz = () => {
    const quizBlock = document.querySelector('.quiz');
    const form = quizBlock.querySelector('form');
    const formItems = form.querySelectorAll('fieldset');
    const answers = {
        "step1": {},
        "step2": {},
        "step3": {},
        "step4": {},
    }

    formItems[0].querySelector('.quiz-bottom__button-prev').style.display = 'none';

    formItems.forEach((formItem, index) => {
        formItem.addEventListener('click', (event) => {
            const target = event.target;

            if (target.classList.contains('quiz-bottom__button-next')) {
                event.preventDefault();
                formItem.style.display = 'none';
                formItems[index + 1].style.display = 'block';



                answers[`step${index}`].question = formItem.querySelector('.quiz-bottom__title').textContent;
                let asc = formItem.querySelectorAll('input:checked');
                console.log(asc)
            } else if (target.classList.contains('quiz-bottom__button-prev')) {
                event.preventDefault();
                formItem.style.display = 'none';
                formItems[index - 1].style.display = 'block';
            } else {
                return;
            }
        })
    })





}