import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"


export function EditVideo(){

    const [categories, setCategories] = useState([{category_id:0, category_name:null}]);
    const [video,setVideo] = useState({
          title:null,
            description:null,
            url:null,
            likes:0,
            views:0,
            dislikes:0,
            category_id:0,
            comments:null
    })
    let navigate = useNavigate();
    let params = useParams();
    const formik = useFormik({
        initialValues:{
            title:video.title,
            description:video.description,
            url:video.url,
            likes:video.likes,
            views:video.views,
            dislikes:video.dislikes,
            category_id:video.category_id,
            comments:video.comments

        },

        onSubmit: (video) => {
            var parsedVideo = {
                title: video.title,
                description: video.description,
                url: video.url,
                likes:parseInt(video.likes),
                views:parseInt(video.views),
                dislikes:parseInt(video.dislikes),
                category_id:parseInt(video.category_id),
                comments:video.comments

        }
           
            axios.put(`http://localhost:3000/videos/${params.id}`,parsedVideo)
            .then(()=>{
                console.log('Updated...')
            })
            alert('Video Updated Suuccessfully...');
            navigate('/admin-dashboard');
        },
        enableReinitialize :true
    })

    function LoadCategories(){
            axios.get(`http://localhost:3000/categories`)
            .then(response=>{
            response.data.unshift({category_id:-1,category_name: 'Select Category'})
            setCategories(response.data);
        })
    }0

    function LoadVideo(){
        axios.get(`http://localhost:3000/videos/${params.id}`)
        .then(response=>{
            setVideo(response.data);
        })
    }
    useEffect(()=>{
        LoadCategories();
        LoadVideo();
    },[])


    return(
        <div className="bg-light p-2 w-50">
            <h3>Edit Video</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl className="row">
                    <dt className="col-6">Title</dt>
                    <dd className="col-6"><input onChange={formik.handleChange} value={formik.values.title} type="text" name="title" /></dd>
                    <dt className="col-6">Description</dt>
                    <dd className="col-6"><input onChange={formik.handleChange} value={formik.values.description}  type="text" name="description" /></dd>
                    <dt className="col-6">Url</dt>
                    <dd className="col-6"><input onChange={formik.handleChange} value={formik.values.url}  type="text" name="url" /></dd>
                    <dt className="col-6">View</dt>
                    <dd className="col-6"><input onChange={formik.handleChange} value={formik.values.views}  type="text" name="views" /></dd>
                    <dt className="col-6">Likes</dt>
                    <dd className="col-6"><input onChange={formik.handleChange} value={formik.values.likes} type="text" name="likes" /></dd>
                    <dt className="col-6">Dislikes</dt>
                    <dd className="col-6"><input onChange={formik.handleChange} value={formik.values.dislikes}  type="text" name="dislikes" /></dd>
                    <dt className="col-6">category</dt>
                    <dd className="col-6">
                        <select name="category_id" onChange={formik.handleChange} value={formik.values.category_id}>
                            {
                                categories.map(category=>
                                    <option key={category.category_id} value={category.category_id}>
                                        {category.category_name}
                                    </option>
                                )
                            }
                        </select>
                    </dd>
                    <dt className="col-6">Comments</dt>
                    <dd className="col-6"><input type="text" name="comments" onChange={formik.handleChange} value={formik.values.comments} /></dd>
                </dl>
                <button className="btn btn-success mx-2" type="submit">Save</button>
                <Link className="btn btn-warning" to="/admin-dashboard">Cancel</Link>
            </form>
        </div>
    )
}