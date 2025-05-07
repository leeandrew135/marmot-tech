function showSidebar() {
  var sidebar = document.getElementById("navBar");
  var sidebarbutton = document.getElementById("sidebarButton");
  var shade = document.getElementById("navBar2");

  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-75vw"; // Move the sidebar off-screen
    shade.style.display = "none";
    sidebarbutton.style.position = "absolute";
  } else {
    sidebar.style.left = "0"; // Move the sidebar on-screen
    sidebar.style.display = "block";
    shade.style.display = "block";
    sidebarbutton.style.position = "fixed";
  }
}
