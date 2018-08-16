class Video {
    //defining types of properties
    private id: string;
    public src:string;

    public title : string;
    public category:string;
    public description:string;

    public runtime:number;

    public publisher:string;
    public publishDate:string; 
    
    public likes:number;
    public dislikes:number;

    public views:number;
    public subscriptions:number;    
    
    //constructor function 
    constructor ( id: string,  src:string,  title : string,  category:string, description:string, runtime:number, publisher:string, publishDate:string, likes:number, dislikes:number, views:number, subscriptions:number){
        this.id = id;
        this.src = src;
        this.title = title;
        this.category = category;
        this.description = description;
        this.runtime = runtime;
        this.publisher=publisher;
        this.publishDate= publishDate;
        this.likes=likes;
        this.dislikes=dislikes;
        this.views=views;
        this.subscriptions = subscriptions;
    } 
    //getter function to show id of video
    getVideoId=()=>{
        return this.id;
    } 
    //setter function to set  id of video
    setVideoId=(changedID)=>{
       this.id = changedID; 
    }  
    //function to find out videos whose title matches with searchInput made by user
    showRelatedVideos=(searchInput)=>{ 
        if(this.title === searchInput || this.category === searchInput ){ // testing against searchInput and find similar titles
            console.log(Video);
        }        
    }
    //function to count number of subscriptions 
    countSubscriptions=()=>{
        //whenever subscribe button is clicked - name and other details are 
        //fetched and stored in database to send notifications in future
        //number of subscriptions increased and showed on page through ajax call
        this.subscriptions++;
        console.log(this.subscriptions);
    }
    //function to share link for video 
    shareVideo=()=>{
        //whenever user click share button, video URL is copied and user is given options
        //to share this video - after selection by user - URL is pasted
        var siteAddress="youtube.com";
        var url = siteAddress+this.src;
        console.log(url);
    }
    //function to count how many times video has been viewed
    countViews=()=>{
        //whenever site is visited by someone
        this.views++;
        console.log(this.views)
    }
    //function to count how many viewers have liked the video
    countLikes=()=>{
        //whenever like button is clicked , likes variable is incremented
        this.likes++;
        console.log(this.likes);
    }
    //function to count how many viewers have disliked the video
    countDislikes=()=>{
        //whenever dislike button is clicked , dislikes variable is incremented
        this.dislikes++;
        console.log(this.dislikes);
    }
}
//an array of video instances will be created so thatlist can be printed of clickable items.
let videoArray=[];
//creating three instances
let vd1=new Video("vd1", "video1.mp4", "Best Bhajans - Anoop Jalota", "Bhajans", "Aaisi laagi lagan meera ho gayi magan...", 153, "Ramesh Munjal","12/01/2018", 0, 0 , 0, 0);
let vd2=new Video("vd2", "video2.mp4", "Best Bhajans - Hari Om Sharam", "Bhajans", "Tera Ram ji karenge beda paar udasi mann.. ", 113, "Ramesh Munjal","12/01/2018", 0, 0 , 0, 0);
let vd3=new Video("vd3", "video3.mp4", "Sharma Brothers", "Bhajans", "Suraj ki garmi se jalte huye tann ko.. ", 123, "Ramesh Munjal","12/01/2018", 0, 0 , 0, 0);

//pushing objects into array
videoArray.push(vd1);
videoArray.push(vd2);
videoArray.push(vd3);

//console.log(videoArray);

//printing details of objects to show results
for(let video of videoArray){
    console.log("-----------"+ video.id +":"+video.category +"------------");
    console.log(video); //showing complete object
    console.log("--------------------------------------------------------------");
}

//changing video ID using getter and setter
console.log("Video ID : " + vd1.getVideoId());
vd1.setVideoId("vdNew");
console.log("Video ID : " + vd1.getVideoId());



