// window.addEventListener("DOMContentLoaded", function() {
const target = document.getElementById('target');
const drop = document.getElementById('drop');

document.getElementById("main").addEventListener("click", function(e) {
    let start = false;
    if (!start) {
        start = true;
        if (e.pageY < 100) {
            drop.style.display = "block";
            drop.style.width = "20px";
            drop.style.height = "20px";
            drop.style.background = "blue";
            drop.style.position = "absolute";
            drop.style.left = e.pageX - 8 + "px"; //7.9807739257812
            console.log("Mouse: ", e.pageX);

            const tar_left = Math.round(window.scrollX + target.getBoundingClientRect().left);
            const drop_left = Math.round(window.scrollX + drop.getBoundingClientRect().left);
            console.log("Drop: ", drop_left);
            console.log("Target: ", tar_left);
            let id = null;
            let pos = 0;
            clearInterval(id);
            id = setInterval(frame, 5);

            function frame() {
                if (pos == 400) {
                    clearInterval(id);
                } else {
                    pos++;
                    drop.style.top = pos + "px";
                }
            }

            if (drop_left === tar_left) {
                setTimeout(function() { alert("Target Matched!"); }, 2300);
                console.log("Target Matched");
            } else {
                setTimeout(function() {
                    alert("Out of target!");
                    drop.style.display = "none";
                }, 2300);
                console.log("out of target");
            }
            start = false;
        }
    }
});

// });