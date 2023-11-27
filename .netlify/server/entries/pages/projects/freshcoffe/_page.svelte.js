import { c as create_ssr_component, f as add_attribute, h as escape, g as getContext, i as subscribe, v as validate_component, k as each, a as compute_rest_props, b as spread, d as escape_object, e as escape_attribute_value, l as createEventDispatcher, s as setContext } from "../../../../chunks/ssr.js";
import { B as Button } from "../../../../chunks/Button.js";
import { w as writable } from "../../../../chunks/index.js";
import { twMerge } from "tailwind-merge";
import { I as Indicator } from "../../../../chunks/Indicator.js";
import { G as GitHub } from "../../../../chunks/gitHub.js";
const ControlButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { forward: forward2 } = $$props;
  let { name } = $$props;
  let buttonCls;
  if ($$props.forward === void 0 && $$bindings.forward && forward2 !== void 0)
    $$bindings.forward(forward2);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  buttonCls = twMerge("flex absolute top-0 z-30 justify-center items-center px-4 h-full group focus:outline-none text-white dark:text-gray-300", forward2 ? "right-0" : "left-0", $$props.class);
  return `<button type="button"${add_attribute("class", buttonCls, 0)}>${slots.default ? slots.default({}) : ` <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">${forward2 ? `<svg aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>` : `<svg aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>`} <span class="sr-only">${escape(name)}</span></span> `}</button> `;
});
const canChangeSlide = ({ lastSlideChange, slideDuration, slideDurationRatio = 1 }) => {
  if (lastSlideChange && (/* @__PURE__ */ new Date()).getTime() - lastSlideChange.getTime() < slideDuration * slideDurationRatio) {
    console.warn("Can't change slide yet, too soon");
    return false;
  }
  return true;
};
const Controls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  const state = getContext("state");
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  const { update } = state;
  function changeSlide(forward2) {
    if (!canChangeSlide({
      lastSlideChange: $state.lastSlideChange,
      slideDuration: $state.slideDuration,
      slideDurationRatio: 0.75
    })) {
      return;
    }
    if (forward2) {
      update((_state) => {
        _state.forward = true;
        _state.index = _state.index >= _state.images.length - 1 ? 0 : _state.index + 1;
        _state.lastSlideChange = /* @__PURE__ */ new Date();
        return { ..._state };
      });
    } else {
      update((_state) => {
        _state.forward = false;
        _state.index = _state.index <= 0 ? _state.images.length - 1 : _state.index - 1;
        _state.lastSlideChange = /* @__PURE__ */ new Date();
        return { ..._state };
      });
    }
  }
  $$unsubscribe_state();
  return ` ${slots.default ? slots.default({ ControlButton, changeSlide }) : ` ${validate_component(ControlButton, "ControlButton").$$render(
    $$result,
    {
      name: "Previous",
      forward: false,
      class: twMerge($$props.class)
    },
    {},
    {}
  )} ${validate_component(ControlButton, "ControlButton").$$render(
    $$result,
    {
      name: "Next",
      forward: true,
      class: twMerge($$props.class)
    },
    {},
    {}
  )} `}`;
});
const Indicators = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  let { activeClass = "opacity-100" } = $$props;
  let { inactiveClass = "opacity-60" } = $$props;
  const state = getContext("state");
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.inactiveClass === void 0 && $$bindings.inactiveClass && inactiveClass !== void 0)
    $$bindings.inactiveClass(inactiveClass);
  $$unsubscribe_state();
  return `<div${add_attribute("class", twMerge("flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2", $$props.class), 0)}>${each($state.images, (_, idx) => {
    let selected = $state.index === idx;
    return ` <button>${slots.default ? slots.default({ Indicator, selected, index: idx }) : ` ${validate_component(Indicator, "Indicator").$$render(
      $$result,
      {
        class: twMerge("bg-gray-100 hover:bg-gray-300", selected ? activeClass : inactiveClass)
      },
      {},
      {}
    )} `} </button>`;
  })}</div> `;
});
const Slide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let imgClass;
  let $$restProps = compute_rest_props($$props, ["image", "transition"]);
  let $state, $$unsubscribe_state;
  const state = getContext("state");
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  let { image } = $$props;
  let { transition = null } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  ({
    x: $state.forward ? "100%" : "-100%",
    opacity: 1,
    width: "100%",
    height: "100%",
    duration: $state.slideDuration
  });
  ({
    x: $state.forward ? "-100%" : "100%",
    opacity: 0.9,
    width: "100%",
    height: "100%",
    duration: $state.slideDuration
  });
  imgClass = twMerge("absolute block !w-full h-full object-cover", $$props.class);
  $$unsubscribe_state();
  return `${transition ? `<img${spread(
    [
      { alt: "..." },
      escape_object(image),
      escape_object($$restProps),
      { class: escape_attribute_value(imgClass) }
    ],
    {}
  )}>` : `<img${spread(
    [
      { alt: "..." },
      escape_object(image),
      escape_object($$restProps),
      { class: escape_attribute_value(imgClass) }
    ],
    {}
  )}>`} `;
});
let divClass = "grid overflow-hidden relative rounded-lg h-56 sm:h-64 xl:h-80 2xl:h-96";
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "images",
    "index",
    "slideDuration",
    "transition",
    "duration",
    "ariaLabel",
    "imgClass"
  ]);
  let { images } = $$props;
  let { index = 0 } = $$props;
  let { slideDuration = 1e3 } = $$props;
  let { transition } = $$props;
  let { duration = 0 } = $$props;
  let { ariaLabel = "Draggable Carousel" } = $$props;
  let { imgClass = "" } = $$props;
  const dispatch = createEventDispatcher();
  const { set, subscribe: subscribe2, update } = writable({
    images,
    index,
    forward: true,
    slideDuration,
    lastSlideChange: /* @__PURE__ */ new Date()
  });
  const state = {
    set: (_state) => set({
      index: _state.index,
      images: _state.images,
      lastSlideChange: /* @__PURE__ */ new Date(),
      slideDuration,
      forward: forward2
    }),
    subscribe: subscribe2,
    update
  };
  let forward2 = true;
  setContext("state", state);
  subscribe2((_state) => {
    index = _state.index;
    forward2 = _state.forward;
    dispatch("change", images[index]);
  });
  let prevIndex = index;
  let carouselDiv;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.slideDuration === void 0 && $$bindings.slideDuration && slideDuration !== void 0)
    $$bindings.slideDuration(slideDuration);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0)
    $$bindings.imgClass(imgClass);
  {
    {
      if (!prevIndex || prevIndex < index) {
        update((_state) => ({ ..._state, forward: true, index }));
      } else {
        update((_state) => ({ ..._state, forward: false, index }));
      }
      prevIndex = index;
    }
  }
  return ` ${$$result.head += `<!-- HEAD_svelte-h5oyes_START -->${images.length > 0 ? `${each(images, (image) => {
    return `<link rel="preload"${add_attribute("href", image.src, 0)} as="image">`;
  })}` : ``}<!-- HEAD_svelte-h5oyes_END -->`, ""}   <div class="relative" role="button"${add_attribute("aria-label", ariaLabel, 0)} tabindex="0"${add_attribute("this", carouselDiv, 0)}><div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(
          divClass,
          "transition-transform",
          $$props.class
        ))
      }
    ],
    {}
  )}>${slots.slide ? slots.slide({ Slide, index }) : ` ${validate_component(Slide, "Slide").$$render(
    $$result,
    {
      image: images[index],
      class: imgClass,
      transition
    },
    {},
    {}
  )} `}</div> ${slots.default ? slots.default({ index, Controls, Indicators }) : ``}</div> `;
});
const Thumbnail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["selected", "activeClass", "inactiveClass"]);
  let { selected = false } = $$props;
  let { activeClass = "opacity-100" } = $$props;
  let { inactiveClass = "opacity-60" } = $$props;
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.inactiveClass === void 0 && $$bindings.inactiveClass && inactiveClass !== void 0)
    $$bindings.inactiveClass(inactiveClass);
  return `<img${spread(
    [
      { alt: "..." },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(selected ? activeClass : inactiveClass, $$props.class))
      }
    ],
    {}
  )}> `;
});
const Thumbnails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images = [] } = $$props;
  let { index = 0 } = $$props;
  let { ariaLabel = "Click to view image" } = $$props;
  let { imgClass = "" } = $$props;
  let { throttleDelay = 650 } = $$props;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0)
    $$bindings.imgClass(imgClass);
  if ($$props.throttleDelay === void 0 && $$bindings.throttleDelay && throttleDelay !== void 0)
    $$bindings.throttleDelay(throttleDelay);
  index = (index + images.length) % images.length;
  return `<div${add_attribute("class", twMerge("flex flex-row justify-center bg-gray-100 w-full", $$props.class), 0)}>${each(images, (image, idx) => {
    let selected = index === idx;
    return `  <button${add_attribute("aria-label", ariaLabel, 0)}>${slots.default ? slots.default({ Thumbnail, image, selected, imgClass }) : ` ${validate_component(Thumbnail, "Thumbnail").$$render($$result, Object.assign({}, image, { selected }, { class: imgClass }), {}, {})} `} </button>`;
  })}</div> `;
});
let forward = true;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let index = 0;
  const images = [
    {
      alt: "Cosmic timetraveler",
      src: "/work21.PNG",
      title: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com"
    },
    {
      alt: "Cristina Gottardi",
      src: "/work22.png",
      title: "cristina-gottardi-CSpjU6hYo_0-unsplash.com"
    },
    {
      alt: "Cristina Gottardi",
      src: "/work23.png",
      title: "cristina-gottardi-CSpjU6hYo_0-unsplash.com"
    }
  ];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="container w-full mx-auto mt-10"><div class="w-full flex flex-col lg:flex-row justify-center px-5 items-center gap-2"><div class="max-w-4xl space-y-4">${validate_component(Carousel, "Carousel").$$render(
      $$result,
      { images, transition: null, forward, index },
      {
        index: ($$value) => {
          index = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ Indicators: Indicators2, Controls: Controls2 }) => {
          return `${validate_component(Controls2, "Controls").$$render($$result, {}, {}, {})} ${validate_component(Indicators2, "Indicators").$$render($$result, {}, {}, {})}`;
        }
      }
    )} ${validate_component(Thumbnails, "Thumbnails").$$render(
      $$result,
      { images, forward, index },
      {
        index: ($$value) => {
          index = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col p-5 justify-center items-center"><h1 class="dark:text-amber-700 w-full text-xl text-center font-bold" data-svelte-h="svelte-19m5f9o">Kiosko Fresh Coffe | Fullstack Developer</h1> <p class="dark:text-white w-full text-lg lg:text-xl" data-svelte-h="svelte-dv0vii">This application is a coffee shop, where customers can register, order, and then receive that order. Through an administration panel, these products can be shipped, the kiosk employs a client/server architecture. The
				Client is built with <span class="text-amber-700 font-semibold">React, TailwindCSS and the Backend with Typescript, NodeJS, MySql</span>, Have authentication with JWT and login with Google</p> <div class="flex justify-center gap-5 mt-5">${validate_component(Button, "Button").$$render(
      $$result,
      {
        target: "_blank",
        href: "https://github.com/franBarrientos/FreshKioskoFront",
        outline: true
      },
      {},
      {
        default: () => {
          return `<span class="mr-2" data-svelte-h="svelte-z9ldnd">Client Source </span>${validate_component(GitHub, "GitHub").$$render($$result, {}, {}, {})}`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        target: "_blank",
        href: "https://github.com/franBarrientos/FreshKioskoBackend",
        outline: true
      },
      {},
      {
        default: () => {
          return `<span class="mr-2" data-svelte-h="svelte-18r584p">Back Source </span>${validate_component(GitHub, "GitHub").$$render($$result, {}, {}, {})}`;
        }
      }
    )}</div></div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
