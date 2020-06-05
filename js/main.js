// const $first = document.getElementById('first');
// const list =document.getElementsById('list');


// function viewMenu() {
//     $first.addEventListener('click', viewList);
// }
// function viewList(){
//     list.classList.add('list-show');
    
// }
// function main() {
//     viewMenu();
    
// }
// document.addEventListener('DOMContentLoaded', main);

window.onload = function() {
    const first = document.getElementById('first');
    const list = document.getElementById('list');
    const close1 = document.getElementById('close1');
    const close2 = document.getElementById('close2');
    const close3 = document.getElementById('close3');

    function viewMenu() {
        first.addEventListener('click', viewList);
    }
    function closeMenu() {
        close1.addEventListener("click", hideList);
        close2.addEventListener("click", hideList);
        close3.addEventListener("click", hideList);
    }
    function viewList(){
        list.classList.toggle('list-show');
    }
    function hideList(){
        list.classList.remove("list-show")
    }
    viewMenu();
    closeMenu();
  };