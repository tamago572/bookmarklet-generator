const input = document.getElementById("input");
const output = document.getElementById("output");
const copyBtn = document.getElementById('btn');

const sentence1 = "javascript:(function(){"
const sentence2 = "})();"

// input に入力したらsentence1とinputとsentence2を結合してoutputに表示
function generateBookmark() {
    output.value = sentence1 + input.value + sentence2;
}

// outputのvalueをコピー
function copy() {
    navigator.clipboard.writeText(output.value)
    .then(() => {
        console.log("クリップボードにコピーしました");
        copyBtn.value = "Copied!"
    })
    .catch(() => {
        console.log("クリップボードにコピーできませんでした");
        alert("コピーできませんでした。")
    });

}
