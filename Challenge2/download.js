document.getElementById('menutoggle').onclick= function() {
    var menu = document.getElementById('menu');
    if (menu.className == 'inactive') {
        menu.className = 'active';
    } else {
        menu.className = 'inactive';
    }
};
