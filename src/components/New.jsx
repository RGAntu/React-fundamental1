import React, { Suspense, use } from 'react';

const fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())

const New = () => {
    return (
        <div>
            <Suspense fallback={<h1>Loading.......</h1>}>
                <Posts fetchPosts={fetchPosts}></Posts>
            </Suspense>
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