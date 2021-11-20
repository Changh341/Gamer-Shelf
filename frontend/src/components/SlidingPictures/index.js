import './SlidingPictures.css'
const SlidingPictures = ({ pictures }) => {

  return (
    <div className='sliding-container'>
      <div className='sliding-inner'>
        {pictures.map((picture) => {
          return (
            <img className='sliding-image' src={`${picture}`} />
          )
        })}

      </div>

      <div className='sliding-inner'>
        {pictures.map((picture) => {
          return (
            <img className='sliding-image' src={`${picture}`} />
          )
        })}
      </div>
    </div>
  )
}

export default SlidingPictures