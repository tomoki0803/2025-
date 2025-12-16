function switchImage18(){const img=document.getElementById("pic18");
//状況に応じて画像切り替え
img.src="./image/image5.png";
//3秒後に再びこの関数を呼び戻して元に戻す
setTimeout(()=>{img.src="./image/image6.jpg";},3000);}
