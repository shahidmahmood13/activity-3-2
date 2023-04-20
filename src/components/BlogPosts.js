import classes from './BlogPosts.module.css';

function BlogPosts(props) {
  return (<ul className={classes.post}>
    <li>
      {props.title}
    </li>
    <li>
      {props.blog}
    </li>
  </ul>)
}

export default BlogPosts;
