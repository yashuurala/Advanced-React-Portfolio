import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

// Define the image imports here
import photo1 from ".././images/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";

const Card = ({ title, description, imageSrc }) => {
  // Map imageSrc to imported image based on title
  const images = {
    "React Space": photo1,
    "React Infinite Scroll": photo2,
    "Photo Gallery": photo3,
    "Event planner": photo4,
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      backgroundColor="white"
      boxShadow="md"
      _hover={{ boxShadow: "xl" }}
    >
      <Image src={images[title]} alt={title} objectFit="cover" width="100%" height="200px" />
      <VStack p={4} align="flex-start" spacing={3}>
        <HStack justifyContent="space-between" width="100%">
          <Heading as="h3" size="md" color="#333">
            {title}
          </Heading>
        </HStack>
        <Text fontSize="md" color="gray.600">
          {description}
        </Text>
        <HStack justifyContent="space-between">
          <Heading as="h5" size="md" color="#333">
            See more
          </Heading>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="#333"/>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
