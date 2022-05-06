import React, {useEffect, useState, useRef, MutableRefObject, forwardRef} from "react";
import type {FC} from 'react'
import {
    Box, Heading, useMergeRefs,
    Button,
    Flex,
    Menu, MenuButton, MenuDivider,
    MenuItem, MenuList, StackDivider, Text, useColorModeValue, Stack, Collapse, useDisclosure,
} from '@chakra-ui/react';
import RoutesRoutes from "../../app/RoutesRoutes";
import {Link as ReachLink} from "react-router-dom";



interface InterfaceFORUM {
title: string;
body: string;
}

export const PageForum=forwardRef<HTMLDivElement | null, InterfaceFORUM>(({ title, body }, ref)=> {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const refCommunity = useRef<HTMLDivElement>(null)
    const refCommunityDiscussion = useRef<HTMLDivElement>(null)
    const refCommunityEvent = useRef<HTMLDivElement>(null)
    const refReportSus = useRef<HTMLDivElement>(null)

    const CommunityForumPage = [
        // <PageForum title={'Community Forum'} body={'dfgfdhdftgyertg'}/>,
        // <PageForum title={'Community Discussion'} body={'dfgfdhdftgyertg'}/>,
        // <PageForum title={'Community Events'} body={'dfgfdhdftgyertg'}/>,
        // <PageForum title={'Report Suspicious Activity'} body={'dfgfdhdftgyertg'}/>,
        // <PageForum title={'Papermaster project Feedback'} body={'bdfkljgiuertywrebfbfshjteruerter'}/>,
    ]

    // const gotoPageRef = () => {
    //     if (refCommunity.current !== null) {
    //         console.log(refCommunity.current.offsetTop);
    //         window.scrollTo({
    //             top: refCommunity.current.offsetTop,
    //             behavior: 'smooth',
    //             // You can also assign value "auto" to the behavior parameter.
    //         })
    //     }
    // };

    return (
        <Flex ref={ref} justify-content={'space-between'}>
            <Box flex='auto' w="100%" mx={{sm: '12px', xl: '18px'}} borderRadius='15px' bg='white'
                 p="12px"
                 px="24px"
            >
                <Stack
                    divider={<StackDivider borderColor='pmpurple.3'/>}
                    spacing={4}
                    justify={''}
                    px={'24px'}
                >
                    <Menu>
                        <MenuButton
                            as={Button}
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}
                            color='#5c415c'
                            size='md'
                            textAlign={'left'}
                            square={'full'}
                            variant={'link'}
                            cursor={'pointer'}
                            _hover={{color: '#906e90'}}
                            _active={{
                                color: '#906e90',
                                transform: 'scale(.98)'
                            }}
                            minW={0}>
                            <Text fontSize="lg" color={'pmpurple.13'} fontWeight="bold">
                                {title}
                            </Text>

                        </MenuButton>
                        {/*<Button onClick={() => {*/}
                        {/*    gotoPageRef()*/}
                        {/*}}>Community</Button>*/}
                        <Collapse in={isOpen} animateOpacity>
                            <Box
                                p='26px'
                                color='pmpurple.10'
                                mt='4'
                                bg='pmpurple.2'
                                rounded='md'
                                shadow='md'
                            >
                                <Text fontSize="md" color={'pmpurple.13'} fontWeight="bold">
                                    {body}
                                </Text>
                            </Box>
                        </Collapse>
                    </Menu>
                    <StackDivider borderColor='pmpurple.3'/>
                </Stack>
            </Box>
        </Flex>
    )
});

export default PageForum;

