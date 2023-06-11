const id = document.querySelector('#advice-id');
const content = document.querySelector('#advice');
const img = document.querySelector('#generate');

const randomAdviced = async () => {
    const fetchData = await fetch('https://api.adviceslip.com/advice');
    const response = await fetchData.json();

    let advice = response.slip.advice;
    let adviceId = response.slip.id;
    
    return { advice, adviceId };
}


const generateNewAdvice = async () => {
    let response = await randomAdviced();
    
    let { adviceId, advice } = response;

    id.textContent = adviceId;
    content.textContent = '"' + advice + '"';
}


img.addEventListener('click', async () => {
    await generateNewAdvice();
})

