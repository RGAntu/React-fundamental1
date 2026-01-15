"use client"
import React, { Suspense, use } from 'react';
import {ErrorBoundary} from "react-error-boundary"

const fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())

const New = () => {
    return (
        <div>
            <ErrorBoundary fallback={<h1 className='text-red-500'>Something went wrong...</h1>}>
            <Suspense fallback={<h1>Loading.......</h1>}>
                <Posts fetchPosts={fetchPosts}></Posts>
            </Suspense>
            </ErrorBoundary>
        </div>
    );
};

const Posts = ({fetchPosts}) => {

    const posts = use(fetchPosts)
    console.log(posts)

    const data = posts.map(post => {
                    return(
                        <div key={post.id} className='border border-amber-500 my-3'>
                            <h2>{post.title}</h2>
                            <h2>{post.body}</h2>
                        </div>
                    )
                })

    return(
        <div>
            <h1 className='text-4xl font-bold'>Posts:{posts.length}</h1>
            {/* {
              posts.map((post) =>{
                    return(
                        <div key={post.id} className='border border-amber-500 my-3'>
                            <h2>{post.title}</h2>
                            <h2>{post.body}</h2>
                        </div>
                    )
                } )
            } */}
            {data}
        </div>
    )
}

export default New;