import { useForm } from "react-hook-form";

export function ReactHookForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submit = (data) => {
        console.log(data);
    };

    return (
        <div className="container-fluid mt-5 border p-4 shadow rounded w-50 bg-light">
            <h2 className="text-center text-success">Registration User</h2>
            <form onSubmit={handleSubmit(submit)} className="mt-5">
                <dl className="mb-3">
                    <dt>User Name</dt>
                    <dd>
                        <input className="form-control" type="text" {...register("UserName", { required: true, minLength: 4, pattern: /^[a-zA-Z]{4,15}$/ })} />
                    </dd>
                    <dd className="text-danger">
                        {(errors.UserName?.type === "required")? <span>User Name required</span>:""}               
                    </dd>

                    <dt>Mobile</dt>
                    <dd>
                        <input className="form-control" type="text" {...register("Mobile", { required: true, pattern: /\+91\d{10}/ })} />
                    </dd>
                    <dd className="text-danger">
                        {errors.Mobile?.type === "required" && <span>Mobile Required</span>}
                        {errors.Mobile?.type === "pattern" && <span>Mobile No. should start with +91</span>}
                    </dd>

                    <dt>Age</dt>
                    <dd>
                        <input className="form-control" type="number" min="15" max="30" {...register("Age", { required: true, min: 15, max: 30 })} />
                    </dd>
                    <dd className="text-danger">
                        {errors.Age?.type === "required" && <span>Age required</span>}
                        {errors.Age?.type === "min" && <span>Age must be at least 15</span>}
                        {errors.Age?.type === "max" && <span>Age should not be greater than 30</span>}
                    </dd>

                    <dt>City</dt>
                    <dd>
                        <select className="form-control mt-2" {...register("City", { required: true })}>
                            <option value="">Select City</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Bangalore">Bangalore</option>
                        </select>
                    </dd>
                    <dd className="text-danger">
                        {errors.City?.type === "required" && <span>Please select City</span>}
                    </dd>
                </dl>
                <button className="btn btn-primary text-center mt-2 " type="submit">Submit</button>
            </form>
        </div>
    );
}
