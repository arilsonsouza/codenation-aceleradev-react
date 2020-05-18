import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(false);
  const [currentStory, setCurrentStory] = useState({});
  const [currentProfile, setCurrentProfile] = useState({});

  const toggleStory = (story, postedBy) => {
    setCurrentStory(story);
    setCurrentProfile(postedBy);
    setShowStory(!showStory);    
  };
  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
            {stories.map((story, index) => {
              const postedBy = getUserHandler(story.userId);

             return (
                <button
                  key={story.id}
                  onClick={() => toggleStory(story, postedBy)}
                  className={`user__thumb ${index === 0 && 'user__thumb--hasNew'}`}
                >
                  <div className="user__thumb__wrapper">
                    <img src={postedBy.avatar} alt={postedBy.name} title={postedBy.name}/>
                  </div>
                </button>
              )
            })}  
        </div>    
      </section>

      {showStory && (
        <Story 
          story={currentStory}
          user={currentProfile}
          handleClose={() => setShowStory(!showStory)}
        />
        )}
    </React.Fragment>
  );
};

export default Stories;
