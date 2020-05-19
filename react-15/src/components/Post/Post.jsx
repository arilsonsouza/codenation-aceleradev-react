import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  return (
    <article className="post" data-testid="post">
      <figure className="post__figure">
				<img src={postInfo.imageUrl} alt=''/>
      </figure>
    </article>
  );
};

export default Post;
