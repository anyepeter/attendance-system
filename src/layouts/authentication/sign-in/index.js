/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { useNavigate } from "react-router-dom";


// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { Auth } from 'aws-amplify';

//Notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate()
  const [formSubmit, setFormSubmit] = useState(false);
  const [error, setError] = useState(false);
  const notify = () => toast("Wow so easy!");
  const badText = () => toast("Wrong text!");

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (event) => {
    setLoginData({...loginData, [event.target.name]: event.target.value });
  }

  console.log(loginData)

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormSubmit(true);

    try {
      const userInfo = {
        username: loginData.email,
        password: loginData.password,
      };
      await Auth.signIn(userInfo);
      setTimeout(() => {
        window.location.load(navigate('/dashboard'));
      }, 1000);
      setFormSubmit(false);
    } catch (err) {
      console.log(err);
      setError(true);
      setFormSubmit(false);
      badText();
    }
  };

  useEffect(() => {
    if (formSubmit && !error) {
      return( notify)
    }
    if (formSubmit && error) {
      setError(false);
      return(badText)
    }

    
  }, [formSubmit, error]);

  return (
    <BasicLayout image={bgImage}>
      <ToastContainer />
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" onSubmit={handleSubmit} role="form">
            <MDBox mb={2}>
              <MDInput
               type="email" 
               label="Email"
               name= "email"
               value={loginData.email}
               onChange={handleInputChange}
                fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput 
              type="password" 
              label="Password" 
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
              fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton
               variant="gradient" 
               type="submit"
                color="info"
                disabled={formSubmit}
                 fullWidth>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
