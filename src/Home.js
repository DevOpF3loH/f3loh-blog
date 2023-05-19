import React from 'react'
import Bloglist from './Bloglist';
import useFetch from './useFetch';

function Home() {
  const { data, isPending, error } = useFetch('http://localhost:8000/blogs')

  return (
    <div className='home'>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { data && <Bloglist blogs={data} title="All blogs!!"/>}
    </div>
  )
}

export default Home