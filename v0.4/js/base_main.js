// LEFT PANEL ACTION - CLOSE / OPEN SUBMENU ITEMS WITH COOKIES:
var menuItems = document.getElementsByClassName("menu_link_submenu");
 
for(let i=0; i<menuItems.length; i++) {
    let toggleButton = menuItems[i];
    let subMenu = menuItems[i].nextElementSibling;
 
    toggleButton.addEventListener("click", function(event) {

        console.log(subMenu)
       
        if(subMenu.classList.contains("collapse") === false) {
            subMenu.classList.add("collapse");
            document.cookie = "open_menu_action=false;path=/";
        } else {
            for(let i=0; i<menuItems.length; i++) {
                let activeElementInside = menuItems[i].nextElementSibling
                activeElementInside.classList.add("collapse");
            }
            subMenu.classList.remove("collapse");
            document.cookie = "open_menu_action=" + i + ";path=/";
        } 
 
    });
 
}


// LEFT PANEL ACTION - SHOW HIDE WHOLE MENU WITH COOKIES:
var sidebar = document.getElementById("sidebar");
var sidebarButton = document.getElementById("sidebar_action");

sidebarButton.addEventListener("click", function(event) {

    if(sidebar.classList.contains("collapse") === false) {
        sidebar.classList.add("collapse");
        document.cookie = "sidebar=false;path=/";
    } else {
        sidebar.classList.remove("collapse");
        document.cookie = "sidebar=true;path=/";
    } 

})


// USER MENU ACTION - SHOW HIDE USER MENU:
var userMenu = document.getElementById("user_submenu");
var userMenuButton = document.getElementById("user_menu");

userMenuButton.addEventListener("click", function(event) {

    if(userMenu.classList.contains("collapse") === false) {
        userMenu.classList.add("collapse");
    } else {
        userMenu.classList.remove("collapse");
    } 

})


// MAIN COOKIES READER:
var cookies = document.cookie.split(";");

for(let i=0; i<cookies.length; i++) {
    let cookie = cookies[i].split("=");

    for(let i=0; i<cookies.length; i++) {

        // SHOW HIDE WHOLE MENU WITH COOKIES:
        if(cookie[i] === "sidebar" || cookie[i] === " sidebar") {
            if(cookie[1] == "false") {
                sidebar.classList.add("collapse");
            }
        } else if(cookie[0] === "open_menu_action" || cookie[0] === " open_menu_action") {
            if(cookie[1] != "false") {
                let menu_number = parseInt(cookie[1]);
                for(let i=0; i<menuItems.length; i++) {
                    if(i === menu_number) {
                        let activeElement = menuItems[i].nextElementSibling;
                       
                        activeElement.classList.remove("collapse");
                    }
                }
            }
        }

    }

}
