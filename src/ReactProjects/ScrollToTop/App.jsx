import { useRef } from "react";
import useFetch from "../UseFetch/App";

export default function ScrollToTopAndBottom() {
  const {data, error, pending} = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  )

  const bottomRef = useRef(null)

  if(pending) {
    return <h1>Loading...Please wait.</h1>
  }

  if(error) {
    return <h1>Something wrong happened. Please try again</h1>
  }


  function handleScrollTop() {
    window.scrollTo({
      top: 0, left: 0, behavior: "smooth",
    })
  }

  function handleScrollBottom() {
    bottomRef.current.scrollIntoView({behavior: "smooth"})
  }


  return (
    <div>
      <h1>Scroll to Top and Bottom Feature</h1>
      <h3>Top sectiopn</h3>
      <button onClick={handleScrollBottom}>Scroll to Bottom</button>
      <ul style={{listStyle: "none"}}>
        {
          data && data.products && data.products.length ?
          data.products.map((item) => <li>{item.title}</li>) : null
        }
      </ul>
      <button onClick={handleScrollTop}>Scroll back to top</button>
      <h3 ref={bottomRef}>Bottom section</h3>
    </div>
  )
}
