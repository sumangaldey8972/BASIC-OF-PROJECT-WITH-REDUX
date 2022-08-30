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

const Home = (props) => {
  console.log("home", props);
  return (
    <>
      <Heading>Home Compoenets</Heading>
      <Flex gap="10px">
        <Flex
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
          p="4"
          mt="4"
          ml="4"
          gap="30px"
        >
          <Box>
            <Img src="https://www.apple.com/v/iphone-12/key-features/g/images/overview/compare/compare_iphone_13_pro__emfqqeaysca6_large.jpg" />
          </Box>
          <Box p="5">
            <Text>I-Phone</Text>
            <Text>Price: Rs-145000</Text>{" "}
          </Box>
          <Box p="6">
            <Button
              colorScheme="red"
              borderRadius="23"
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
              onClick={() =>
                props.addToCartHandler({ price: 145000, name: "I-phone" })
              }
            >
              Add To Cart
            </Button>
          </Box>
          <Box p="6">
            <Button
              colorScheme="teal"
              borderRadius="23"
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
              onClick={() =>
                props.removeToCartHandler({ price: 145000, name: "I-phone" })
              }
              width="full"
              disabled={props.data.cardItemReducer.length === 0}
            >
              Remove To Cart
            </Button>
          </Box>
        </Flex>
        <Spacer />
      </Flex>
    </>
  );
};

export default Home;
