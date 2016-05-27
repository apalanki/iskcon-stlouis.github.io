$(function() {
    $( "#tabs" ).tabs();
});
$(function () {
    var baseUrl = 'https://api.flickr.com/services/rest/?';
    var apiKey = '&api_key=8758f2c5ed255777ad056342c446b436';
    var per_page='&per_page=10';
    var format='&format=json';
    var userid = '&user_id=67560223@N06';
    var photoset_id = '&photoset_id=72157660040252385';
    var jsoncallback = '&nojsoncallback=1';
    var getAlbumsOf = 'method=flickr.photosets.getPhotos';
    var url=baseUrl + getAlbumsOf + apiKey + userid + photoset_id + format + jsoncallback;

   $.getJSON(url,
        function (data) {
            $.each(data.photoset.photo, function (i, item) {
                var src = "http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_z.jpg";
                var title = item.title;
                if(title == undefined || title == '') title = "No title";
                $("#images").append("<a href="+src+"><img alt="+ title +" src="+src+"></img></a>");
            });
        }).complete(function() {
            $('#images').justifiedGallery({
                lastRow : 'nojustify',
                rowHeight : 100,
                rel : 'gallery2',
                margins : 1
            }).on('jg.complete', function () {
                $('#images a').swipebox();
            });
        });
});