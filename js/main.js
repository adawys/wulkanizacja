let $first;

function prepareDOMMenu() {
    $first = document.getElementById('first')

}

function viewMenu() {
    $first.addEventListener('click', viewList)
}

document.addEventListener('DOMContentLoaded', main);