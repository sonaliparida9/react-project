import { Formik,useFormik } from "formik"

export function LoginForm(){

    function ValidationUser(formData){
        var error = { email:'',password:''}
        if(formData.password.length === 0){
            error.password = 'Password Required'
        }else{
            if(formData.password.length<5){
                error.password = 'Password'
            }
        }
    }

    const Formik = useFormik(
        {
            initialValues : {
                email:'',
                password:''
            },
            validate:ValidationUser,
            onSubmit(user){
                console.log("Form Submitted" ,user)
            }
        }
    )
    return(
        <div className="d-flex justify-content-center align-items-center" style={{margin:"150px"}}>
            <div className=" card bg-primary  p-4">
                <h2 className="text-center mb-3">Log in with</h2>
            <div>
                <span className="bi bi-google m-2 p-2 btn btn-success ">Google</span>
                <span className="bi bi-apple m-2 p-2 btn btn-secondary">Apple</span>
            </div>
            <hr />
            <form onSubmit={Formik.handleSubmit}>
                <div className="mb-2">
                 <input onChange={Formik.handleChange} value={Formik.errors.email} type="email" name="email" placeholder="gmail" className="form-control"/>
                </div>
                <div className="mb-2">
                 <input onChange={Formik.handleChange} value={Formik.values.password} type="password" name="password" placeholder="Password" className="form-control"/>
                 <div className="text-danger">{Formik.errors.password}</div>
                </div>

                <button type="submit" className=" btn btn-danger w-100 mt-3 ">Submit</button>
            </form>

            </div>
        </div>
    )
}