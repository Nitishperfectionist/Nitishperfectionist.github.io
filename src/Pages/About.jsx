import { Box, Text, Button, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import Resume from "../Essentials/Shiva-Verma- Resume (2).pdf"
import ShivaPic from "../Essentials/ShivaPic1-modified.png"
import { BiDownload } from 'react-icons/bi';

const About = () => {
  return (
    <Flex id="about" w={'90%'}m={'auto'} display={['block', 'block', 'flex']} minH={'94vh'} >

      <Box w={'90%'} m={'auto'} >
        <Box textAlign={'center'} >
          <Text fontSize={30} fontWeight={600} >ABOUT ME</Text>
          <Text fontWeight={800} color={'gray'} >Know about me?</Text>
        </Box>
        <Box>
          <Box>
            <Text >I am an aspiring full stack developer and recent graduate of Masai School. I have a passion for developing scalable web applications and learning across the full stack. I am proficient in HTML, CSS, JavaScript, and React, and I have a good command of Node.js, Express, and MongoDB. I am focused on efficient learning and eager to tackle more complex problems.I am a highly motivated and self-driven inBoxidual with a strong work ethic. I am also a team player and I am always willing to help others. I am confident that I have the skills and experience necessary to be successful in a full stack development role.I am eager to learn more about the full stack development process and I am confident that I can make a significant contribution to your team. I am available for full-time employment and I am eager to start working on challenging and rewarding projects.</Text>
            <Flex>
              <Text fontWeight={700} color={'gray'} >Some of my other interests
                <br />
                Build Website(Cloning)
                <br />
                Gym
                <br />
                Traveling
              </Text>
              <Spacer />
              <Button m={'auto'} >
                <BiDownload fontSize={['40px','40px','10px']} />
                <a style={{ marginLeft: "10px" }} href={Resume} target='_blank' download={"Shiva_Verma_Resume.pdf"} >
                  RESUME
                </a>
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Box m={'auto'} maxW={['100%','100%','30%']} >
        <img src={ShivaPic}></img>
      </Box>
    </Flex>
  )
}

export default About