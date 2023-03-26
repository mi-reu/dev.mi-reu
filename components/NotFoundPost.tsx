const NotFoundPost = () => {
  return (
    <div role="alert">
      <div className="rounded-t bg-red-500 px-4 py-2 font-bold text-white">404</div>
      <div className="rounded-b border border-t-0 border-red-400 bg-red-100 px-4 py-3 text-red-700">
        <p>Not found post</p>
      </div>
    </div>
  )
}

export default NotFoundPost
