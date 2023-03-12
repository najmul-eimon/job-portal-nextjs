const LoadMoreButton = ({action}) => {
  return (
    <div className="load-more-main text-center">
      <button onClick={action} type="button" className="animate-btn animate-btn-outline">Load more</button>
    </div>
  )
}

export default LoadMoreButton