import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Row } from "react-bootstrap";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <Row className="Videos">
      {videos.map((e) => {
        return (
          <Card
            sx={{ maxWidth: 385 }}
            style={{ margin: "10px auto" }}
            key={e.id.videoId}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={e.snippet.thumbnails.medium.url}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="videoHead"
                >
                  {e.snippet.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {e.snippet.channelTitle}{" "}
                  <CheckCircleIcon fontSize="inherit" />
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </Row>
  );
};

export default Videos;
