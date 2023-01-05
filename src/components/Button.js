import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='sing-up'>
        <button className='btn' >Sign up</button>
    </Link>
  )
}
