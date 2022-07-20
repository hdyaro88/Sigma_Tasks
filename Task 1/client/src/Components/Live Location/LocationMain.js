import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { db } from "../../Helper Files/firebase";
import { set, ref } from "firebase/database";
const LoactionMain = () => {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState({ lat: null, lng: null });
  set(ref(db, "live location"), {
    position,
  });
  useEffect(() => {
    function error(err) {
      console.warn("ERROR(" + err.code + "): " + err.message);
    }
    const id = navigator.geolocation.watchPosition(
      (pos) => {
        setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      error,
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(id);
  }, []);
  return (
    <div style={{ width: "200px", height: "200px", margin: "auto" }}>
      <Button variant="contained" onClick={() => setShow(!show)}>
        Show Live Location
      </Button>
      {show && (
        <div style={{ color: "#000000" }}>
          <Typography>Latitude : {position.lat}</Typography>
          <Typography>Longitude : {position.lng}</Typography>
        </div>
      )}
    </div>
  );
};

export default LoactionMain;
