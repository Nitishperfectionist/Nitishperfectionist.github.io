// import React from 'react'
// import {
//     Drawer,
//     DrawerBody,
//     DrawerHeader,
//     DrawerOverlay,
//     DrawerContent,
//     useDisclosure,
//     Button,
//     Box,
//     ChakraProvider,
//     theme,
//     Link as ResumeLink ,
// } from '@chakra-ui/react'
// import Resume from "../Essentials/Nitish-Kumar-Resume.pdf"
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { Link } from "react-scroll";
// import { ColorModeSwitcher } from '../ColorModeSwitcher';
// import { BiDownload } from 'react-icons/bi';

// const DrawerChakra = ({ links }) => {
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     return (
//         <>
//             <Button fontSize={30} colorScheme='#1976d2' onClick={onOpen}>
//                 <GiHamburgerMenu />
//             </Button>
//             <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
//                 <DrawerOverlay />
//                 <DrawerContent textAlign={'center'}>
//                     <DrawerHeader borderBottomWidth='1px' fontSize={30} fontWeight={800}  >
//                         Nitish Kumar
//                     </DrawerHeader>
//                     <DrawerBody fontSize={20} w={'fit-content'} m={'auto'} >
//                         {links.map((ele, i) => {
//                             return (
//                                 <Box key={i}>
//                                     <Link key={i} to={ele.id} style={{ marginLeft: "30px" }} spy={true} smooth={true} offset={50} duration={500} ><a>{ele.title}</a></Link>
//                                 </Box>
//                             )
//                         })}
//                         <Button colorScheme='blue' leftIcon={<BiDownload />} ml={5} target='_blank'>
//                             <ResumeLink style={{ marginLeft: "10px" }} href={Resume} target='_blank' download={"Nitish-kumar-Resume.pdf"} >
//                                 RESUME
//                             </ResumeLink>
//                         </Button>
//                         <br />
//                         <ChakraProvider theme={theme}>
//                             <ColorModeSwitcher justifySelf="flex-end" />
//                         </ChakraProvider>
//                     </DrawerBody>
//                 </DrawerContent>
//             </Drawer>
//         </>
//     )
// }

// export default DrawerChakra
// DrawerChakra.js

import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Box,
  ChakraProvider,
  theme,
  Link as ResumeLink,
} from '@chakra-ui/react';
import Resume from '../Essentials/Nitish-Kumar-Resume.pdf';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link as ScrollLink } from 'react-scroll';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { BiDownload } from 'react-icons/bi';

const DrawerChakra = ({ links, closeMenu }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLinkClick = () => {
    closeMenu(); // Close the menu when a link is clicked
    onClose(); // Close the drawer
  };

  return (
    <>
      <Button fontSize={30} colorScheme="#1976d2" onClick={onOpen}>
        <GiHamburgerMenu />
      </Button>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent textAlign="center">
          <DrawerHeader borderBottomWidth="1px" fontSize={30} fontWeight={800}>
            Nitish Kumar
          </DrawerHeader>
          <DrawerBody fontSize={20} w="fit-content" m="auto">
            {links.map((ele, i) => (
              <Box key={i}>
                <ScrollLink
                  key={i}
                  to={ele.id}
                  style={{ marginLeft: '30px' }}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={handleLinkClick} // Close menu when link is clicked
                >
                  <a>{ele.title}</a>
                </ScrollLink>
              </Box>
            ))}
            <Button colorScheme="blue" leftIcon={<BiDownload />} ml={5} target="_blank">
              <ResumeLink style={{ marginLeft: '10px' }} href={Resume} target="_blank" download="Nitish-kumar-Resume.pdf">
                RESUME
              </ResumeLink>
            </Button>
            <br />
            <ChakraProvider theme={theme}>
              <ColorModeSwitcher justifySelf="flex-end" />
            </ChakraProvider>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerChakra;
