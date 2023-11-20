
// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Course name
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              24%
            </MDTypography>{" "}
            this month
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="Internet programming"
          dateTime="34 students"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="system architecture"
          dateTime="20 students"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="English"
          dateTime="10 students"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="French"
          dateTime="15 students"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="Math"
          dateTime="20 students"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
