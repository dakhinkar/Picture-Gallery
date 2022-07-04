import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
function PhotosEnlarged(props) {
  let imgStyle = {
    width: "90vw",
    height: "85vh",
    margin: "10px",
  };
  const [photoURL, setPhotoURL] = useState("");
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const photosAynch = async () => {
      try {
        let res = await axios.get(`https://picsum.photos/id/${id}/info`);
        setPhotoURL(res.data.download_url);
      } catch (err) {
        console.log(err.message);
      }
    };
    photosAynch();
  
  }, [id]);
  return (
    <div>
      {!photoURL ? (
        <img src={photoURL} style={imgStyle} alt="expanded-view" />
      ) : (
        <div>
          <Spinner animation="border" />
        </div>
      )}
    </div>
  );
}

export default PhotosEnlarged;
