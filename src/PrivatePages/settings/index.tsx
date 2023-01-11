/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import DashboardHeader from "../../Layouts/DBHeader";
import {
  PageLayout,
  Flex,
  Box,
  TabPanel,
  Grid,
  Image,
} from "./Styles";
import profile from "../../Assets/images/profile.png";
import Details from "./Details";
import Account from "./Account";

export default function Index(props:any) {
  const [activeTab, setActiveTab] = React.useState<"tabA" | "tabB">("tabA");
  const handleTabChange = (tab: "tabA" | "tabB") => {
    setActiveTab(tab);
  };
  return (
       <PageLayout >
      <DashboardHeader backgroundColor="light"/>
      <h2>
        Profile and Account Settings
      </h2>
      <Grid
      >
        <Box>
          <Flex
            style={{
              justifyContent: "space-between",
              marginTop: "30px",
              width: "100%",
              borderBottom: "0.3px solid #bebebe",
              height: "50px",
            }}
          >
            <Flex
              style={{
                gap: "10px",
                width: "100%",
              }}
            >
              <TabPanel
                onClick={() => handleTabChange("tabA")}
                style={{
                  fontWeight: activeTab === "tabA" ? "300" : "100",
                  color: activeTab === "tabA" ? "#292929" : "#d3d2d2",
                  borderBottom:
                    activeTab === "tabA" ? "0.3px solid #000000" : "0",
                  height: "50px",
                }}
              >
                My Details
              </TabPanel>
              <TabPanel
                onClick={() => handleTabChange("tabB")}
                style={{
                  fontWeight: activeTab === "tabB" ? "300" : "100",
                  color: activeTab === "tabB" ? "#292929" : "#d3d2d2",
                  borderBottom:
                    activeTab === "tabB" ? "0.3px solid #000000" : "0",
                  height: "50px",
                }}
              >
                Account Settings
              </TabPanel>
            </Flex>
            
          </Flex>
          {activeTab === "tabA" && <Details />}
          {activeTab === "tabB" && <Account />}
        </Box>
        <Image src={profile} />
      </Grid>
    </PageLayout>
 
  );
}