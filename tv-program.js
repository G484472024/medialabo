
//ここに4-2を作る

function channelIn(){
  let select_channel = document.querySelector("select[name=channel]");
  console.log("選ばれたチャンネル:", select_channel.value);
}

function genreIn(){
  let select_genre = document.querySelector("select[name=genre]");
  console.log("選ばれたジャンル:", select_genre.value);
}
//ここのコメント消すと動かない。なぜ、、？


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
let count = 0;
function printDom(data) {


  count = count+1;
  
  let h = document.querySelector('button#btn');//ボタンの後ろを指定
  let d = document.createElement('div');//div#resultを作成したいけどresultタグの付け方がわからない
  h.insertAdjacentElement('afterend', d);  // ボタンの後ろに配置


  let h2 = document.createElement('h2');
  h2.textContent = '検索結果'+count+'件目';
  d.insertAdjacentElement('afterbegin', h2 );

  

  //memoここまであってる

  let table = document.createElement('table');//table作成
  d.insertAdjacentElement('afterbegin',table);//table配置

  let tbody = document.createElement('tbody');//tbody
  table.insertAdjacentElement('afterbegin',tbody);

  //memoここまであってる


  console.log(data.list);
  for(let g1 of data.list.g1){


    console.log('開始時刻：'+g1.start_time);
    let p1 = document.createElement('p');
    let timeST = document.createElement('time');
    timeST.setAttribute('datetime', g1.start_time); 
    //timeST.textContent = formatJSTime(data.list.g1.start_time);
    timeST.insertAdjacentElement('afterbegin',p);


    console.log('終了時刻：'+g1.end_time);
    let p2 = document.createElement('p');
    let timeED = document.createElement('time');
    timeST.setAttribute('datetime', g1.end_time); 
    //timeST.textContent = formatJSTime(data.list.g1.start_time);
    timeST.insertAdjacentElement('afterbegin',p);


    console.log('チャンネル：'+g1.service.name);
    let trCH = document.createElement('tr');
    let thCH = document.createElement('th');
    thCH.textContent = 'チャンネル';
    let tdCH = document.createElement('td');
    tdCH.textContent = g1.service.name;
    trCH.insertAdjacentElement('afterbegin',timeST);
    thCH.insertAdjacentElement('afterbegin',trCH);
    tdCH.insertAdjacentElement('afterbegin',thCH);

    console.log('タイトル：'+g1.title);
    let trTI = document.createElement('tr');
    let thTI = document.createElement('th');
    thCH.textContent = 'タイトル';
    let tdTI = document.createElement('td');
    tdTI.textContent = g1.title;
    trTI.insertAdjacentElement('afterbegin',tdCH);
    thTI.insertAdjacentElement('afterbegin',trTI);
    tdTI.insertAdjacentElement('afterbegin',thTI);

    console.log('サブタイトル：'+g1.subtitle);
    let trST = document.createElement('tr');
    let thST = document.createElement('th');
    thCH.textContent = 'サブタイトル';
    let tdST = document.createElement('td');
    tdST.textContent = g1.subtitle;
    trST.insertAdjacentElement('afterbegin',tdTI);
    thST.insertAdjacentElement('afterbegin',trST);
    tdST.insertAdjacentElement('afterbegin',thST);

    console.log('出演者：'+g1.act);
    let trACT = document.createElement('tr');
    let thACT = document.createElement('th');
    thACT.textContent = '出演者';
    let tdACT = document.createElement('td');
    tdACT.textContent = g1.act;
    trACT.insertAdjacentElement('afterbegin',tdACT);
    thACT.insertAdjacentElement('afterbegin',trACT);
    tdACT.insertAdjacentElement('afterbegin',thACT);


  }

}

// 6-1 のイベントハンドラ登録処理は以下に記述


let b = document.querySelector('button#btn');
b.addEventListener('click', channelIn);
b.addEventListener('click', genreIn);
b.addEventListener('click', sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

  let x = document.querySelector('select[name=channel]');
  let channel = x.value;
  let y = document.querySelector('select[name=genre]');
  let genre = y.value;
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

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
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

////////////////////////////////////////
// 以下はテレビ番組表のデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};

