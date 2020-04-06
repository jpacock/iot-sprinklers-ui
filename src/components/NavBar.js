import React from 'react';
import {
    Flex,
    Text,
    Box,
    Link
} from 'rebass';

function NavBar() {
    return (
        <Flex
            px={2}
            color='white'
            bg='black'
            alignItems='center'>
            <Text p={2} fontWeight='bold'>IOT-Sprinklers</Text>
            <Box mx='auto' />
            
        </Flex>
    );
}

export default NavBar;