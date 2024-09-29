import { createLazyFileRoute } from '@tanstack/react-router';
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"
import { useEffect } from "react"
import { z } from "zod"
import { ItemsService } from "../../client"
import ActionsMenu from "../../components/Common/ActionsMenu"
import Navbar from "../../components/Common/Navbar"
import AddItem from "../../components/Items/AddItem"

export const Route = createLazyFileRoute("/_layout/items")({
  component: Items,
});
function Items() {
  return (
    <Container maxW="full">
      <Heading size="lg" textAlign={{ base: "center", md: "left" }} pt={12}>
        Items Management
      </Heading>

      <Navbar type={"Item"} addModalAs={AddItem} />
      <ItemsTable />
    </Container>
  )
}