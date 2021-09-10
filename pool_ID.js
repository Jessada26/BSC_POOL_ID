let yourLpInput = '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6';  
let poolInfo = '9';

let btn = document.querySelector("#readCollapse"+String(poolInfo)+" #btn_"+String(poolInfo));
let count = 0;

async function Auto() {
     if (String(document.querySelector("#myanswer_"+String(poolInfo)+" a").innerText)===String(yourLpInput)) {
       await alert("poolID is:"+(count-1))
     } else {
     document.querySelector("#readCollapse"+String(poolInfo)+" input").value = await count;
     await btn.click();
     if (btn.disabled) await count++;
     await setTimeout(Auto,1400);
  }
    }
    Auto();