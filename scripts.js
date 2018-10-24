/* Function written with referencing w3schools.com:

https://www.w3schools.com/howto/howto_js_toggle_class.asp 
accessesd on 24/10/2018*/

function displayMenu() {
  let menuList = document.getElementById('menu');

  menuList.classList.toggle("show-menu");
}