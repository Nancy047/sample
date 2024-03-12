import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Tooltip from "@mui/material/Tooltip";
import "../styles/upload.css";

const Upload = ({ uploadstatusfromchild, senddatatoparent }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileInputRef = useRef(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);

  const onFileChange = (event) => {
    const files = event.target.files;
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const handleUpload = async () => {
    if (uploadedFiles.length === 0) {
      return;
    }

    const formData = new FormData();
    uploadedFiles.forEach((file) => formData.append("file", file));
    console.log("formData",formData,uploadedFiles)
    try {
      const response = await axios.post(
        "http://34.122.87.129:8000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setUploadSuccess(true);
        console.log(response, "success upload response");
        setTimeout(() => {
          setUploadSuccess(false);
          setUploadedFiles([]);
        }, 2000);
        
        senddatatoparent("uploaded successfully");
      } else {
        alert("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred while uploading the file");
    }
  };

  const deleteFile = (index) => {
    const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(updatedFiles);
  };

  const showFileInput = () => {
    fileInputRef.current.click();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer.files;
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  return (
    <div className="upload-container">
      <div
        className={`upload-card ${dragging ? "dragging" : ""}`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="upload-area" onClick={showFileInput}>
          <p>Drag & Drop Files Here</p>
          <span>or</span>
          <span className="browse-link">Browse Files</span>

          <div className="file-list">
          {uploadedFiles.map((file, index) => (
            <div className="file-item" key={index}>
              <div className="file-info">
                <div>{file.name}</div>
                <div style={{ color: "#ccc" }}>
                  {(file.size / 1024).toFixed(2)} KB
                </div>
              </div>
              <div className="remove-icon" onClick={() => deleteFile(index)}>
                <Tooltip title="Remove File" placement="left-start">
                  <FontAwesomeIcon icon={faTimes} />
                </Tooltip>
              </div>
            </div>
          ))}
        </div>
        </div>
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          accept=".pdf"
          multiple
          onChange={onFileChange}
        />
       
        {uploadedFiles.length > 0 && (
          <button className="upload-button" onClick={handleUpload}>
            Upload
          </button>
        )}
        {loading && <div className="loading-indicator">Uploading...</div>}
      </div>
    </div>
  );
};

export default Upload;
