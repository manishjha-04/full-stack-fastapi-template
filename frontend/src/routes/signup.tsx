import {
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react"
import {
  Link as RouterLink,
  createFileRoute,
  redirect,
} from "@tanstack/react-router"
import { type SubmitHandler, useForm } from "react-hook-form"

import Logo from "/assets/images/fastapi-logo.svg"
import type { UserRegister } from "../client"
import useAuth, { isLoggedIn } from "../hooks/useAuth"
import { confirmPasswordRules, emailPattern, passwordRules } from "../utils"


  export const Route = createFileRoute("/signup")({
     beforeLoad: async () => {
    if (isLoggedIn()) {
      throw redirect({
        to: "/",
      })
    }
  },
  });


interface UserRegisterForm extends UserRegister {
  confirm_password: string
}



export default SignUp
