import React, { useState, useEffect } from 'react';

const SearchFilter = ({ tasks, setFilteredTasks }) => {
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    const filteredTasks = tasks.filter(task =>
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTasks(filteredTasks);
  }, [searchQuery, tasks, setFilteredTasks]);

  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control"
            style={{ maxWidth: '400px', margin: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
