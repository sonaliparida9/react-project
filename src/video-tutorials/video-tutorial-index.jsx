import { Route, Routes, Link } from 'react-router-dom';
import './video-tutorial-index.css';
import { VideoTutorialHome } from './video-tutorial-home.jsx';
import { AdminLogin } from './admin-login.jsx';
import { AdminDashboard } from './admin-dashboard.jsx';
import { AddVideo } from './add-video.jsx';
import { EditVideo } from './edit-video.jsx';
import { DeleteVideo } from './delete-video.jsx';

export function VideoTutorialIndex() {
  return (
    <div className="container-fluid bg-image">
      <header className="text-white text-center">
        <div className="fs-1 fw-bold">
          <Link className="btn btn-light" to="/">
            <span className="bi bi-house-door"></span>
          </Link>
          Video Tutorials
        </div>
        <div>[React, Java, AWS]</div>
      </header>
      <section className="mt-4">
        <Routes>
          <Route path="/" element={<VideoTutorialHome />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/add-video" element={<AddVideo />} />
          <Route path="/edit-video/:id" element={<EditVideo/>}></Route>
          <Route path="/delete-video:id" element={<DeleteVideo/>}></Route>
        </Routes>
      </section>
    </div>
  );
}
