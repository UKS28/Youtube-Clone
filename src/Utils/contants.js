// console.log(process.env.REACT_APP_YOUTUBE_API_KEY)
export const listItems=[
    "All",
    "Music",
    "Cricket",
    "Javascript",
    "Live",
    "Bhajans",
    "Soccer",
    "Gaming",
    "Hollywood",
    "Mutual find",
    "Python",
    "Computer",
    
    

]


export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY;


  
  // https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=faded

  
export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

  export const Comments = [
    {
      name: "Rohan Sharma",
      text: "This video was really helpful. Thanks for sharing! Your explanation was clear and concise, and it helped me understand the topic better than any other resource I've come across.",
      replies: [],
    },
    {
      name: "Neha Gupta",
      text: "I've been struggling with this topic for a while. Your explanation cleared it up for me! Your ability to simplify complex concepts is truly remarkable. I'll definitely be recommending your videos to my friends and classmates.",
      replies: [
        {
          name: "Varun Patel",
          text: "Great job! Keep up the good work. Your videos are a valuable resource for students like me who are trying to grasp difficult concepts. Looking forward to more insightful content from you!",
          replies: [],
        },
        {
          name: "Kavita Singh",
          text: "Your videos are always informative. Looking forward to more content from you! Your explanations are so easy to follow, and I appreciate the effort you put into each video. Keep up the excellent work!",
          replies: [
            {
              name: "Rajesh Kumar",
              text: "Could you make a video on [specific topic]? That would be really helpful. Your expertise in explaining complex topics makes your videos stand out from the rest. Keep up the fantastic work!",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Priya Verma",
      text: "I never comment on videos, but I had to for this one. Excellent job! Your videos have helped me gain a deeper understanding of the subject matter. Thank you for sharing your knowledge with the world!",
      replies: [],
    },
    {
      name: "Amit Mehta",
      text: "Your videos have helped me a lot in my studies. Thank you! Your passion for teaching shines through in each video, and it's evident that you genuinely care about your viewers' learning experience. Keep up the good work!",
      replies: [],
    },
    {
      name: "Deepak Khanna",
      text: "I love how you break down complex topics into easy-to-understand explanations. Your videos have been a game-changer for me, and I can't thank you enough for all the valuable insights you've provided. Looking forward to more enlightening content!",
      replies: [],
    },
    {
      name: "Ritu Sharma",
      text: "I've been binge-watching your videos all day. Can't get enough of your content! Your ability to make difficult concepts accessible to everyone is truly commendable. Keep up the amazing work!",
      replies: [],
    },
  ];
  



