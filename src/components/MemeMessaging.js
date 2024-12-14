import React, { useState } from "react";
import "./MemeMessaging.css"; // Create a CSS file for styling this component

const MemeMessaging = () => {
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [messages, setMessages] = useState([]);

  const memes = [
    "/memes/meme1.jpg",
    "/memes/meme2.jpg",
    "/memes/meme3.jpg",
  ]; // Add paths to your meme images here

  const handleSend = () => {
    if (selectedMeme) {
      setMessages([...messages, selectedMeme]);
      setSelectedMeme(null);
    }
  };

  return (
    <div className="meme-messaging">
      <h2>Meme Messaging</h2>
      <div className="meme-gallery">
        {memes.map((meme, index) => (
          <img
            key={index}
            src={meme}
            alt={`Meme ${index + 1}`}
            onClick={() => setSelectedMeme(meme)}
            className={selectedMeme === meme ? "selected" : ""}
          />
        ))}
      </div>
      <button onClick={handleSend} disabled={!selectedMeme}>
        Send Meme
      </button>
      <div className="message-log">
        <h3>Messages:</h3>
        {messages.map((meme, index) => (
          <img key={index} src={meme} alt={`Sent Meme ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default MemeMessaging;
