function getPrev(){
    return document.getElementById("prev").innerText;
}

function printPrev(num){
    document.getElementById("prev").innerText=num;
}

function getNow(){
    return document.getElementById("pres").innerText;
}

function printNow(num){
    document.getElementById("pres").innerText=num;
}


function formatOutput(num){
    if(num=="-"){
        return "";
    }
    const n=Number(num);
    z=n.toLocaleString("en");
    return z;
}

function convertNumber(num){
    return Number(num.replace(/,/g,""));
}

function clear(){
    printPrev(0);
    printNow(0);
}

clear();

let operators=document.getElementsByClassName("op");

for(let i=0;i<operators.length;i++){
    operators[i].addEventListener("click",function(){

        if(this.id=="all-clear"){

            printPrev("");
            printNow("");
        }
        else if(this.id=="delete"){

            let ans=convertNumber(getNow()).toString();
            if(ans){
                ans=ans.substr(0,ans.length-1);
                printNow(ans);
            }
        }
        else {
            let prev=getPrev();
            let now=getNow();

            if(now=="" && prev!=""){

                if(isNaN(prev[prev.length-1])){
                    prev=prev.substr(0,prev.length-1);
                }
            }

            if(now!="" || prev!=""){
                now=now==""?now:convertNumber(now);
                prev=prev+now;
                if(this.id=="="){
                    const ans=eval(prev);
                    printPrev(ans);
                    printNow("");
                }else{
                    prev=prev+this.id;
                    printPrev(prev);
                    printNow("");

                }
            }
        }
    });
}

let numbers=document.getElementsByClassName("num");
for(let i=0;i<numbers.length;i++){
    numbers[i].addEventListener("click",function(){

        let ans=convertNumber(getNow());

        if(ans!=NaN){

            ans=ans+this.id;
            ans=formatOutput(ans);
            printNow(ans);
        }
    });
}
