import { CircularProgress, Typography } from "@mui/material";

export const Loader = ({ message }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 30,
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        alignContent: "center",
      }}
    >
      <Typography
        style={{
          color: "#000000",
          fontSize: "18px",
          fontWeight: 500,
          textAlign: "center",
          width: "80%",
          margin: "1rem 0",
        }}
      >
        {message}
      </Typography>
      <CircularProgress style={{ width: "50px", height: "50px", margin: "0 1rem", color: "purple" }} />
    </div>
  );
};
export default Loader;
