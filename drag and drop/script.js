let lists = document.getElementsByClassName("list");
let rightbox = document.getElementById("rightbox");
let leftbox = document.getElementById("leftbox");
// let selected = null;

for (let list of lists) {
    list.addEventListener("dragstart", function(e) {
         let selected = e.target;


        rightbox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });
        
        rightbox.addEventListener("drop", function(e) {
            e.preventDefault();
            if (selected) {
                rightbox.appendChild(selected);
                selected = null;
            }
        });

        leftbox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });
        
        leftbox.addEventListener("drop", function(e) {
            e.preventDefault();
            if (selected) {
                leftbox.appendChild(selected);
                selected = null;
            }
        });


    });
}



