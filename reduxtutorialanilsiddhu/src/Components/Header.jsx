import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Img,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Header = (props) => {
  console.log("Header", props.data.cardItemReducer);
  return (
    <>
      <Flex float="right" position="relative" top="-10rem">
        <Box>
          <Center position="relative" top="7" left="-6">
            <Text
              border="2px solid red"
              p="1"
              borderRadius="20"
              bgColor="red"
              color="white"
              fontSize="20"
            >
              {props.data.cardItemReducer.length}{" "}
            </Text>
          </Center>
          <Img src="https://media.istockphoto.com/vectors/shopping-cart-button-icon-vector-id1273799653?k=20&m=1273799653&s=612x612&w=0&h=HbCPxQJxaWPEJtFVA8sp8Kg2dt13LWAHNFaki6wxHss=" />
        </Box>
      </Flex>
    </>
  );
};

export default Header;
