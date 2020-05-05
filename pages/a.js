import React from 'react'
import AntContent from 'components/ant'
import fetch from 'node-fetch'

export default function A({ todo}) {
    return (
        <div>
            A for ant people
            {todo?<p>Todo is in</p>:<p>Placeholder</p>}
             <AntContent/>
        </div>
    )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const todo = await res.json()


  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      todo,
    },
  }
}

