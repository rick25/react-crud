function Post(props:any) {
  const titleElement = <h2 className='title text-start'>{props.post.title}</h2>
  const bodyElement = <div className='card-text text-start'>{props.post.body}</div>
  return (
    <div>
      <div className='row'>
        <div className='col-8'>
          {titleElement}
        </div>
        <div className='col-4'>
          {/* Button group */}
        </div>
      </div>
      <div className='row'>
        <div className='col-8'>
          {bodyElement}
        </div>
      </div>
      <div className='row'>
        <div className='col-2'>
          {/* Edit submit button */}
        </div>
      </div>
    </div>
  )
}

export default Post;
