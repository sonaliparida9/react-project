import './Login.css'
export function Login(){
    return(
        <>
        <div className='d-flex justify-content-center'>
            <form className="login-form mt-4 rounded rounded-2">
                <h2 className='bi bi-person-circle'>User login</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" className='form-control'/></dd>
                    <dt>Password</dt>
                    <dd><input type="text" className='form-control' /></dd>
                 </dl>
                <button className='btn btn-warning w-100'>Login</button>
        </form>
        </div>
        </>
    )
}