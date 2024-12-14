import React, { useState } from "react";
import "./MoodBoard.css";

const MoodBoard = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [savedBoards, setSavedBoards] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setSelectedImages([...selectedImages, ...urls]);
  };

  const handleSaveBoard = () => {
    if (selectedImages.length > 0) {
      setSavedBoards([...savedBoards, selectedImages]);
      setSelectedImages([]);
    }
  };

  return (
    <div className="mood-board">
      <h2>Create Your Mood Board</h2>
      <input type="file" multiple accept="image/*" onChange={handleImageUpload} />
      <div className="selected-images">
        {selectedImages.map((image, index) => (
          <img key={index} src={image} alt={`Selected ${index}`} />
        ))}
      </div>
      <button onClick={handleSaveBoard} disabled={selectedImages.length === 0}>
        Save Mood Board
      </button>
      <div className="saved-boards">
        <h3>Your Saved Mood Boards</h3>
        {savedBoards.map((board, index) => (
          <div key={index} className="mood-board-preview">
            {board.map((image, i) => (
              <img key={i} src={image} alt="" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodBoard;
