import { createFileRoute } from "@tanstack/react-router";
import { Address } from "~/pages/Address";

export const Route = createFileRoute("/address")({
  component: Address,
});
