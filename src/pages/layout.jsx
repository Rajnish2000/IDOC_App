import Footer from "./footer";
// import MainBody from "./mainbody";
import NavBar from "./navbar";
import Box from "@mui/material/Box";
// import LoginPage from "./auth/login";

const LayoutPage = () => {
  return (
    <>
      <Box>
        <NavBar />
        {/* <MainBody /> */}
        <Footer />
      </Box>
    </>
  );
};

export default LayoutPage;
