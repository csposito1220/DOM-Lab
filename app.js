const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// 1.0
const mainEl = document.querySelector("main");

// 1.1
mainEl.style.backgroundColor = "var(--main-bg)";

// 1.2
mainEl.innerHTML = "<h1>SEI Rocks!<h1>";

// 1.3
mainEl.classList.add("flex-ctr");

// 2.0
const topMenuEl = document.getElementById("top-menu");

// 2.1
topMenuEl.style.height = "100%";

// 2.2
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// 2.3
topMenuEl.classList.add("flex-around");

// 3.1
menuLinks.forEach(function (link) {
  const linkEl = document.createElement("a");
  linkEl.setAttribute("href", link.href);
  linkEl.textContent = link.text;
  topMenuEl.appendChild(linkEl);
});

// PART 2

// 4.0
const subMenuEl = document.getElementById("sub-menu");

// 4.1
subMenuEl.style.height = "100%";

// 4.2
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// 4.3
subMenuEl.classList.add("flex-around");

// 4.4
subMenuEl.style.position = "absolute";

// 4.5
subMenuEl.style.top = "0";

// 5.0
// added at top

// 5.1
const topMenuLinks = document.querySelectorAll("#top-menu a");
let showingSubMenu = false;

// 5.2
topMenuEl.addEventListener("click", function (evt) {
  evt.preventDefault();
  const link = evt.target;
  if (link.tagName !== "A") return;
  console.log(link.textContent);

  // 5.3
  if (link.classList.contains("active")) {
    link.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }

  // 5.4
  topMenuLinks.forEach(function (link) {
    link.classList.remove("active");
  });

  // 5.5
  link.classList.add("active");

  // 5.6
  const linkData = menuLinks.find(function (linkObj) {
    return linkObj.text === link.textContent;
  });
  showingSubMenu = "subLinks" in linkData;

  // 5.7
  if (showingSubMenu) {
    buildSubMenu(linkData.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = "0";
    mainEl.innerHTML = "<h1>about</h1>";
  }
});

// 5.8
function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = "";
  subLinks.forEach(function (link) {
    const linkEl = document.createElement("a");
    linkEl.setAttribute("href", link.href);
    linkEl.textContent = link.text;
    subMenuEl.appendChild(linkEl);
  });
}

// 6.0
subMenuEl.addEventListener("click", function (evt) {
  evt.preventDefault();
  const link = evt.target;
  if (link.tagName !== "A") return;
  console.log(link.textContent);

  // 6.1
  showingSubMenu = false;
  subMenuEl.style.top = "0";

  // 6.2
  topMenuLinks.forEach(function (link) {
    link.classList.remove("active");
  });

  // 6.3
  mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
});
