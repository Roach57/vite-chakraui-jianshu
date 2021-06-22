import {
  Input,
  InputGroup,
  Stack,
  InputLeftElement,
  Text,
  Button,
  Icon,
  VStack,
  Center,
  Link,
  Divider,
  Wrap,
  WrapItem,
  Tooltip,
} from "@chakra-ui/react";
import { MdPerson, MdLock } from "react-icons/md";
import { RiWechatFill } from "react-icons/ri"
import { AiOutlineQq,AiOutlineMail } from "react-icons/ai"
import { useFormik } from "formik";
import * as Yup from 'yup'
import axios from "axios"


export default function SignUp () {
  const formik = useFormik({
    initialValues: { username: "", email: "", password: "" },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "昵称的长度不能小于3")
        .max(15, "昵称的长度不能大于15"),
      email: Yup.string()
        .email("邮箱地址不正确"),
      password: Yup.string()
        .min(8, "密码的长度不能小于8"),
    }),
    onSubmit: (values) => {
      let data = {user: values}
      axios.post("https://conduit.productionready.io/api/users", data)
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
            <Tooltip
              hasArrow
              label={formik.errors.username}
              placement="right-start"
              isOpen={formik.errors.username ? 1:0}
            >
              <InputGroup>
                <InputLeftElement children={<MdPerson color="#969696" />} />
                <Input
                  _hover={{}}
                  borderRadius="0px"
                  focusBorderColor="none"
                  bgColor="#f1f1f1"
                  name="username"
                  {...formik.getFieldProps('username')}
                  placeholder="你的昵称" />
              </InputGroup>
            </Tooltip>
            <Tooltip
              hasArrow
              label={formik.errors.email}
              placement="right-start"
              isOpen={formik.errors.email ? 1:0}
            >
              <InputGroup>
                <InputLeftElement children={<AiOutlineMail color="#969696" />} />
                <Input
                  _hover={{}}
                  borderRadius="0px"
                  focusBorderColor="none"
                  bgColor="#f1f1f1"
                  type="email"
                  name="email"
                  {...formik.getFieldProps('email')}
                  placeholder="邮箱" />
              </InputGroup>
            </Tooltip>
            <Tooltip
              hasArrow
              label={formik.errors.password}
              placement="right-start"
              isOpen={formik.errors.password ? 1:0}
            >
              <InputGroup>
                <InputLeftElement children={<MdLock color="#969696" />} />
                <Input
                  _hover={{}}
                  borderRadius="0px"
                  focusBorderColor="none"
                  bgColor="#f1f1f1"
                  type="password"
                  name="password"
                  {...formik.getFieldProps('password')}
                  placeholder="设置密码" />
              </InputGroup>
            </Tooltip>
          </VStack>
          <Button
            _hover={{ bgColor: "green.500" }}
            bgColor="green.400"
            w="100%"
            colorScheme="teal"
            borderRadius="25px"
            size="sm"
            type="submit"
          >
            注册
          </Button>
          <Center>
            <Text
              fontWeight="light"
              fontSize="12px"
              lineHeight="tall"
            >
              点击 “注册” 即表示您同意并愿意遵守简书<br/>
            </Text>
          </Center>
          <Center>
            <Text fontWeight="light" fontSize="12px" lineHeight="tall">
              <Link
                _hover={{}}
                color="#3194d0"
                fontWeight="bold"
                href="http://www.jianshu.com/p/c44d171298ce"
              >
                用户协议
              </Link>
              {" "}和{" "}
              <Link
                _hover={{}}
                color="#3194d0"
                fontWeight="bold"
                href="http://www.jianshu.com/p/2ov8x3"
              >
                隐私政策
              </Link>
              {" "} 。
            </Text>
          </Center>
        </Stack>
      </form>
      <Center mt="8">
        <Divider orientation="horizontal" />
        <Text
          fontWeight="light"
          fontSize="12px"
          lineHeight="tall"
          position="relative"
          w="600px"
          pl="30px"
        >
          社交帐号直接注册
        </Text>
        <Divider orientation="horizontal" />
      </Center>
      <Wrap spacing="20px" justify="center">
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
    </div>
  );
}
