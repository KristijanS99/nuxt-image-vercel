import { defineNuxtConfig } from "@nuxt/bridge";
// import axios from 'axios'

export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  target: "server",
  bridge: {
    typescript: true,
    capi: true,
    nitro: true,
    transpile: true,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Vercel Nuxt Image Repro",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
      { hid: "og-type", property: "og:type", content: "website" },
    ],
    layout: "default",
    // @ts-ignore
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  buildModules: ["@nuxt/image"],
  image: {
    domains: ["wp-admin.trendseeker.co", "trendseeker.co"],
    provider: "vercel",
    vercel: {
      baseURL: "https://wp-admin.trendseeker.co",
      modifiers: {
        quality: "80",
        format: ["webp", "jpeg", "jpg", "png"],
      },
    },
  },
  loading: {
    color: "#38b6ff",
    height: "5px",
  },
});
