import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
//import {Router} from '@angular/router'; 
//import { Storage } from '@ionic/storage';
// import { LoadingController , Platform, ToastController } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data:any;
  dataLoaded:boolean= false;
  no=0;
  showPrev:boolean=false;
  prev:number=0;
  next:number=0;
  subscribe: any;
  arr=[];
  newsArray=[];
  x=1;

  constructor(  public http: HttpClient  ) {}
   
  doRefresh(event) {
    
    //alert('Begin async operation');

    setTimeout(() => {
      //alert('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  ngOnInit()
  {
     this.latestNews1(0);
  }

  latestNews1(no)
  {
      
    // this.data = this.http.get('http://api.mediastack.com/v1/news?access_key=35de9ea0542f32ec77fa89a9b19ea38e&categories=general&countries=us&languages=en&limit=50&offset='+no);
    // this.data.subscribe((news)=>
    // {
    //   console.log(news);
    //   this.dataLoaded= true;
    // });
    this.dataLoaded= true;
    this.arr =[
            {
                "author": "Matt Sebastian",
                "title": "Colorado to ease COVID-19 restrictions on Level Red counties next week, Gov. Jared Polis announces",
                "description": "Colorado counties at Level Red on the state\u0027s COVID-19 dial -- including Denver and the entire Front Range -- will see a loosening of public health restrictions beginning next week, Gov. Jared Polis announced on social media Wednesday night.",
                "url": "https:\/\/www.denverpost.com\/2020\/12\/30\/colorado-level-red-loosen-restrictions\/",
                "source": "photos",
                "image": "https:\/\/www.denverpost.com\/wp-content\/uploads\/2020\/12\/AP20365745172274.jpg?w=1400px\u0026strip=all",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:18:48+00:00"
            },
            {
                "author": "Matt Sebastian",
                "title": "Colorado to ease COVID-19 restrictions on Level Red counties next week, Gov. Jared Polis announces",
                "description": "Colorado counties at Level Red on the state\u0027s COVID-19 dial -- including Denver and the entire Front Range -- will see a loosening of public health restrictions beginning next week, Gov. Jared Polis announced on social media Wednesday night.",
                "url": "https:\/\/www.denverpost.com\/2020\/12\/30\/colorado-level-red-loosen-restrictions\/",
                "source": "The Denver Post",
                "image": "https:\/\/www.denverpost.com\/wp-content\/uploads\/2020\/12\/AP20365745172274.jpg?w=1400px\u0026strip=all",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:18:48+00:00"
            },
            {
                "author": "Matt Sebastian",
                "title": "Colorado to ease COVID-19 restrictions on Level Red counties next week, Gov. Jared Polis announces",
                "description": "Colorado counties at Level Red on the state\u0027s COVID-19 dial -- including Denver and the entire Front Range -- will see a loosening of public health restrictions beginning next week, Gov. Jared Polis announced on social media Wednesday night.",
                "url": "https:\/\/www.denverpost.com\/2020\/12\/30\/colorado-level-red-loosen-restrictions\/",
                "source": "denverpost",
                "image": "https:\/\/www.denverpost.com\/wp-content\/uploads\/2020\/12\/AP20365745172274.jpg?w=1400px\u0026strip=all",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:18:48+00:00"
            },
            {
                "author": "Devin Reiners",
                "title": "Northwestern stays unbeaten at home with win over Presentation",
                "description": "Northwestern improves to 7-0 at home with 98-54 win over Presentation.\nThe post Northwestern stays unbeaten at home with win over Presentation appeared first on KTIV.",
                "url": "https:\/\/ktiv.com\/2020\/12\/30\/northwestern-stays-unbeaten-at-home-with-win-over-presentation\/",
                "source": "ktiv",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:18:18+00:00"
            },
            {
                "author": "AP News",
                "title": "Report: Harsh winter can bring illness, death to Afghan kids",
                "description": "A humanitarian aid organization says more than 300,000 children in war-ravaged Afghanistan face freezing winter conditions that can lead to illness and death without proper winter clothing and heating",
                "url": "https:\/\/www.mymotherlode.com\/news\/middle-east\/1452482\/report-harsh-winter-can-bring-illness-death-to-afghan-kids.html",
                "source": "mymotherlode",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:17:27+00:00"
            },
            {
                "author": "wtopstaff",
                "title": "No. 23 Virginia beats Notre Dame 66-57 in ACC opener",
                "description": "Kihei Clark had 19 points and five assists as No. 23 Virginia continued its string of dominance over Notre Dame.",
                "url": "https:\/\/wtop.com\/ncaa-basketball\/2020\/12\/no-23-virginia-beats-notre-dame-66-57-in-acc-opener\/",
                "source": "wtop",
                "image": "https:\/\/wtop.com\/wp-content\/uploads\/2020\/12\/Virginia_Notre_Dame_Basketball_23697-1024x682.jpg",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:17:22+00:00"
            },
            {
                "author": "AP News",
                "title": "High LA virus deaths, more contagious variant hit California",
                "description": "A more contagious variant of the coronavirus has been found in California, where state health officials are warning people to avoid New Year\u0027s Eve gatherings",
                "url": "https:\/\/www.mymotherlode.com\/news\/state\/1452473\/high-la-virus-deaths-more-contagious-variant-hit-california.html",
                "source": "mymotherlode",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:17:09+00:00"
            },
            {
                "author": "AP News",
                "title": "Ontario minister called back from St Barts pandemic vacation",
                "description": "The premier of Canada\u2019s most populous province says he\u0027ll be having a \u201ctough conversation\u0022 with his finance minister on Thursday after he ordered him back to Canada after it became public that he was on a Caribbean vacation in the French Island of St. Barts during the pandemic",
                "url": "https:\/\/www.mymotherlode.com\/news\/canada\/1452467\/ontario-minister-called-back-from-st-barts-pandemic-vacation.html",
                "source": "mymotherlode",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:16:56+00:00"
            },
            {
                "author": "AP News",
                "title": "Today in History",
                "description": "Today in History Today is Thursday, Dec. 31, the 366th and final day of 2020. Today\u2019s Highlight in History: On Dec. 31, 2019, the health commission in the central Chinese city of Wuhan announced that experts were investigating an outbreak of respiratory illness and that most of the victims had visited a seafood market in [\u0026#8230;]",
                "url": "https:\/\/www.mymotherlode.com\/entertainment\/movie-news\/1452464\/today-in-history-12.html",
                "source": "mymotherlode",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:16:53+00:00"
            },
            {
                "author": "AP News",
                "title": "2020 finally ending, but New Year\u2019s revelries muted by virus",
                "description": "This New Year\u2019s Eve is being celebrated like no other",
                "url": "https:\/\/www.mymotherlode.com\/news\/asia\/1452461\/2020-finally-ending-but-new-years-revelries-muted-by-virus.html",
                "source": "mymotherlode",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:16:45+00:00"
            },
            {
                "author": null,
                "title": "Die Transferpl\u00e4ne der 18 Fu\u00dfball-Bundesligisten",
                "description": "Transferrekorde sind in der anstehenden Wechselperiode der Fu\u00dfball-Bundesliga kaum zu erwarten. Die Corona-Krise schr\u00e4nkt den Spielraum der Clubs ein. Einige Clubs sind aber auf der Suche.",
                "url": "https:\/\/www.shz.de\/sport\/fussball\/die-transferplaene-der-18-fussball-bundesligisten-id30762372.html",
                "source": "shz",
                "image": null,
                "category": "general",
                "language": "de",
                "country": "de",
                "published_at": "2020-12-31T05:16:31+00:00"
            },
            {
                "author": "AP News",
                "title": "Martin, Bouknight carry UConn past DePaul 82-61",
                "description": "Tyrese Martin scored 22 points with 10 rebounds, James Bouknight added 20 points and UConn rolled past DePaul 82-61 on Wednesday night for its first Big East Conference win",
                "url": "https:\/\/www.mymotherlode.com\/sports\/basketball-game-stories\/1452452\/martin-bouknight-carry-uconn-past-depaul-82-61.html",
                "source": "mymotherlode",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:16:22+00:00"
            },
            {
                "author": "Sui-Lee Wee and Amy Qin",
                "title": "China Approves Sinopharm\u0027s Covid-19 Vaccine as it Moves to Inoculate Millions",
                "description": "Sinopharm, a state-controlled company, said its candidate had a 79 percent efficacy rate in interim late-stage trials. But crucial questions remained unanswered.",
                "url": "https:\/\/www.nytimes.com\/2020\/12\/30\/business\/china-vaccine.html",
                "source": "The New York Times",
                "image": "https:\/\/static01.nyt.com\/images\/2020\/12\/30\/world\/30china-vaccine\/30china-vaccine-moth.jpg",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:16:21+00:00"
            },
            {
                "author": "Sui-Lee Wee and Amy Qin",
                "title": "China Approves Sinopharm\u0027s Covid-19 Vaccine as it Moves to Inoculate Millions",
                "description": "Sinopharm, a state-controlled company, said its candidate had a 79 percent efficacy rate in interim late-stage trials. But crucial questions remained unanswered.",
                "url": "https:\/\/www.nytimes.com\/2020\/12\/30\/business\/china-vaccine.html",
                "source": "feeds",
                "image": "https:\/\/static01.nyt.com\/images\/2020\/12\/30\/world\/30china-vaccine\/30china-vaccine-moth.jpg",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:16:21+00:00"
            },
            {
                "author": "Sui-Lee Wee and Amy Qin",
                "title": "China Approves Sinopharm\u0027s Covid-19 Vaccine as it Moves to Inoculate Millions",
                "description": "Sinopharm, a state-controlled company, said its candidate had a 79 percent efficacy rate in interim late-stage trials. But crucial questions remained unanswered.",
                "url": "https:\/\/www.nytimes.com\/2020\/12\/30\/business\/china-vaccine.html",
                "source": "The New York Times",
                "image": "https:\/\/static01.nyt.com\/images\/2020\/12\/30\/world\/30china-vaccine\/30china-vaccine-moth.jpg",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:16:21+00:00"
            },
            {
                "author": "AP News",
                "title": "Some California tribal casinos ring in 2021 as virus spreads",
                "description": "California\u0027s tribal casinos are drawing customers even as Gov. Gavin Newsom has ordered extraordinary limitations on other businesses amid a spike in coronavirus cases that has overwhelmed hospitals throughout the state",
                "url": "https:\/\/www.mymotherlode.com\/news\/state\/1452449\/some-california-tribal-casinos-ring-in-2021-as-virus-spreads.html",
                "source": "mymotherlode",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:16:18+00:00"
            },
            {
                "author": "Associated Press",
                "title": "Hammon first woman to coach NBA team; Lakers beat Spurs",
                "description": "SAN ANTONIO (AP) \u2014 Becky Hammon became the first woman to coach an NBA team, taking over the San Antonio Spurs after coach Gregg Popovich was ejected in a 121-107 loss to LeBron James and the Los Angeles Lakers on Wednesday night. \u00a0James celebrated his 36th birthday with 26 points, eight assists and five rebounds\nThe post Hammon first woman to coach NBA team; Lakers beat Spurs appeared first on WQOW.",
                "url": "https:\/\/wqow.com\/2020\/12\/30\/hammon-first-woman-to-direct-nba-team-lakers-beat-spurs\/",
                "source": "wqow",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:16:06+00:00"
            },
            {
                "author": "Associated Press",
                "title": "Hammon first woman to coach NBA team; Lakers beat Spurs",
                "description": "SAN ANTONIO (AP) \u2014 Becky Hammon became the first woman to coach an NBA team, taking over the San Antonio Spurs after coach Gregg Popovich was ejected in a 121-107 loss to LeBron James and the Los Angeles Lakers on Wednesday night. \u00a0James celebrated his 36th birthday with 26 points, eight assists and five rebounds\nThe post Hammon first woman to coach NBA team; Lakers beat Spurs appeared first on WBNG.",
                "url": "https:\/\/wbng.com\/2020\/12\/31\/hammon-first-woman-to-direct-nba-team-lakers-beat-spurs\/",
                "source": "wbng",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:16:06+00:00"
            },
            {
                "author": null,
                "title": "Ein Jahr nach Chinas Corona-Warnung: Schweigen und verschleiern",
                "description": "Vor einem Jahr meldete China der WHO den Ausbruch einer unbekannten Lungenkrankheit in Wuhan. Fr\u00fch in der Krise wurden vor Ort schwerwiegende Fehler gemacht. Dar\u00fcber offen zu sprechen ist heute in China fast unm\u00f6glich. Von Steffen Wurzel.",
                "url": "https:\/\/www.tagesschau.de\/ausland\/ein-jahr-corona-china-wuhan-101.html",
                "source": "ARD",
                "image": null,
                "category": "general",
                "language": "de",
                "country": "de",
                "published_at": "2020-12-31T05:15:27+00:00"
            },
            {
                "author": "Associated Press",
                "title": "China OKs 1st homegrown vaccine said to be 79.3% effective",
                "description": "BEIJING (AP) \u0026#8212; Chinese health regulators said Thursday that they have given conditional approval to a coronavirus vaccine developed by state-owned Sinopharm.",
                "url": "https:\/\/www.bostonherald.com\/2020\/12\/31\/china-oks-1st-homegrown-vaccine-said-to-be-79-3-effective\/",
                "source": "bostonherald",
                "image": "https:\/\/www.bostonherald.com\/wp-content\/uploads\/2020\/12\/Virus_Outbreak_China_Vaccine_68710-1.jpg?w=1400px\u0026strip=all",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:15:07+00:00"
            },
            {
                "author": "Associated Press",
                "title": "China OKs 1st homegrown vaccine said to be 79.3% effective",
                "description": "BEIJING (AP) \u0026#8212; Chinese health regulators said Thursday that they have given conditional approval to a coronavirus vaccine developed by state-owned Sinopharm.",
                "url": "https:\/\/www.bostonherald.com\/2020\/12\/31\/china-oks-1st-homegrown-vaccine-said-to-be-79-3-effective\/",
                "source": "bostonherald",
                "image": "https:\/\/www.bostonherald.com\/wp-content\/uploads\/2020\/12\/Virus_Outbreak_China_Vaccine_68710-1.jpg?w=1400px\u0026strip=all",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:15:07+00:00"
            },
            {
                "author": "India Post Newspaper",
                "title": "Night curfew imposed in Delhi, no new year celebrations at public places",
                "description": "NEW DELHI: Ahead of the New Year, the Delhi Disaster Management Authority on Thursday imposed a night curfew in Delhi, disallowing celebrations and the assembly of over five people at\n\nThis is a short summary of the post. please visit the above link (Click on title) to read the full story.",
                "url": "http:\/\/feedproxy.google.com\/~r\/indiapost\/~3\/EHHF_bXELOE\/",
                "source": "indiapost",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:19+00:00"
            },
            {
                "author": "India Post Newspaper",
                "title": "21,821 new cases take India\u0026#8217;s COVID-19 tally to 1,02,66,674",
                "description": "NEW DELHI: India has reported 21,821 new COVID-19 cases in the last 24 hours, taking the total number of cases to 1,02,66,674, according to the Ministry of Health and Family\n\nThis is a short summary of the post. please visit the above link (Click on title) to read the full story.",
                "url": "http:\/\/feedproxy.google.com\/~r\/indiapost\/~3\/L-oFQ-JrLuI\/",
                "source": "indiapost",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:19+00:00"
            },
            {
                "author": "India Post Newspaper",
                "title": "Till Jan 7: No flight from UK to land in India",
                "description": "NEW DELHI: The Centre has decided to extend the suspension on flights to and from the UK till January 7 in the wake of the spread of the new fast-moving\n\nThis is a short summary of the post. please visit the above link (Click on title) to read the full story.",
                "url": "http:\/\/feedproxy.google.com\/~r\/indiapost\/~3\/9pxp7h4hc-Q\/",
                "source": "indiapost",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:19+00:00"
            },
            {
                "author": "India Post Newspaper",
                "title": "Night curfew imposed in Delhi, no new year celebrations at public places",
                "description": "NEW DELHI: Ahead of the New Year, the Delhi Disaster Management Authority on Thursday imposed a night curfew in Delhi, disallowing celebrations and the assembly of over five people at\n\nThis is a short summary of the post. please visit the above link (Click on title) to read the full story.",
                "url": "http:\/\/feedproxy.google.com\/~r\/indiapost\/~3\/EHHF_bXELOE\/",
                "source": "indiapost",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:19+00:00"
            },
            {
                "author": "India Post Newspaper",
                "title": "Night curfew imposed in Delhi, no new year celebrations at public places",
                "description": "NEW DELHI: Ahead of the New Year, the Delhi Disaster Management Authority on Thursday imposed a night curfew in Delhi, disallowing celebrations and the assembly of over five people at\n\nThis is a short summary of the post. please visit the above link (Click on title) to read the full story.",
                "url": "http:\/\/feedproxy.google.com\/~r\/indiapost\/~3\/EHHF_bXELOE\/",
                "source": "indiapost",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:19+00:00"
            },
            {
                "author": "India Post Newspaper",
                "title": "UK approves Oxford-AstraZeneca Covid vaccine for use",
                "description": "LONDON: The UK on Wednesday approved the use of the Oxford University-AstraZeneca\u0026#8217;s Covid-19 vaccine with the first shots expected to be given on January 4.\u0026#160;The world\u0026#8217;s attention has been fixed\n\nThis is a short summary of the post. please visit the above link (Click on title) to read the full story.",
                "url": "http:\/\/feedproxy.google.com\/~r\/indiapost\/~3\/yydtRc5a4Tw\/",
                "source": "indiapost",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:19+00:00"
            },
            {
                "author": "India Post Newspaper",
                "title": "Toronto \u0026#8216;Superfan\u0026#8217; Nav Bhatia accepts, then turns down Global Indian Award",
                "description": "TORONTO: Nav Bhatia, the official \u0026#8216;Superfan\u0026#8217; of the current NBA champions Toronto Raptors and Canada\u0026#8217;s known Indo-Canadian face, has turned down the $50,000 Global Indian Award a day after accepting\n\nThis is a short summary of the post. please visit the above link (Click on title) to read the full story.",
                "url": "http:\/\/feedproxy.google.com\/~r\/indiapost\/~3\/91Sk3UBt5ZI\/",
                "source": "indiapost",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:19+00:00"
            },
            {
                "author": "India Post Newspaper",
                "title": "21,821 new cases take India\u0026#8217;s COVID-19 tally to 1,02,66,674",
                "description": "NEW DELHI: India has reported 21,821 new COVID-19 cases in the last 24 hours, taking the total number of cases to 1,02,66,674, according to the Ministry of Health and Family\n\nThis is a short summary of the post. please visit the above link (Click on title) to read the full story.",
                "url": "http:\/\/feedproxy.google.com\/~r\/indiapost\/~3\/L-oFQ-JrLuI\/",
                "source": "indiapost",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:19+00:00"
            },
            {
                "author": "India Post Newspaper",
                "title": "Sidhu apologises for wearing shawl with Sikh religious symbols",
                "description": "CHANDIGARH: A day after a directive from the Akal Takht, Congress leader Navjot Singh Sidhu on Wednesday tendered a public apology for wearing a shawl with Sikh religious symbols, which\n\nThis is a short summary of the post. please visit the above link (Click on title) to read the full story.",
                "url": "http:\/\/feedproxy.google.com\/~r\/indiapost\/~3\/_-k7JvpIqlA\/",
                "source": "indiapost",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:19+00:00"
            },
            {
                "author": "India Post Newspaper",
                "title": "Kamala Harris receives Covid-19 vaccine",
                "description": "WASHINGTON: US Vice President-elect Kamala Harris has received the first dose of the Moderna vaccine against the novel coronavirus. According to the Biden-Harris transition team, Harris was vaccinated on Tuesday\n\nThis is a short summary of the post. please visit the above link (Click on title) to read the full story.",
                "url": "http:\/\/feedproxy.google.com\/~r\/indiapost\/~3\/hQdQLa_7Zag\/",
                "source": "indiapost",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:19+00:00"
            },
            {
                "author": "India Post Newspaper",
                "title": "Have to assume pandemic is going to get worse: Fauci",
                "description": "WASHINGTON: Anthony Fauci, America\u0026#8217;s top expert of infectious diseases, has said people in the US, currently the world\u0026#8217;s hardest-hit by the Covid-19 pandemic, have to assume that the health crisis\n\nThis is a short summary of the post. please visit the above link (Click on title) to read the full story.",
                "url": "http:\/\/feedproxy.google.com\/~r\/indiapost\/~3\/e4kNwsLlugE\/",
                "source": "indiapost",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:19+00:00"
            },
            {
                "author": "India Post Newspaper",
                "title": "Farmers sticking to core demands ahead of talks with Centre",
                "description": "NEW DELHI: Even as farmer leaders are scheduled to hold the sixth round of talks with the Centre in Delhi on Wednesday afternoon, a farmer leader has emphasised that they\n\nThis is a short summary of the post. please visit the above link (Click on title) to read the full story.",
                "url": "http:\/\/feedproxy.google.com\/~r\/indiapost\/~3\/-Qn_73_Zi5Q\/",
                "source": "indiapost",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:19+00:00"
            },
            {
                "author": "India Post Newspaper",
                "title": "21,821 new cases take India\u0026#8217;s COVID-19 tally to 1,02,66,674",
                "description": "NEW DELHI: India has reported 21,821 new COVID-19 cases in the last 24 hours, taking the total number of cases to 1,02,66,674, according to the Ministry of Health and Family\n\nThis is a short summary of the post. please visit the above link (Click on title) to read the full story.",
                "url": "http:\/\/feedproxy.google.com\/~r\/indiapost\/~3\/L-oFQ-JrLuI\/",
                "source": "indiapost",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:19+00:00"
            },
            {
                "author": "Kyle Goon",
                "title": "Spurs\u2019 Becky Hammon becomes first woman to coach an NBA game",
                "description": "The longtime assistant takes over after Gregg Popovich is ejected during the second quarter of Wednesday\u0027s game against the Lakers.",
                "url": "https:\/\/www.presstelegram.com\/2020\/12\/30\/spurs-becky-hammon-becomes-first-woman-to-coach-an-nba-game\/",
                "source": "Press-Telegram",
                "image": "https:\/\/www.presstelegram.com\/wp-content\/uploads\/2020\/12\/Lakers-Spurs-Basketb-16x9-1-1.jpg?w=1400px\u0026strip=all",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:14+00:00"
            },
            {
                "author": "Kyle Goon",
                "title": "Spurs\u2019 Becky Hammon becomes first woman to coach an NBA game",
                "description": "The longtime assistant takes over after Gregg Popovich is ejected during the second quarter of Wednesday\u0027s game against the Lakers.",
                "url": "https:\/\/www.sgvtribune.com\/2020\/12\/30\/spurs-becky-hammon-becomes-first-woman-to-coach-an-nba-game\/",
                "source": "sgvtribune",
                "image": "https:\/\/www.sgvtribune.com\/wp-content\/uploads\/2020\/12\/Lakers-Spurs-Basketb-16x9-1-1.jpg?w=1400px\u0026strip=all",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:14+00:00"
            },
            {
                "author": "Kyle Goon",
                "title": "Spurs\u2019 Becky Hammon becomes first woman to coach an NBA game",
                "description": "The longtime assistant takes over after Gregg Popovich is ejected during the second quarter of Wednesday\u0027s game against the Lakers.",
                "url": "https:\/\/www.dailynews.com\/2020\/12\/30\/spurs-becky-hammon-becomes-first-woman-to-coach-an-nba-game\/",
                "source": "dailynews",
                "image": "https:\/\/www.dailynews.com\/wp-content\/uploads\/2020\/12\/Lakers-Spurs-Basketb-16x9-1-1.jpg?w=1400px\u0026strip=all",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:14+00:00"
            },
            {
                "author": "Kyle Goon",
                "title": "Spurs\u2019 Becky Hammon becomes first woman to coach an NBA game",
                "description": "The longtime assistant takes over after Gregg Popovich is ejected during the second quarter of Wednesday\u0027s game against the Lakers.",
                "url": "https:\/\/www.pasadenastarnews.com\/2020\/12\/30\/spurs-becky-hammon-becomes-first-woman-to-coach-an-nba-game\/",
                "source": "pasadenastarnews",
                "image": "https:\/\/www.pasadenastarnews.com\/wp-content\/uploads\/2020\/12\/Lakers-Spurs-Basketb-16x9-1-1.jpg?w=1400px\u0026strip=all",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:14+00:00"
            },
            {
                "author": "Kyle Goon",
                "title": "Spurs\u2019 Becky Hammon becomes first woman to coach an NBA game",
                "description": "The longtime assistant takes over after Gregg Popovich is ejected during the second quarter of Wednesday\u0027s game against the Lakers.",
                "url": "https:\/\/www.dailybreeze.com\/2020\/12\/30\/spurs-becky-hammon-becomes-first-woman-to-coach-an-nba-game\/",
                "source": "dailybreeze",
                "image": "https:\/\/www.dailybreeze.com\/wp-content\/uploads\/2020\/12\/Lakers-Spurs-Basketb-16x9-1-1.jpg?w=1400px\u0026strip=all",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:14+00:00"
            },
            {
                "author": "Kyle Goon",
                "title": "Spurs\u2019 Becky Hammon becomes first woman to coach an NBA game",
                "description": "The longtime assistant takes over after Gregg Popovich is ejected during the second quarter of Wednesday\u0027s game against the Lakers.",
                "url": "https:\/\/www.dailybulletin.com\/2020\/12\/30\/spurs-becky-hammon-becomes-first-woman-to-coach-an-nba-game\/",
                "source": "dailybulletin",
                "image": "https:\/\/www.dailybulletin.com\/wp-content\/uploads\/2020\/12\/Lakers-Spurs-Basketb-16x9-1-1.jpg?w=1400px\u0026strip=all",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:14+00:00"
            },
            {
                "author": "Kyle Goon",
                "title": "Spurs\u2019 Becky Hammon becomes first woman to coach an NBA game",
                "description": "The longtime assistant takes over after Gregg Popovich is ejected during the second quarter of Wednesday\u0027s game against the Lakers.",
                "url": "https:\/\/www.whittierdailynews.com\/2020\/12\/30\/spurs-becky-hammon-becomes-first-woman-to-coach-an-nba-game\/",
                "source": "whittierdailynews",
                "image": "https:\/\/www.whittierdailynews.com\/wp-content\/uploads\/2020\/12\/Lakers-Spurs-Basketb-16x9-1-1.jpg?w=1400px\u0026strip=all",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:14+00:00"
            },
            {
                "author": "Kyle Goon",
                "title": "Spurs\u2019 Becky Hammon becomes first woman to coach an NBA game",
                "description": "The longtime assistant takes over after Gregg Popovich is ejected during the second quarter of Wednesday\u0027s game against the Lakers.",
                "url": "https:\/\/www.redlandsdailyfacts.com\/2020\/12\/30\/spurs-becky-hammon-becomes-first-woman-to-coach-an-nba-game\/",
                "source": "redlandsdailyfacts",
                "image": "https:\/\/www.redlandsdailyfacts.com\/wp-content\/uploads\/2020\/12\/Lakers-Spurs-Basketb-16x9-1-1.jpg?w=1400px\u0026strip=all",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:14+00:00"
            },
            {
                "author": "Kyle Goon",
                "title": "Spurs\u2019 Becky Hammon becomes first woman to coach an NBA game",
                "description": "The longtime assistant takes over after Gregg Popovich is ejected during the second quarter of Wednesday\u0027s game against the Lakers.",
                "url": "https:\/\/www.pe.com\/2020\/12\/30\/spurs-becky-hammon-becomes-first-woman-to-coach-an-nba-game\/",
                "source": "pe",
                "image": "https:\/\/www.pe.com\/wp-content\/uploads\/2020\/12\/Lakers-Spurs-Basketb-16x9-1-1.jpg?w=1400px\u0026strip=all",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:14+00:00"
            },
            {
                "author": "Kyle Goon",
                "title": "Spurs\u2019 Becky Hammon becomes first woman to coach an NBA game",
                "description": "The longtime assistant takes over after Gregg Popovich is ejected during the second quarter of Wednesday\u0027s game against the Lakers.",
                "url": "https:\/\/www.pe.com\/2020\/12\/30\/spurs-becky-hammon-becomes-first-woman-to-coach-an-nba-game\/",
                "source": "pe",
                "image": "https:\/\/www.pe.com\/wp-content\/uploads\/2020\/12\/Lakers-Spurs-Basketb-16x9-1-1.jpg?w=1400px\u0026strip=all",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:14+00:00"
            },
            {
                "author": "Kyle Goon",
                "title": "Spurs\u2019 Becky Hammon becomes first woman to coach an NBA game",
                "description": "The longtime assistant takes over after Gregg Popovich is ejected during the second quarter of Wednesday\u0027s game against the Lakers.",
                "url": "https:\/\/www.sgvtribune.com\/2020\/12\/30\/spurs-becky-hammon-becomes-first-woman-to-coach-an-nba-game\/",
                "source": "sgvtribune",
                "image": "https:\/\/www.sgvtribune.com\/wp-content\/uploads\/2020\/12\/Lakers-Spurs-Basketb-16x9-1-1.jpg?w=1400px\u0026strip=all",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:14+00:00"
            },
            {
                "author": "Kyle Goon",
                "title": "Spurs\u2019 Becky Hammon becomes first woman to coach an NBA game",
                "description": "The longtime assistant takes over after Gregg Popovich is ejected during the second quarter of Wednesday\u0027s game against the Lakers.",
                "url": "https:\/\/www.ocregister.com\/2020\/12\/30\/spurs-becky-hammon-becomes-first-woman-to-coach-an-nba-game\/",
                "source": "ocregister",
                "image": "https:\/\/www.ocregister.com\/wp-content\/uploads\/2020\/12\/Lakers-Spurs-Basketb-16x9-1-1.jpg?w=1400px\u0026strip=all",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:14+00:00"
            },
            {
                "author": "Kyle Goon",
                "title": "Spurs\u2019 Becky Hammon becomes first woman to coach an NBA game",
                "description": "The longtime assistant takes over after Gregg Popovich is ejected during the second quarter of Wednesday\u0027s game against the Lakers.",
                "url": "https:\/\/www.whittierdailynews.com\/2020\/12\/30\/spurs-becky-hammon-becomes-first-woman-to-coach-an-nba-game\/",
                "source": "m",
                "image": "https:\/\/www.whittierdailynews.com\/wp-content\/uploads\/2020\/12\/Lakers-Spurs-Basketb-16x9-1-1.jpg?w=1400px\u0026strip=all",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:14+00:00"
            },
            {
                "author": "Kyle Goon",
                "title": "Spurs\u2019 Becky Hammon becomes first woman to coach an NBA game",
                "description": "The longtime assistant takes over after Gregg Popovich is ejected during the second quarter of Wednesday\u0027s game against the Lakers.",
                "url": "https:\/\/www.sbsun.com\/2020\/12\/30\/spurs-becky-hammon-becomes-first-woman-to-coach-an-nba-game\/",
                "source": "sbsun",
                "image": "https:\/\/www.sbsun.com\/wp-content\/uploads\/2020\/12\/Lakers-Spurs-Basketb-16x9-1-1.jpg?w=1400px\u0026strip=all",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:14:14+00:00"
            },
            {
                "author": "Associated Press",
                "title": "China OKs 1st homegrown vaccine said to be 79.3% effective",
                "description": "BEIJING (AP) \u2014 Chinese health regulators have given conditional approval to a coronavirus vaccine developed by state-owned Sinopharm. The two-dose vaccine is the first one approved for general use in China. The go-ahead comes as the country has begun to vaccinate 50 million people before celebrating the Lunar New Year in February. The company earlier\nThe post China OKs 1st homegrown vaccine said to be 79.3% effective appeared first on KVOA.",
                "url": "https:\/\/kvoa.com\/ap-national-news\/2020\/12\/30\/china-gives-conditional-approval-to-sinopharm-vaccine\/",
                "source": "kvoa",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:13:52+00:00"
            },
            {
                "author": "none@none.com (Aisha Mahmood)",
                "title": "65 Kashmiris were extra-judicially killed this year in IIOJK: Report",
                "description": "At least 65 civilians were killed \u0027extra-judicially\u0027 in Indian Illegally-Occupied Jammu and Kashmir (IIOJK) in 2020.\n\nIn its report, the Legal Forum for Oppressed Voices of Kashmir reveals that 232 freedom fighters and 177 Indian troops, were killed in gunfights and staged clashes from January 1 to December 30 this year. According to the report, some 65 civilians were killed \u0027extra-judicially, including the three labourers in the Shopian district in a staged gunfight in August.\n\nThe report further revealed that 2,773 people were detained and arrested by Indian forces and put in different jails, adding that the forces launched 312 cordon and search operations which resulted in 124 clashes between the security forces and the separatists.\n\nDuring these clashes, the Indian forces destroyed and vandalised 657 houses, Express Tribune reported. The destruction of civilian properties increased during the COVID-19 lockdown enforced by the government, with an entire village in Budgam district vandalised.\n\n\u201c2020 may be recorded as Zero year in the human history as the COVID-19 pandemic forced most of global citizenry inside their homes to save themselves from the deadly infection. However, for the Indian-occupied Kashmir, this year added more complications and saw no letup in atrocities committed by the Indian occupying forces,\u201d the report said.",
                "url": "https:\/\/www.brecorder.com\/news\/40046149\/65-kashmiris-were-extra-judicially-killed-this-year-in-iiojk-report",
                "source": "brecorder",
                "image": "https:\/\/i.brecorder.com\/large\/2020\/12\/5fed5bb6d45e7.jpg",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:13:07+00:00"
            },
            {
                "author": null,
                "title": "China approves its first homegrown coronavirus vaccine, developed by Sinopharm",
                "description": "Chinese regulators have approved the country\u0027s first homegrown coronavirus vaccine, developed by state-owned pharmaceutical giant Sinopharm, officials announced Thursday.",
                "url": "http:\/\/rss.cnn.com\/~r\/rss\/cnn_latest\/~3\/YCR4UP0GVIc\/index.html",
                "source": "CNN",
                "image": "https:\/\/cdn.cnn.com\/cnnnext\/dam\/assets\/201213220333-sinopharm-vaccine-production-file-restricted-super-169.jpg",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:13:04+00:00"
            },
            {
                "author": null,
                "title": "Activists and Christian singer\u0027s followers clash on skid row",
                "description": "Activists and evangelical Christians skirmished on skid row over masking and social distancing Wednesday night, as singer Sean Feucht and his followers launched three days of New Year\u0027s gatherings with prayer, singing and food distribution to the 50-block district\u0027s homeless people.",
                "url": "https:\/\/www.latimes.com\/california\/story\/2020-12-30\/activists-and-christian-singer-clash-over-maskless-outreach-on-skid-row",
                "source": "latimesblogs",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:12:56+00:00"
            },
            {
                "author": "Oliver B\u00fcgenburg",
                "title": "PlayStation Plus-Titel im Januar 2021",
                "description": "PlayStation Plus-Mitglieder erwarten im kommenden neuen Jahr erst einmal drei spannende Plus-Spiele: Ab dem 5.\u00a0Januar 2021 sind die PS4-Spiele Shadow of the Tomb Raider und GreedFall im Abonnement erh\u00e4ltlich. Zudem k\u00f6nnen PS5-Spieler Maneater kostenlosihrerBibliothek hinzuf\u00fcgen. Weiterhin haben PS5-Besitzer die M\u00f6glichkeit, die PlayStation Plus Collection mit 20 ausgew\u00e4hlten Spielen herunterzuladen. Shadow of the Tomb Raider In \u0026#8230; \n\u201ePlayStation Plus-Titel im Januar 2021\u201c weiterlesen\nDer Beitrag PlayStation Plus-Titel im Januar 2021 erschien zuerst auf Gamers DE - Aktuelle Spiele News und Reviews.",
                "url": "https:\/\/www.gamers.de\/2020\/12\/31\/playstation-plus-titel-im-januar-2021\/",
                "source": "gamers",
                "image": null,
                "category": "general",
                "language": "de",
                "country": "de",
                "published_at": "2020-12-31T05:12:49+00:00"
            },
            {
                "author": "Associated Press",
                "title": "Asia Today: South Korea trying to stop virus in prisons",
                "description": "SEOUL, South Korea (AP) \u2014 South Korea has enforced its toughest physical distancing rules at correctional facilities after a cluster of coronavirus infections flared at a Seoul prison. The Justice Ministry says that 792 people at Seoul\u2019s Dongbu Detention Center have tested positive. One of the inmates has died. South Korea is struggling to contain\nThe post Asia Today: South Korea trying to stop virus in prisons appeared first on KTIV.",
                "url": "https:\/\/ktiv.com\/2020\/12\/30\/asia-today-s-korea-tries-to-curb-virus-cluster-at-prison\/",
                "source": "ktiv",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:11:23+00:00"
            },
            {
                "author": "Associated Press",
                "title": "Asia Today: South Korea trying to stop virus in prisons",
                "description": "SEOUL, South Korea (AP) \u2014 South Korea has enforced its toughest physical distancing rules at correctional facilities after a cluster of coronavirus infections flared at a Seoul prison. The Justice Ministry says that 792 people at Seoul\u2019s Dongbu Detention Center have tested positive. One of the inmates has died. South Korea is struggling to contain\nThe post Asia Today: South Korea trying to stop virus in prisons appeared first on KVOA.",
                "url": "https:\/\/kvoa.com\/ap-national-news\/2020\/12\/30\/asia-today-s-korea-tries-to-curb-virus-cluster-at-prison\/",
                "source": "kvoa",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:11:23+00:00"
            },
            {
                "author": null,
                "title": "Deutsche EU-Ratspr\u00e4sidentschaft geht zu Ende",
                "description": "BR\u00dcSSEL (dpa-AFX) - Nach sechs Monaten geht die deutsche EU-Ratspr\u00e4sidentschaft an Silvester um Mitternacht zu Ende. Am 1. Januar \u00fcbernimmt Portugal ebenfalls f\u00fcr ein halbes Jahr den Vorsitz der 2...",
                "url": "https:\/\/www.finanznachrichten.de\/nachrichten-2020-12\/51624833-deutsche-eu-ratspraesidentschaft-geht-zu-ende-016.htm",
                "source": "finanznachrichten",
                "image": null,
                "category": "general",
                "language": "de",
                "country": "de",
                "published_at": "2020-12-31T05:11:00+00:00"
            },
            {
                "author": null,
                "title": "Ende der \u00dcbergangsphase: Gro\u00dfbritannien schlie\u00dft den Brexit ab",
                "description": "LONDON\/BR\u00dcSSEL (dpa-AFX) - Gro\u00dfbritannien schlie\u00dft am Donnerstag um Mitternacht den Brexit endg\u00fcltig ab. Dann endet nach einer elfmonatigen \u00dcbergangsphase seit dem EU-Austritt auch die Mitgliedsch...",
                "url": "https:\/\/www.finanznachrichten.de\/nachrichten-2020-12\/51624832-ende-der-uebergangsphase-grossbritannien-schliesst-den-brexit-ab-016.htm",
                "source": "finanznachrichten",
                "image": null,
                "category": "general",
                "language": "de",
                "country": "de",
                "published_at": "2020-12-31T05:11:00+00:00"
            },
            {
                "author": "News on the Net",
                "title": "Speech STUNS Senators, UNANIMOUS AUDIT OF FULTON COUNTY",
                "description": "GA State Senate Judiciary Subcommittee unanimously pass a motion to audit Fulton County\u0026#8217;s absentee ballots\n\nFollowing bombshell report of the live hack of Dominion by Johan Pulitzer",
                "url": "https:\/\/canadafreepress.com\/article\/121060",
                "source": "canadafreepress",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:10:52+00:00"
            },
            {
                "author": "Jack Dini",
                "title": "Australia\u0027s Wind Issues- The Canary in a Coal Mine For Other Countries?",
                "description": "The newest and biggest wind project to date in Australia is to undergo major repairs after faults were found in its commissioning process. Wind turbines at the Coppers Gap wind farm in Australia had to be repaired or replaced before they were even put into service. (1)\n\nThe blades of one of the 123 turbines will have to be replaced entirely, while GE Catcon is also going\u00a0 to replace \u0026#8216;generators\u0026#8217;- referring to the equipment in the nacelle at the top of the wind tower \u2014in a further 50 turbines. \u00a0",
                "url": "https:\/\/canadafreepress.com\/article\/121033",
                "source": "canadafreepress",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:10:52+00:00"
            },
            {
                "author": "Dennis Jamison",
                "title": "Bold and Courageous Americans Required to Forge the Future of Freedom",
                "description": "American history is full of stories of how, in times of tribulation and tremendous trials, true heroes emerge. Of course, that doesn\u2019t show up in the various Marxist-based, or N.Y. Times promoted, anti-American history courses. The real history is not propaganda from either side\u0026#8212;it is based on objective observation, and the simple fact that a rag-tag band of colonial volunteers was molded into a legitimate fighting force speaks volumes of truth about heroism arising in times of adversity. In my previous article that touched on General George Washington\u2019s bold turn in mid-winter, I could only summarize how difficult the circumstances were for the six-month-old baby of American Independence. Americans today assume a lot about the history they truly do not know.",
                "url": "https:\/\/canadafreepress.com\/article\/121014",
                "source": "canadafreepress",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:10:52+00:00"
            },
            {
                "author": "Right Side Broadcasting",
                "title": "Georgia State Senate Holds Meeting on 2020 Election Fraud 12\/30\/20",
                "description": "Wednesday, December 30 2020: Members of Georgia\u0026#8217;s Senate Judiciary Subcommittee on Elections and members of the Senate Judiciary committee will hold a hearing to study Georgia\u0026#8217;s Election laws, and their past and present impact on the current Election cycle. They will also consider the committee report from the December 3rd meeting.\n\nThe hearing comes after a senate subcommittee held a hearing last week at the capitol to discuss perceived voting irregularities in November\u2019s presidential election.",
                "url": "https:\/\/canadafreepress.com\/article\/121054",
                "source": "canadafreepress",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:10:52+00:00"
            },
            {
                "author": "Don Rosenberg",
                "title": "Will the \u0027Crats succeed in stealing our country? Only if we let them",
                "description": "The \u0026#8220;\u0026#8216;Crats\u0026#8221; are leading a coup against our government\u0026#8212;Democrats, bureaucrats, Techno-crats, and billionaire-aristocrats. They think they can censor, bully, and steal their way into power, and run the United States just like the oligarchs in Russia and China\u0026#8217;s CCP. What they fail to realize is that the people of the United States have freedom baked into our DNA which can\u0026#8217;t be bullied by riots, a pandemic panic or political correctness intimidation, even after 30 years of \u0026#8220;education reform\u0026#8221; and a media that doesn\u0026#8217;t report news, but instead manufactures propaganda.",
                "url": "https:\/\/canadafreepress.com\/article\/121012",
                "source": "canadafreepress",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:10:52+00:00"
            },
            {
                "author": "Bob Hoye",
                "title": "Fear of Global Cooling and Falling Iguanas",
                "description": "A tweet from the National Weather Service in Miami: \u0026#8220;Brrr! Much colder temps expected for Christmas. Falling iguanas are possible\u0026#8221;.\u00a0\n\nOn Christmas Day, the Associated Press reported: \u0026#8220;With unexpectedly cold weather in the forecast and pandemic-related curfews. Florida is about to have a Christmas unlike any other in recent memory, and it may involve falling iguanas.\u0026#8221;\u00a0\n\nIt seems that the lizards which are cold-blooded\u00a0like to sleep in trees. But when it gets unusually cold their body temperature drops enough, they go sort of dormant. And in losing their grip fall from the branches. Without warning, which was part of the weather alert that temps could be the lowest in some 21 years.\u00a0",
                "url": "https:\/\/canadafreepress.com\/article\/121034",
                "source": "canadafreepress",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:10:52+00:00"
            },
            {
                "author": "Chuck Lehmann",
                "title": "The Democrats Credo\u00a0 -\u00a0 \u0027We\u0027ve Got What it Takes to Take What You\u0027ve Got\u0027",
                "description": "To listen to the Democrats you\u0026#8217;d think that the people who are a success in life and who have accumulated financial independence, are the people who should be scapegoats for the financial condition of the country.\u00a0 Therefore, according to the Democrats, we need to \u0026#8220;punish\u0026#8221; them by over taxing them to make up for the governments malfeasance in running their financial affairs.\u00a0 They never tell you that the top 10% of all taxpayers pay approximately 70% of all income taxes (is that paying their \u0026#8220;fair share\u0026#8221;?).\u00a0 Without these much maligned taxpayers, we\u0026#8217;d be in much more of a financial crisis than we are now in.\u00a0 In that regard, I do believe that some corporations who earn millions in profits should pay something instead of nothing in income taxes, within reason (the list of corporations who earned a profit but paid no income tax included such companies as Amazon, Netflix, IBM, U.S. Steel etc.). Actually, we\u0026#8217;ll need more people in the 10% category paying taxes, not less.",
                "url": "https:\/\/canadafreepress.com\/article\/121015",
                "source": "canadafreepress",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:10:52+00:00"
            },
            {
                "author": "Hans von der Burchard",
                "title": "Merkel\u2019s report card: Grading Germany\u2019s EU presidency",
                "description": "From health care to foreign policy, POLITICO evaluates Berlin on its time at the helm of the European Union.",
                "url": "https:\/\/www.politico.eu\/article\/report-card-for-angela-merkel-how-german-eu-council-presidency-performed\/?utm_source=RSS_Feed\u0026utm_medium=RSS\u0026utm_campaign=RSS_Syndication",
                "source": "europeanvoice",
                "image": "https:\/\/www.politico.eu\/wp-content\/uploads\/2020\/12\/30\/GettyImages-1230153525.jpg",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:10:49+00:00"
            },
            {
                "author": "AFP",
                "title": "The different veins of kratom",
                "description": "The kratom tree, known scientifically as mitragyna speciosa, is a tree in the coffee family. It grows natively in Southeast Asian countries such as Thailand, Indonesia, Myanmar, and a few others.\nAugusta Free Press - Virginia News, Sports, Weather, Arts, Events, Politics",
                "url": "https:\/\/augustafreepress.com\/the-different-veins-of-kratom\/feed\/atom\/",
                "source": "augustafreepress",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:10:35+00:00"
            },
            {
                "author": "AFP",
                "title": "The different veins of kratom",
                "description": "The kratom tree, known scientifically as mitragyna speciosa, is a tree in the coffee family. It grows natively in Southeast Asian countries such as Thailand, Indonesia, Myanmar, and a few others.\nAugusta Free Press - Virginia News, Sports, Weather, Arts, Events, Politics",
                "url": "https:\/\/augustafreepress.com\/the-different-veins-of-kratom\/",
                "source": "augustafreepress",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:10:35+00:00"
            },
            {
                "author": null,
                "title": "Russland versch\u00e4rft Ausl\u00e4ndische-Agenten-Gesetz",
                "description": "Russland will sich st\u00e4rker gegen eine m\u00f6gliche Einmischung anderer Staaten abgrenzen. Nun tritt ein neues umstrittenes Gesetz in Kraft, dass die Einstufung von Nichtregierungsorganisationen als \u0022ausl\u00e4ndische Agenten\u0022 vereinfacht. Von Oliver Soos.",
                "url": "https:\/\/www.tagesschau.de\/ausland\/russland-auslaendische-agenten-gesetz-101.html",
                "source": "ARD",
                "image": null,
                "category": "general",
                "language": "de",
                "country": "de",
                "published_at": "2020-12-31T05:10:28+00:00"
            },
            {
                "author": null,
                "title": "\u0022Die Pandemie ist eine Jahrhundertaufgabe\u0022",
                "description": "Das Jahr 2020 sei gepr\u00e4gt gewesen von der Corona-Pandemie und habe \u0022allen viel und manchen zu viel auferlegt\u0022, so Kanzlerin Merkel in ihrer Neujahrsansprache. Dennoch blickt sie angesichts der angelaufenen Impfungen hoffnungsvoll ins neue Jahr.",
                "url": "https:\/\/www.tagesschau.de\/inland\/neujahrsansprache-merkel-125.html",
                "source": "ARD",
                "image": null,
                "category": "general",
                "language": "de",
                "country": "de",
                "published_at": "2020-12-31T05:10:28+00:00"
            },
            {
                "author": null,
                "title": "Ein Jahr nach Chinas Corona-Warnung: Schweigen und verschleiern",
                "description": "Vor einem Jahr meldete China der WHO den Ausbruch einer unbekannten Lungenkrankheit in Wuhan. Fr\u00fch in der Krise wurden vor Ort schwerwiegende Fehler gemacht. Dar\u00fcber offen zu sprechen ist heute in China fast unm\u00f6glich. Von Steffen Wurzel.",
                "url": "https:\/\/www.tagesschau.de\/ausland\/ein-jahr-corona-china-wuhan-101.html",
                "source": "ARD",
                "image": null,
                "category": "general",
                "language": "de",
                "country": "de",
                "published_at": "2020-12-31T05:10:28+00:00"
            },
            {
                "author": "Mustapha Temidayo",
                "title": "\u2018Ensure Ondo people reap dividends of democracy\u2019",
                "description": "The Christian Association of Nigeria (CAN) in Owo Local Government of Ondo State has urged Governor Oluwarotimi Akeredolu to ensure that the people reap the dividend of democracy. The CAN Chairman in the council area, Rev. Joshua Oladapo, stated this during a visit to Akeredolu yesterday in Akure. According to him, the governor should ensure [\u0026#8230;]",
                "url": "https:\/\/thenationonlineng.net\/ensure-ondo-people-reap-dividends-of-democracy\/",
                "source": "thenationonlineng",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:10:18+00:00"
            },
            {
                "author": "Mustapha Temidayo",
                "title": "\u2018Ensure Ondo people reap dividends of democracy\u2019",
                "description": "The Christian Association of Nigeria (CAN) in Owo Local Government of Ondo State has urged Governor Oluwarotimi Akeredolu to ensure that the people reap the dividend of democracy. The CAN Chairman in the council area, Rev. Joshua Oladapo, stated this during a visit to Akeredolu yesterday in Akure. According to him, the governor should ensure [\u0026#8230;]",
                "url": "https:\/\/thenationonlineng.net\/ensure-ondo-people-reap-dividends-of-democracy\/",
                "source": "thenationonlineng",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:10:18+00:00"
            },
            {
                "author": null,
                "title": "Khaled Meshaal Fast Facts",
                "description": "See CNN\u0027s Khaled Meshaal Fast Facts for a look at the life of the former political leader of Hamas.",
                "url": "http:\/\/rss.cnn.com\/~r\/rss\/edition_meast\/~3\/syk5Z-fBKtg\/index.html",
                "source": "CNN Middle East",
                "image": "https:\/\/cdn.cnn.com\/cnnnext\/dam\/assets\/140804204232-tsr-dnt-robertson-khaled-meshaal-hamas-leader-00003308-vertical-large-gallery.jpg",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:10:09+00:00"
            },
            {
                "author": null,
                "title": "Ismail Haniya Fast Facts",
                "description": "Read Fast Facts from CNN about Ismail Haniya, Hamas leader in Gaza.",
                "url": "http:\/\/rss.cnn.com\/~r\/rss\/edition_meast\/~3\/CaNbEgHnyjA\/index.html",
                "source": "CNN Middle East",
                "image": "https:\/\/cdn.cnn.com\/cnnnext\/dam\/assets\/170506095145-ismail-haniyeh-0501-restricted-super-169.jpg",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:10:09+00:00"
            },
            {
                "author": null,
                "title": "Ahmed Qorei Fast Facts",
                "description": "Read CNN\u0027s Ahmed Qorei Fast Facts for a look at the life of the former prime minister of the Palestinian National Authority.",
                "url": "http:\/\/rss.cnn.com\/~r\/rss\/edition_meast\/~3\/sphTrOuujkM\/index.html",
                "source": "CNN Middle East",
                "image": "https:\/\/cdn.cnn.com\/cnnnext\/dam\/assets\/150419145544-fast-facts-ahmed-qorei-super-169.jpg",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:10:09+00:00"
            },
            {
                "author": "Curtis Crabtree",
                "title": "John Wolford is confident he can step up for Rams at quarterback",
                "description": "With a critical Week 17 matchup against the Arizona Cardinals this Sunday, the Los Angeles Rams have been forced to turn to a quarterback with zero career regular season snaps. John Wolford will get the starting nod for the Rams this weekend after Jared Goff had to have surgery on his broken thumb on Monday. [more]",
                "url": "https:\/\/profootballtalk.nbcsports.com\/2020\/12\/31\/john-wolford-is-confident-he-can-step-up-for-rams-at-quarterback\/",
                "source": "profootballtalk",
                "image": "https:\/\/profootballtalk.nbcsports.com\/wp-content\/uploads\/sites\/25\/2020\/12\/GettyImages-1169072056-e1609387952417.jpg?w=1021\u0026h=622\u0026crop=1",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:09:43+00:00"
            },
            {
                "author": "Hans von der Burchard",
                "title": "Merkel\u2019s report card: Grading Germany\u2019s EU presidency",
                "description": "From health care to foreign policy, POLITICO evaluates Berlin on its time at the helm of the European Union.",
                "url": "https:\/\/www.politico.eu\/article\/report-card-for-angela-merkel-how-german-eu-council-presidency-performed\/?utm_source=RSS_Feed\u0026utm_medium=RSS\u0026utm_campaign=RSS_Syndication",
                "source": "europeanvoice",
                "image": "https:\/\/www.politico.eu\/wp-content\/uploads\/2020\/12\/30\/GettyImages-1230153525.jpg",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:08:49+00:00"
            },
            {
                "author": "Associated Press",
                "title": "$250k bond set for man accused of discarding human remains",
                "description": "PRESCOTT, Ariz. (AP) \u2014 Bond has been set at $250,000 for a man accused of discarding human remains in remote areas of central Arizona. Walter Harold Mitchell had his initial appearance Wednesday in justice court. He appeared via video from the Yavapai County jail, a day after being arrested in metropolitan Phoenix. The Yavapai County\nThe post $250k bond set for man accused of discarding human remains appeared first on KVOA.",
                "url": "https:\/\/kvoa.com\/ap-arizona-news\/2020\/12\/30\/250k-bond-set-for-man-accused-of-discarding-human-remains\/",
                "source": "kvoa",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:08:31+00:00"
            },
            {
                "author": "barry@rustybrick.com (Barry Schwartz)",
                "title": "Daily Search Forum Recap: December 30, 2020",
                "description": "Here is a recap of what happened in the search forums today...",
                "url": "http:\/\/feeds.seroundtable.com\/~r\/SearchEngineRoundtable1\/~3\/74_KwzH5EOE\/recap-12-30-2020-30681.html",
                "source": "seroundtable",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:08:11+00:00"
            },
            {
                "author": "Devin Reiners",
                "title": "Pierce boys and girls advance to the Great Northeast Nebraska Shootout Finals",
                "description": "The Pierce boys stay unbeaten with win over Hartington Cedar Catholic. The Pierce girls top Pender. Both advance to the Great Northeast Nebraska Shootout Finals.\nThe post Pierce boys and girls advance to the Great Northeast Nebraska Shootout Finals appeared first on KTIV.",
                "url": "https:\/\/ktiv.com\/2020\/12\/30\/pierce-boys-and-girls-advance-to-the-great-northeast-nebraska-shootout-finals\/",
                "source": "ktiv",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:07:50+00:00"
            },
            {
                "author": "Adrian Luevano",
                "title": "Thunder Ridge finishes Holiday Tournament unbeaten",
                "description": "IDAHO FALLS, Idaho (KIFI) -\u00a0Thunder Ridge guard Lloyer Driggs powered the Titans to a 75-68 win over Coeur d\u0027Alene by scoring 28 points. With the win, Thunder Ridge finishes the East Idaho Holiday Tournament undefeated. The Titans are back in action on Tuesday, January 5, when they host Blackfoot.\nThe post Thunder Ridge finishes Holiday Tournament unbeaten appeared first on Local News 8.",
                "url": "https:\/\/localnews8.com\/sports\/2020\/12\/30\/thunder-ridge-finishes-holiday-tournament-unbeaten\/",
                "source": "localnews8",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:07:44+00:00"
            },
            {
                "author": "Reuters",
                "title": "Durant, Irving carry Nets to 145-141 triumph over Hawks",
                "description": "Kevin Durant scored 33 points and Kyrie Irving added 17 of his 25 points in the fourth quarter as the Brooklyn Nets outlasted the Atlanta Hawks for a wild 145-141 victory in New York. Durant registered his first double-double as a Net by adding 11 rebounds, and he missed his 13th career triple-double by two [\u0026#8230;]",
                "url": "https:\/\/nationalpost.com\/pmn\/sports-pmn\/durant-irving-carry-nets-to-145-141-triumph-over-hawks-2",
                "source": "nationalpost",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:07:32+00:00"
            },
            {
                "author": "Reuters",
                "title": "Durant, Irving carry Nets to 145-141 triumph over Hawks",
                "description": "Kevin Durant scored 33 points and Kyrie Irving added 17 of his 25 points in the fourth quarter as the Brooklyn Nets outlasted the Atlanta Hawks for a wild 145-141 victory in New York. Durant registered his first double-double as a Net by adding 11 rebounds, and he missed his 13th career triple-double by two [\u0026#8230;]",
                "url": "https:\/\/nationalpost.com\/pmn\/sports-pmn\/durant-irving-carry-nets-to-145-141-triumph-over-hawks-2",
                "source": "nationalpost",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:07:32+00:00"
            },
            {
                "author": "Associated Press",
                "title": "Federal investigation nets seizures of counterfeit masks",
                "description": "PHOENIX (AP) \u2014 Authorities say federal agents have seized over 200,000 counterfeit surgical masks intended for hospital workers. U.S. Customs and Border Protection said an investigation by CBP officers and Homeland Security Investigations agents based at Sky Harbor International Airport in Phoenix resulted in seizures of several shipments of the counterfeit masks in various locations\nThe post Federal investigation nets seizures of counterfeit masks appeared first on KVOA.",
                "url": "https:\/\/kvoa.com\/ap-arizona-news\/2020\/12\/30\/federal-investigation-nets-seizures-of-counterfeit-masks\/",
                "source": "kvoa",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:07:20+00:00"
            },
            {
                "author": "AP News",
                "title": "AP Top Sports News at 12:06 a.m. EST",
                "description": "AP Top Sports News at 12:06 a.m. EST\nThe post AP Top Sports News at 12:06 a.m. EST appeared first on WTMJ.",
                "url": "https:\/\/wtmj.com\/sports\/2020\/12\/30\/ap-top-sports-news-at-1206-a-m-est-4\/",
                "source": "620wtmj",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:07:04+00:00"
            },
            {
                "author": "AP News",
                "title": "Hammon first woman to direct NBA team; Lakers beat Spurs",
                "description": "Becky Hammon became the first woman to direct an NBA team, taking over the San Antonio Spurs after coach Gregg Popovich was ejected in a 121-107 loss to LeBron James and the Los Angeles Lakers on Wednesday night\nThe post Hammon first woman to direct NBA team; Lakers beat Spurs appeared first on WTMJ.",
                "url": "https:\/\/wtmj.com\/sports\/2020\/12\/30\/hammon-first-woman-to-direct-nba-team-lakers-beat-spurs-4\/",
                "source": "620wtmj",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:06:48+00:00"
            },
            {
                "author": "AP News",
                "title": "Hammon first woman to direct NBA team; Lakers beat Spurs",
                "description": "Becky Hammon became the first woman to direct an NBA team, taking over the San Antonio Spurs after coach Gregg Popovich was ejected in a 121-107 loss to LeBron James and the Los Angeles Lakers on Wednesday night\nThe post Hammon first woman to direct NBA team; Lakers beat Spurs appeared first on WTMJ.",
                "url": "https:\/\/wtmj.com\/national\/2020\/12\/30\/hammon-first-woman-to-direct-nba-team-lakers-beat-spurs-3\/",
                "source": "620wtmj",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:06:42+00:00"
            },
            {
                "author": "Associated Press",
                "title": "Hammon first woman to direct NBA team; Lakers beat Spurs",
                "description": "SAN ANTONIO (AP) \u2014 Becky Hammon became the first woman to direct an NBA team, taking over the San Antonio Spurs after coach Gregg Popovich was ejected in a 121-107 loss to LeBron James and the Los Angeles Lakers on Wednesday night. \u00a0James celebrated his 36th birthday with 26 points, eight assists and five rebounds\nThe post Hammon first woman to direct NBA team; Lakers beat Spurs appeared first on WXOW.",
                "url": "https:\/\/wxow.com\/2020\/12\/30\/hammon-first-woman-to-direct-nba-team-lakers-beat-spurs\/",
                "source": "wxow",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:06:28+00:00"
            },
            {
                "author": "Associated Press",
                "title": "Hammon first woman to direct NBA team; Lakers beat Spurs",
                "description": "SAN ANTONIO (AP) \u2014 Becky Hammon became the first woman to direct an NBA team, taking over the San Antonio Spurs after coach Gregg Popovich was ejected in a 121-107 loss to LeBron James and the Los Angeles Lakers on Wednesday night. \u00a0James celebrated his 36th birthday with 26 points, eight assists and five rebounds\nThe post Hammon first woman to direct NBA team; Lakers beat Spurs appeared first on KTTC.",
                "url": "https:\/\/kttc.com\/2020\/12\/30\/hammon-first-woman-to-direct-nba-team-lakers-beat-spurs\/",
                "source": "kttc",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:06:28+00:00"
            },
            {
                "author": "Dylan Bouscher, Nhat V. Meyer, Karl Mondon",
                "title": "Wolf Moon photos from around the Bay Area",
                "description": "The Ice Moon, or the final full moon of 2020 went by many names, including the Moon after the Yule and the Long Night Moon",
                "url": "https:\/\/www.mercurynews.com\/2020\/12\/30\/wolf-moon-photos-from-around-the-bay-area\/",
                "source": "mercurynews",
                "image": "https:\/\/www.mercurynews.com\/wp-content\/uploads\/2020\/12\/SJM-L-FULLMOON-1230-2-1.jpg?w=1400px\u0026strip=all",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:06:20+00:00"
            },
            {
                "author": "Dylan Bouscher, Nhat V. Meyer, Karl Mondon",
                "title": "Wolf Moon photos from around the Bay Area",
                "description": "The Ice Moon, or the final full moon of 2020 went by many names, including the Moon after the Yule and the Long Night Moon",
                "url": "https:\/\/www.mercurynews.com\/2020\/12\/30\/wolf-moon-photos-from-around-the-bay-area\/",
                "source": "Mercury News",
                "image": "https:\/\/www.mercurynews.com\/wp-content\/uploads\/2020\/12\/SJM-L-FULLMOON-1230-2-1.jpg?w=1400px\u0026strip=all",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:06:20+00:00"
            },
            {
                "author": "Dylan Bouscher, Nhat V. Meyer, Karl Mondon",
                "title": "Wolf Moon photos from around the Bay Area",
                "description": "The Ice Moon, or the final full moon of 2020 went by many names, including the Moon after the Yule and the Long Night Moon",
                "url": "https:\/\/www.mercurynews.com\/2020\/12\/30\/wolf-moon-photos-from-around-the-bay-area\/",
                "source": "The Mercury News",
                "image": "https:\/\/www.mercurynews.com\/wp-content\/uploads\/2020\/12\/SJM-L-FULLMOON-1230-2-1.jpg?w=1400px\u0026strip=all",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:06:20+00:00"
            },
            {
                "author": "Dylan Bouscher, Nhat V. Meyer, Karl Mondon",
                "title": "Wolf Moon photos from around the Bay Area",
                "description": "The Ice Moon, or the final full moon of 2020 went by many names, including the Moon after the Yule and the Long Night Moon",
                "url": "https:\/\/www.mercurynews.com\/2020\/12\/30\/wolf-moon-photos-from-around-the-bay-area\/",
                "source": "mercurynews",
                "image": "https:\/\/www.mercurynews.com\/wp-content\/uploads\/2020\/12\/SJM-L-FULLMOON-1230-2-1.jpg?w=1400px\u0026strip=all",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:06:20+00:00"
            },
            {
                "author": "Associated Press",
                "title": "High LA virus deaths, more contagious variant hit California",
                "description": "LOS ANGELES (AP) \u2014 A more contagious variant of the coronavirus has been found in California, where state health officials are warning people to avoid New Year\u0026#8217;s Eve gatherings. They say people could face the threat that hospitals will be overwhelmed by a third virus surge within weeks. A 30-year-old San Diego County man was\nThe post High LA virus deaths, more contagious variant hit California appeared first on KTTC.",
                "url": "https:\/\/kttc.com\/2020\/12\/30\/high-la-virus-deaths-more-contagious-variant-hit-california\/",
                "source": "kttc",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:05:37+00:00"
            },
            {
                "author": "Associated Press",
                "title": "High LA virus deaths, more contagious variant hit California",
                "description": "LOS ANGELES (AP) \u2014 A more contagious variant of the coronavirus has been found in California, where state health officials are warning people to avoid New Year\u0026#8217;s Eve gatherings. They say people could face the threat that hospitals will be overwhelmed by a third virus surge within weeks. A 30-year-old San Diego County man was\nThe post High LA virus deaths, more contagious variant hit California appeared first on WXOW.",
                "url": "https:\/\/wxow.com\/2020\/12\/30\/high-la-virus-deaths-more-contagious-variant-hit-california\/",
                "source": "wxow",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:05:37+00:00"
            },
            {
                "author": "Associated Press",
                "title": "High LA virus deaths, more contagious variant hit California",
                "description": "LOS ANGELES (AP) \u2014 A more contagious variant of the coronavirus has been found in California, where state health officials are warning people to avoid New Year\u0026#8217;s Eve gatherings. They say people could face the threat that hospitals will be overwhelmed by a third virus surge within weeks. A 30-year-old San Diego County man was\nThe post High LA virus deaths, more contagious variant hit California appeared first on WREX.",
                "url": "https:\/\/wrex.com\/2020\/12\/30\/high-la-virus-deaths-more-contagious-variant-hit-california\/",
                "source": "wrex",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:05:37+00:00"
            },
            {
                "author": "Wendy Osher",
                "title": "New Rules Proposed for Maui Would Reduce Gatherings to 5; Further Limit Occupancy and Require 10 p.m. Closing Time at Restaurants and Bars",
                "description": "New Emergency Rules for Maui County are proposed to take effect at 12:01 a.m. on Jan. 2, 2021.",
                "url": "https:\/\/mauinow.com\/2020\/12\/30\/new-rules-proposed-for-maui-would-reduce-gatherings-to-5-further-limit-occupancy-and-require-10-p-m-closing-time-at-restaurants-and-bars\/",
                "source": "mauinow",
                "image": "https:\/\/media.mauinow.com\/file\/mauinow\/2020\/08\/MAYOR-VICTORINO-1-300x169.jpg",
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:05:33+00:00"
            },
            {
                "author": null,
                "title": "Ein Jahr nach Chinas Corona-Warnung: Schweigen und verschleiern",
                "description": "Vor einem Jahr meldete China der WHO den Ausbruch einer unbekannten Lungenkrankheit in Wuhan. Fr\u00fch in der Krise wurden vor Ort schwerwiegende Fehler gemacht. Dar\u00fcber offen zu sprechen ist heute in China fast unm\u00f6glich. Von Steffen Wurzel.",
                "url": "https:\/\/www.tagesschau.de\/ausland\/ein-jahr-corona-china-wuhan-101.html",
                "source": "ARD",
                "image": null,
                "category": "general",
                "language": "de",
                "country": "de",
                "published_at": "2020-12-31T05:05:31+00:00"
            },
            {
                "author": "AFP",
                "title": "Virginia DMV accepting applications for 2021 Highway Safety Grants",
                "description": "If your organization\u2019s passion is making a difference in your community and you want to save lives, consider applying for a highway safety grant from the Virginia Department of Motor Vehicles.\nAugusta Free Press - Virginia News, Sports, Weather, Arts, Events, Politics",
                "url": "https:\/\/augustafreepress.com\/virginia-dmv-accepting-applications-for-2021-highway-safety-grants\/feed\/atom\/",
                "source": "augustafreepress",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:05:13+00:00"
            },
            {
                "author": "AFP",
                "title": "Virginia DMV accepting applications for 2021 Highway Safety Grants",
                "description": "If your organization\u2019s passion is making a difference in your community and you want to save lives, consider applying for a highway safety grant from the Virginia Department of Motor Vehicles.\nAugusta Free Press - Virginia News, Sports, Weather, Arts, Events, Politics",
                "url": "https:\/\/augustafreepress.com\/virginia-dmv-accepting-applications-for-2021-highway-safety-grants\/",
                "source": "augustafreepress",
                "image": null,
                "category": "general",
                "language": "en",
                "country": "us",
                "published_at": "2020-12-31T05:05:13+00:00"
            }
        ];

        var temp=[];
        this.arr=this.arr.filter((x, i)=> {
        if (temp.indexOf(x.title) < 0) {
            temp.push(x.title);
            return true;
        }
        return false;
        })
        //console.log(this.arr);
        
        let headLines=[];
        console.log(this.arr); 
        this.arr.forEach((y,i) =>{     
        headLines = headLines.concat({'newsId' : this.x,'newsCat' : y.country, 'newsDescription' : y.description, 'newsDate' : y.published_at, 'newsSourceName' : y.source, 'newsTitle': y.title, 'newsURL': y.url, 'newsImage': y.image, 'newsFav' : 0 } );
         this.x++;
        })
        //localStorage.setItem('LatestNews', JSON.stringify(headLines));
       // this.newsArray = JSON.parse(localStorage.getItem('LatestNews'));
  }


  }


