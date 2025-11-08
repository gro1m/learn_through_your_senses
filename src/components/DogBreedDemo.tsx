import React from "react";
import demoThumbnail from "../assets/images/example.png"; // small preview image

const HUGGINGFACE_URL = "https://huggingface.co/spaces/mg/dog-breed-classifier";

export default function DogBreedDemo() {
  return (
    <>
    <link rel="stylesheet" href="/css/DogBreedDemo.css"></link>
    <section className="dog-demo-section">
      <div className="container">
        <h2 className="title">🐶 Dog Breed Classifier Demo</h2>
        <p className="description">
          Click the button below to try the live demo hosted on{" "}
          <a href={HUGGINGFACE_URL} target="_blank" rel="noopener noreferrer">
            Hugging Face Spaces
          </a>.
        </p>

        <div className="demo-wrapper">
          <img src={demoThumbnail} alt="Dog Breed Classifier preview" className="demo-thumbnail" />
          <a
            href={HUGGINGFACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-button"
          >
            Try the Live Demo →
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
