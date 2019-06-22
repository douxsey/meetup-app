import React, {useContext} from "react";
import { MeetupEvent } from "../components/Event";
import { Link } from "react-router-dom";
import api from "../services/api";
import { ApiContext } from "../components/ApiContext";

export const Home = () => {
  const {meetups} = useContext(ApiContext)

  return (
    <ul id="meetups">
      {meetups.map(meetup => (
        <li key={meetup.id}>
          <MeetupEvent meetup={meetup} />
        </li>
      ))}
    </ul>
  );
};
