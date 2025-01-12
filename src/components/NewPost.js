import { useState } from "react";
import classes from './NewPost.module.css';

function NewPost({post, setPost}) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredbody, setEnteredbody]= useState('')


  function updateTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }
  function updatebody(event){
    setEnteredbody(event.target.value)
  }

  function submitHandler(event) {
    event.preventDefault();
    

    // Todo: Handle the creation of new posts and send new post data to https://jsonplaceholder.typicode.com/posts (via a POST) request
  
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      body: JSON.stringify({
        title: enteredTitle,
        body: enteredbody,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((res)=> res.json())
    .then(result =>{
      console.log(result);
      setPost([...post,result]); 

    })

    setEnteredbody("")
    setEnteredTitle("")


  }


  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label>Title</label>
        <input type="text" onChange={updateTitleHandler} value={enteredTitle} />
        <input type="text" onChange={updatebody} value={enteredbody} />
      </div>
      <button >Save</button>
    </form>
  );
}

export default NewPost;
