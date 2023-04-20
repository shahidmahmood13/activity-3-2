import classes from './BlogPosts.module.css';

function BlogPosts(props) {
  return (
 <div>
  <ul className={classes.post}>
    <li>
      {props.title}
    </li>
    <li>
      {props.blog}
    </li>
  </ul>
  </div>
  )
}

export default BlogPosts;
