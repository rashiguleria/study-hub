import { useState } from 'react';
import { FiSearch, FiMessageSquare, FiUser, FiThumbsUp, FiSend } from 'react-icons/fi';
import './StudentPages.css';
import './DiscussionForum.css';

const DiscussionForum = () => {
  const [activeTab, setActiveTab] = useState('doubts');
  const [searchQuery, setSearchQuery] = useState('');
  const [newPost, setNewPost] = useState('');
  const [comments, setComments] = useState({});
  const [likes, setLikes] = useState({});

  // Sample data
  const posts = [
    {
      id: 1,
      type: 'doubt',
      title: 'How to solve this calculus problem?',
      content: 'I\'m stuck on question 3 from chapter 5. Can anyone explain the solution approach?',
      author: {
        name: 'MathStudent',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        role: 'Student'
      },
      timestamp: '2 hours ago',
      tags: ['Calculus', 'Mathematics']
    },
    {
      id: 2,
      type: 'review',
      title: 'Great experience with this course!',
      content: 'The instructor explains concepts clearly and the assignments are well-structured. Highly recommend!',
      author: {
        name: 'HappyLearner',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        role: 'Student'
      },
      timestamp: '1 day ago',
      tags: ['Feedback', 'Course Review']
    },
    {
      id: 3,
      type: 'doubt',
      title: 'Need help with React state management',
      content: 'I\'m confused about when to use useState vs useReducer. Any practical examples?',
      author: {
        name: 'CodeNewbie',
        avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
        role: 'Student'
      },
      timestamp: '5 hours ago',
      tags: ['React', 'Programming']
    },
    {
      id: 4,
      type: 'review',
      title: 'Study materials could be better',
      content: 'The course content is good but the provided materials need more practical examples.',
      author: {
        name: 'CriticalThinker',
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        role: 'Student'
      },
      timestamp: '3 days ago',
      tags: ['Feedback', 'Improvement']
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesTab = activeTab === 'all' || post.type === activeTab;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleLike = (postId) => {
    setLikes(prev => ({
      ...prev,
      [postId]: (prev[postId] || 0) + 1
    }));
  };

  const handleComment = (postId) => {
    if (!newPost.trim()) return;
    const comment = {
      id: Date.now(),
      content: newPost,
      author: {
        name: 'CurrentUser',
        avatar: 'https://randomuser.me/api/portraits/lego/1.jpg'
      },
      timestamp: 'Just now'
    };
    
    setComments(prev => ({
      ...prev,
      [postId]: [...(prev[postId] || []), comment]
    }));
    
    setNewPost('');
  };

  return (
    <div className="discussion-forum page-shell">
      <header className="forum-header page-heading student-page-heading">
        <div>
          <span className="eyebrow"><FiMessageSquare aria-hidden="true" /> Learn together</span>
          <h1>Study Hub Discussion Forum</h1>
          <p>Ask doubts and share your learning experiences</p>
          <p className="forum-notice">
            Example discussions are local to this page. Replies and reactions are not saved or shared with other learners.
          </p>
        </div>
      </header>

      <div className="forum-controls">
        <div className="search-container">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search doubts or reviews..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="tabs">
          <button 
            className={activeTab === 'doubts' ? 'active' : ''}
            onClick={() => setActiveTab('doubts')}
          >
            Doubts
          </button>
          <button 
            className={activeTab === 'reviews' ? 'active' : ''}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
          <button 
            className={activeTab === 'all' ? 'active' : ''}
            onClick={() => setActiveTab('all')}
          >
            All Posts
          </button>
        </div>
      </div>

      <div className="posts-container">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <div key={post.id} className={`post ${post.type}`}>
              <div className="post-header">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="author-avatar" 
                />
                <div className="author-info">
                  <span className="author-name">{post.author.name}</span>
                  <span className="author-role">{post.author.role}</span>
                </div>
                <span className="timestamp">{post.timestamp}</span>
              </div>
              
              <div className="post-content">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <div className="tags">
                  {post.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="post-actions">
                <button 
                  className="like-btn"
                  onClick={() => handleLike(post.id)}
                >
                  <FiThumbsUp /> {likes[post.id] || 0}
                </button>
                <button className="comment-btn">
                  <FiMessageSquare /> {comments[post.id]?.length || 0} comments
                </button>
              </div>
              
              <div className="comment-section">
                <div className="comment-input">
                  <input
                    type="text"
                    placeholder="Add your comment..."
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                  />
                  <button 
                    className="send-btn"
                    onClick={() => handleComment(post.id)}
                  >
                    <FiSend />
                  </button>
                </div>
                
                {comments[post.id]?.map(comment => (
                  <div key={comment.id} className="comment">
                    <img 
                      src={comment.author.avatar} 
                      alt={comment.author.name} 
                      className="comment-avatar" 
                    />
                    <div className="comment-content">
                      <div className="comment-header">
                        <span className="comment-author">{comment.author.name}</span>
                        <span className="comment-time">{comment.timestamp}</span>
                      </div>
                      <p>{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="no-posts">
            <p>No posts found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscussionForum;