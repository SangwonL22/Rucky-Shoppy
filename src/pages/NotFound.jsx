import React from 'react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className='flex flex-col justify-center items-center h-screen bg-gray-950 opacity-95'>
      <h1 className='text-8xl text-white'>Not Found😥</h1>
      <Link to='/'>
        <Button text='Back Home' />
      </Link>
    </section>
  );
}
