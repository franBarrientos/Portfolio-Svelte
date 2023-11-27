import { c as create_ssr_component, a as compute_rest_props, b as spread, d as escape_object, e as escape_attribute_value, f as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import { B as Button } from "../../../../chunks/Button.js";
import { twMerge } from "tailwind-merge";
import { G as GitHub } from "../../../../chunks/gitHub.js";
const Video = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["src", "type", "trackSrc", "srclang", "label"]);
  let { src } = $$props;
  let { type = "video/mp4" } = $$props;
  let { trackSrc = "" } = $$props;
  let { srclang = "en" } = $$props;
  let { label = "english_captions" } = $$props;
  let videoClass = twMerge($$props.class);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.trackSrc === void 0 && $$bindings.trackSrc && trackSrc !== void 0)
    $$bindings.trackSrc(trackSrc);
  if ($$props.srclang === void 0 && $$bindings.srclang && srclang !== void 0)
    $$bindings.srclang(srclang);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  return `<video${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(videoClass)
      }
    ],
    {}
  )}><source${add_attribute("src", src, 0)}${add_attribute("type", type, 0)}>${slots.default ? slots.default({}) : ``}<track${add_attribute("src", trackSrc, 0)} kind="captions"${add_attribute("srclang", srclang, 0)}${add_attribute("label", label, 0)}>
  Your browser does not support the video tag.</video> `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container w-full mx-auto mt-10"><div class="w-full flex flex-col lg:flex-row justify-center px-5 items-center gap-2">${validate_component(Video, "Video").$$render(
    $$result,
    {
      src: "/v1.mp4",
      controls: true,
      class: "rounded-xl order-2 lg:order-1 lg:w-1/2 space-y-4",
      trackSrc: "flowbite.mp4"
    },
    {},
    {}
  )} <div class="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col p-5 justify-center items-center"><h1 class="dark:text-amber-700 w-full text-xl text-center font-bold" data-svelte-h="svelte-12aal4d">Ecommerce Tres Hermanitos | Fullstack Developer</h1> <p class="dark:text-white w-full text-lg lg:text-xl" data-svelte-h="svelte-1br9zzo">This application is an ecommerce oriented to the sale of all types of sweets, The e-commerce
				platform employs a microservices and microfrontends architecture, leveraging leading
				technologies such as <span class="text-amber-700 font-semibold">Java, Spring, Spring Boot, Spring Cloud, Spring Security, Eureka, Spring Gateway, NestJs,
					JWT, OAuth2, OpenAPI, Cloudinary, React, TailwindCSS, Svelte, Nginx, GIT, and Docker.</span> The Docker container implementation ensures portability and efficiency in deployment.</p> <p class="dark:text-white w-full text-lg mb-4" data-svelte-h="svelte-maa7dx">You can see the home of the store</p> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      target: "_blank",
      href: "https://github.com/franBarrientos/BackJava-Ecoomerce-Microservices",
      outline: true
    },
    {},
    {
      default: () => {
        return `<span class="mr-2" data-svelte-h="svelte-16xe4i6">Source</span>${validate_component(GitHub, "GitHub").$$render($$result, {}, {}, {})}`;
      }
    }
  )}</div></div> <div class="w-full flex flex-col lg:flex-row justify-center px-5 items-center gap-2">${validate_component(Video, "Video").$$render(
    $$result,
    {
      src: "/v2.mp4",
      controls: true,
      class: "rounded-xl order-2 lg:order-2 lg:w-1/2 space-y-4",
      trackSrc: "flowbite.mp4"
    },
    {},
    {}
  )} <div class="w-full lg:w-1/2 order-1 lg:order-1 flex flex-col p-5 justify-center items-center" data-svelte-h="svelte-nrng51"><h1 class="dark:text-white w-full text-xl text-center font-bold">Login and Authentication</h1> <p class="dark:text-white w-full text-lg lg:text-xl">You dive into a login form that connects to our authentication microservice API or using
				OAuth2, making use of Google&#39;s API. Strong validation, encryption with algorithms, and a JWT
				token in the headers pave the way for role-based access control. Either as a client or
				administrator.</p> <p class="dark:text-white w-full text-lg">Below you can see the login of the store</p></div></div> <div class="w-full flex flex-col lg:flex-row justify-center px-5 items-center gap-2">${validate_component(Video, "Video").$$render(
    $$result,
    {
      src: "/v3.mp4",
      controls: true,
      class: "rounded-xl order-2 lg:order-1 lg:w-1/2 space-y-4",
      trackSrc: "flowbite.mp4"
    },
    {},
    {}
  )} <div class="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col p-5 justify-center items-center" data-svelte-h="svelte-qib297"><h1 class="dark:text-amber-700 w-full text-xl text-center font-bold">Integration with online payment gateway</h1> <p class="dark:text-white w-full text-lg lg:text-xl">Here you can see the integration with the Mercado Pago API, which is an online payment
				platform, and then you can see the purchase history of each client..</p> <p class="dark:text-white w-full text-lg">You can see the home of the store</p></div></div> <div class="w-full flex flex-col lg:flex-row justify-center px-5 items-center gap-2">${validate_component(Video, "Video").$$render(
    $$result,
    {
      src: "/v4.mp4",
      controls: true,
      class: "rounded-xl order-2 lg:order-2 lg:w-1/2 space-y-4",
      trackSrc: "flowbite.mp4"
    },
    {},
    {}
  )} <div class="w-full lg:w-1/2 order-1 lg:order-1 flex flex-col p-5 justify-center items-center"><h1 class="dark:text-white w-full text-xl text-center font-bold" data-svelte-h="svelte-1yqj2yy">Administration dashboard and Microfrontend (Svelte &amp; React)</h1> <p class="dark:text-white w-full text-lg lg:text-xl" data-svelte-h="svelte-qk7qq8">You can see the administration panel, in which administrators, with this role, have
				permission to edit each part of the system. This was built as a microfrontend since the
				beginning section was built with React and the section at the end (with purple hue) was
				built with svelte, and in turn these are containers that are orchestrated with docker, and
				managed by a gateway through a server NGINX.</p> <p class="dark:text-white w-full text-lg mb-5" data-svelte-h="svelte-gg10ck">You can see the administration dashboard</p> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "https://github.com/franBarrientos/BackJava-Ecoomerce-Microservices",
      outline: true
    },
    {},
    {
      default: () => {
        return `<span class="mr-2" data-svelte-h="svelte-16xe4i6">Source</span>${validate_component(GitHub, "GitHub").$$render($$result, {}, {}, {})}`;
      }
    }
  )}</div></div></div>`;
});
export {
  Page as default
};
