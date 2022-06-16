import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Button, Spinner } from "react-bootstrap";
import "./Photos.css";
import Background from "../../frontpage.jpeg";
import axios from "axios";

const PhotosComponents = () => {
  const [photos, setPhotos] = useState([]);
  const [isShowPhoto, setPhotoShow] = useState(false);

  useEffect(() => {
    const photosAynch = async () => {
      try {
        let res = await axios.get("https://picsum.photos/v2/list");
        setPhotos(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    photosAynch();
  }, []);

  const isShowPhotoHandler = () => {
    setPhotoShow(!isShowPhoto);
  };
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-4" style={{ textAlign: "left" }}>
            Photos
          </h1>
          <p
            className="lead"
            style={{
              position: "relative",
              textAlign: "left",
              backgroundImage: `url(${Background})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "400px",
              width: "100%",
              color: " white",
            }}
          >
            Explore range of image from Unsplash
            <Button
              className="btn-mrg"
              onClick={isShowPhotoHandler}
              style={{ position: "absolute", bottom: "8px", right: "16px" }}
            >
              {isShowPhoto ? "Hide" : "Show"} photos
            </Button>
          </p>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        {isShowPhoto && photos.length ? (
          photos.map((photo, index) => (
            <Col md={3} className="photo-card" key={photo.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={photo.download_url}
                  height="200px"
                />
                <Card.Body>
                  <Card.Title>{photo.author}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a
                    className="btn btn-dark"
                    href={photo.url}
                    style={{ margin: "10px" }}
                  >
                    View more
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <></>
        )}
        {isShowPhoto ? (
          <div className="loading">
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="success" />
          </div>
        ) : (
          <></>
        )}
      </Row>
    </Container>
  );
};

export default PhotosComponents;
