var md = require("node-markdown").Markdown;

app.get('/markdown', function(req, res){
    fs.readFile("./book.md", function (err, data) {
        if (err) {
            throw err;
        }


       //使用  md 方法將檔案內容轉行為 html 格式
        str = md(data.toString());
        console.log(str);


        //回應結果顯示在頁面上
        res.send(str) 
        res.end(); 
    });
});