import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';
const dataObj = {};

onCheckStorage();

form.addEventListener('input', throttle(onCreateLocalStorage, 500));

function onCreateLocalStorage(evt) {
    dataObj[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataObj));
};

form.addEventListener('submit', evt => {
    evt.preventDefault();
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

