var content = [
  {
    title: "Accordion 1",
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
    title: "Accordion 2",
    subAccordions: [
      {
        title: "Loren Ipsum 1",
        content: "lasködfj sklöadfjlöasdfjö",
        box: "jfsdklfjsdklföj eifjksdlfjsd kvmxcm,.v",
      },
      {
        title: "Loren Ipsum 2",
        content: "lasködfj sklöadfjlöasdfjö",
        box: "jfsdklfjsdklföj eifjksdlfjsd kvmxcm,.v",
      },
      {
        title: "Loren Ipsum 3",
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
  if (level === "toplevel") {
    accordion.classList.add("accordion");
    container.appendChild(accordion);
    container.appendChild(panel);
  } else {
    accordion.classList.add("sub-accordion");
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
  const accordionTitle = document.createElement("h2");
  accordionTitle.innerHTML = element.title;
  colL.appendChild(accordionTitle);
  const accordionPlus = document.createElement("img");
  accordionPlus.src = "extras/img/secondary-plus.svg";
  colR.appendChild(accordionPlus);

  //If Sublevel-Accordion find Parent-Panel & append Panel
  //Fill Panel with Content
  if (level === "sublevel") {
    panel.innerHTML = element.content;

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
   var activeParentAccordion = document.querySelectorAll("."+accordion.classList.value+".active");
   console.log(activeParentAccordion)

   accordion.nextElementSibling.classList.toggle("active")
   accordion.classList.toggle("active")

   activeParentAccordion.forEach((accordion)=>{
     accordion.classList.remove("active")
     accordion.nextElementSibling.classList.remove("active")
   })
  });
}
