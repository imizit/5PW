import React, { useRef, useState } from "react";
import "./styles.css";

import image14 from "./img/shaps/Soil/1.png"; // Import your image assets
import image13 from "./img/shaps/Soil/2.png"; // Import your image assets
import image12 from "./img/shaps/Soil/3.png"; // Import your image assets
import image11 from "./img/shaps/Cloud/1.png"; // Import your image assets
import image10 from "./img/shaps/Cloud/2.png"; // Import your image assets
import image9 from "./img/shaps/Cloud/3.png"; // Import your image assets
import image8 from "./img/shaps/Stars/1.png"; // Import your image assets
import image7 from "./img/shaps/Stars/2.png"; // Import your image assets
import image6 from "./img/shaps/Sky/1.png"; // Import your image assets
import image5 from "./img/shaps/Sky/2.png"; // Import your image assets
import image4 from "./img/shaps/Sky/3.png"; // Import your image assets
import image3 from "./img/shaps/Plant/1.png"; // Import your image assets
import image2 from "./img/shaps/Plant/2.png"; // Import your image assets
import image1 from "./img/shaps/Plant/3.png"; // Import your image assets
import deleteIcon from "./img/delete.png"; // Import your image assets
import outIcon from "./img/out.png"; // Import your image assets

const pieceImageUrls = [
  image12, image13, image14, image1, image2, image3, image4, image5, image6,
  image7, image8, image9, image10, image11
]; // Define your piece image URLs

const initialPieces = pieceImageUrls.map((imageUrl, index) => ({
  image: imageUrl,
  position: [0, 0], // Set the initial position to the center (you can adjust this as needed)
  radius: Math.random() * 100 // You can keep the radius random if needed
}));

export default function App() {
  const selected = useRef();
  const [selectedPieces, setSelectedPieces] = useState([]);
  const [selectedPieceIndex, setSelectedPieceIndex] = useState(null);

  const handleMouseDown = (event, index) => {
    selected.current = { index, element: event.target };
    document.addEventListener("mousemove", handleMouseMove);
  };

  const handleMouseMove = (event) => {
    const { element, index } = selected.current;

    const positionX = event.pageX - element.offsetWidth / 2;
    const positionY = event.pageY - element.offsetHeight / 2;

    const targetX = initialPieces[index].position[0];
    const targetY = initialPieces[index].position[1];

    const differenceX = Math.abs(positionX - targetX);
    const differenceY = Math.abs(positionY - targetY);

    if (differenceX < 16 && differenceY < 16) {
      const transform = `translate3d(${targetX - element.offsetWidth / 4}px, ${
        targetY - element.offsetHeight / 4
      }px, 0)`;
      const transition = `transform 100ms linear`;
      element.style.transform = transform;
      element.style.transition = transition;
      element.style.opacity = 0.5;
      endDrag();
    } else {
      const transform = `translate3d(${positionX}px, ${positionY}px, 0)`;
      element.style.transform = transform;
    }
  };

  const handleMouseUp = () => {
    endDrag();
  };

  const endDrag = () => {
    selected.current = null;
    document.removeEventListener("mousemove", handleMouseMove);
  };

  const handlePieceClick = (imageUrl) => {
    const newPiece = {
      image: imageUrl,
      position: [Math.random() * 300, Math.random() * 300 + 300]
    };
    setSelectedPieces([...selectedPieces, newPiece]);
    setSelectedPieceIndex(selectedPieces.length);
  };

  const handleResetClick = () => {
    setSelectedPieces([]); // Clears all selected pieces
  };

  return (
    <div className="App" style={{
      backgroundColor: "black", // Set background color to black
      width: "100%",
      height: "100%",
      position: "absolute",
      display: "flex",
      flexDirection: "column"
    }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", margin: "20px" }}>
        {pieceImageUrls.map((imageUrl, index) => (
          <button
            key={index}
            onClick={() => handlePieceClick(imageUrl)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <img
              src={imageUrl}
              alt={`Piece ${index + 1}`}
              style={{ width: "50px", height: "50px" }}
            />
          </button>
        ))}
        <button
          onClick={handleResetClick}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <img
            src={deleteIcon}
            alt="Reset"
            style={{ width: "50px", height: "50px" }}
          />
        </button>
        <button
          onClick={() => window.location.href = 'https://chat.openai.com/'}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img
            src={outIcon}
            alt="Go to chat.openai.com"
            style={{ width: "50px", height: "50px" }}
          />
        </button>
      </div>
      {selectedPieces.map((piece, index) => (
        <div
          key={index}
          onMouseDown={(event) => handleMouseDown(event, index)}
          onMouseUp={handleMouseUp}
          style={{
            backgroundImage: `url(${piece.image})`,
            backgroundSize: "cover",
            width: "50%", // Adjust the width as needed
            height: "50%", // Adjust the height as needed
            position: "absolute",
            transform: `translate3d(${piece.position[0]}px, ${piece.position[1]}px, 0)`
          }}
        ></div>
      ))}
      <footer style={{
        textAlign: "center",
        marginTop: "auto",
        color: "#fff",
        padding: "10px"
      }}>
        Copyright © 2023 5PW. All rights reserved.
      </footer>
    </div>
  );
}
