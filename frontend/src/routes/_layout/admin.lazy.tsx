import { createLazyFileRoute } from '@tanstack/react-router';
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"
import { useEffect } from "react"
import { z } from "zod"
import { type UserPublic, UsersService } from "../../client"
import AddUser from "../../components/Admin/AddUser"
import ActionsMenu from "../../components/Common/ActionsMenu"
import Navbar from "../../components/Common/Navbar"

export const Route = createLazyFileRoute("/_layout/admin")({
  component: Admin,
});
function Admin() {
  return (
    <Container maxW="full">
      <Heading size="lg" textAlign={{ base: "center", md: "left" }} pt={12}>
        Users Management
      </Heading>

      <Navbar type={"User"} addModalAs={AddUser} />
      <UsersTable />
    </Container>
  )
}