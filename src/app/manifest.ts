import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SD Card Return — Packaging SOP",
    short_name: "SD Card SOP",
    description:
      "Standard operating procedure for SD card return packaging: labeling, packing, and verification for factory workers.",
    start_url: "/",
    display: "standalone",
    background_color: "#f9f9f9",
    theme_color: "#000000",
    orientation: "portrait-primary",
  };
}
