import * as React from 'react';
import type {FC} from 'react';
import {Link as ReachLink, useParams} from "react-router-dom";
import {
    Avatar, AvatarGroup, Box, Button, Flex, Grid, GridItem, Icon, Image, Link, MenuItem,
    Stack, Switch, Text, useColorModeValue, HStack, useDisclosure, Tooltip, VStack,
    Container, AspectRatio, AvatarBadge, Divider, Center, InputRightElement, useStyleConfig,
    TabPanel, TabPanels, TabList, Tabs, Tab, Select, Heading,
} from "@chakra-ui/react";
import { RiShareForwardLine} from 'react-icons/ri';

// Custom components
import { BsFillCloudRainFill } from 'react-icons/bs'
// Assets
import ImageArchitect1 from "../../assets/img/ImageArchitect1.png";
import ImageArchitect2 from "../../assets/img/ImageArchitect2.png";
import ImageArchitect3 from "../../assets/img/ImageArchitect3.png";
import ProfileBgImage from "../../assets/img/ProfileBackground.png";
import { FaCube, FaFacebook, FaInstagram, FaPenFancy, FaPlus, FaTwitter,} from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";
import Sidebar from "../Sidebar";
import {GiNewShoot} from "react-icons/gi";
import {useAppSelector} from "../../app/hooks";
import {SiSololearn} from "react-icons/si";
import {accountsArr} from "../../features/RequestWalletAccountSlice";
import {addressHasIdentityBool} from "../../features/MintedNFISlice";
import {MdOutlineColorLens} from "react-icons/md";
import AvatarNFI from "../AvatarNFI";
import bgImage from '../../assets/legoLavendarheadercroped.png'
import {FormEvent, useMemo, useState} from "react";
import {Mentions} from "../identity/Mentions";
import {AiOutlineComment} from "react-icons/ai";

import { createBreakpoints } from '@chakra-ui/theme-tools';
import {filledInputClasses} from "@mui/material";
import Header from "../identity/Header";
import Projects from "../identity/Projects";
import ValidationsReports from "../identity/ValidationsReports";

interface Interface {

}


