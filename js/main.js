const $first = document.getElementById('first');
const list =document.getElementsByClassName('list');

function viewMenu() {
    $first.addEventListener('click', viewList);
}
function viewList(){
    list.classList.add('list-show');

}
document.addEventListener('DOMContentLoaded', main);