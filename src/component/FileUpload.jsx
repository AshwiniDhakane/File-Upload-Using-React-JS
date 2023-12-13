import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  //to upload file
  const handleDrop = (acceptedFiles) => {
    const updatedFiles = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        editing: false,
      })
    );
    setFiles([...files, ...updatedFiles]);
  };

  //to remove uploaded file
  const removeFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  //to edit uploaded file
  const toggleEdit = (index) => {
    const updatedFiles = [...files];
    updatedFiles.forEach((file, idx) => {
      file.editing = idx === index ? !file.editing : false;
    });
    setFiles(updatedFiles);
  };

  const handleEditDrop = (e, index) => {
    const updatedFiles = [...files];
    const file = e.target.files[0];
    updatedFiles[index] = Object.assign(file, {
      preview: URL.createObjectURL(file),
      editing: false,
    });
    setFiles(updatedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
  });

  return (
    <div className="file-upload-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="file-upload-section">
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <p>Drag and drop some files here, or click to select files.</p>
                <button
                  id="file-upload-button"
                  type="button"
                  className="btn btn-primary"
                >
                  Upload File
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {files.map((file, index) => (
            <div
              className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12"
              key={index}
            >
              <div className="card border-primary mb-3">
                <div className="card-body text-primary">
                  <img
                    src={file.preview}
                    alt={`Preview ${file.name}`}
                    className="file-preview-img"
                  />
                </div>
                <div className="card-footer bg-transparent border-transparent">
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      onClick={() => toggleEdit(index)}
                      type="button"
                      className="btn btn-outline-success btn-sm edit-btn"
                    >
                      {file.editing ? 'Save' : 'Edit File'}
                    </button>
                    <button
                      onClick={() => removeFile(index)}
                      className="btn btn-outline-danger btn-sm remove-btn"
                    >
                      Remove File
                    </button>
                  </div>
                  {file.editing && (
                    <div className="file-edit mt-4">
                      <input
                        type="file"
                        onChange={(e) => handleEditDrop(e, index)}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
