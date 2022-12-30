// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
$(function() { 
    $("#btnSave").click(function() { 
        html2canvas($("tbody"), {
            onrendered: function(canvas) {
                theCanvas = canvas;
                document.body.appendChild(canvas);

                // Convert and download as image 
                Canvas2Image.saveAsPNG(canvas); 
                $("#img-out").append(canvas);
                // Clean up 
                //document.body.removeChild(canvas);
            }
        });
    });
}); 
//tooltip
$(document).ready(function () {
  //can also be wrapped with:
  //1. $(function () {...});
  //2. $(window).load(function () {...});
  //3. Or your own custom named function block.
  //It's better to wrap it.

  //Tooltip, activated by hover event
  $("body").tooltip({   
    selector: "[data-toggle='tooltip']",
    container: "body"
  })
    //Popover, activated by clicking
    .popover({
    selector: "[data-toggle='popover']",
    container: "body",
    html: true
  });
  //They can be chained like the example above (when using the same selector).
  
});
// down arrow
document.querySelector("#btnSave").addEventListener("click", function(){
    document.querySelector(".arrow").style.display = "block";
});
// hide down arrow on scroll
$(window).scroll(function () {$('.arrow').hide(0.1);});
// add  item on enter
$(".form-control").keyup(function(event){
    if(event.keyCode == 13){
        $(".addPatient").click();
    }
});