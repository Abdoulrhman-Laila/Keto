import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Gallery.css";


function Gallery() {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGalleries = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/gallery`);
            setGalleries(response.data); // البيانات هي مصفوفة من الروابط
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    fetchGalleries();
}, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="gallery">
      <h1>GALLERY</h1>
      <section className="cards2 flex">
        {galleries.map((imageUrl, index) => (
          <article className="card3" key={index}>
            <img src={imageUrl} alt={`Gallery image ${index + 1}`} />
          </article>
        ))}
      </section>
    </div>
  );
}

export default Gallery;