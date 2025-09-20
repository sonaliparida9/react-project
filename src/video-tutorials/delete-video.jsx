
export function DeleteVideo(){
    return(
        <div className="bg-light p-2 w-25"> 
            <h2>Delete Video</h2>
            <h4>Are you sure, Want to Delete?</h4>

            <link className="btn btn-warning" to="/admin-dashboard"> Cancel </link>
        </div>
    )
}