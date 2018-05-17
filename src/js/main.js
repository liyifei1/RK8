require.config({
    paths: {
        "jquery": "./libs/jquery01",
        "bscroll": "./libs/bscroll",
        "index": "./app/index"
    }
});
require(["index"], function(index) {
    index()
});