import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';
const dataObj = {};

onCheckStorage();

form.addEventListener('input', throttle((evt) => {
    dataObj[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataObj));
}, 500));

form.addEventListener('submit', evt => {
    evt.preventDefault();

    const formData = new FormData(form);
    formData.forEach((value, name) => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataObj)));
    evt.currentTarget.reset();
    console.log(dataObj);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
})

function onCheckStorage () {
    let storageData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storageData) {
      storageData = JSON.parse(storageData);
      Object.entries(storageData).forEach(([name, value]) => {
        dataObj[name] = value;
        form.elements[name].value = value;
      })
    };
    return;
}

