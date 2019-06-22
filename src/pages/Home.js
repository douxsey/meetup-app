import React from 'react'
import { MeetupEvent } from '../components/Event';
import { Link } from "react-router-dom";
import  api  from "../services/api";

export const Home = () => {
  let meetups = api.getMeetups();
  return (
    <ul id="meetups">
    {
      meetups.map(meetup => (
        <li key={meetup.id} >
            <MeetupEvent meetup={meetup} />
        </li>
      ))
    }
      

     
    </ul>
  )
}