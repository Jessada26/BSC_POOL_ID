let yourLpInput = "0x01ecc44Ddd2D104F44D2AA1A2bD9DFbC91aE8275";
let poolInfo = "9";

let btn = document.querySelector(
  "#readCollapse" + String(poolInfo) + " #btn_" + String(poolInfo)
);
let count = 0;

async function Auto() {
  if (
    String(
      document.querySelector("#myanswer_" + String(poolInfo) + " a").innerText
    ) === String(yourLpInput)
  ) {
    if (Number(count - 1) === -1) {
      await alert(
        "poolID is:" +
          document.querySelector("#readCollapse" + String(poolInfo) + " input")
            .value
      );
    } else {
      await alert("poolID is:" + (count - 1));
    }
  } else {
    document.querySelector(
      "#readCollapse" + String(poolInfo) + " input"
    ).value = await count;
    await btn.click();
    if (btn.disabled) {
      await count++;
      await setTimeout(Auto, 1500);
    } else {
      await alert("BSC Limit click at pool_id:" + (count - 1));
    }
  }
}

Auto();
