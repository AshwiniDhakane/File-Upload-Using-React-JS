import React from 'react';
import './style.scss';
import FileUpload from './component/FileUpload.jsx';

export default function App() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-primary ps-4">
        File Upload Component!
      </nav>
      <div clssName="mt-4">
        <FileUpload />
      </div>
    </div>
  );
}
