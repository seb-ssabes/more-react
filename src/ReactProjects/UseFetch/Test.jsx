import useFetch from "./App"

export default function UseFetchHookTest() {
  const {data, error, pending} = useFetch('https://dummyjson.com/products', {})

  console.log(data, error, pending);


  return (
    <div>
      <h1>Use Fetch Hook</h1>
      <div>
        {pending ? <h3>Pending. Please wait</h3> : null}
        {error ? <h3>{error}</h3> : null}
        {
          data && data.products && data.products.length
          ? data.products.map(productItem => <p key={productItem.key}>{productItem.title}</p>)
          : null
        }
      </div>
    </div>
  )
}
