import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Text,
  Box,
  Center,
} from "@chakra-ui/react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";


export default function Sign () {
  return (
    <Box
      bgColor="white"
      p="50px 30px 30px 30px"
      w="400px"
      boxShadow="lg"
      alignItems="center"
    >
      <Tabs colorScheme="red">
        <Center>
          <TabList>
            <Tab
              _focus={{ boxShadow: "none"}}
              _hover={{ borderBottom: "2px solid #C53030" }}
              color="#969696"
              size="18px"
            >
              登录</Tab>
            <Text mt="2" fontWeight="700">·</Text>
            <Tab
              _focus={{ boxShadow: "none"}}
              _hover={{ borderBottom: "2px solid #C53030" }}
              color="#969696"
            >
              注册</Tab>
          </TabList>
        </Center>
        <TabPanels>
          <TabPanel>
            <SignIn />
          </TabPanel>
          <TabPanel>
            <SignUp />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
