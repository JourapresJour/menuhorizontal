const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length;
for(let i = 0; i< menuItem.length; i++){
    if(menuItem[i].href === currentLocation){
        menuItem[i].className = "active";
    }
}