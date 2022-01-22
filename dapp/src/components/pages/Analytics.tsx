import React from 'react';
import {useState, useEffect} from "react";
import type {FC} from 'react'
import {Button, FormControl, FormLabel, Grid, GridItem, Input, Stack} from '@chakra-ui/react';


interface Interface {

}

export const Analytics:FC<Interface>=()=>{

    return(

            <Grid
                w={'1800px'}
                h='900px'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
            >
                {/*<GridItem rowSpan={2} colSpan={1} bg='tomato' />*/}
                <GridItem colSpan={2} bg='whitesmoke' />
                <GridItem colSpan={2} bg='whitesmoke' />
                <GridItem colSpan={2} bg='whitesmoke' />
                <GridItem colSpan={2} bg='whitesmoke' />
                {/*<GridItem colSpan={4} bg='tomato' />*/}

                Row 1 Col 1: Create: PIE CHART: types of mints - artitist, compamnies, ideas

                Row 1 Col 2: Validate: companies' icons that have accepted us as legitimate

                Row 2 Col 1: 1Attached: number of people that have minted AND number of attached NFTs - number of NFTs that have been attached

                Row 2 Col 1: Search: number of validated PM identities - number of Validations

                Row 2 Col 2: proof of concept - videos

            </Grid>
    )
};

export default Analytics;