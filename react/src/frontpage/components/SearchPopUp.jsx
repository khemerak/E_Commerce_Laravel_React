import React, { useState, useEffect } from 'react'

export default function SearchPopUp({ onClose }) {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="search-popup">
      <div className="search-popup-container">
        <button 
          type="button" 
          className="close-search" 
          onClick={onClose}
          style={{
            position: 'absolute',
            right: '20px',
            top: '20px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer'
          }}
        >
          ×
        </button>
        <form role="search" method="get" className="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            id="search-form"
            className="search-field"
            placeholder="Type and press enter"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            name="s"
            autoFocus
          />
          <button type="submit" className="search-submit">
            <svg className="search">
              <use xlinkHref="#search" />
            </svg>
          </button>
        </form>
    <h5 className="cat-list-title">Browse Categories</h5>
    <ul className="cat-list">
      <li className="cat-list-item">
        <a href="#" title="Romance">
          Romance
        </a>
      </li>
      <li className="cat-list-item">
        <a href="#" title="Thriller">
          Thriller
        </a>
      </li>
      <li className="cat-list-item">
        <a href="#" title="Sci-fi">
          Sci-fi
        </a>
      </li>
      <li className="cat-list-item">
        <a href="#" title="Cooking">
          Cooking
        </a>
      </li>
      <li className="cat-list-item">
        <a href="#" title="Health">
          Health
        </a>
      </li>
      <li className="cat-list-item">
        <a href="#" title="Lifestyle">
          Lifestyle
        </a>
      </li>
      <li className="cat-list-item">
        <a href="#" title="Fiction">
          Fiction
        </a>
      </li>
    </ul>
  </div>
</div>

  )
}
