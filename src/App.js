import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;

  useEffect(() => {
    // We use the `term` variable in the dependency array to make the API call
    // whenever the search term changes.
    fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]); // Depend on 'term'

  return (
    <div className="container mx-auto">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search for images"
      />

      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">
          Loading...
        </h1>
        
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
