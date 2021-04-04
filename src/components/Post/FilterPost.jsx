import React, { useState } from 'react';

const FilterPost = () => {
  const [search, setSearch] = useState('');

  return <input type="text" className="filter-post" onChange={e => setSearch(e.target.value)} value={search} placeholder="Search by tags..." />;
};

export default FilterPost;
