import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import ReactNotification from 'react-notifications-component';
import './App.css';
import Header from './components/Header';
import PhotoPage from './page/Photo';
import AddPhotoPage from './page/AddPhoto';


function App() {
  return (
    <div className="Photo-App">
      <ReactNotification />
      <Suspense fallback={<div> loading ... </div>}>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to="/photos" />} />
          <Route path="/photos" element={<PhotoPage />} />
          <Route path="/photos/add" element={<AddPhotoPage />} />
          <Route path="/photos/edit/:photoID" element={<AddPhotoPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
