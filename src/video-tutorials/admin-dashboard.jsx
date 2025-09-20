import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

export function AdminDashboard() {

  const [videos, setVideos] = useState([{id:0, title:null, description:null, url:null, views:0, dislikes:0, comments:null, category_id:0}]);
  const [cookies, setCookie, removeCookie] = useCookies(["admin_id"]);
  const navigate = useNavigate();


    const handleLogout = () => {
      removeCookie("admin_id", { path: "/" }); // remove cookie
      console.log("🚪 Logged out, admin_id removed.");
      navigate("/admin-login");
  };


  function LoadVideos(){
    axios.get(`http://localhost:3000/videos`)
    .then(response=>{
      setVideos(response.data);
    })
  } 

  useEffect(() => {
    if (!cookies.admin_id) {
      console.warn(" No admin_id found. Redirecting...");
      navigate("/admin-login");
    }
    else{
      LoadVideos();
    }
  }, [cookies, navigate]);


  return (
    <div className="container bg-light p-4 mt-5 rounded shadow">
      <h3 className="mb-3 text-success">
        Welcome, <span className="text-primary">{cookies.admin_id}</span>!
      </h3>
      <p>This is the Admin Dashboard.</p>
      <button className="btn btn-danger mt-3" onClick={handleLogout}>
        Logout
      </button>
      <div className="mt-2">
        <Link to="/add-video" className="btn btn-success bi bi-camera-video my-2">Add video </Link>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Preview</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              videos.map(video=>
                <tr key={video.id}>
                  <td>{video.title}</td>
                  <td>
                    <iframe width="200" height="100" src={video.url}></iframe>
                  </td>
                  <td>
                    <Link to={`/edit-video/${video.id}`} className="btn btn-warning bi bi-pen-fill"/>
                    <Link className="btn btn-danger bi bi-trash-fill mx-2" />
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
