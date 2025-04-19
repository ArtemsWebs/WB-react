import { createFileRoute } from "@tanstack/react-router";
import { Basket } from "~/pages/Basket";

export const Route = createFileRoute("/basket")({
  component: Basket,
});