export const Identity:FC<Interface>=()=> {

    const {isOpen, onOpen, onClose} = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    const {walletAccount} = useParams();

    const filledAccountsArr = useAppSelector((state) => state.register.accounts);
    const tokenIDtoIdentityStruct = useAppSelector((state) => state.minted.tokenIDtoIdentityStruct);
    const receiptHashDB = useAppSelector((state) => state.account.receiptDBTransHash);
    const addressHasIdentityBool = useAppSelector((state) => state.minted.addressHasIdentity);


    const breakpoints = createBreakpoints({
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
    })


    console.log(tokenIDtoIdentityStruct);

    return (
        <Flex>
            <Stack bg={"pmpurple.2"}>
                <Box
                    bgImage={bgImage}
                    w="100%"
                    h="200px"
                    bgPosition="0%"
                    bgRepeat="repeat"
                    position="relative"
                    display="flex"
                    justifyContent="center"
                    mb={'110px'}
                    top={'0px'}
                    right={'0px'}
                    left={'0px'}
                    backgroundPosition="center"
                    objectFit={'cover'}
                >
                    <Flex
                        direction={{sm: "column", md: "row"}}
                        left={'10px'}
                        right={'10px'}
                        //maxH="330px"
                        justifyContent={{sm: "center", md: "space-between"}}
                        backdropFilter="saturate(100%) blur(50px)"
                        position="absolute"
                        boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
                        border="2px solid "
                        borderColor='#694b69'
                        p="18px"
                        borderRadius="20px"
                        transform={{
                            sm: "translateY(45%)",
                            md: "translateY(90%)",
                            lg: "translateY(85%)",
                        }}
                    >
                        <Flex
                            align="center"
                            direction={{sm: "column", md: "row"}}
                            w={{sm: "100%"}}
                            //textAlign={{sm: "center", md: "start"}}
                            bg={'transparent'}
                            //border="2px solid yellow"
                            m={"0px"}
                            p={'0px'}
                        >

                            <Avatar
                                me={{md: "22px"}}
                                src='' //this is the profile image
                                w="98px"
                                h="98px"
                                mb={"6px"}
                                borderRadius="10px"
                            />


                            <Header/>

                        </Flex>
                        <VStack direction={'row'} justify={'center'} spacing={6}
                            // border="2px solid "
                            // borderColor='red'
                        >

                            <Flex
                                direction={{sm: "column", lg: "row"}}
                                w={{sm: "100%", md: "50%", lg: "auto"}}
                                // border="2px solid "
                                // borderColor='blue'
                            >

                                <Button p="0px" bg="transparent" _hover={{bg: "none"}}>
                                    <Flex
                                        align="center"
                                        w={'100%'}
                                        bg="hsla(0,0%,100%,.3)"
                                        borderRadius="15px"
                                        justifyContent="center"
                                        mt={'12px'}
                                        py="12px"
                                        px="14px"
                                        mx={'42px'}
                                        boxShadow="inset 0 0 1px 1px hsl(0deg 0% 100% / 90%), 0 20px 27px 0 rgb(0 0 0 / 5%)"
                                        border="1px solid gray.500"
                                        cursor="pointer"
                                        _hover={{
                                            transform: 'translateY(4px)',
                                            //boxShadow: 'md',
                                        }}
                                    >
                                        <Icon as={FaCube} me="6px"/>
                                        <Text fontSize="sm" color='pmpurple.13' fontWeight="bold">
                                            {/*//when I click on this button I want it to route me to the validations page*/}
                                            <Link as={ReachLink} to={'/validate'} _hover={{textDecor: 'none'}}>
                                                {addressHasIdentityBool === false ?

                                                    <Text fontSize={'18px'} color={'red.600'} letterSpacing={'1px'}
                                                          textShadow={'#F7FAFC 0px 0px 10px'}>
                                                        Non-Registered Wallet Account
                                                    </Text>

                                                    :
                                                    `NFI Transaction Hash: ${receiptHashDB}`
                                                }

                                            </Link>
                                        </Text>
                                    </Flex>
                                </Button>
                            </Flex>
                            <HStack spacing={'34px'}>
                                <Stack spacing={'0px'} align={'center'}>
                                    <Text fontWeight={600}>57</Text>
                                    <Tooltip hasArrow label='Total received Validations from other Blockchain accounts'
                                             bg='pmpurple.4' color='pmpurple.13'>
                                        <Text fontSize={'sm'} color={'pmpurple.11'}>
                                            Validations
                                        </Text>
                                    </Tooltip>


                                </Stack>
                                <Stack spacing={0} align={'center'}>
                                    <Text fontWeight={600}>23k</Text>
                                    <Tooltip hasArrow label='Total Mentions about this PaperMaster' bg='pmpurple.4'
                                             color='pmpurple.13'>
                                        <Text fontSize={'sm'} color={'pmpurple.11'}>
                                            Mentions
                                        </Text>
                                    </Tooltip>
                                </Stack>
                                <Stack spacing={0} align={'center'}>
                                    <Text fontWeight={600}>23k</Text>
                                    <Tooltip hasArrow label='Total reports made about PaperMaster' bg='pmpurple.4'
                                             color='pmpurple.13'>
                                        <Text fontSize={'sm'} color={'pmpurple.11'}>
                                            Reported
                                        </Text>
                                    </Tooltip>
                                </Stack>
                                <Stack spacing={0} align={'center'}>
                                    <Text fontWeight={600}>3k</Text>
                                    <Tooltip hasArrow
                                             label='Number of Validations this PaperMaster has given to other Blockchain accounts'
                                             bg='pmpurple.4' color='pmpurple.13'>
                                        <Text fontSize={'sm'} color={'pmpurple.11'}>
                                            Given Validations
                                        </Text>
                                    </Tooltip>
                                </Stack>
                                <Select placeholder='Alias' color={'pmpurple.13'} borderColor={'pmpurple.5'}>
                                    <option value='ALias'>OpenSea</option>
                                    <option value='Profile Name'>Cordano</option>
                                    <option value='option3'>Option 3</option>
                                </Select>
                            </HStack>

                        </VStack>
                    </Flex>
                </Box>
                <Stack p={'10px'}>

                    <Box borderRadius='15px' bg='white' p="12px" px="24px">
                        <Heading p="12px 5px" mb="0px">
                            <Text fontSize="lg" color='pmpurple.13' fontWeight="bold" align={'left'}>
                                Description
                            </Text>
                        </Heading>
                        <Box px="5px">
                            <Flex direction="column">
                                <Text fontSize="md" color={'pmpurple.8'} fontWeight="400" mb="20px" align={'left'}>
                                    Mathematics may not teach us how to add love or subtract hate, but it gives
                                    us every reason to hope that every problem has a solution.
                                </Text>
                            </Flex>
                        </Box>
                    </Box>

                    <HStack spacing={'10px'} align='stretch' justify={'space-evenly'}>
                        <Box w='33%' borderRadius='15px' bg='white' p="16px" px="24px">
                        <ValidationsReports/>
                        </Box>

                        <Box  w='33%' borderRadius='15px' bg='white' p="16px" px="24px">

                            {filledAccountsArr.length !== 0 && tokenIDtoIdentityStruct.length !== 0 ?

                                <AvatarNFI accountNumber={tokenIDtoIdentityStruct[0]}
                                           name={tokenIDtoIdentityStruct[1].split("|||")[0]}
                                           nameColor={tokenIDtoIdentityStruct[1].split("|||")[1]}
                                           email={tokenIDtoIdentityStruct[2].split("|||")[0]}
                                           emailColor={tokenIDtoIdentityStruct[2].split("|||")[1]}
                                           profession={tokenIDtoIdentityStruct[3].split("|||")[0]}
                                           professionColor={tokenIDtoIdentityStruct[3].split("|||")[1]}
                                           organization={tokenIDtoIdentityStruct[4].split("|||")[0]}
                                           organizationColor={tokenIDtoIdentityStruct[4].split("|||")[1]}
                                           slogan={tokenIDtoIdentityStruct[5].split("|||")[0]}
                                           sloganColor={tokenIDtoIdentityStruct[5].split("|||")[1]}
                                           website={tokenIDtoIdentityStruct[6].split("|||")[0]}
                                           websiteColor={tokenIDtoIdentityStruct[6].split("|||")[1]}
                                           uniqueYou={tokenIDtoIdentityStruct[7].split("|||")[0]}
                                           uniqueYouColor={tokenIDtoIdentityStruct[7].split("|||")[1]}
                                           avatarBG={tokenIDtoIdentityStruct[8]}
                                           originDate={parseInt(tokenIDtoIdentityStruct[9])}
                                />

                                :

                                <Button
                                    w={'100%'}
                                    p={"6px"}
                                    mt={'32px'}
                                    bg={'pmpurple.2'}
                                    h='10.00rem'
                                    //size='lg'
                                    borderRadius={'20px'}
                                    borderStyle={'solid'}
                                    border={'4px'}
                                    borderColor={'pmpurple.6'}
                                    textDecoration={'none'}
                                    _hover={{
                                        transform: 'translateY(-2px)',
                                        boxShadow: 'xl',
                                    }}
                                >
                                    <Link as={ReachLink} to='/register'
                                          _hover={{textDecor: 'none'}}
                                          cursor={'pointer'}
                                    >
                                        <Text p='12px' textAlign={'center'} fontSize="xl" color={'pmpurple.13'}
                                              fontWeight="bold" whiteSpace={'pre-wrap'}>
                                            NFI will display here, please mint an NFI to your wallet account
                                        </Text>
                                        <Box position={"absolute"} bottom={'10px'} right={"10px"}>
                                            <RiShareForwardLine fontSize={'40px'}/>
                                        </Box>

                                    </Link>
                                </Button>
                            }
                        </Box>

                        <Box w='33%' borderRadius='15px' bg='white' p="16px" px="24px">
                        <Mentions/>
                        </Box>
                    </HStack>

                    <Projects/>

                </Stack>

            </Stack>

        </Flex>
    )
};

export default Identity;
