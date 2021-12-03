/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

function scrollLock() {
    var divHeight = document.querySelector(".title");
    const topStart = divHeight.offsetTop;
    document.addEventListener("scroll", function(e) {
      var rect = divHeight.getBoundingClientRect();
      console.log(
        "T:" + rect.top,
        "R:" + rect.right,
        "B:" + rect.bottom,
        "L:" + rect.left
      );

      var top = window.pageYOffset || document.documentElement.scrollTop,
        left = window.pageXOffset || document.documentElement.scrollLeft;

      let test =
        top >= topStart
          ? (divHeight.style.cssText = "position: fixed; top: 0")
          : (divHeight.style.cssText =
              "position: absolute; top: " + topStart + "px");

      console.log(test, top, topStart);
    });
  }
  scrollLock();
  
  
  // interactive background mode
  
  
   var div =
              document.querySelector(".interactivebackground");

      div.addEventListener(
          "mousemove", function (e) {
              x = e.offsetX;
              y = e.offsetY;
              div.style.backgroundColor
                  = `rgb(${x+50}, ${y-50}, ${x +y})`;
          });