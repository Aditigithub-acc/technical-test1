import React from 'react';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <nav className="bg-blue-500 p-4 text-white flex gap-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/dashboard" className="hover:underline">Dashboard</Link>
    </nav>
  );
}
export default Nav;
