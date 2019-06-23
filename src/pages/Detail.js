import React, {useEffect, useState, Suspense} from "react";
import api from "../services/api";
const Speakers =  React.lazy(() => import("../components/Speakers"));

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
            <li>
              <h1>{meetup.name}</h1>
            </li>
            <li>
              <span className="icon-date" /> <span>{meetup.date}</span>
            </li>
            <li>
              <span className="icon-location" />{" "}
              <span>{meetup.location}</span>
            </li>
          </ul>
          <div>
            <p className="meetup-avatar">
              <img
                src={require(`../assets/img/meetups/${meetup.avatar}`)}
                alt="dakar promise js"
                width="120"
                height="120"
              />
            </p>
          </div>
        </div>
        <Suspense fallback={<p>Fall kone khar rek</p>}>
          <Speakers meetupId={id} />
        </Suspense>
      </li>
    </ul>
  );
}