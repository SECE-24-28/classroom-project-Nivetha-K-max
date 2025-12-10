import { useParams } from "react-router-dom"
function Invoice(){
    const data=useParams()
    return(
      <>
      <h1>im from invoice {data.id}</h1>
      </>
    )
}

export default Invoice;