import React, { useState } from "react";
import { Link } from "react-router-dom";

export const MeetupEvent = props => {
  let { meetup } = props;
  const [modeEdit, setModeEdit] = useState(false);
  const [modeAdd, setModeAdd] = useState(false);
  const [name, setName] = useState(meetup.name);
  const [tags, setTags] = useState(meetup.tags);

  function addNewTag(tagName) {
    if (tagName) {
      setTags([...tags, tagName]);
    }
    setModeAdd(false);
  }

  let tagsElements = !modeAdd ? (
    <span className="icon-add" onClick={() => setModeAdd(true)} />
  ) : (
    <input
      onKeyPress={event =>
        event.key === "Enter" && addNewTag(event.target.value)
      }
      type="text"
    />
  );

  return (
    <div className="event">
      <ul className="metadata">
        <li className="event-title">
          {!modeEdit ? (
            [
              <Link to={`/details/${meetup.id}`}>
                <h1>{name}</h1>
              </Link>,
              <span onClick={() => setModeEdit(true)} className="icon-edit" />
            ]
          ) : (
            <input
              value={name}
              onChange={event => setName(event.target.value)}
              onKeyPress={event => event.key === "Enter" && setModeEdit(false)}
              type="text"
            />
          )}
        </li>
        <li>
          <span className="icon-date" /> <span>{meetup.date}</span>
        </li>
        <li>
          <span className="icon-location" /> <span>{meetup.location}</span>
        </li>
        <li>
          <ul className="tags">
            {tags.map(tag => (
              <li key={tag}>
                <a href="#" className="tag">
                  {tag}
                </a>
              </li>
            ))}
            <li>
              {tagsElements}
            </li>
          </ul>
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
      <div />
    </div>
  );
};
