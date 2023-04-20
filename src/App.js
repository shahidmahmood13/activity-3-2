import { useEffect, useState } from 'react';
import BlogPosts from './components/BlogPosts';
import NewPost from './components/NewPost';

function App() {
 const [post, setPost]= useState([]);
 const [isawait, setisAwait]= useState(false);
   

  // Todo: Fetch blog posts from https://jsonplaceholder.typicode.com/posts (see documentation on https://jsonplaceholder.typicode.com/guide/)
  // Pass fetched posts to <BlogPost /> via props & output the posts in that component

useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=> res.json())
    .then(result =>{
      setPost(result.slice(0,5))
      setisAwait(true)
      console.log(result)

    })
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));


},[])


  return (
    <>
      <NewPost />
      {post.map((ite)=>{
        return(
          <BlogPosts title ={ite.title} blog= {ite.body} />
        )
      })}
     
    </>
  );
}

export default App;
