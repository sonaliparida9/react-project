import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

export function AdminLogin() {
  let navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["admin_id"]);

  const formik = useFormik({
    initialValues: {
      admin_id: "",
      password: ""
    },
    onSubmit: (admin) => {
      axios.get("http://localhost:3000/admin")
        .then((response) => {
          const adminuser = response.data.find(
            (item) => item.admin_id === admin.admin_id
          );

          if (adminuser) {
            if (adminuser.password === admin.password) {
              // Save cookie
              setCookie("admin_id", adminuser.admin_id, {
                path: "/", // cookie available for all routes
                expires: new Date("2025-09-05") // expiry date
              });

              console.log("admin_id:", adminuser.admin_id);

              navigate("/admin-dashboard");
            } else {
              alert("Invalid Password");
            }
          } else {
            alert("Invalid Admin ID");
          }
        })
        .catch((err) => {
          console.error("Error fetching admin data:", err);
          alert("Server Error. Try again later.");
        });
    },
  });

  useEffect(()=>{
    if(cookies['admin_id']){
      navigate('/admin-dashboard');
    }
  },[])

  return (
    <div className="bg-light p-3 w-25">
      <h2>Admin Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>Admin Id</dt>
          <dd>
            <input
              type="text"
              name="admin_id"
              onChange={formik.handleChange}
              className="form-control"
            />
          </dd>
          <dt>Password</dt>
          <dd>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              className="form-control"
            />
          </dd>
        </dl>
        <button type="submit" className="btn btn-warning mx-2">Login</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    </div>
  );
}
