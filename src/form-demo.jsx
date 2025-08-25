import { useFormik } from "formik";

export function FormDemo(){

    function ValidateUser(formData){
        var errors = {UserName:'', Mobile:'', City:'',Email:'', Age:''};

        if(formData.UserName.length===0){
            errors.UserName = 'User Name Required';
        }else{
            if(formData.UserName.length<4){
                errors.UserName = 'Name too short';
            }
        }

        if(formData.Age.length === 0){
            errors.Age = 'Age Required'
        }else{
            if(isNaN(formData.Age)){
                errors.Age = 'Age must be a number'
            }else{
                errors.Age = '';
            }
        }
        
        if(formData.Mobile.match(/\+91\d{10}/)){
            errors.Mobile = '';
        }else{
            errors.Mobile = 'invalide Mobile +91 and 10 digit';
        }

        if(formData.City === "-1"){
            errors.City = 'Please select your city'
        }else{
            errors.City = '';
        }
        return errors;
    }
    const formik = useFormik({
        initialValues:{
            UserName: "",
            Mobile: "",
            City:"-1",
            Email:"",
            Age:""
        },

         validate : ValidateUser,
        onSubmit:(user)=>{
            console.log(user);
        }

    })
    

    return(
        <div className="container">
            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit} noValidate> 
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" minLength={4} name="UserName" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                    <dt>Email</dt>
                    <dd><input type="text" name="Email" onChange={formik.handleChange} /></dd>
                     <dt>Age</dt>
                    <dd><input type="text" name="Age" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange}>
                            <option value="-1">Select City</option>
                            <option value="Hyd">Hyd</option>
                            <option value="Delhi">Delhi</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                </dl>
                <button type="submit">Register</button>
            </form>
        </div>
    )
} 