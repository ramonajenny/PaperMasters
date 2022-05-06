import * as React from 'react';
import type {FC} from 'react';
import {Link as ReachLink, useParams} from "react-router-dom";
import {
    Text, TabPanel, TabPanels, TabList, Tabs, Tab, Select, Heading,
} from "@chakra-ui/react";
import {useAppSelector} from "../../../app/hooks";
import ValidateAvatar from "../../avatar/ValidateAvatar";

export const ValidationsReports:FC=()=> {
    const {walletAccount} = useParams();

    const accountArrArr = useAppSelector((state) => state.accountBC.accountArr);

    return(
            <Heading>
                <Tabs isFitted variant='enclosed'>
                    <TabList color={'pmpurple.13'}>

                        <Tab>Validations(add total number of validations here)</Tab>
                        <Tab>Reports (add total number of reports here)</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Text textAlign={'left'} fontSize="sm" color={'pmpurple.8'} fontWeight="600" mb="12px">
                                GIFTED BY ACCOUNT:
                            </Text>
                            {/*<ValidateAvatar giver={} giverColor={} receiver={} receiverColor={} comment={} commentColor={} originDate={} />*/}
                            {/*<Flex align="center" mb="20px">*/}
                            {/*    <Switch colorScheme="purple" me="10px"/>*/}
                            {/*    <Text*/}
                            {/*        noOfLines={1}*/}
                            {/*        fontSize="md"*/}
                            {/*        color="gray.500"*/}
                            {/*        fontWeight="400"*/}
                            {/*    >*/}
                            {/*        Email me when someone Validates me*/}
                            {/*    </Text>*/}
                            {/*</Flex>*/}


                        </TabPanel>
                        <TabPanel>
                            <Text textAlign={'left'} fontSize="sm" color={'pmpurple.8'} fontWeight="600" mb="12px">
                                REPORTED BY ACCOUNT:
                            </Text>
                            {/*<Flex align="center" mb="20px">*/}
                            {/*    <Switch colorScheme="purple" me="10px"/>*/}
                            {/*    <Text*/}
                            {/*        noOfLines={1}*/}
                            {/*        fontSize="md"*/}
                            {/*        color="gray.500"*/}
                            {/*        fontWeight="400"*/}
                            {/*    >*/}
                            {/*        Email me when someone REPORTS me*/}
                            {/*    </Text>*/}
                            {/*</Flex>*/}

                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Heading>
    )

};

export default ValidationsReports;