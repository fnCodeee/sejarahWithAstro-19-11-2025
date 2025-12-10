 // const cursor = document.querySelector(".custom-cursor");
  const KronologiDirect = [
    {
      element: document.querySelector(".cursor-container1"),
      cursorElement: document.querySelector(".custom-cursor1"),
      pages: "/time-line/chapter01",
    },
    {
      element: document.querySelector(".cursor-container2"),
      cursorElement: document.querySelector(".custom-cursor2"),
      pages: "/time-line/chapter02",
    },
    {
      element: document.querySelector(".cursor-container3"),
      cursorElement: document.querySelector(".custom-cursor3"),
      pages: "/time-line/chapter03",
    },
    {
      element: document.querySelector(".cursor-container4"),
      cursorElement: document.querySelector(".custom-cursor4"),
      pages: "/time-line/chapter04",
    },
  ];

  KronologiDirect.forEach((value, index) => {
    value.element.addEventListener("click", () => {
      window.location.href = value.pages;
    });
    value.element.addEventListener("mouseenter", () => {
      value.cursorElement.style.display = "flex";
    });

    value.element.addEventListener("mouseleave", () => {
      value.cursorElement.style.display = "none";
    });

    value.element.addEventListener("mousemove", (e) => {
      value.cursorElement.style.left = e.clientX + "px";
      value.cursorElement.style.top = e.clientY + "px";
      value.cursorElement.style.cursor = "pointer";
    });

    console.log(value, "this element1");
    console.log(index, "this index1\n");
  });