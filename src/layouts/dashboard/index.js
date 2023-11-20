import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllUsers, fetchAllEnrollments } from "redux/attendanceSlice";

function Dashboard() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.user.user)
  const allUsers = useSelector((state) => state.user.allUser)
  
  // const [filterArr, setFilterArr] = useState([])

  const [userType, setUserType] = useState('')
  console.log(count)

   useEffect(() => {
   
    const settimeout = setTimeout(() => {
      setUserType(count['custom:userType'])
    }, 1000)

    return () => clearTimeout(settimeout)
   }, []);

   console.log(userType)

  useEffect(() => {
    dispatch(fetchAllUsers());
    dispatch(fetchAllEnrollments())
  }, [dispatch])



  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>

        <Grid item xs={12} md={6} lg={3}>
      <MDBox mb={1.5}>
        <ComplexStatisticsCard
          color="primary"
          icon="person_add"
          title="Number of Students"
          count="+91"
        />
      </MDBox>
    </Grid>
          {
  userType === 'teacher' && (
    <Grid item xs={12} md={6} lg={3}>
    <MDBox mb={1.5}>
      <ComplexStatisticsCard
        icon="leaderboard"
        title="Number of Courses"
        count="2,300"
      />
    </MDBox>
  </Grid>
  )
}

         
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="Weekly attendances"
                  description="Avarage attendances of students"
                  date="Weekly"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
