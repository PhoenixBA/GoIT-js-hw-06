 /**Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.
 #validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
*/


const inputValid = document.querySelector('#validation-input');

inputValid.addEventListener('blur', onBlurInput);
function onBlurInput(event) {

    const inputLength = event.currentTarget.value.length;

    if (inputLength == Number(inputValid.dataset.length)) {
        inputValid.classList.remove('invalid');
        inputValid.classList.add('valid');
    }
    else {
       inputValid.classList.remove('valid');
       inputValid.classList.add('invalid'); 
    }
 };
 