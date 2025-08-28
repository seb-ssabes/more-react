import {FaStar} from "react-icons/fa"
import {useState} from "react"


export default function RatingStars({starsQuantity = 5}) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  function handleClick(getCurrentIndex) {
    console.log("Clicked!", getCurrentIndex)
    setRating(getCurrentIndex)
  }

  function handleMouseEnter(getCurrentIndex) {
    console.log("Entered!", getCurrentIndex)
    setHover(getCurrentIndex)

  }

  function handleMouseLeave() {
    console.log("Left!")
    setHover(rating)
  }

  return (
    <div className="rating-stars">
      {
        [...Array(starsQuantity)].map((__, index) => {
          index += 1

          return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
          )
        })
      }
    </div>
  )
}
