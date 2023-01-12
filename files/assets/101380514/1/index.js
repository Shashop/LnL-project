/*jshint esversion: 6, asi: true, laxbreak: true*/

const Index = pc.createScript('index');

Index.attributes.add("VueHtml", {type:"asset", assetType:"html"}); // 登録したhtmlを取得
Index.attributes.add("OnsenUICss", {type:"asset", assetType:"css", array: true});

// initialize code called once per entity
Index.prototype.initialize = function() {
//    var self = this; // this書き換え
    const wrapper = document.createElement("div"); // div作成
    wrapper.classList.add("wrapper"); // 作成したdivにwrapperというclass名を指定
    wrapper.innerHTML = this.VueHtml._resources[0]; // 事前に登録していたhtmlをwrapperに流し込み
    document.body.appendChild(wrapper); // bodyにwrapperを追加

    // CSS
    const cssElement = document.createElement("style");
    this.OnsenUICss.forEach((css) => {
        cssElement.innerHTML = css._resources[0];
        document.head.appendChild(cssElement);
    });

    // VueJS
    const app = new Vue({ // Vue呼び出し
        el: '#app', // id名がappの要素を参照
        template: '#main',
        data() { // 使用するdataを登録
            return({
            });
        },
        methods: { // イベントハンドラ作成
        }
    });

    // canvasを取得
    const canvas = document.getElementsByTagName("canvas")[0]; // canvasを取得
    canvas.classList.add("pcCanvas"); // canvasにclass名を指定

    // canvasを移動
    const canvasInsert = document.getElementById('canvas_insert');
    canvasInsert.appendChild(canvas);
};

// update code called every frame
Index.prototype.update = function(dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// Index.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/