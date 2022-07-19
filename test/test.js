var boxPanels = document.getElementsByClassName("box_panel");

for(let i=0; i<boxPanels.length; i++) {
    let boxPanel = boxPanels[i];
    let boxActionButton = boxPanel.querySelector(".action_button");
    let options = boxPanel.querySelector(".options");

    boxActionButton.addEventListener("mouseenter", function(event) {
        options.classList.remove("box_panel_hidden");
    });

    boxPanel.addEventListener("mouseleave", function(event) {
        options.classList.add("box_panel_hidden");
    });

};
