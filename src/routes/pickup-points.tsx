import { createFileRoute } from "@tanstack/react-router";
import { PickupPoints } from "~/pages/PickupPoints";

export const Route = createFileRoute("/pickup-points")({
  component: PickupPoints,
});
