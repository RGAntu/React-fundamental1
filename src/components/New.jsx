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

    return(
        <div>
            <h2>Posts:{posts.length}</h2>
        </div>
    )
}

export default New;