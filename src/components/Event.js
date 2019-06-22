import React from "react";

export const MeetupEvent = (props) => {
  let {meetup} = props;
  return (
    <div className="event">
        <ul className="metadata">
          <li><h1>{meetup.name}</h1></li>
          <li><span className="icon-date"></span> <span>{meetup.date}</span></li>
          <li><span className="icon-location"></span> <span>{meetup.location}</span></li>
          <li>
          <ul className="tags">
          {
            meetup.tags.map(tag => (
              <li key={tag} ><a href="#" className="tag">{tag}</a></li>
            ))
          }
            
          </ul>
          </li>
        </ul>
        <div>
          <p className="meetup-avatar"><img src={require(`../assets/img/meetups/${meetup.avatar}`)}
            alt="dakar promise js"
            width="120"
            height="120" /></p>
        </div>
        <div>
          
        </div>
      </div>
  )
}