function openInfo(event, info) {
    var i, tab_content, tab_links;
    tab_content = document.getElementsByClassName("tab__content");
    for (i = 0; i < tab_content.length; i++) {
        tab_content[i].style.display = "none";
    }
    tab_links = document.getElementsByClassName("tab__links");
    for (i = 0; i < tab_links.length; i++) {
        tab_links[i].className = tab_links[i].className.replace(" active", "");
    }
    document.getElementById(info).style.display = "block";
    event.currentTarget.className += " active";
}