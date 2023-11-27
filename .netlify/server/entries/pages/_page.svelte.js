import { c as create_ssr_component, f as add_attribute, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object, h as escape, v as validate_component, j as compute_slots, g as getContext } from "../../chunks/ssr.js";
import { B as Button } from "../../chunks/Button.js";
import { i as is_void } from "../../chunks/names.js";
import { twMerge } from "tailwind-merge";
import { I as Indicator } from "../../chunks/Indicator.js";
const Placeholder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { size = "md" } = $$props;
  const sizes = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-20 h-20",
    xl: "w-36 h-36"
  };
  const borderedSizes = {
    xs: "w-4 h-4",
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-16 h-16",
    xl: "w-32 h-32"
  };
  let svgClass = twMerge("text-gray-400 bg-gray-100 dark:bg-gray-600", rounded ? "rounded" : "rounded-full", border ? borderedSizes[size] : sizes[size], $$props.class);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<svg${add_attribute("class", svgClass, 0)} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg> `;
});
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["src", "href", "rounded", "border", "stacked", "dot", "alt", "size"]);
  let $$slots = compute_slots(slots);
  let { src = "" } = $$props;
  let { href = void 0 } = $$props;
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { stacked = false } = $$props;
  let { dot = void 0 } = $$props;
  let { alt = "" } = $$props;
  let { size = "md" } = $$props;
  const sizes = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-20 h-20",
    xl: "w-36 h-36"
  };
  let avatarClass;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.stacked === void 0 && $$bindings.stacked && stacked !== void 0)
    $$bindings.stacked(stacked);
  if ($$props.dot === void 0 && $$bindings.dot && dot !== void 0)
    $$bindings.dot(dot);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  dot = dot && {
    placement: "top-right",
    color: "gray",
    size: "lg",
    ...dot
  };
  avatarClass = twMerge(rounded ? "rounded" : "rounded-full", border && "p-1 ring-2 ring-gray-300 dark:ring-gray-500", sizes[size], stacked && "border-2 -ml-4 border-white dark:border-gray-800", "bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300", $$props.class);
  return `${!src || !!href || $$slots.default || dot ? `${((tag) => {
    return tag ? `<${href ? "a" : "div"}${spread(
      [
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        {
          class: "relative flex justify-center items-center " + escape(avatarClass, true)
        }
      ],
      {}
    )}>${is_void(tag) ? "" : `${src ? `<img${add_attribute("alt", alt, 0)}${add_attribute("src", src, 0)}${add_attribute("class", rounded ? "rounded" : "rounded-full", 0)}>` : `${slots.default ? slots.default({}) : `${validate_component(Placeholder, "AvatarPlaceholder").$$render(
      $$result,
      {
        rounded,
        size,
        border,
        class: twMerge($$props.classPlaceholder)
      },
      {},
      {}
    )}`}`} ${dot ? `${validate_component(Indicator, "Indicator").$$render($$result, Object.assign({}, { border: true }, { offset: rounded }, dot), {}, {})}` : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "div")}` : `<img${spread(
    [
      { alt: escape_attribute_value(alt) },
      { src: escape_attribute_value(src) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(avatarClass)
      }
    ],
    {}
  )}>`} `;
});
const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "show", "use"]);
  let { tag = "div" } = $$props;
  let { show } = $$props;
  let { use = () => {
  } } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  return `${show ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps)], {})}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : `${slots.default ? slots.default({}) : ``}`} `;
});
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelClass;
  let $$restProps = compute_rest_props($$props, ["color", "defaultClass", "show"]);
  let { color = "gray" } = $$props;
  let { defaultClass = "text-sm font-medium block" } = $$props;
  let { show = true } = $$props;
  let node;
  const colorClasses = {
    gray: "text-gray-900 dark:text-gray-300",
    green: "text-green-700 dark:text-green-500",
    red: "text-red-700 dark:text-red-500",
    disabled: "text-gray-400 dark:text-gray-500"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  {
    {
      color = color;
    }
  }
  labelClass = twMerge(defaultClass, colorClasses[color], $$props.class);
  return `${show ? ` <label${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(labelClass)
      }
    ],
    {}
  )}${add_attribute("this", node, 0)}>${slots.default ? slots.default({}) : ``}</label>` : `${slots.default ? slots.default({}) : ``}`} `;
});
function clampSize(s) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let $$restProps = compute_rest_props($$props, ["type", "value", "size", "defaultClass", "color", "floatClass"]);
  let $$slots = compute_slots(slots);
  let { type = "text" } = $$props;
  let { value = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { defaultClass = "block w-full disabled:cursor-not-allowed disabled:opacity-50" } = $$props;
  let { color = "base" } = $$props;
  let { floatClass = "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400" } = $$props;
  const borderClasses = {
    base: "border-gray-300 dark:border-gray-600",
    tinted: "border-gray-300 dark:border-gray-500",
    green: "border-green-500 dark:border-green-400",
    red: "border-red-500 dark:border-red-400"
  };
  const ringClasses = {
    base: "focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500",
    green: "focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500",
    red: "focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
  };
  const colorClasses = {
    base: "bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
    tinted: "bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400",
    green: "bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700",
    red: "bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700"
  };
  let background = getContext("background");
  let group = getContext("group");
  const textSizes = {
    sm: "sm:text-xs",
    md: "text-sm",
    lg: "sm:text-base"
  };
  const leftPadding = { sm: "pl-9", md: "pl-10", lg: "pl-11" };
  const rightPadding = { sm: "pr-9", md: "pr-10", lg: "pr-11" };
  const inputPadding = { sm: "p-2", md: "p-2.5", lg: "p-3" };
  let inputClass;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.floatClass === void 0 && $$bindings.floatClass && floatClass !== void 0)
    $$bindings.floatClass(floatClass);
  _size = size || clampSize(group?.size) || "md";
  {
    {
      const _color = color === "base" && background ? "tinted" : color;
      inputClass = twMerge([
        defaultClass,
        $$slots.left && leftPadding[_size] || $$slots.right && rightPadding[_size] || inputPadding[_size],
        ringClasses[color],
        colorClasses[_color],
        borderClasses[_color],
        textSizes[_size],
        group || "rounded-lg",
        group && "first:rounded-l-lg last:rounded-r-lg",
        group && "border-l-0 first:border-l last:border-r",
        $$props.class
      ]);
    }
  }
  return `${validate_component(Wrapper, "Wrapper").$$render(
    $$result,
    {
      class: "relative w-full",
      show: $$slots.left || $$slots.right
    },
    {},
    {
      default: () => {
        return `${$$slots.left ? `<div class="${escape(twMerge(floatClass, $$props.classLeft), true) + " left-0 pl-2.5 pointer-events-none"}">${slots.left ? slots.left({}) : ``}</div>` : ``} ${slots.default ? slots.default({
          props: { ...$$restProps, class: inputClass }
        }) : ` <input${spread(
          [
            escape_object($$restProps),
            escape_object({ type }),
            {
              class: escape_attribute_value(inputClass)
            }
          ],
          {}
        )}${add_attribute("value", value, 0)}> `} ${$$slots.right ? `<div class="${escape(twMerge(floatClass, $$props.classRight), true) + " right-0 pr-2.5"}">${slots.right ? slots.right({}) : ``}</div>` : ``}`;
      }
    }
  )} `;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { avatarImg } = $$props;
  let { principalText } = $$props;
  let { secondaryText } = $$props;
  if ($$props.avatarImg === void 0 && $$bindings.avatarImg && avatarImg !== void 0)
    $$bindings.avatarImg(avatarImg);
  if ($$props.principalText === void 0 && $$bindings.principalText && principalText !== void 0)
    $$bindings.principalText(principalText);
  if ($$props.secondaryText === void 0 && $$bindings.secondaryText && secondaryText !== void 0)
    $$bindings.secondaryText(secondaryText);
  return `<div class="bg-white rounded-lg p-2 w-full border dark:border-none dark:bg-gray-900 h-20 lg:h-16 flex items-center justify-around ">${validate_component(Avatar, "Avatar").$$render($$result, { src: avatarImg, alt: principalText }, {}, {})} <div class="flex-1 mt-4 ml-3 flex flex-col justify-center items-center"><p class="text-md lg:text-lg font-light lg:font-medium text-gray-900 dark:text-white dark:hover:text-blue-500 hover:text-blue-500">${escape(principalText)}</p> <p class="text-sm lg:text-base mb-2 text-gray-500 truncate dark:text-gray-400 ">${escape(secondaryText)}</p></div></div>`;
});
const Envelope = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = "w-6" } = $$props;
  let { heigth = "h-6" } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.heigth === void 0 && $$bindings.heigth && heigth !== void 0)
    $$bindings.heigth(heigth);
  return `<svg${add_attribute("class", `${width} ${heigth} text-gray-800 dark:text-white`, 0)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"></path></svg>`;
});
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "name", class: "block mb-2" }, {}, {
    default: () => {
      return `Name`;
    }
  })} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      required: true,
      id: "name",
      placeholder: "Your Name"
    },
    {},
    {}
  )}</div> <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "email", class: "block mb-2" }, {}, {
    default: () => {
      return `Your Email`;
    }
  })} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      required: true,
      id: "email",
      type: "email",
      placeholder: "name@flowbite.com"
    },
    {},
    {
      left: () => {
        return `${validate_component(Envelope, "Envelope").$$render(
          $$result,
          {
            slot: "left",
            width: "w-5",
            heigth: "h-5"
          },
          {},
          {}
        )}`;
      }
    }
  )}</div> <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "email", class: "block mb-2" }, {}, {
    default: () => {
      return `Your Message`;
    }
  })} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      required: true,
      id: "email",
      type: "text",
      placeholder: "Hi Fran !!"
    },
    {},
    {}
  )}</div>`;
});
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { avatarImg } = $$props;
  let { principalText } = $$props;
  let { secondaryText } = $$props;
  let { thirdText } = $$props;
  if ($$props.avatarImg === void 0 && $$bindings.avatarImg && avatarImg !== void 0)
    $$bindings.avatarImg(avatarImg);
  if ($$props.principalText === void 0 && $$bindings.principalText && principalText !== void 0)
    $$bindings.principalText(principalText);
  if ($$props.secondaryText === void 0 && $$bindings.secondaryText && secondaryText !== void 0)
    $$bindings.secondaryText(secondaryText);
  if ($$props.thirdText === void 0 && $$bindings.thirdText && thirdText !== void 0)
    $$bindings.thirdText(thirdText);
  return `<div class="bg-white rounded-lg p-2 w-full border dark:border-none dark:bg-gray-900 h-28 lg:h-24 flex items-center justify-around "><img class="h-20 rounded-sm"${add_attribute("src", avatarImg, 0)}${add_attribute("alt", principalText, 0)}> <div class="flex-1 mt-4 ml-3 w-12 break-words flex flex-col justify-center items-center "><p class="text-md lg:text-lg font-light lg:font-medium text-gray-900 dark:text-white dark:hover:text-blue-500 hover:text-blue-500">${escape(principalText)}</p> <p class="text-center text-sm lg:text-base mb-2 w-full text-gray-500 truncate dark:text-gray-400">${escape(thirdText)}</p> <p class="text-center text-sm lg:text-base mb-2 w-full text-gray-500 truncate dark:text-gray-400 ">${escape(secondaryText)}</p></div></div>`;
});
const Download = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg class="w-6 h-6 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 19"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15h.01M4 12H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3M9.5 1v10.93m4-3.93-4 4-4-4"></path></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container mx-auto p-2 flex flex-col justify-center items-center"><div class="flex flex-col lg:flex-row justify-around w-full gap-2 my-5"><div class="bg-white rounded-lg px-2 w-full flex justify-around items-center dark:text-white dark:bg-gray-900 h-14 mt-7"><div class="flex gap-2 items-center justify-center" data-svelte-h="svelte-1ofn9hh"><img src="myFace.jpg" class="h-20 rounded-full" alt="my face"> <div class="flex flex-col"><span class="text-xl font-bold">Franco Barrientos</span> <span class="text-xl font-light">Backend Developer</span></div></div> <div class="cursor-pointer hover:text-blue-500 flex items-center gap-2"><span class="text-lg mt-1" data-svelte-h="svelte-4vnbho">CV</span>${validate_component(Download, "Download").$$render($$result, {}, {}, {})}</div></div> <div class="w-full flex mt-4 lg:mt-0 flex-col justify-center items-center"><h1 class="dark:text-white text-xl font-bold" data-svelte-h="svelte-1ahurqb">Education</h1> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      avatarImg: "unne.png",
      principalText: "UNNE | Information Systems Bachelor Degree",
      secondaryText: "2022 - 2026 (expected)"
    },
    {},
    {}
  )} <a href="java.pdf" class="cursor-pointer w-full mt-5 hover:text-blue-500" download>${validate_component(Card, "Card").$$render(
    $$result,
    {
      avatarImg: "folcode.jpg",
      principalText: "Folcademy | Java Backend Developer",
      secondaryText: "2023 "
    },
    {},
    {}
  )}</a></div></div> <div class="w-full flex flex-col lg:flex-row gap-4"><div class="w-full flex mt-4 order-2 lg:order-1 lg:-mt-20 flex-col justify-start items-center"><h1 class="dark:text-white text-xl font-bold" data-svelte-h="svelte-jbhl7t">Featured Projects &amp; Experience</h1> <a href="/projects/treshermanitos" class="cursor-pointer w-full mt-5 hover:text-blue-500">${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      avatarImg: "work1.png",
      principalText: "Ecommerce Tres Hermanitos | Frelancer",
      thirdText: "Ecommerce based on Microservices and Microfrontends",
      secondaryText: "Java, Spring Boot, Spring Cloud, Docker, React, NestJS, Cloud and more "
    },
    {},
    {}
  )}</a> <a href="/projects/freshcoffe" class="cursor-pointer w-full mt-5 hover:text-blue-500">${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      avatarImg: "work22.png",
      principalText: "Fresh Kiosko | Frelancer",
      thirdText: " Coffee shop, where customers can register, order, and then receive that order",
      secondaryText: "React, TailwindCSS and the Backend with Typescript, NodeJS, MySql and more "
    },
    {},
    {}
  )}</a></div> <div class="w-full flex mt-4 order-1 lg:order-2 lg:mt-0 flex-col justify-center items-center"><h1 class="dark:text-white text-xl p-0 m-0 font-bold " data-svelte-h="svelte-qpccxz">Certifications</h1> <a href="https://www.udemy.com/certificate/UC-31083050-6269-496c-9af6-815de808386a/" target="_blank" class="cursor-pointer w-full mt-5 hover:text-blue-500">${validate_component(Card, "Card").$$render(
    $$result,
    {
      avatarImg: "udemy.png",
      principalText: "Microservices | APIs Rest with Spring Boot | Docker",
      secondaryText: "2023 "
    },
    {},
    {}
  )}</a> <a href="https://www.udemy.com/certificate/UC-b5af4abc-d335-413a-9c15-4973c1474234/" target="_blank" class="cursor-pointer w-full mt-5 hover:text-blue-500" download>${validate_component(Card, "Card").$$render(
    $$result,
    {
      avatarImg: "udemy.png",
      principalText: "Node Expert",
      secondaryText: "2023 "
    },
    {},
    {}
  )}</a> <a href="https://www.udemy.com/certificate/UC-c3ec55c4-9ab9-4582-9c24-b9203dd65d99/" target="_blank" class="cursor-pointer w-full mt-5 hover:text-blue-500" download>${validate_component(Card, "Card").$$render(
    $$result,
    {
      avatarImg: "udemy.png",
      principalText: "Design Patterns in Typescript and Javascript",
      secondaryText: "2023 "
    },
    {},
    {}
  )}</a> <a href="https://www.udemy.com/certificate/UC-892d0d8c-52aa-4704-adbb-194914670bb1/" target="_blank" class="cursor-pointer w-full mt-5 hover:text-blue-500" download>${validate_component(Card, "Card").$$render(
    $$result,
    {
      avatarImg: "udemy.png",
      principalText: "Laravel 9 - Buil Apps with Laravel and PHP | MVC",
      secondaryText: "2023 "
    },
    {},
    {}
  )}</a> <a href="https://www.udemy.com/certificate/UC-bb2bdbbf-f2a2-458e-95d6-9293ac9fbcae/" target="_blank" class="cursor-pointer w-full mt-5 hover:text-blue-500" download>${validate_component(Card, "Card").$$render(
    $$result,
    {
      avatarImg: "udemy.png",
      principalText: "Web Delopment with HTML, CSS3, JS, PHP, MYSQL",
      secondaryText: "2023 "
    },
    {},
    {}
  )}</a></div></div> <div class="w-full flex mt-4 order-1 lg:order-2 lg:mt-0 flex-col lg:flex-row justify-center items-center"><div class="lg:w-1/2 w-full px-5 flex flex-col mt-4 order-2 lg:order-1 lg:-mt-64"><h1 class="dark:text-white text-xl font-bold text-center" data-svelte-h="svelte-l9a832">Contact</h1> <form class="mt-4 flex flex-col" data-netlify="true" name="contact" method="POST">${validate_component(Form, "Form").$$render($$result, {}, {}, {})} ${validate_component(Button, "Button").$$render($$result, { type: "submit", size: "sm" }, {}, {
    default: () => {
      return `${validate_component(Envelope, "Envelope").$$render($$result, { width: "w-3", heigth: "h-3" }, {}, {})}<span class="ml-2" data-svelte-h="svelte-s6rgux">Send Email</span>`;
    }
  })}</form></div> <div class="lg:w-1/2 lg:order-1"></div></div> </div>`;
});
export {
  Page as default
};
