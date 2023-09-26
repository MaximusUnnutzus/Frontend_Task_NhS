var content = [
  {
    title: "Lorem Ipsum",
    subAccordions: [
      {
        title: "Sub 1",
        content: "lasködfj sklöadfjlöasdfjö",
        box: "jfsdklfjsdklföj eifjksdlfjsd kvmxcm,.v",
      },
      {
        title: "Sub 2",
        content: "lasködfj sklöadfjlöasdfjö",
        box: "jfsdklfjsdklföj eifjksdlfjsd kvmxcm,.v",
      },
      {
        title: "Sub 3",
        content: "lasködfj sklöadfjlöasdfjö",
        box: "jfsdklfjsdklföj eifjksdlfjsd kvmxcm,.v",
      },
    ],
  },
  {
    title:
      "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat",
    subAccordions: [
      {
        title: "Ipsum dolor sit amet",
        content: "lasködfj sklöadfjlöasdfjö",
        box: "jfsdklfjsdklföj eifjksdlfjsd kvmxcm,.v",
      },
      {
        title: "Vulputate velit esse molestie consequat",
        content: "lasködfj sklöadfjlöasdfjö",
        box: "jfsdklfjsdklföj eifjksdlfjsd kvmxcm,.v",
      },
      {
        title: "Iriure dolor in hendrerit",
        content: "lasködfj sklöadfjlöasdfjö",
        box: "jfsdklfjsdklföj eifjksdlfjsd kvmxcm,.v",
      },
    ],
  },
];

const container = document.querySelector(".container");

window.onload = function () {
  content.forEach((element) => {
    createAccordion(element, "toplevel");

    //Fill Panel with Sub-Accordions
    element.subAccordions.forEach((subElement) => {
      createAccordion(subElement, "sublevel");
    });
  });
};

function createAccordion(element, level) {
  //create Accordion-Button
  const accordion = document.createElement("button");

  //create Panel
  const panel = document.createElement("div");
  panel.classList.add("panel");

  //define Accordion-Class-Level & append into Container or Top-Accordion
  var accordionTitle = null;
  var imageSrc = null;
  if (level === "toplevel") {
    accordion.classList.add("accordion");
    container.appendChild(accordion);
    container.appendChild(panel);
    accordionTitle = document.createElement("h2");
    imageSrc = "extras/img/secondary-plus-blue.svg";
  } else {
    accordion.classList.add("sub-accordion");
    accordionTitle = document.createElement("h3");
    imageSrc = "extras/img/secondary-plus-green.svg";
  }

  //Define Button-Layout
  const row = document.createElement("div");
  row.classList.add("row");
  const colL = document.createElement("div");
  colL.classList.add("col-l");
  const colR = document.createElement("div");
  colR.classList.add("col-R");
  row.appendChild(colL);
  row.appendChild(colR);
  accordion.appendChild(row);

  //Fill Button
  //const accordionTitle = document.createElement("h2");
  accordionTitle.innerHTML = element.title;
  colL.appendChild(accordionTitle);
  const accordionPlus = document.createElement("img");
  accordionPlus.src = imageSrc;
  colR.appendChild(accordionPlus);

  //If Sublevel-Accordion find Parent-Panel & append Panel
  //Fill Panel with Content
  if (level === "sublevel") {
    panel.innerHTML = element.content;

    const containerBox = document.createElement("div");
    containerBox.classList.add("container-box");
    containerBox.innerHTML = element.box;
    panel.append(containerBox);

    //Search All Parent-Accordions
    const accordionList = document.querySelectorAll(".accordion");
    //Pick last Accordion & pick the corresponding Panel
    const lastParentPanel =
      accordionList[accordionList.length - 1].nextElementSibling;
    lastParentPanel.appendChild(accordion);
    lastParentPanel.appendChild(panel);
  }

  //add EventListener
  accordion.addEventListener("click", function () {
    //search last active Parent Accordion
    var activeParentAccordion = document.querySelectorAll(
      "." + accordion.classList.value + ".active"
    );

    if (accordion.classList.value === "sub-accordion") {
      console.log("hello");
      accordion.style.borderBottom = "none";
    }

    //Add / remove Active Class from same Accordion
    accordion.nextElementSibling.classList.toggle("active");
    accordion.classList.toggle("active");

    accordion.nextElementSibling
      .querySelectorAll(".sub-accordion.active")
      .forEach((element) => {
        console.log("adding bottom 1");
        element.classList.remove("active");
        element.nextElementSibling.classList.remove("active");
        element.style.borderBottom = "1px solid  #c5c5c5";
      });

    //add the Button Spin Animation
    if (
      accordion.querySelector("img").classList.value === "" ||
      accordion.querySelector("img").classList.value === "zeroRotate"
    ) {
      console.log("img");
      accordion.querySelector("img").classList.add("fortyFiveRotate");
    } else {
      accordion.querySelector("img").classList.remove("fortyFiveRotate");
      accordion.querySelector("img").classList.add("zeroRotate");
    }

    //Remove Active Class from previous Accordion
    activeParentAccordion.forEach((accordion) => {
      console.log("adding bottom 2");

      accordion.classList.remove("active");
      accordion.nextElementSibling.classList.remove("active");
      accordion.querySelector("img").classList.remove("fortyFiveRotate");
      accordion.querySelector("img").classList.add("zeroRotate");
      accordion.style.borderBottom = "1px solid  #c5c5c5";
      console.log("Removed Active Class From Previous");
    });

    //Remove Active Class from Child Accordions if switched to another Accordion
    if (activeParentAccordion.length > 0) {
      if (accordion.classList.value === "accordion active") {
        console.log(activeParentAccordion[0]);
        let childAccordions =
          activeParentAccordion[0].nextElementSibling.querySelectorAll(
            ".sub-accordion.active"
          );

        childAccordions[0].classList.remove("active");

        childAccordions[0].nextElementSibling.classList.remove("active");
        childAccordions[0].style.borderBottom = "1px solid  #c5c5c5";

        childAccordions[0]
          .querySelector("img")
          .classList.remove("fortyFiveRotate");
        childAccordions[0].querySelector("img").style.rotate(0);
      }
    }
  });
}
