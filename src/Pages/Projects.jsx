import { Box, Button, Flex, Grid, GridItem, Image, Link, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import Honeybee from "../Essentials/Honeybeeimage.png"
import Bewakoof  from "../Essentials/Bewakoofimage.png"
import Specialized from "../Essentials/Specialized.png"
import Travelious from "../Essentials/Traveliousimage.png"
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineApi } from 'react-icons/ai';
import { RiNavigationLine } from 'react-icons/ri';
import SkilTags from './SkilTags'

const Projects = () => {
  const projects = [
    {
      img: Travelious,
      githubLink: "https://github.com/arjundangi01/Travelious",
      live: "https://travelious-project.netlify.app/",
      title: "Travelious",
      desc: "Travelious, a collaborative effort by a team of five, resulted in an intuitive online travel booking platform. With a tech stack encompassing React, Redux, Chakra UI, JavaScript, Bootstrap, and API integration, we focused on responsive design and user-specific features. This project sharpened our front-end development skills and showcased effective teamwork, all achieved in just five days..",
      tags: [
        { title: "HTML" },
        { title: "CSS" },
        { title: "JS" },
        { title: "React.js" },
        { title: "Routing" },
        { title: "Api" },
        { title: "Bootstrap" },
        { title: "ChakraUI" },
        { title: "GitHub" },
      ],
      api: "",
    },
    {
      img: Specialized,
      githubLink: "https://github.com/Nitishperfectionist/onlinecycleapp",
      live: "https://sprightly-phoenix-7d7782.netlify.app/",
      title: "Specialized Cycle Shop",
      desc: "As part of a 5-member team, we developed an online platform for purchasing bicycles. Our primary focus was on creating a user-friendly website with responsive design, filtering, sorting, and robust authentication. This experience honed our skills as front-end developers and effective team members. I played a key role in ensuring full responsiveness. It was a collaborative project completed within a tight 5-day timeframe.",
      tags: [
        { title: "HTML" },
        { title: "CSS" },
        { title: "JS" },
        { title: "ChakraUI" },
        { title: "FireBase" },
        { title: "GitHub" },
      ],
      api:"",
    },
    {
      img: Honeybee,
      githubLink: "https://github.com/akashtijare/honey_bee",
      live: "https://let-it-bee.vercel.app/",
      title: "let_it_bee.co ",
      desc: "let_it_bee.co is an eco-friendly e-commerce platform dedicated to honey sales. This endeavor featured user-friendly registration and authentication for a smooth shopping experience. we also crafted an intuitive login and signup page, further enhancing user accessibility. Additionally, the platform included sorting, filtering, and pagination features, simplifying the search for honey products. This project embodies our commitment to sustainability and user satisfaction.",
      tags: [
        { title: "HTML" },
        { title: "CSS" },
        { title: "JS" },
        { title: "React" },
        { title: "Redux" },
        { title: "Ruting" },
        { title: "vercel" },
        { title: "Json server" },
        { title: "GitHub" },
      ],
      api:"",
    },
    {
      img: Bewakoof,
      githubLink: "https://github.com/ManojSharma1122/Bewakoof",
      live: "https://relaxed-profiterole-506b95.netlify.app/index.html",
      title: "Bewakoof Clone",
      desc: "Collaborated with a team of five to develop an e-commerce website mirroring 'Bewakoof.com,' focusing on responsive design, filtering, sorting, and user-specific features. Responsibilities included responsive design and payment methods..",
      tags: [
        { title: "HTML" },
        { title: "CSS" },
        { title: "JS" },
        { title: "Json server" },
        { title: "Local Storage" },
        { title: "GitHub" },
      ],
      api:"",
    },
  ]
  return (
    <Box>
      <Box id="projects" w={'80%'} m={'auto'} mt={[10, 10, 2]}>
        <Box w={'fit-content'} m={'auto'} >
          <Text fontSize={30} fontWeight={600} pt={'15vh'}>My Projects</Text>
          <Text fontWeight={800} color={'gray'}></Text>
        </Box>
        <Grid fontSize={20} templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']} gap={0} w={'fit-content'} m={'auto'}>
          {
            projects.map((ele, i) => {
              return (
                <GridItem className="project-card" p={5} key={i} m={[2, 5, 10]} outline={'2px solid #1976d2'} borderRadius={10} style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }} >
                  <Image src={ele.img} />
                  <Text className="project-title" fontSize={25} fontWeight={800} mt={5} >{ele.title}</Text>
                  <Text className="project-description">{ele.desc}</Text>
                  <Box m={'auto'} w={'fit-content'}>
                    <Grid templateColumns={['repeat(3, 1fr)', 'repeat(5, 1fr)', 'repeat(5, 1fr)', 'repeat(5, 1fr)', 'repeat(6, 1fr)', 'repeat(6, 1fr)', 'repeat(7, 1fr)']} w={'fit-content'} textAlign={'center'} >
                      {
                        ele.tags.map((ele, i) => {
                          return (
                            <GridItem>
                              <SkilTags tags={ele.title} key={i} />
                            </GridItem>
                          )
                        })
                      }
                    </Grid>
                  </Box>
                  < Flex w={'fit-content'}m={'auto'} my={3} >
                    <Button w={['100%','50%','100%']} my={1} mx={1} className="project-github-link" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }} _hover={{ cursor: 'pointer' }} leftIcon={<AiFillGithub />} colorScheme='purple' variant='solid'>
                      <Link target='_blank' href={ele.githubLink} >GitHub</Link>
                    </Button>
                    <Spacer />
                    <Button w={['100%','50%','100%']} my={1} mx={1} className="project-deployed-link" target='_blank' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }} _hover={{ cursor: 'pointer' }} leftIcon={<RiNavigationLine />} colorScheme='facebook' variant='solid'>
                      <Link target='_blank' href={ele.live} >Live</Link>
                    </Button>
                  </Flex>
                    {
                      ele.api != "" ? (
                        <Box m={'auto'} w={'fit-content'} >
                          < Button my={1} mx={1} className="project-github-link" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }} _hover={{ cursor: 'pointer' }} leftIcon={<AiOutlineApi />} colorScheme='linkedin' variant='solid'>
                            <Link target='_blank' href={ele.api} ></Link>
                          </Button>
                          <Spacer />
                        </Box>
                      ):""
                    }
                </GridItem>
              )
            })
          }
        </Grid >
      </Box >
    </Box >
  )
}

export default Projects
