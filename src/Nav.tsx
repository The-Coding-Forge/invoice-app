import React from 'react';
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="clients">Clients</Link></li>
      <li><Link to="companies">Companies</Link></li>
    </ul>
  );
}
