var Video = /** @class */ (function () {
    //constructor function 
    function Video(id, src, title, category, description, runtime, publisher, publishDate, likes, dislikes, views, subscriptions) {
        var _this = this;
        //getter function to show id of video
        this.getVideoId = function () {
            return _this.id;
        };
        //setter function to set  id of video
        this.setVideoId = function (changedID) {
            _this.id = changedID;
        };
        //function to find out videos whose title matches with searchInput made by user
        this.showRelatedVideos = function (searchInput) {
            if (_this.title === searchInput || _this.category === searchInput) { // testing against searchInput and find similar titles
                console.log(Video);
            }
        };
        //function to count number of subscriptions 
        this.countSubscriptions = function () {
            //whenever subscribe button is clicked - name and other details are 
            //fetched and stored in database to send notifications in future
            //number of subscriptions increased and showed on page through ajax call
            _this.subscriptions++;
            console.log(_this.subscriptions);
        };
        //function to share link for video 
        this.shareVideo = function () {
            //whenever user click share button, video URL is copied and user is given options
            //to share this video - after selection by user - URL is pasted
            var siteAddress = "youtube.com";
            var url = siteAddress + _this.src;
            console.log(url);
        };
        //function to count how many times video has been viewed
        this.countViews = function () {
            //whenever site is visited by someone
            _this.views++;
            console.log(_this.views);
        };
        //function to count how many viewers have liked the video
        this.countLikes = function () {
            //whenever like button is clicked , likes variable is incremented
            _this.likes++;
            console.log(_this.likes);
        };
        //function to count how many viewers have disliked the video
        this.countDislikes = function () {
            //whenever dislike button is clicked , dislikes variable is incremented
            _this.dislikes++;
            console.log(_this.dislikes);
        };
        this.id = id;
        this.src = src;
        this.title = title;
        this.category = category;
        this.description = description;
        this.runtime = runtime;
        this.publisher = publisher;
        this.publishDate = publishDate;
        this.likes = likes;
        this.dislikes = dislikes;
        this.views = views;
        this.subscriptions = subscriptions;
    }
    return Video;
}());
//an array of video instances will be created so thatlist can be printed of clickable items.
var videoArray = [];
//creating three instances
var vd1 = new Video("vd1", "video1.mp4", "Best Bhajans - Anoop Jalota", "Bhajans", "Aaisi laagi lagan meera ho gayi magan...", 153, "Ramesh Munjal", "12/01/2018", 0, 0, 0, 0);
var vd2 = new Video("vd2", "video2.mp4", "Best Bhajans - Hari Om Sharam", "Bhajans", "Tera Ram ji karenge beda paar udasi mann.. ", 113, "Ramesh Munjal", "12/01/2018", 0, 0, 0, 0);
var vd3 = new Video("vd3", "video3.mp4", "Sharma Brothers", "Bhajans", "Suraj ki garmi se jalte huye tann ko.. ", 123, "Ramesh Munjal", "12/01/2018", 0, 0, 0, 0);
//pushing objects into array
videoArray.push(vd1);
videoArray.push(vd2);
videoArray.push(vd3);
//console.log(videoArray);
//printing details of objects to show results
for (var _i = 0, videoArray_1 = videoArray; _i < videoArray_1.length; _i++) {
    var video = videoArray_1[_i];
    console.log("-----------" + video.id + ":" + video.category + "------------");
    console.log(video); //showing complete object
    console.log("--------------------------------------------------------------");
}
//changing video ID using getter and setter
console.log("Video ID : " + vd1.getVideoId());
vd1.setVideoId("vdNew");
console.log("Video ID : " + vd1.getVideoId());
