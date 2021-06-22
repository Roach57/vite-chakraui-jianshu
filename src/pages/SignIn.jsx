import {
  Input,
  InputGroup,
  Stack,
  Text,
  InputLeftElement,
  Button,
  Checkbox,
  FormControl,
  Icon,
  VStack,
  Flex,
  Spacer,
  Center,
  Link,
  Divider,
  Wrap,
  WrapItem,
  Tooltip,
} from "@chakra-ui/react";
import { MdLock } from "react-icons/md";
import { RiWechatFill,RiWeiboFill } from "react-icons/ri"
import { AiOutlineQq,AiOutlineMail } from "react-icons/ai"
import { useFormik } from "formik";
import * as Yup from 'yup'
import axios from "axios"
import { useState } from "react"


export default function SignIn () {
  const [errmsg, setErrMsg] = useState("默认错误信息");
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("邮箱地址不正确"),
      password: Yup.string()
        .min(8, "密码的长度不能小于8"),
    }),
    onSubmit: (values) => {
      let data = {user: values}
      axios.post("https://conduit.productionready.io/api/users/login", data)
      .then( res => {
        console.log(res.data)
      }).catch(err => {
        alert(JSON.stringify(err.response.data.errors))
      });
    },
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing="2" mt="5">
          <VStack
            spacing={0}
            mb="10px"
          >
            <FormControl>
            <Tooltip
              hasArrow
              label={formik.errors.email}
              placement="right-start"
              isOpen={formik.errors.email ? 1:0}
            >
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<AiOutlineMail color="#969696" />}
                />
                <Input
                  _hover={{}}
                  borderRadius="0px"
                  focusBorderColor="none"
                  bgColor="#f1f1f1"
                  type="text"
                  name="email"
                  {...formik.getFieldProps('email')}
                  placeholder="邮箱" />
              </InputGroup>
            </Tooltip>
            </FormControl>
            <Tooltip
              hasArrow
              label={formik.errors.password}
              placement="right-start"
              isOpen={formik.errors.password ? 1:0}
            >
              <InputGroup mt="10">
                <InputLeftElement children={<MdLock color="#969696" />} />
                <Input
                  _hover={{}}
                  borderRadius="0px"
                  focusBorderColor="none"
                  bgColor="#f1f1f1"
                  type="password"
                  name="password"
                  {...formik.getFieldProps('password')}
                  placeholder="密码" />
              </InputGroup>
            </Tooltip>
          </VStack>
          <Flex>
            <Checkbox
              defaultIsChecked
              _hover={{}}
              size="sm"
              colorScheme="blackAlpha"
            >
              记住我</Checkbox>
            <Spacer />
            <Link
              _hover={{}}
              href="#"
              fontWeight="light"
              fontSize="12px"
            >
              登录遇到问题?
            </Link>
          </Flex>
          <Button
            _hover={{ bgColor: "blue.600" }}
            bgColor="blue.500"
            colorScheme="teal"
            borderRadius="25px"
            size="sm"
            type="submit"
          >
            登录
          </Button>
        </Stack>
      </form>
      <Center mt="8">
        <Divider orientation="horizontal" />
        <Text
          fontWeight="light"
          fontSize="12px"
          lineHeight="tall"
          w="400px"
          pl="30px"
        >
          社交帐号登录
        </Text>
        <Divider orientation="horizontal" />
      </Center>
      <Wrap spacing="20px" justify="center">
        <WrapItem>
          <Center w="30px" h="50px">
            <Icon boxSize="30px" as={RiWeiboFill} color="red.500" />
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="30px" h="50px">
            <Icon boxSize="30px" as={RiWechatFill} color="green.500" />
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="30px" h="50px">
            <Icon boxSize="30px" as={AiOutlineQq } color="blue.500" />
          </Center>
        </WrapItem>
      </Wrap>
      <Text>{errmsg}</Text>
    </div>
  );
}
