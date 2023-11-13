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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import { useState } from "react";
import { Auth } from 'aws-amplify';
import { useNavigate } from "react-router-dom";

function Cover() {

  const navigate = useNavigate();
  
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    userType: "student",
  })

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
    
      try {
        await Auth.signUp({
          username: userData.email,
          password: userData.password,
          attributes: {
            name: userData.name,
            ['custom:userType']: userData.userType,
          },
        });
    
        console.log('Sign-up successful');
        navigate('/verify', { state: { userData } });
      } catch (error) {
        console.error('Error signing up:', error);
      }
    };

  return (
    <CoverLayout image={bgImage} mx={13}>
      <Card 
      sx={{
        marginTop: "-5rem",
      }}
      >
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Registration form
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Attendance management system
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit} >
            <MDBox mb={2}>
              <MDInput 
              type="text" 
              label="Name" 
              name="name"
               variant="standard"
                fullWidth
                value={userData.name}
                onChange={handleInputChange}
                />
            </MDBox>
            <MDBox mb={2}>
              <MDInput 
              type="email" 
              label="Email"
               name="email"
                variant="standard"
                value={userData.email}
                onChange={handleInputChange}
                 fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <RadioGroup
                aria-label="userType"
                name="userType"
                value={userData.userType}
                onChange={handleInputChange}
              >
                <FormControlLabel value="student" control={<Radio />} label="Student" />
                <FormControlLabel value="teacher" control={<Radio />} label="Teacher" />
              </RadioGroup>
            </MDBox>
            <MDBox mb={2}>
              <MDInput 
              type="password"
               label="Password" 
               name="password" 
               variant="standard"
                value={userData.password}
                onChange={handleInputChange}
                fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton type="submit" variant="gradient" color="info" fullWidth>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
