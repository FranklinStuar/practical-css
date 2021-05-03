const dynamicForms = document.querySelectorAll('.dymanic-step-form');

function setDynamicForm(dynamicForm){
    const initTitleForm = dynamicForm.querySelector('.init-title')
    const btnStart = initTitleForm.querySelector('.start-step')
    const btnNextStep = dynamicForm.querySelector('.next-step')
    const btnPrevStep = dynamicForm.querySelector('.prev-step')
    const containerSteps = dynamicForm.querySelector('.step-container')
    const steps = dynamicForm.querySelectorAll('.step')
    let currentStep = 0

    btnStart.onclick = function(){
        dynamicForm.classList.add('step-active')
        steps[0].classList.add('active')
        setTimeout(() => {
            dynamicForm.removeChild(initTitleForm)
        }, 500);
    }
    steps.forEach(step => {
        // 
    });

    btnNextStep.onclick = function(){
        if(currentStep < steps.length-1){
            const stepActive = dynamicForm.querySelector('.step.active')
            stepActive.classList.remove('active')
            steps[++currentStep].classList.add('active')
            if(currentStep == steps.length-1)
                btnNextStep.classList.add('disabled')
            else
                btnNextStep.classList.remove('disabled')
            btnPrevStep.classList.remove('disabled')
        }
    }
    btnPrevStep.onclick = function(){
        if(currentStep > 0){
            const stepActive = dynamicForm.querySelector('.step.active')
            stepActive.classList.remove('active')
            steps[--currentStep].classList.add('active')
            if(currentStep == 0)
                btnPrevStep.classList.add('disabled')
            else
                btnPrevStep.classList.remove('disabled')
            btnNextStep.classList.remove('disabled')
        }
    }
}
dynamicForms.forEach(dynamicForm => {
    setDynamicForm(dynamicForm)
});