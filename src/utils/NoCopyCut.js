//NoClickRight
/* 
document.addEventListener(
  "contextmenu",
  function (e) {
    event.preventDefault();
  },
  false
);
*/
//NoCopy
document.addEventListener(
  "copy",
  function (e) {
    // Change the copied text if you want
    e.clipboardData.setData(
      "text/plain",
      "No se permite copiar en esta página web"
    );

    // Prevent the default copy action
    e.preventDefault();
  },
  false
);

//Delete dragend
HTMLElement.addEventListener("dragend", function (e) {
  e.preventDefault();
});
