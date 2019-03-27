import headerTmpl from "./templates/header.hbs";

const headerData = {
    title: 'Somethink'
}

const markup = headerTmpl(headerData);
document.body.insertAdjacentHTML('afterbegin', markup)

export default function init() {
    return btn.addEventListener('click', handleClick);

}