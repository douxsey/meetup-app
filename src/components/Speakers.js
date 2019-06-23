import React from "react";
import api from '../services/api';

export default  (props) => {
  let speakers = api.getSpeakers(+props.meetupId);

  return (
    <div id="meetup-details">
      <ul>
        {speakers.map((speaker, index) => (
          <li key={index}>
            <div className="speaker-infos">
              <p>
                <img src={speaker.avatar} alt="thierno" />
              </p>
              <div className="meta">
                <p>{speaker.name}</p>
                <p>{speaker.title}</p>
              </div>
            </div>
            <p className="talk-title">
              <i className="icon-talk" />
              {speaker.subject}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}