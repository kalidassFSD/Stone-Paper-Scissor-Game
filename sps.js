let opts = document.querySelectorAll(".opt"); //options
let userChoose = document.querySelector("#userChoose");   //user td
let computerChoose = document.querySelector("#computerChoose"); //computer td

let userSpace = document.querySelector("#uS");
let computerSpace = document.querySelector("#cS");

let uLabel = document.querySelector("#ulabel");
let cLabel = document.querySelector("#clabel");

 let computerOption=["stone","scissor","paper"];
 let userChoice,computerChoice;
 let upoint=0,cpoint=0;

opts.forEach((opt)=>{
    opt.addEventListener("click",()=>{
             userChoice = opt.getAttribute("id");
            userSpace.setAttribute("id",userChoice)
             computerChoice =computerOption[Math.floor(Math.random()* computerOption.length)];
            computerSpace.setAttribute("id",computerChoice);
            checkWinner();
    });
});
const checkWinner = ()=>{
    console.log(userChoice);
    console.log(computerChoice);
            if(userChoice === computerChoice){
                    uLabel.style.backgroundColor="purple";
                    cLabel.style.backgroundColor="purple";
            }
            else if(userChoice==="stone"&& computerChoice==="paper" ||userChoice==="paper"&& computerChoice==="stone"){
                        if(userChoice==="paper")
                        {
                            uLabel.style.backgroundColor="green";
                            cLabel.style.backgroundColor="red";
                            upoint++;
                        }
                        else
                        {
                            cLabel.style.backgroundColor="green";
                            uLabel.style.backgroundColor="red";
                            cpoint++;
                        }
            }
            else if(userChoice==="scissor"&& computerChoice==="paper" ||userChoice==="paper"&& computerChoice==="scissor"){
                if(userChoice==="scissor")
                {
                    uLabel.style.backgroundColor="green";
                    cLabel.style.backgroundColor="red";
                    upoint++;
                }
                else
                {
                    cLabel.style.backgroundColor="green";
                    uLabel.style.backgroundColor="red";
                    cpoint++;
                }
            }
            else if(userChoice==="scissor"&& computerChoice==="stone" ||userChoice==="stone"&& computerChoice==="scissor"){
                if(userChoice==="stone")
                {
                    uLabel.style.backgroundColor="green";
                    cLabel.style.backgroundColor="red";
                    upoint++;
                }
                else
                {
                    cLabel.style.backgroundColor="green";
                    uLabel.style.backgroundColor="red";
                    cpoint++;
                }
            }
            uLabel.innerText=`You : ${upoint}`;
            cLabel.innerText=`Computer : ${cpoint}`;
};