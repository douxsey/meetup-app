import React, {useState} from "react";
import api from "../services/api";

export const ApiContext = React.createContext();

export const ApiProvider = (props) => {
  const ALL_MEETUPS = api.getMeetups();
  const [meetups, setMeetups] = useState(ALL_MEETUPS)
  const value = {
    meetups,
    filterMeetups: (name) => {
      let filteredMeetup = ALL_MEETUPS.filter(meetup => !name  || meetup.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) !== -1);

      setMeetups(filteredMeetup)
    },
  }
    return (
      <ApiContext.Provider value={value}>
        {props.children}
      </ApiContext.Provider>
    )
}

