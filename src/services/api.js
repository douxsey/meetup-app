const data = {
  "events": [
    {
      "id": 1,
      "name": "Dakar Promise JS",
      "date": "2019-03-31",
      "location": "Edacy, Sacre Coeur",
      "avatar": "dpjs.png",
      "tags": ['Javascript', 'React', 'React Native', 'Expo' ],
      "speakers": [
        {
          "name": "Thierno Thiam",
          "subject": "Building the same app in Angular",
          "title": "Software Engineer @ Sonatel",
          "avatar": "https://pbs.twimg.com/profile_images/1140580324331724800/nN60_9hd_400x400.jpg"
        },
        {
          "name": "Leyla Salim",
          "subject": "Building the same app in Vue.js",
          "title": "Software Engineer @ Makeba",
          "avatar": "https://pbs.twimg.com/profile_images/1089546908597665792/tJMV2KVz_200x200.jpg"
        },
        {
          "name": "Ibrahima Ciss",
          "subject": "Building the same app in React.js",
          "title": "Software Engineer @ Makeba",
          "avatar": "https://pbs.twimg.com/profile_images/1062326294699016192/R0k9tc7J_200x200.jpg"
        }
      ]
    },
    {
      "id": 2,
      "name": "GDG Dakar",
      "date": "2019-01-19",
      "location": "Edacy, Sacre Coeur",
      "avatar": "gdg-dakar.png",
      "tags": ['Android', 'Kotlin', 'AI', 'Vscode'],
      "speakers": [
        {
          "name": "Mamadou Djigo",
          "subject": "Challenges of the startups in Senegal",
          "title": "Country Director @ Edacy",
          "avatar": "https://pbs.twimg.com/profile_images/916705934407274496/fzyoOOO8_200x200.jpg"
        },
        {
          "name": "Rygel Louv",
          "subject": "Kotlin Delegation",
          "title": "Software Engineer @ Makeba",
          "avatar": "https://pbs.twimg.com/profile_images/553483980142432258/EToEwBJ6_400x400.png"
        },
        {
          "name": "Thierno Diop & Elias W Ba",
          "subject": "Machine Learning in the browser",
          "title": "Senior AI/ML Consultant @ MNSConsulting",
          "avatar": "https://pbs.twimg.com/profile_images/1104678350604419072/2lRalEpV_200x200.jpg"
        },
        {
          "name": "Ibrahima Ciss",
          "subject": "VsCode Productivity guide",
          "title": "Software Engineer @ Makeba",
          "avatar": "https://pbs.twimg.com/profile_images/1062326294699016192/R0k9tc7J_200x200.jpg"
        }
      ]
    },
    {
      "id": 3,
      "name": "Galsen AI",
      "date": "2019-01-12",
      "location": "ESP, Dakar",
      "avatar": "galsen-ai.png",
      "tags": ['AI', 'IOT', 'Statistics', 'Gaussian Process'],
      "speakers": [
        {
          "name": "Ousmane Sarr",
          "subject": "IOT: applications, evolution of the offer, challenge and opportunities",
          "title": "CEO SIKA",
          "avatar": "https://pbs.twimg.com/profile_images/799576130030342144/QstxesFf_200x200.jpg"
        },
        {
          "name": "Ahmadou H. Dicko, PhD",
          "subject": "Introduction to probabilistic statistical learning using gaussian process",
          "title": "Statistical Consultant",
          "avatar": "https://pbs.twimg.com/profile_images/808756606183817216/J7LH7YZt_200x200.jpg"
        }
      ]
    },
    {
      "id": 4,
      "name": "Dakar Android U.G",
      "date": "2018-11-24",
      "location": "Edacy, Sacre Coeur",
      "avatar": "daug.png",
      "tags": ['Android', 'Gradle', 'Jenkins', 'Architecture', 'Machine Learning'],
      "speakers": [
        {
          "name": "Souleymane Sidibe",
          "subject": "Android App Bundle",
          "title": "Senior Android Developer @ Chaka",
          "avatar": "https://pbs.twimg.com/profile_images/1110149457247682560/gUijOtv4_200x200.jpg"
        },
        {
          "name": "Martial Konvi",
          "subject": "Android CI with Jenkins",
          "title": "Head of Product @ CoinAfrique",
          "avatar": "https://pbs.twimg.com/profile_images/608414120812113920/4FR55a3R_200x200.jpg"
        },
        {
          "name": "Ibrahima Ciss",
          "subject": "MVC Done Right",
          "title": "Software Engineer @ Makeba",
          "avatar": "https://pbs.twimg.com/profile_images/1062326294699016192/R0k9tc7J_200x200.jpg"
        },
        {
          "name": "Kuassi Jimmy Kumako",
          "subject": "Google ML Kit",
          "title": "Ex Googler, Entrepreneur, avid student of life",
          "avatar": "https://pbs.twimg.com/profile_images/965590820798820352/ztMtRDm2_200x200.jpg"
        }
      ]
    }
  ]
}


export default {
  getMeetups: () => {
    return data.events;
  },
  getMeetup: (id) => {
    let meetups = data.events;
    return meetups.find(meetup => meetup.id === id)
  },
  
}
