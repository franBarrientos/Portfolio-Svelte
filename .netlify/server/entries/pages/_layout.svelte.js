import { c as create_ssr_component, a as compute_rest_props, s as setContext, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, g as getContext, h as escape, i as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { twMerge } from "tailwind-merge";
import { i as is_void } from "../../chunks/names.js";
import { w as writable } from "../../chunks/index.js";
import { G as GitHub } from "../../chunks/gitHub.js";
import { p as page } from "../../chunks/stores.js";
const app = "";
const Frame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "color", "rounded", "border", "shadow", "node", "use", "options", "role"]);
  const noop = () => {
  };
  setContext("background", true);
  let { tag = $$restProps.href ? "a" : "div" } = $$props;
  let { color = "default" } = $$props;
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { shadow = false } = $$props;
  let { node = void 0 } = $$props;
  let { use = noop } = $$props;
  let { options = {} } = $$props;
  let { role = void 0 } = $$props;
  const bgColors = {
    gray: "bg-gray-50 dark:bg-gray-800",
    red: "bg-red-50 dark:bg-gray-800",
    yellow: "bg-yellow-50 dark:bg-gray-800 ",
    green: "bg-green-50 dark:bg-gray-800 ",
    indigo: "bg-indigo-50 dark:bg-gray-800 ",
    purple: "bg-purple-50 dark:bg-gray-800 ",
    pink: "bg-pink-50 dark:bg-gray-800 ",
    blue: "bg-blue-50 dark:bg-gray-800 ",
    light: "bg-gray-50 dark:bg-gray-700",
    dark: "bg-gray-50 dark:bg-gray-800",
    default: "bg-white dark:bg-gray-800",
    dropdown: "bg-white dark:bg-gray-700",
    navbar: "bg-white dark:bg-gray-900",
    navbarUl: "bg-gray-50 dark:bg-gray-800",
    form: "bg-gray-50 dark:bg-gray-700",
    primary: "bg-primary-50 dark:bg-gray-800 ",
    orange: "bg-orange-50 dark:bg-orange-800",
    none: ""
  };
  const textColors = {
    gray: "text-gray-800 dark:text-gray-300",
    red: "text-red-800 dark:text-red-400",
    yellow: "text-yellow-800 dark:text-yellow-300",
    green: "text-green-800 dark:text-green-400",
    indigo: "text-indigo-800 dark:text-indigo-400",
    purple: "text-purple-800 dark:text-purple-400",
    pink: "text-pink-800 dark:text-pink-400",
    blue: "text-blue-800 dark:text-blue-400",
    light: "text-gray-700 dark:text-gray-300",
    dark: "text-gray-700 dark:text-gray-300",
    default: "text-gray-500 dark:text-gray-400",
    dropdown: "text-gray-700 dark:text-gray-200",
    navbar: "text-gray-700 dark:text-gray-200",
    navbarUl: "text-gray-700 dark:text-gray-400",
    form: "text-gray-900 dark:text-white",
    primary: "text-primary-800 dark:text-primary-400",
    orange: "text-orange-800 dark:text-orange-400",
    none: ""
  };
  const borderColors = {
    gray: "border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800",
    red: "border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800",
    yellow: "border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800",
    green: "border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800",
    indigo: "border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800",
    purple: "border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800",
    pink: "border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800",
    blue: "border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800",
    light: "border-gray-500 divide-gray-500",
    dark: "border-gray-500 divide-gray-500",
    default: "border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700",
    dropdown: "border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600",
    navbar: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    navbarUl: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    form: "border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700",
    primary: "border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ",
    orange: "border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800",
    none: ""
  };
  let divClass;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  color = color ?? "default";
  {
    setContext("color", color);
  }
  divClass = twMerge(bgColors[color], textColors[color], rounded && "rounded-lg", border && "border", borderColors[color], shadow && "shadow-md", $$props.class);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        { role: escape_attribute_value(role) },
        escape_object($$restProps),
        { class: escape_attribute_value(divClass) }
      ],
      {}
    )}${add_attribute("this", node, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)} `;
});
function quintOut(t) {
  return --t * t * t * t * t + 1;
}
const ToolbarButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "name", "ariaLabel", "size", "href"]);
  const background = getContext("background");
  let { color = "default" } = $$props;
  let { name = void 0 } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { size = "md" } = $$props;
  let { href = void 0 } = $$props;
  const colors = {
    dark: "text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
    gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",
    red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",
    yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",
    green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",
    indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",
    purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",
    pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",
    blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",
    primary: "text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",
    default: "focus:ring-gray-400"
  };
  const sizing = {
    xs: "m-0.5 rounded-sm focus:ring-1 p-0.5",
    sm: "m-0.5 rounded focus:ring-1 p-0.5",
    md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
    lg: "m-0.5 rounded-lg focus:ring-2 p-2.5"
  };
  let buttonClass;
  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5",
    lg: "w-5 h-5"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  buttonClass = twMerge(
    "focus:outline-none whitespace-normal",
    sizing[size],
    colors[color],
    color === "default" && (background ? "hover:bg-gray-100 dark:hover:bg-gray-600" : "hover:bg-gray-100 dark:hover:bg-gray-700"),
    $$props.class
  );
  return `${href ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="sr-only">${escape(name)}</span>` : ``} ${slots.default ? slots.default({ svgSize: svgSizes[size] }) : ``}</a>` : `<button${spread(
    [
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="sr-only">${escape(name)}</span>` : ``} ${slots.default ? slots.default({ svgSize: svgSizes[size] }) : ``}</button>`} `;
});
const DarkMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["btnClass", "size", "ariaLabel"]);
  let { btnClass: btnClass2 = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5" } = $$props;
  let { size = "md" } = $$props;
  let { ariaLabel = "Dark mode" } = $$props;
  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass2 !== void 0)
    $$bindings.btnClass(btnClass2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `${$$result.head += `<!-- HEAD_svelte-1pa505f_START --><script data-svelte-h="svelte-mp99qu">if ('color-theme' in localStorage) {
      // explicit preference - overrides author's choice
      localStorage.getItem('color-theme') === 'dark' ? window.document.documentElement.classList.add('dark') : window.document.documentElement.classList.remove('dark');
    } else {
      // browser preference - does not overrides
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) window.document.documentElement.classList.add('dark');
    }<\/script><!-- HEAD_svelte-1pa505f_END -->`, ""} <button${spread(
    [
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(btnClass2, $$props.class))
      }
    ],
    {}
  )}><span class="hidden dark:block">${slots.lightIcon ? slots.lightIcon({}) : ` <svg${add_attribute("class", sizes[size], 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
  0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg> `}</span> <span class="block dark:hidden">${slots.darkIcon ? slots.darkIcon({}) : ` <svg${add_attribute("class", sizes[size], 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg> `}</span></button> `;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["footerType"]);
  let { footerType = void 0 } = $$props;
  let footerClass = twMerge(footerType === "sitemap" && "bg-gray-800", footerType === "socialmedia" && "p-4 bg-white sm:p-6 dark:bg-gray-800", footerType === "logo" && "p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800", footerType === "default" && "p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800", $$props.class);
  if ($$props.footerType === void 0 && $$bindings.footerType && footerType !== void 0)
    $$bindings.footerType(footerType);
  return `<footer${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(footerClass)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</footer> `;
});
const FooterBrand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["aClass", "spanClass", "imgClass", "href", "src", "alt", "name", "target"]);
  let { aClass = "flex items-center" } = $$props;
  let { spanClass = "self-center text-2xl font-semibold whitespace-nowrap dark:text-white" } = $$props;
  let { imgClass = "mr-3 h-8" } = $$props;
  let { href = "" } = $$props;
  let { src = "" } = $$props;
  let { alt = "" } = $$props;
  let { name = "" } = $$props;
  let { target = void 0 } = $$props;
  let aCls = twMerge(aClass, $$props.classA);
  let spanCls = twMerge(spanClass, $$props.classSpan);
  let imgCls = twMerge(imgClass, $$props.classImg);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0)
    $$bindings.spanClass(spanClass);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0)
    $$bindings.imgClass(imgClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `${href ? `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { target: escape_attribute_value(target) },
      { class: escape_attribute_value(aCls) }
    ],
    {}
  )}><img${add_attribute("src", src, 0)}${add_attribute("class", imgCls, 0)}${add_attribute("alt", alt, 0)}> <span${add_attribute("class", spanCls, 0)}>${escape(name)}</span> ${slots.default ? slots.default({}) : ``}</a>` : `<img${spread(
    [
      escape_object($$restProps),
      { src: escape_attribute_value(src) },
      { class: escape_attribute_value(imgCls) },
      { alt: escape_attribute_value(alt) }
    ],
    {}
  )}>`} `;
});
const FooterCopyright = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["spanClass", "aClass", "year", "href", "by", "target", "copyrightMessage"]);
  let { spanClass = "block text-sm text-gray-500 sm:text-center dark:text-gray-400" } = $$props;
  let { aClass = "hover:underline" } = $$props;
  let { year = (/* @__PURE__ */ new Date()).getFullYear() } = $$props;
  let { href = "" } = $$props;
  let { by = "" } = $$props;
  let { target = void 0 } = $$props;
  let { copyrightMessage = "All Rights Reserved." } = $$props;
  let spanCls = twMerge(spanClass, $$props.classSpan);
  let aCls = twMerge(aClass, $$props.classA);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0)
    $$bindings.spanClass(spanClass);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.by === void 0 && $$bindings.by && by !== void 0)
    $$bindings.by(by);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.copyrightMessage === void 0 && $$bindings.copyrightMessage && copyrightMessage !== void 0)
    $$bindings.copyrightMessage(copyrightMessage);
  return `<span${add_attribute("class", spanCls, 0)}>© ${escape(year)} ${href ? `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { target: escape_attribute_value(target) },
      { class: escape_attribute_value(aCls) }
    ],
    {}
  )}>${escape(by)}</a>` : `<span class="ml-1">${escape(by)}</span>`} ${escape(copyrightMessage)}</span> `;
});
const FooterLinkGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ulClass = "text-gray-600 dark:text-gray-400" } = $$props;
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  return `<ul${add_attribute("class", twMerge(ulClass, $$props.class), 0)}>${slots.default ? slots.default({}) : ``}</ul> `;
});
const NavContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fluid = false } = $$props;
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0)
    $$bindings.fluid(fluid);
  return `<div${add_attribute("class", twMerge("mx-auto flex flex-wrap justify-between items-center ", fluid ? "w-full" : "container", $$props.class), 0)}>${slots.default ? slots.default({}) : ``}</div> `;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["fluid"]);
  let $hidden, $$unsubscribe_hidden;
  let { fluid = false } = $$props;
  let hidden = writable(true);
  $$unsubscribe_hidden = subscribe(hidden, (value) => $hidden = value);
  setContext("navHidden", hidden);
  let toggle = () => hidden.update((hidden2) => !hidden2);
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0)
    $$bindings.fluid(fluid);
  {
    {
      $$restProps.color = $$restProps.color ?? "navbar";
    }
  }
  $$unsubscribe_hidden();
  return `${validate_component(Frame, "Frame").$$render(
    $$result,
    Object.assign({}, { tag: "nav" }, $$restProps, {
      class: twMerge("px-2 sm:px-4 py-2.5 w-full", $$props.class)
    }),
    {},
    {
      default: () => {
        return `${validate_component(NavContainer, "NavContainer").$$render($$result, { fluid }, {}, {
          default: () => {
            return `${slots.default ? slots.default({ hidden: $hidden, toggle, NavContainer }) : ``}`;
          }
        })}`;
      }
    }
  )} `;
});
const NavBrand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href"]);
  let { href = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("flex items-center", $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a> `;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let { ariaLabel = "bars 3" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> `;
  let svgsolid = `<path fill="${color}" clip-rule="evenodd" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path> `;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 24 24";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { role: "button" },
      { tabindex: "0" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg> `;
});
let btnClass = "ml-3 md:hidden";
const NavHamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["menuClass", "onClick"]);
  let { menuClass = "h-6 w-6 shrink-0" } = $$props;
  let { onClick = void 0 } = $$props;
  getContext("navHidden") ?? writable(true);
  if ($$props.menuClass === void 0 && $$bindings.menuClass && menuClass !== void 0)
    $$bindings.menuClass(menuClass);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, Object.assign({}, { name: "Open main menu" }, $$restProps, { class: twMerge(btnClass, $$props.class) }), {}, {
    default: () => {
      return `${validate_component(Menu, "Menu").$$render(
        $$result,
        {
          class: twMerge(menuClass, $$props.classMenu)
        },
        {},
        {}
      )}`;
    }
  })} `;
});
const NavLi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let liClass;
  let $$restProps = compute_rest_props($$props, ["href", "activeClass", "nonActiveClass"]);
  let { href = "" } = $$props;
  let { activeClass = void 0 } = $$props;
  let { nonActiveClass = void 0 } = $$props;
  const context = getContext("navbarContext") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let navUrl = "";
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0)
    $$bindings.nonActiveClass(nonActiveClass);
  active = navUrl ? href === navUrl : false;
  liClass = twMerge(
    "block py-2 pr-4 pl-3 md:p-0 rounded md:border-0",
    active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass,
    $$props.class
  );
  return `<li>${((tag) => {
    return tag ? `<${href ? "a" : "div"}${spread(
      [
        {
          role: escape_attribute_value(href ? void 0 : "link")
        },
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        { class: escape_attribute_value(liClass) }
      ],
      {}
    )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "div")}</li> `;
});
const NavUl = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "activeUrl",
    "divClass",
    "ulClass",
    "hidden",
    "slideParams",
    "activeClass",
    "nonActiveClass"
  ]);
  let $hiddenStore, $$unsubscribe_hiddenStore;
  const activeUrlStore = writable("");
  let { activeUrl = "" } = $$props;
  let { divClass = "w-full md:block md:w-auto" } = $$props;
  let { ulClass = "flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium" } = $$props;
  let { hidden = void 0 } = $$props;
  let { slideParams = {
    delay: 250,
    duration: 500,
    easing: quintOut
  } } = $$props;
  let { activeClass = "text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent" } = $$props;
  let { nonActiveClass = "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" } = $$props;
  setContext("navbarContext", { activeClass, nonActiveClass });
  setContext("activeUrl", activeUrlStore);
  let hiddenStore = getContext("navHidden");
  $$unsubscribe_hiddenStore = subscribe(hiddenStore, (value) => $hiddenStore = value);
  let _hidden;
  let _divClass;
  let _ulClass;
  if ($$props.activeUrl === void 0 && $$bindings.activeUrl && activeUrl !== void 0)
    $$bindings.activeUrl(activeUrl);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.slideParams === void 0 && $$bindings.slideParams && slideParams !== void 0)
    $$bindings.slideParams(slideParams);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0)
    $$bindings.nonActiveClass(nonActiveClass);
  {
    {
      activeUrlStore.set(activeUrl);
    }
  }
  _hidden = hidden ?? $hiddenStore ?? true;
  _divClass = twMerge(divClass, $$props.class);
  _ulClass = twMerge(
    ulClass,
    // 'divide-y md:divide-y-0 divide-gray-100 dark:divide-gray-700',
    $$props.classUl
  );
  $$unsubscribe_hiddenStore();
  return `${!_hidden ? `<div${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(_divClass) },
      { role: "button" },
      { tabindex: "0" }
    ],
    {}
  )}>${validate_component(Frame, "Frame").$$render(
    $$result,
    {
      tag: "ul",
      border: true,
      rounded: true,
      color: "navbarUl",
      class: _ulClass
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}</div>` : `<div${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(_divClass) },
      { hidden: _hidden || null }
    ],
    {}
  )}><ul${add_attribute("class", _ulClass, 0)}>${slots.default ? slots.default({}) : ``}</ul></div>`} `;
});
const Linkedin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = "w-6" } = $$props;
  let { heigth = "h-6" } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.heigth === void 0 && $$bindings.heigth && heigth !== void 0)
    $$bindings.heigth(heigth);
  return `<svg${add_attribute("class", `${width} ${heigth} text-gray-800 dark:text-white`, 0)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"></path><path d="M3 5.012H0V15h3V5.012Z"></path></svg> `;
});
const Instagram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = 6 } = $$props;
  let { heigth = 6 } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.heigth === void 0 && $$bindings.heigth && heigth !== void 0)
    $$bindings.heigth(heigth);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", width, 0)}${add_attribute("height", heigth, 0)} fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path></svg>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<main class="bg-white dark:bg-gray-950 min-h-screen flex justify-between flex-col">${validate_component(Navbar, "Navbar").$$render($$result, { class: "bg-[#f1f9f5] p-4", rounded: true }, {}, {
    default: () => {
      return `${validate_component(NavBrand, "NavBrand").$$render($$result, { href: "/" }, {}, {
        default: () => {
          return `<img${add_attribute("src", "/F2.png", 0)} class="mr-3 h-12 w-12 sm:h-9" alt="Flowbite Logo"> <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white" data-svelte-h="svelte-afae1v">Fran Barrientos</span>`;
        }
      })} ${validate_component(NavHamburger, "NavHamburger").$$render($$result, {}, {}, {})} <button>${validate_component(DarkMode, "DarkMode").$$render($$result, { class: "px-0 py-2 ml-5", size: "lg" }, {}, {})}</button> ${validate_component(NavUl, "NavUl").$$render(
        $$result,
        {
          ulClass: "flex  p-4 justify-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium",
          activeUrl: $page.url.pathname
        },
        {},
        {
          default: () => {
            return `${validate_component(NavLi, "NavLi").$$render(
              $$result,
              {
                class: "mr-2",
                href: "https://www.linkedin.com/in/franco-barrientos/?locale=en_US"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Instagram, "Instagram").$$render($$result, { width: 40, heigth: 40 }, {}, {})}`;
                }
              }
            )} ${validate_component(NavLi, "NavLi").$$render(
              $$result,
              {
                href: "https://www.linkedin.com/in/franco-barrientos/?locale=en_US"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Linkedin, "Linkedin").$$render($$result, { width: "w-16", heigth: "h-12" }, {}, {})}`;
                }
              }
            )} ${validate_component(NavLi, "NavLi").$$render(
              $$result,
              {
                href: "https://github.com/franBarrientos"
              },
              {},
              {
                default: () => {
                  return `${validate_component(GitHub, "GitHub").$$render($$result, { width: "w-10", heigth: "h-10" }, {}, {})}`;
                }
              }
            )}`;
          }
        }
      )}`;
    }
  })}  ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render(
    $$result,
    {
      footerType: "logo",
      class: " mt-10 p-4 bg-[#f1f9f5]"
    },
    {},
    {
      default: () => {
        return `<div class="sm:flex sm:items-center sm:justify-between">${validate_component(FooterBrand, "FooterBrand").$$render(
          $$result,
          {
            href: "/",
            src: "/F2.png",
            alt: "Logo",
            name: "Franco Barrientos"
          },
          {},
          {}
        )} ${validate_component(FooterLinkGroup, "FooterLinkGroup").$$render(
          $$result,
          {
            ulClass: "flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
          },
          {},
          {}
        )}</div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> ${validate_component(FooterCopyright, "FooterCopyright").$$render($$result, { href: "/", by: "Franco Barrientos" }, {}, {})}`;
      }
    }
  )}</main>`;
});
export {
  Layout as default
};
