import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllDays } from "redux/attendanceSlice";
import { createCourse, createUserCourse } from '../../graphql/mutations';
import { API } from "aws-amplify";

function AddTable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    title: "",
    code: "",
    dayID: "",
  });

  useEffect(() => {
    dispatch(fetchAllDays());
  }, [dispatch]);

  const days = useSelector((state) => state.user.allDays);
  const userId = useSelector((state) => state.user.user.email);

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
      // Create the course
      const createCourseResponse = await API.graphql({
        query: createCourse,
        variables: {
          input: {
            "title": userData.title,
            "code": userData.code,
            "dayID": userData.dayID,
          },
        },
      });

      // Extract the course ID from the response
      const courseId = createCourseResponse.data.createCourse.code;

      try {
        // Create the course user
        const createCourseUserResponse = await API.graphql({
          query: createUserCourse,
          variables: {
            input: {
              "courseID": courseId,
              "userID": userId,
            },
          },
        });
        console.log(createCourseUserResponse.data)
        navigate('/tables');
      }
      catch (error) {
        console.error('Error creating course:', error);
      }

    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  return (
    <CoverLayout mx={13}>
      <Card sx={{ marginTop: "-5rem" }}>
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
            Create a new Course
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit}>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Course Title"
                name="title"
                variant="standard"
                fullWidth
                value={userData.title}
                onChange={handleInputChange}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="number"
                label="Code"
                name="code"
                variant="standard"
                value={userData.code.toString()}
                onChange={handleInputChange}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <RadioGroup
                aria-label="dayID"
                name="dayID"
                value={userData.dayID || ''}
                onChange={handleInputChange}
              >
                {days.map((day) => (
                  <FormControlLabel
                    key={day.id}
                    value={day.id}
                    control={<Radio />}
                    label={day.name}
                  />
                ))}
              </RadioGroup>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton type="submit" variant="gradient" color="info" fullWidth>
                Create Course
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default AddTable;
