// import { useState } from "react";

// export function EventBinding(){

//     const [msg, setMsg] = useState(null);

//     function handleInsertClick(e){
//         setMsg('Inserted Successfully');
//         console.log(`Button Value : ${e.target.value}\nButton Id : ${e.target.id}\nX Position : ${e.clientX}`)
//     }
//     return(
//         <div className="container-fluid">
//             <button value="Insert" id="btnInsert" onClick={handleInsertClick}>Insert</button>
//             <p>{msg}</p>
//         </div>
//     )
// }

//  You can configure event to carry custom arguments along with default arguments.
 
import { useState } from "react";

export function EventBinding(){

    const [msg, setMsg] = useState(null);

    function handleInsertClick(e,...product){
        setMsg('Inserted Successfully');
        let [id, name, stock, cities, rating] = product;
        console.log(`Id=${id}\nName=${name}\nStock=${stock}\nCities=${cities}\nRating=${rating.Rate}`);
        console.log(`Button Value=${e.target.value}\nX Position=${e.clientX}`);
    }
    return(
        <div className="container-fluid">
            <button value="Insert" id="btnInsert" onClick={(event)=> handleInsertClick(event, 1, 'TV', true, ['Delhi', 'Hyd'], {Rate:4.2})}>Insert</button>
            <p>{msg}</p>
        </div>
    )
}