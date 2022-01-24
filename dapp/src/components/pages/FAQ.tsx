import React, { useEffect, useState } from "react";
import type {FC} from 'react'
import {
    Box, Heading,
    Button,
    Flex,
    Menu, MenuButton, MenuDivider,
    MenuItem, MenuList, StackDivider, Text, useColorModeValue, Stack, Collapse, useDisclosure,
} from '@chakra-ui/react';
import Sidebar from "../molecules/Sidebar";
import {Link as ReachLink} from "react-router-dom";
import CollapseButton from "../atoms/CollapseButton";


interface Interface {

}

export const FAQ:FC<Interface>=()=> {

    return (

        <Flex justify-content={'space-between'}>

            <Flex borderRight="1px solid " borderColor='#daceda'>
                <Sidebar/>
            </Flex>

            <Box flex='auto' mx={{sm: '12px', xl: '18px'}} borderRadius='15px' bg='white' p="26px"
                 px="24px" my={{sm: "14px", xl: "16px"}}>

                <Heading variant={'contentHeader'}>
                    Frequently Asked Questions
                </Heading>

                <Stack
                    divider={<StackDivider borderColor='pmpurple.3'/>}
                    spacing={4}
                    justify={''}
                    px={'24px'}
                >
                    <CollapseButton title={'What is a Non-Fungiable-Identity (NFI)'} body={'dfgfdhdftgyertg'}/>
                    <CollapseButton title={'What are the benefits of having a PaperMasters NFI?'} body={'dfgfdhdftgyertg'}/>

                    <StackDivider borderColor='pmpurple.3'/>

                </Stack>

            </Box>

        </Flex>
    )
};

export default FAQ;

//What is a Non-Fungiable-Identity (NFI)

