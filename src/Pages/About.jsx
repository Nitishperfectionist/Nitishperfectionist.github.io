import { Box, Text, Button, Flex, Spacer, Link, useToast } from '@chakra-ui/react'
import React from 'react'
import Resume from "../Essentials/Nitish-Kumar-Resume.pdf"
import NitishPic from "../Essentials/NitishPic.jpg"
import { BiDownload } from 'react-icons/bi';


const About = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/17Jc7CHswy0og9uOVzqf1Un7HdSHmaLmi/view?usp=sharing', '_blank');
    toast({
      title: "Resume-downloading",
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
  };
  const toast = useToast()
  return (
    <Flex id="about" className="about section" w={'90%'} m={'auto'} display={['block', 'block', 'flex']} minH={'94vh'} >

      <Box w={'90%'} m={'auto'} >
        <Box textAlign={'center'} >
          <Text fontSize={25} fontWeight={600} >About</Text>
          {/* <Text fontWeight={800} color={'gray'} >Nitish Kumar</Text>
          <Text fontWeight={800} color={'gray'} >Full Stack Web developer</Text> */}
        </Box>
        <Box>
          <Box>
          {/* <Box id="user-detail-intro-box" p={4} border="1px solid #ccc" borderRadius="lg" maxW={['100%', '100%', '25%']}>
  <Text>
    I'm a passionate Full Stack Web Developer with expertise in HTML, CSS, JavaScript, React, Redux, MongoDB, and a strong grasp of data structures and algorithms. I take pride in crafting dynamic web applications that blend creativity with technical excellence. As a collaborative team player, I thrive on challenges and am committed to turning innovative ideas into reality. Let's create something extraordinary together.
  </Text>
</Box> */}

            <Text id="user-detail-intro" >I'm a passionate Full Stack Web Developer with expertise in HTML, CSS, JavaScript, React, Redux, MongoDB, and a strong grasp of data structures and algorithms. I take pride in crafting dynamic web applications that blend creativity with technical excellence. As a collaborative team player, I thrive on challenges and am committed to turning innovative ideas into reality. Let's create something extraordinary together.</Text>
            <Flex>
              {/* <Text fontWeight={700} color={'gray'} >Some of my other interests
                <br />
                Build Website(Cloning)
                <br />
                Cricket
                <br />
                Making Mathematics
              </Text> */}
              <Spacer />
              <Button id="resume-button-2" m={'auto'} >
                <BiDownload
                  fontSize={['40px', '40px', '10px']}
                />
                <Link
                  id="resume-link-2"
                  style={{ marginLeft: "10px" }}
                  rel="noreferrer"
                  onClick={handleDownload}
                  href={Resume}
                  download={"Nitish-Kumar-Resume"}
                >
                  RESUME
                </Link>
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Box m={'auto'} maxW={['100%', '100%', '25%']} >
        <img className="home-img" width={200} src={NitishPic} style={{ borderRadius: '50%' }}/>
      </Box>
    </Flex>
  )
}

export default About
