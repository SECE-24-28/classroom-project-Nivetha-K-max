import { Link, Outlet } from "react-router-dom"
import getInvoices from "./data"

export default function Invoices(){
    let mydatas= getInvoices()
    return(
    
        <>
        <h1>im from Invoices</h1>
        {
            mydatas.map((data)=> (
    <Link to={/invoices/${data.number}} key={data.number}>|{" "}{data.name}{" "}</Link>
                
           ))
        }
         <Outlet />
        </>
    )
    
    }