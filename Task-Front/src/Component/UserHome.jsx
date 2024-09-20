import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const UserHome = () => {
  const [role, setRole] = useState(undefined);
  const [paragraphText, setParagraphText] = useState("This is your dashboard content.");

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    console.log("Retrieved role:", storedRole);
    setRole(storedRole);
  }, []);
  
  const handleEdit = () => {
    const newText = prompt("Edit your paragraph:", paragraphText);
    if (newText !== null) {
      setParagraphText(newText);
    }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this paragraph?")) {
      setParagraphText(""); 
    }
  };

  return (
    <div>
      <h1>Welcome to the User Home Page</h1>
      {paragraphText && <p>{paragraphText}</p>}

      {role === 'Admin' && (
        <>
          <button className="action-btn" onClick={handleEdit}>Edit</button>
          <button className="action-btn" onClick={handleDelete}>Delete</button>
        </>
      )}

      {role === 'Editor' && (
        <>
          <button className="action-btn" onClick={handleEdit}>Edit</button>
        </>
      )}

      {role === 'Viewer' && (
        <p>You have read-only access.</p>
      )}

      {role === undefined && (
        <p>Please log in to access your dashboard.</p>
      )}
      <a href="/" className="nav-link">Logout</a>
    </div>
  );
};

UserHome.propTypes = {
  role: PropTypes.oneOf(['Admin', 'Editor', 'Viewer', undefined]),
};

export default UserHome;
