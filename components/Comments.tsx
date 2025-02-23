import React, { useState } from 'react';
import styles from './Comments.module.css';

interface Comment {
  id: number;
  username: string;
  text: string;
}

const Comments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [username, setUsername] = useState('');
  const [commentText, setCommentText] = useState('');

  const handleAddComment = () => {
    if (username.trim() && commentText.trim()) {
      setComments([...comments, { id: comments.length + 1, username, text: commentText }]);
      setUsername('');
      setCommentText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAddComment();
    }
  };

  return (
    <div className={styles.comments}>
      <h3 className={styles.title}>Comments</h3>
      <div className={styles.commentList}>
        {comments.map(comment => (
          <div key={comment.id} className={styles.comment}>
            <strong>{comment.username}</strong>: {comment.text}
          </div>
        ))}
      </div>
      <div className={styles.commentForm}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
          placeholder="Username"
          required
        />
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          onKeyPress={handleKeyPress}
          className={styles.textarea}
          placeholder="Add a comment..."
          required
        />
        <button onClick={handleAddComment} className={styles.button}>Submit</button>
      </div>
    </div>
  );
};

export default Comments;