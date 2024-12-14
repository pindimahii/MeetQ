import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';

function Profile() {
  const [images, setImages] = useState([]);
  const [music, setMusic] = useState(null);

  // Handle image uploads
  const handleImageDrop = (acceptedFiles) => {
    setImages([...images, ...acceptedFiles]);
  };

  // Handle music upload
  const handleMusicChange = (e) => {
    setMusic(e.target.files[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleImageDrop,
    accept: 'image/*', // Accept only image files
  });

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Create Your Mood Board</h1>
      <p>Upload images, memes, and music to express yourself!</p>

      {/* Upload Images */}
      <div {...getRootProps()} style={{ border: '2px dashed #3f51b5', padding: '20px', marginBottom: '20px' }}>
        <input {...getInputProps()} />
        <p>Drag & drop images here, or click to select files</p>
      </div>

      {/* Display uploaded images */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={URL.createObjectURL(image)}
            alt={`Uploaded ${index}`}
            style={{ width: '150px', height: '150px', margin: '10px', borderRadius: '10px' }}
          />
        ))}
      </div>

      {/* Upload Music */}
      <div style={{ marginTop: '20px' }}>
        <input type="file" accept="audio/*" onChange={handleMusicChange} />
        {music && (
          <div style={{ marginTop: '10px' }}>
            <p>{music.name}</p>
            <audio controls>
              <source src={URL.createObjectURL(music)} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>

      {/* Next Button */}
      <Link to="/interaction">
        <button style={{ padding: '10px 20px', fontSize: '16px', marginTop: '30px' }}>
          Proceed to Interaction
        </button>
      </Link>
    </div>
  );
}

export default Profile;
