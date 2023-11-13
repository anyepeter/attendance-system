import React, { useState } from 'react';
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import BasicLayout from '../components/BasicLayout';
import MDBox from 'components/MDBox';
import { Card } from '@mui/material';
import MDTypography from 'components/MDTypography';
import MDInput from 'components/MDInput';
import MDButton from 'components/MDButton';
import { useLocation } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const Verify = () => {

    const location = useLocation();
    const username = location.state.userData.email;
    console.log(username)

    const [code, setCode] = useState('')

    const handleInputChange = (event) => {
        setCode(event.target.value);
    };
console.log(code)
    const  handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await Auth.confirmSignUp(username, code);
            console.log('Sign-up successful');
          } catch (error) {
            console.log('error confirming sign up', error);
          }
    }

    return(
        <BasicLayout image={bgImage}>
            <Card 
            sx={{
                padding: "1rem"
            }}
            >
                <MDBox
                    variant="gradient"
                    bgColor="info"
                    borderRadius="lg"
                    coloredShadow="info"
                    mx={2}
                    mt={-5}
                    p={2}
                    mb={1}
                    textAlign="center"
                >
                    <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                        Verify your account
                    </MDTypography>
                </MDBox>
                <MDBox component="form" role="form" onSubmit={handleSubmit} >
                <MDBox  mt={3} mb={3}>
              <MDInput 
              type="number" 
              label="code" 
              name="number"
              value={code}
              onChange={handleInputChange}
              fullWidth />
            </MDBox>

            <MDBox mt={1} mb={1}>
              <MDButton type="submit" variant="gradient" color="info" fullWidth>
                Verify
              </MDButton>
            </MDBox>
            </MDBox>
            </Card>
        </BasicLayout>
    );
}


export default Verify;