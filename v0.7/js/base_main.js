// SIDEBAR - CLOSE / OPEN SUBMENU ITEMS WITH COOKIES:
var menuItems = document.getElementsByClassName("main_menu_submenu_link");
 
for(let i=0; i<menuItems.length; i++) {
    let toggleButton = menuItems[i];
    let subMenu = toggleButton.nextElementSibling;
    let subMenuIcon = toggleButton.querySelector(".main_menu_link_submenu_icon");
 
    toggleButton.addEventListener("click", function(event) {

        console.log(subMenu)
       
        if(subMenu.classList.contains("collapse") === false) {
            subMenu.classList.add("collapse");
            subMenuIcon.classList.remove("rotate");
            document.cookie = "open_menu_action=false;path=/";
        } else {
            for(let i=0; i<menuItems.length; i++) {
                let activeElementInside = menuItems[i].nextElementSibling
                let subMenuIconInside = menuItems[i].querySelector(".main_menu_link_submenu_icon");
                activeElementInside.classList.add("collapse");
                subMenuIconInside.classList.remove("rotate");
            }
            subMenu.classList.remove("collapse");
            subMenuIcon.classList.add("rotate");
            document.cookie = "open_menu_action=" + i + ";path=/";
        } 
 
    });
 
}


// SIDEBAR ACTION - SHOW HIDE WHOLE MENU WITH COOKIES:
var sidebar = document.getElementById("sidebar");
var sidebarButton = document.getElementById("sidebar_action");

sidebarButton.addEventListener("click", function(event) {

    if(sidebar.classList.contains("smallbar") === false) {
        sidebar.classList.remove("largebar");
        sidebar.classList.add("smallbar");
        document.cookie = "sidebar=false;path=/";
    } else {
        sidebar.classList.remove("smallbar");
        sidebar.classList.add("largebar");
        document.cookie = "sidebar=true;path=/";
    }

    for(let i=0; i<menuItems.length; i++) {
        let activeElementInside = menuItems[i].nextElementSibling
        let subMenuIconInside = menuItems[i].querySelector(".main_menu_link_submenu_icon");
        activeElementInside.classList.add("collapse");
        subMenuIconInside.classList.remove("rotate");
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
