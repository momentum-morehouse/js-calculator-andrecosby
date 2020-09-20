let boxes = document.querySelectorAll(".box")
let boxes2 = document.querySelectorAll(".box2")
let calculations = document.querySelector("calculatorin")
let results =0;
for (let box of boxes){
    box.addEventListener("click",function(event){
        if (box.id === "num-="){
            Solve(calculations);
            calculations.textcontent = results;
            console.log(results);

            //if(box.addeventlistener("click", function(event){
                    calculations.textContent = box.textContent;
            }));
        }
        }
    })
}