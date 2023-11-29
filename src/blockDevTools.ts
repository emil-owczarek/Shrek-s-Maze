function blockDevTools() {
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  document.addEventListener("keydown", function (e) {
    if (
      e.key === "F12" ||
      (e.ctrlKey &&
        e.shiftKey &&
        (e.key === "I" || e.key === "C" || e.key === "J"))
    ) {
      e.preventDefault();
      alert("Use of developer tools is blocked on this page.");
    }
  });
}

export default blockDevTools;
