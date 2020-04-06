import React from 'react';
import { Flex, Box, Button } from 'rebass';
import { Input } from '@rebass/forms';
function ZoneItem() {
    return (
        <div>
            <Flex
                bg=''
                px={2}
                alignItems='center'>
                <Input id='email'
                    name='email'
                    type='email'
                    placeholder='jane@example.com'></Input>
                <Box mx='auto'></Box>
                <span>mins</span>
                <Button variant='primary' mr={2} >start</Button>
                <Button variant='primary' mr={2} >stop</Button>
            </Flex>
        </div>
    );
}


export default ZoneItem;
