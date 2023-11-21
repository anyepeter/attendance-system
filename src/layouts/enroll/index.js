
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { IoMdAdd } from "react-icons/io";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Material Dashboard 2 React example components 
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import team2 from "assets/images/team-2.jpg";


import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllCourses } from "redux/attendanceSlice";
import { fetchAllUserCourse } from "redux/attendanceSlice";





function Enroll() {
  const { columns } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const dispatch = useDispatch()

  const courses = useSelector((state) => state.user.allCourses)
  const allCourseUsers = useSelector((state) => state.user.allUserCourse)
  const user = useSelector((state) => state.user.user.email)
  const userType = useSelector((state) => state.user.user)
  const allUsers = useSelector((state) => state.user.allUser)
  const allEnrolls = useSelector((state) => state.user.allEnroll)

  useEffect(() => {
   dispatch(fetchAllCourses())
   dispatch(fetchAllUserCourse())
  }, [dispatch])

  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );
  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={4} pb={3}>
        <Grid container spacing={6}>
{
  allCourseUsers.map((element) => {
    if (element.userID === user) {
      return courses.map((course) => {
        if (course.id === element.courseID) {
          return(
            <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  {course.title}
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                {
                  allEnrolls.map((element) => {
                    if(element.courseID === course.id && element.status === false ) {
                      return allUsers.map((userEl) => {
                        if(userEl.id === element.userID) {
                          return(
                            <DataTable
                            table={{ columns,  rows: [
                              {
                                student: <Author image={team2} name={userEl.name} email={userEl.email} />,
                                course_code: <Job title={course.title} description={course.code} />,
                                action: (
                                  <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                                    Edit
                                  </MDTypography>
                                ),
                              }]  }}
                            isSorted={false}
                            entriesPerPage={false}
                            showTotalEntries={false}
                            noEndBorder
                          />
                          )
                        }
                      })
                    }
                  })
                }
               
              </MDBox>
            </Card>
          </Grid>
          ); 
        }
        return null; 
      });
    }
    return null;
  })
}

        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Enroll;
