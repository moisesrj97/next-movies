import React, { useState } from 'react';

export default function SearchForm(props) {
  const titleChange = (e) => {
    props.handleChange(e.target.value);
  };
  return (
    <input type="text" placeholder="Search for a title..." className="w-3/4 text-xl p-2 ring-green-600 ring-2 rounded-lg" onChange={titleChange} />
  );
}
