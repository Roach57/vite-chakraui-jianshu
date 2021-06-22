import { Box } from '@chakra-ui/react';
import Sign from './Sign'


function Main() {
  return (
    <div >
      <Box
        w={1 / 2}
        mx="auto"
        mt="20px"
        d="flex"
        justifyContent="center"
      >
        <Sign />
      </Box>
    </div>
  )
}

export default Main