import React, { createContext, useState, useEffect } from "react";

const AlbumContext = createContext();

const AlbumProvider = ({ children }) => {
  const [albums, setAlbums] = useState([]);

  // Fetch all albums
  const fetchAlbums = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setAlbums(data);
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  };

  // Add a new album
  const addAlbum = async (newAlbum) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(newAlbum),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await response.json();
      setAlbums((prevAlbums) => [...prevAlbums, data]);
      alert("New Album Added");
    } catch (error) {
      console.error("Error adding album:", error);
    }
  };

  // Update an album
  const updateAlbum = async (id, updatedAlbum) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(updatedAlbum),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await response.json();
      setAlbums((prevAlbums) =>
        prevAlbums.map((album) => (album.id === id ? data : album))
      );
    } catch (error) {
      console.error("Error updating album:", error);
    }
  };

  // Delete an album
  const deleteAlbum = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      });
      setAlbums((prevAlbums) => prevAlbums.filter((album) => album.id !== id));
    } catch (error) {
      console.error("Error deleting album:", error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <AlbumContext.Provider
      value={{ albums, addAlbum, updateAlbum, deleteAlbum }}
    >
      {children}
    </AlbumContext.Provider>
  );
};

export { AlbumProvider, AlbumContext };
