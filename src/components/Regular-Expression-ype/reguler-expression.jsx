import { useEffect, useState } from "react";
// import moment from "moment";

export function RegularExpression(){
    
    const [mobile, setMobile] = useState('');
    
    useEffect(()=>{
        setMobile('+919876543210');
    },[]);

    return(
        <div className="container-fluid">
           <h2>Data Binding</h2>
           { (mobile.match(/\+91\d{10}/))?'Verified':'Invalid Mobile' }
        </div>
    )
}
