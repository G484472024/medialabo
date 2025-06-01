
//ここに4-2を作る

function channelIn(){
  let select_channel = document.querySelector("select[name=channel]");
  console.log("選ばれたチャンネル:", select_channel.value);
}

function genreIn(){
  let select_genre = document.querySelector("select[name=genre]");
  console.log("選ばれたジャンル:", select_genre.value);
}


// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log(data.list);
  for(let g1 of data.list.g1){
    console.log('開始時刻：'+g1.start_time);
    console.log('終了時刻：'+g1.end_time);
    console.log('タイトル：'+g1.title);
    console.log('サブタイトル：'+g1.subtitle);
    console.log('出演者：'+g1.act);
  }

}

// 課題5-1 の関数 printDom() はここに記述すること

function printDom(data) {

  let count = 0;
  console.log(data.list);

  for(let CHid in data.list){
    for(let id of data.list[CHid]){


        count = count+1;
        
        let div = document.querySelector('div#result');


        let h2 = document.createElement('h2');
        h2.textContent = '検索結果'+count+'件目';
        div.insertAdjacentElement('beforeend',h2);
        console.log(h2);


        let pST = document.createElement('p');
        pST.textContent = '開始時刻：'+id.start_time;
        h2.insertAdjacentElement('afterend',pST);
        
        let pED = document.createElement('p');
        pED.textContent = '終了時刻：'+id.end_time;
        pST.insertAdjacentElement('beforeend',pED);

        


        //以下表
        let table = document.createElement('table');//table作成
        h2.insertAdjacentElement('afterend',table);//table配置

        let tbody = document.createElement('tbody');//tbody
        table.insertAdjacentElement('beforeend',tbody);

        // console.log('チャンネル：'+id.service.name);
        let trCH = document.createElement('tr');
        let thCH = document.createElement('th');
        thCH.textContent = 'チャンネル';
        let tdCH = document.createElement('td');
        tdCH.textContent = id.service.name;
        tbody.insertAdjacentElement('beforeend',trCH);
        trCH.insertAdjacentElement('beforeend',thCH);
        trCH.insertAdjacentElement('beforeend',tdCH);

        // console.log('タイトル：'+id.title);
        let trTI = document.createElement('tr');
        let thTI = document.createElement('th');
        thTI.textContent = 'タイトル';
        let tdTI = document.createElement('td');
        tdTI.textContent = id.title;
        tbody.insertAdjacentElement('beforeend',trTI);
        trTI.insertAdjacentElement('beforeend',thTI);
        trTI.insertAdjacentElement('beforeend',tdTI);

        // console.log('サブタイトル：'+id.subtitle);
        let trST = document.createElement('tr');
        let thST = document.createElement('th');
        thST.textContent = 'サブタイトル';
        let tdST = document.createElement('td');
        tdST.textContent = id.subtitle;
        tbody.insertAdjacentElement('beforeend',trST);
        trST.insertAdjacentElement('beforeend',thST);
        trST.insertAdjacentElement('beforeend',tdST);

        // console.log('出演者：'+id.act);
        let trACT = document.createElement('tr');
        let thACT = document.createElement('th');
        thACT.textContent = '出演者';
        let tdACT = document.createElement('td');
        tdACT.textContent = id.act;
        tbody.insertAdjacentElement('beforeend',trACT);
        trACT.insertAdjacentElement('beforeend',thACT);
        trACT.insertAdjacentElement('beforeend',tdACT);

        
    }
}

  

}

// 6-1 のイベントハンドラ登録処理は以下に記述


let b = document.querySelector('button#btn');
b.addEventListener('click', sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

  let div = document.querySelector('div#result');

  let removeTable = div.querySelectorAll('table');
  let removeH2 = div.querySelectorAll('h2');
  let removeP = div.querySelectorAll('p');
  for (let h2 of removeH2) {
    h2.remove();
  }
  for (let p of removeP) {
    p.remove();
  }
  for (let table of removeTable) {
    table.remove();
  }

  let x = document.querySelector('select[name=channel]');
  let channel = x.value;
  console.log('チャンネル'+channel);
  let y = document.querySelector('select[name=genre]');
  let genre = y.value;
  console.log('ジャンル'+genre);
  // URL を設定
	let preurl = 'https://www.nishita-lab.org/web-contents/jsons/nhk/';

  let channelID = channel+'-';
  let genreID = genre+'-';
  let omazinai = 'j.json';
  let url = preurl+channelID+genreID+omazinai;

	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  
    // サーバから送られてきたデータを出力
    let data = resp.data;

    console.log("受信した data:", data);
    console.log("data の型:", typeof data);

    //デバッグ用
    if (data === "null") {
      console.error("サーバから 'null' が返されました。選択内容に対応するデータが存在しません。");
      return;
  }

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    console.log('変換'+data);
    printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}