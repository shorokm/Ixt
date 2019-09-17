document.getElementById('menutoggle').onclick= function() {
    var menu = document.getElementById('tijdlijn');
    if (menu.className == 'inactive') {
        menu.className = 'active';
    } else {
        menu.className = 'inactive';
    }
};
