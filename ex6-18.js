//状態管理用の変数
let isChanged=false;
function switchImage18(){const img=document.getElementById("pic18");
//状況に応じて画像を切り替え
if(!isChanged){img.src="./image/image5.png"; isChanged=true;}
          else{img.src="./image/image6.jpg"; isChanged=false;}
//3秒後に再びこの関数を呼び戻して元に戻す
setTimeout("switchImage18()",3000);}                         
