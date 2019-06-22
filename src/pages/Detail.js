import React, {useEffect, useState} from "react";
import api from "../services/api";

export const DetailEvent = (props) => {

  let {id} = props.match.params;
  const [meetup, setMeetup] = useState(null);
  useEffect(() => {
    console.log('hey')
   setMeetup(api.getMeetup(+id));
  }, [id])

  if (!meetup) {
    return null;
  }
  return (
    <ul id="meetups" className="details">
    <li>
      <div className="event">
        <ul className="metadata">
          <li><h1>{meetup.name}</h1></li>
          <li><span className="icon-date"></span> <span>{meetup.date}</span></li>
          <li><span className="icon-location"></span> <span>{meetup.location}</span></li>
        </ul>
        <div>
          <p className="meetup-avatar"><img src={require(`../assets/img/meetups/${meetup.avatar}`)}
            alt="dakar promise js"
            width="120"
            height="120" /></p>
        </div>
      </div>
      <div id="meetup-details">
        <ul>
        {
          meetup.speakers.map((speaker, index) => (
            <li key={index} >
            <div className="speaker-infos">
              <p><img src={speaker.avatar} alt="thierno" /></p>
              <div className="meta">
                <p>{speaker.name}</p>
                <p>{speaker.title}</p>
              </div>
            </div>
            <p className="talk-title"><i className="icon-talk"></i>{speaker.subject}</p>
          </li>
          ))
        }
          
        </ul>
      </div>
    </li>

  </ul>
  )
}