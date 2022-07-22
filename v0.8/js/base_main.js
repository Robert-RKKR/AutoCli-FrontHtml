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
var blockSidebar = document.getElementById("block_sidebar");
var sidebarButton = document.getElementById("sidebar_action");

blockSidebar.addEventListener("click", function(event) {

    if(sidebar.classList.contains("sidebar_blocked") === false) {
        sidebar.classList.add("sidebar_blocked");
        document.cookie = "sidebar=false;path=/";
    } else {
        sidebar.classList.remove("sidebar_blocked");
        document.cookie = "sidebar=true;path=/";
    }

});

sidebar.addEventListener("mouseenter", menuAction);
sidebar.addEventListener("mouseleave", menuAction);

function menuAction() {

    setTimeout(function() {
        if(sidebar.classList.contains("sidebarf") === false) {
            sidebar.classList.add("sidebarf");
        } else {
            sidebar.classList.remove("sidebarf");
        }
    }, 0);

}


// MAIN COOKIES READER:
var cookies = document.cookie.split(";");

for(let i=0; i<cookies.length; i++) {
    let cookie = cookies[i].split("=");

    for(let i=0; i<cookies.length; i++) {

        // SHOW HIDE WHOLE MENU WITH COOKIES:
        if(cookie[i] === "sidebar" || cookie[i] === " sidebar") {
            if(cookie[1] == "false") {
                sidebar.classList.add("sidebar_blocked");
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
