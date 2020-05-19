import React, { useCallback, useState } from "react";

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {
	const [metadata, setMetadata] = useState(null);
	const [currentTime, setCurrentTime] = useState(null);

	const updateVideoProgress = useCallback(() => {				
		if (metadata && metadata.duration !== null && currentTime !== null) {
			const elapsedTime = ((currentTime / metadata.duration) * 100);

			return `${elapsedTime.toFixed(2)}%`;
		}

		return '0%';
	}, [metadata, currentTime]);

  return (
    <section className="story" data-testid="story">
      <div className="container">
				<header className="story__header">
						<div className="user">
							<Link to={`/users/${user.username}`} className="user__thumb">
								<img src={user.avatar} alt={user.name} title={user.name}/>
							</Link>
						</div>

						<button 
							onClick={handleClose}
							className="story__close">
							<i className="fas fa-times"/>
						</button>
				</header>

				<div className="story__progress">
					<div
						style={{ width: updateVideoProgress() }}
						className="story__progress__elapsed"
					/>
				</div>
      </div>
      {story.videoUrl && (
				<div className="container">
					<section className="story__video__wrapper">
							<video
								autoPlay
								className="video-player"
								loop
								playsInline
								onTimeUpdate={({target: { currentTime }}) => setCurrentTime(currentTime)}
								onLoadedMetadata={({target: { videoHight, videoWidth, duration }}) => {
									setMetadata({
										videoHight,
										videoWidth,
										duration
									})
								}}
								src={story.videoUrl}
							/>						
					</section>
				</div>
      )}
    </section>
  );
};

export default Story;