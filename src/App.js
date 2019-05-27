import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewsArticle from './components/NewsArticle'
const news = [
  {
      "source": {
          "id": "cnn",
          "name": "CNN"
      },
      "author": "Rishi Iyengar, CNN Business",
      "title": "Fiat Chrysler proposes merger with Renault to create carmaking powerhouse - CNN",
      "description": "Two of the world's biggest carmakers may soon join forces.",
      "url": "https://www.cnn.com/2019/05/27/business/fiat-chrysler-renault-merger/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/190527020734-file-renault-hq-01-super-tease.jpg",
      "publishedAt": "2019-05-27T07:08:00Z",
      "content": null
  },
  {
      "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
      },
      "author": "Ylenia Gostoli",
      "title": "EU elections produce fragmented parliament amid high turnout - Al Jazeera English",
      "description": "Centre right and centre left lose European Parliament seats to Greens and Liberals while Eurosceptic parties make gains.",
      "url": "https://www.aljazeera.com/news/2019/05/eu-elections-produce-fragmented-parliament-high-turnout-190526233212988.html",
      "urlToImage": "https://www.aljazeera.com/mritems/Images/2019/5/27/284e0f9b09964876aa3035edd813155e_18.jpg",
      "publishedAt": "2019-05-27T07:02:00Z",
      "content": "Brussels, Belgium - People across the European Union have cast their ballots on the last day of voting for the European Parliament elections, with early indications suggesting that the bloc's only directly-elected body is shaping up to be more fragmented.\r\nPr… [+5010 chars]"
  },
  {
      "source": {
          "id": "cnn",
          "name": "CNN"
      },
      "author": "Sherisse Pham, CNN Business",
      "title": "Huawei CEO says China shouldn't punish Apple - CNN",
      "description": "Ren Zhengfei, CEO and founder of embattled Chinese tech company Huawei, is defending US rival Apple.",
      "url": "https://www.cnn.com/2019/05/27/tech/china-apple-huawei-ren-zhengfei/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/190527011044-file-apple-huawei-01-restricted-super-tease.jpg",
      "publishedAt": "2019-05-27T06:54:00Z",
      "content": null
  },
  {
      "source": {
          "id": "cnbc",
          "name": "CNBC"
      },
      "author": "CNBC with Reuters",
      "title": "Trump says he hopes to announce a trade deal with Japan soon - CNBC",
      "description": "Trump calls the US trade imbalance with Japan \"unbelievably large.\"",
      "url": "https://www.cnbc.com/2019/05/27/trump-says-he-hopes-to-announce-a-trade-deal-with-japan-soon.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/105934178-1558921317926gettyimages-1151777767.jpeg?v=1558921518",
      "publishedAt": "2019-05-27T06:34:17Z",
      "content": "Speaking at a press conference with Prime Minister Shinzo Abe, U.S. President Trump said he hoped to announce a trade deal with Japan very soon.\r\nDuring his four-day state visit Trump' said his goal was to remove trade barriers so as to give U.S. exports a fa… [+2943 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Youtube.com"
      },
      "author": null,
      "title": "AMD Keynote at Computex 2019 in 9 minutes - Engadget",
      "description": null,
      "url": "https://www.youtube.com/watch?v=3qqBijKHuHM",
      "urlToImage": null,
      "publishedAt": "2019-05-27T06:04:22Z",
      "content": "[[getSimpleString(data.title)]]\r\n[[getSimpleString(data.description)]]\r\n[[getSimpleString(data.videoCountText)]]"
  },
  {
      "source": {
          "id": null,
          "name": "Yourcentralvalley.com"
      },
      "author": "Jessica Johnson",
      "title": "CHP: Four killed in Merced County crash, including two children - YourCentralValley.com",
      "description": "Four people were killed in a north valley crash Sunday night, according to California Highway Patrol.",
      "url": "https://www.yourcentralvalley.com/news/local-news/chp-at-least-one-dead-in-merced-county-crash-1/2030490047",
      "urlToImage": "https://media.yourcentralvalley.com/nxsglobal/yourcentralvalley/photo/2019/05/26/4_killed_in_Los_Banos_fatal_crash__inclu_0_89317796_ver1.0_1280_720.jpg",
      "publishedAt": "2019-05-27T04:44:00Z",
      "content": "LOS BANOS, California - Four people were killed in a north valley crash Sunday night, according to California Highway Patrol.\r\nThe crash happened around 9 p.m. in Los Banos near Highway 33when the driver, 40, reportedly lost control of his 2017 Nissan Altima,… [+432 chars]"
  },
  {
      "source": {
          "id": "ign",
          "name": "IGN"
      },
      "author": null,
      "title": "Game of Thrones: \"The Last Watch\" Documentary Review - IGN",
      "description": "HBO bids farewell to Game of Thrones with a fascinating documentary that provides a much closer look at the immense undertaking that was Season 8.",
      "url": "https://www.ign.com/articles/2019/05/27/game-of-thrones-the-last-watch-documentary-review",
      "urlToImage": "https://assets1.ignimgs.com/2019/05/27/gotlastwatch-2-blogroll-1558930546201_1280w.jpg",
      "publishedAt": "2019-05-27T04:23:33Z",
      "content": "Now their watch has ended, too. \r\nBy Jesse SchedeenWarning: Full spoilers for the documentary \"The Last Watch\" and the series finale of Game of Thrones below.\r\nRegardless of your feelings on the final season of Game of Thrones, we all have to get used to the … [+6226 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Anandtech.com"
      },
      "author": "Andrei Frumusanu",
      "title": "Arm's New Mali-G77 & Valhall GPU Architecture: A Major Leap - AnandTech",
      "description": null,
      "url": "https://www.anandtech.com/show/14385/arm-announces-malig77-gpu",
      "urlToImage": "https://images.anandtech.com/doci/14385/Mali%20G77_678x452.png",
      "publishedAt": "2019-05-27T04:06:06Z",
      "content": "Along today’s announcement of the new Cortex-A77 CPU microarchitecture, the arguably bigger announcement is Arm’s unveiling of the new Valhall GPU architecture and the new Mali-G77 GPU. It’s been three years since the unveiling of the Bifrost architecture, an… [+4667 chars]"
  },
  {
      "source": {
          "id": "cnbc",
          "name": "CNBC"
      },
      "author": "Saheli Roy Choudhury",
      "title": "Modi needs to make India a 'highly competitive manufacturing hub,' says top businessman - CNBC",
      "description": "Prime Minister Narendra Modi has to make sure that India becomes a highly competitive manufacturing hub where global investors will look to invest, the chairman of India automaker Maruti Suzuki, R.C. Bhargava, told CNBC.",
      "url": "https://www.cnbc.com/2019/05/27/modi-needs-to-make-india-a-competitive-manufacturing-hub-bhargava.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/105934189-1558922410317gettyimages-618572072.jpeg?v=1558922502",
      "publishedAt": "2019-05-27T03:26:15Z",
      "content": "Following a resounding victory at India's parliamentary elections, Prime Minister Narendra Modi needs to improve the country's manufacturing competitiveness to attract global investors, according to a top business leader.\r\nFor India to become a highly competi… [+4042 chars]"
  },
  {
      "source": {
          "id": "fox-news",
          "name": "Fox News"
      },
      "author": "New York Post",
      "title": "Scott Pelley reveals complaining about 'hostile work environment' at CBS led to firing - Fox News",
      "description": "Former “CBS Evening News” vet Scott Pelley claimed in an interview Sunday that he was ousted from the anchor chair back in 2017 because he “wouldn’t stop complaining” about the news vision’s “hostile work environment.”",
      "url": "https://www.foxnews.com/us/scott-pelley-reveals-why-cbs-fired-him",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2019/05/AP19146762868840.jpg",
      "publishedAt": "2019-05-27T03:11:36Z",
      "content": "Former “CBS Evening News” vet Scott Pelley claimed in an interview Sunday that he was ousted from the anchor chair back in 2017 because he “wouldn’t stop complaining” about the news vision’s “hostile work environment.”\r\n“I lost my job because I wouldn’t stop … [+1670 chars]"
  },
  {
      "source": {
          "id": "the-new-york-times",
          "name": "The New York Times"
      },
      "author": null,
      "title": "Nigel Farage's Populist Brexit Party Wins Big in European Parliament Elections - The New York Times",
      "description": "The party’s strong performance humiliated Britain’s governing Conservatives, whose leader, Prime Minister Theresa May, on Friday announced her resignation.",
      "url": "https://www.nytimes.com/2019/05/26/world/europe/farage-brexit-party-uk-elections.html",
      "urlToImage": "https://static01.nyt.com/images/2019/05/26/world/26BritianEU1/26BritianEU1-facebookJumbo.jpg",
      "publishedAt": "2019-05-27T03:06:23Z",
      "content": "The results underscore the growing polarization of British politics over Brexit, pointing to yet more political uncertainty and volatility in a country that has been in various degrees of political crisis since 2016, when voters opted in a referendum to leave… [+1478 chars]"
  },
  {
      "source": {
          "id": "nbc-news",
          "name": "NBC News"
      },
      "author": "Associated Press",
      "title": "'Aladdin' soars, but 'Booksmart' barely passes at box office - NBC News",
      "description": "Aladdin \"did better than expected, grossing an estimated $86.1 million to take the top spot at the North American box office, according to studio estimates on Sunday.",
      "url": "https://www.nbcnews.com/pop-culture/movies/aladdin-soars-booksmart-barely-passes-box-office-n1010461",
      "urlToImage": "https://media2.s-nbcnews.com/j/newscms/2019_21/2870096/190524-aladdin-will-smith-1-ew-1215p_bb9417f2e125cb5cb859c545f523ce52.nbcnews-fp-1200-630.jpg",
      "publishedAt": "2019-05-27T01:56:00Z",
      "content": "Get breaking news alerts and special reports. The news and stories that matter, delivered weekday mornings.\r\nSUBSCRIBE\r\nMay 27, 2019, 1:56 AM UTC\r\nLOS ANGELES Moviegoers voted with their dollars and chose the familiar over the new this Memorial Day weekend. T… [+4850 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Azsnakepit.com"
      },
      "author": "Dano_in_Tucson",
      "title": "Diamondbacks 6, Giants 2: A Potentially Costly Sweep - AZ Snake Pit",
      "description": "The Diamondbacks continued to take advantage of a hapless San Francisco team, but starter Luke Weaver left abruptly in the 6th with the dreaded “forearm tightness”...",
      "url": "https://www.azsnakepit.com/2019/5/26/18640868/diamondbacks-6-giants-2-recap",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/q9GtbLzZh-6vWRcOfnIXI5LAIs8=/132x417:1676x1225/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/16301208/1146386193.jpg.jpg",
      "publishedAt": "2019-05-27T00:00:19Z",
      "content": "After two ridiculous games of massive run production and acceptable pitching by the Diamondbacks, I think we were all looking forward to the three-peat and a series sweep. And sure enough, we started off in that vein, drawing first blood with one out in the t… [+5287 chars]"
  },
  {
      "source": {
          "id": "the-hill",
          "name": "The Hill"
      },
      "author": "Zack Budryk",
      "title": "GOP rep criticizes Trump for tweeting Pelosi video | TheHill - The Hill",
      "description": "Rep. Will Hurd (R-Texas) criticized President Trump for sharing a deceptively edited video of House Speaker Nancy Pelosi (D-Calif.), saying no one, including Trump, should “disseminate information that you know is ultimately doctored.”",
      "url": "https://thehill.com/homenews/house/445631-gop-rep-criticizes-trump-for-tweeting-pelosi-video",
      "urlToImage": "https://thehill.com/sites/default/files/hurdwill_021319sr_lead.jpg",
      "publishedAt": "2019-05-26T23:51:36Z",
      "content": "Rep. Will HurdWilliam Ballard HurdDemocrats talk subpoena for MuellerHere are the eight Republicans who voted with Democrats on the Equality ActHouse approves anti-LGBT discrimination Equality ActMORE (R-Texas) criticized President TrumpDonald John TrumpPapad… [+2001 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Yahoo.com"
      },
      "author": null,
      "title": "Jenni 'JWoww' Farley's Boyfriend Would 'Love for Her to Be' in Professional Wrestling with Him - Yahoo Entertainment",
      "description": "Jenni 'JWoww' Farley and Boyfriend Make Red Carpet Debut",
      "url": "https://www.yahoo.com/entertainment/jenni-apos-jwoww-apos-farley-223024550.html",
      "urlToImage": "https://s.yimg.com/uu/api/res/1.2/gLPZohzRx8csc0iLsRZqFA--~B/aD0xMDM1O3c9NjQ2O3NtPTE7YXBwaWQ9eXRhY2h5b24-/http://media.zenfs.com/en-US/homerun/people_218/03003613b1b49c687c2febe9365bdad3",
      "publishedAt": "2019-05-26T22:30:00Z",
      "content": "Jenni JWoww Farley has certainly had her fair share of fights on TV, but she doesnt want to make a living from it.\r\nOn Saturday, the mother of two, 33, was in Las Vegas with her professional wrestler boyfriend Zack Clayton Carpinello, 24, to attend the premie… [+1802 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Wthr.com"
      },
      "author": "https://www.facebook.com/WTHR13/",
      "title": "'Glamping' out at IMS gives a unique way to experience race day - WTHR",
      "description": "Camping out at the Indianapolis Motor Speedway makes experiencing race day, even more unique.",
      "url": "https://www.wthr.com/article/glamping-out-ims-gives-unique-way-experience-race-day",
      "urlToImage": "https://www.wthr.com/sites/default/files/styles/article_image/public/2019/05/26/tiny_home_4_nhe_resized-970.jpg?itok=GajsE0lJ",
      "publishedAt": "2019-05-26T22:00:41Z",
      "content": "INDIANAPOLIS (WTHR) Camping out at the Indianapolis Motor Speedway makes experiencing race day, even more unique.\r\nThe camp grounds at IMS were packed with tents and even Tiny Homes!\r\nTiny Homes take camping out to the next level with luxury \"glamping\" suites… [+658 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Atptour.com"
      },
      "author": null,
      "title": "Laver On Djokovic's Chase For 'Nole Slam' At Roland Garros: 'I'm Not Sure How He Does It' - ATP Tour",
      "description": "Novak Djokovic is trying to win his fourth consecutive Grand Slam, and Rod Laver, the only player to accomplish the feat twice, provides insight into why Djokovic stands a chance in his pursuit at Roland Garros.",
      "url": "https://www.atptour.com/en/news/djokovic-chasing-four-straight-grand-slams-roland-garros-2019",
      "urlToImage": "www.atptour.com/-/media/images/news/2019/05/23/23/53/laver-djokovic-may-2019.jpg",
      "publishedAt": "2019-05-26T21:36:50Z",
      "content": "After winning his 15th Grand Slam championship at this year’s Australian Open, Novak Djokovic said that making tennis history motivates him. \r\nThat's good, because on the eve of Roland Garros, the World No. 1 is preparing to write another chapter in the histo… [+4328 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Al.com"
      },
      "author": "Matt Zenitz | mzenitz@al.com",
      "title": "Nick Saban, others around football world react to Bart Starr passing away - AL.com",
      "description": "Many around the football world posted nice messages about Bart Starr on social media Sunday after it was announced that the Alabama and NFL legend had passed away at the age of 85.",
      "url": "https://www.al.com/alabamafootball/2019/05/jalen-hurts-others-around-football-world-react-to-bart-starr-passing-away.html",
      "urlToImage": "https://www.al.com/resizer/aoyFGEWfFGQjTxUdRHJIMPtKBy4=/1200x0/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/ICWCLBMZ2BBZ3C2BQGD5HGZ7XQ.JPG",
      "publishedAt": "2019-05-26T20:14:00Z",
      "content": "Many around the football world sent out nice messages about Bart Starr on Sunday after it was announced that the Alabama and NFL legend had passed away at the age of 85.\r\nHere is some of what has been said:\r\n Alabama coach Nick Saban: \"Bart Starr was a true A… [+736 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Youtube.com"
      },
      "author": null,
      "title": "Suspected Oklahoma tornado blamed for at least two deaths - CBS News",
      "description": null,
      "url": "https://www.youtube.com/watch?v=V2BuaRFtR3M",
      "urlToImage": null,
      "publishedAt": "2019-05-26T18:44:20Z",
      "content": null
  },
  {
      "source": {
          "id": "the-washington-post",
          "name": "The Washington Post"
      },
      "author": null,
      "title": "Republican lawmaker criticizes Trump for sharing heavily edited video of Pelosi - The Washington Post",
      "description": "“You shouldn’t disseminate information that you know is ultimately doctored,” Texas congressman Will Hurd said Sunday.",
      "url": "https://www.washingtonpost.com/politics/republican-lawmaker-criticizes-trump-for-sharing-heavily-edited-video-of-pelosi/2019/05/26/6e8b310e-7fde-11e9-933d-7501070ee669_story.html",
      "urlToImage": "https://www.washingtonpost.com/resizer/8qfG0DjbQhcPEWskN0_LdwhEhM8=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3G6K2GD73YI6TEZ5OUAQODXGNE.jpg",
      "publishedAt": "2019-05-26T18:44:20Z",
      "content": "A Republican lawmaker said Sunday that he is concerned about President Trumps sharing of a heavily edited video that spliced together several verbal pauses by House Speaker Nancy Pelosi (D-Calif.).\r\nRep. Will Hurd (R-Tex.) said that by sharing the video, Trum… [+2593 chars]"
  }
]
function App() {
  return (
    <div className="App">
      {news.map((article) => <NewsArticle { ...article } />)}
    </div>
  );
}

export default App;
