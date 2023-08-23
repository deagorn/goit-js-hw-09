import { Notify } from 'notiflix';

const refs = {
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  btn: document.querySelector('button'),
  form: document.querySelector('form'),
}

refs.form.addEventListener('submit', onSubmitBtn);

function onSubmitBtn(e) {
  console.log(refs.btn);
  e.preventDefault();
  
  const amountValue = Number(refs.amount.value);
  const delayValue = Number(refs.delay.value);
  const stepValue = Number(refs.step.value);
  
  for (let i = 1; i <= amountValue; i++) {
    let totalDelay = delayValue + stepValue * (i - 1);
    setTimeout(() => {
      createPromise(i, totalDelay);
    }, totalDelay);
  };

  refs.form.reset();
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

 const promise = new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(Notify.success(`Fulfilled promise ${position} in ${delay}`));
    } else {
      reject(Notify.failure(`Rejected promise ${position} in ${delay}`));
    }
 });
  return promise;
}