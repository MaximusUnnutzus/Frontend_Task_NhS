var allParentAccordions = document.querySelectorAll("button.accordion");
var allChildAccordions = document.querySelectorAll("button.sub-accordion");

var content = [
  {
    title: "Sobodi Loren",
    subAccordions: [
      {
        title: "Loren Ipsum",
        content: "lasködfj sklöadfjlöasdfjö",
        box: "jfsdklfjsdklföj eifjksdlfjsd kvmxcm,.v",
      },
      {
        title: "Loren Ipsum",
        content: "lasködfj sklöadfjlöasdfjö",
        box: "jfsdklfjsdklföj eifjksdlfjsd kvmxcm,.v",
      },
      {
        title: "Loren Ipsum",
        content: "lasködfj sklöadfjlöasdfjö",
        box: "jfsdklfjsdklföj eifjksdlfjsd kvmxcm,.v",
      },
    ],
  },
  {
    title: "Sobodi dklösfjlösdf",
    subAccordions: [
      {
        title: "Loren Ipsum",
        content: "lasködfj sklöadfjlöasdfjö",
        box: "jfsdklfjsdklföj eifjksdlfjsd kvmxcm,.v",
      },
      {
        title: "Loren Ipsum",
        content: "lasködfj sklöadfjlöasdfjö",
        box: "jfsdklfjsdklföj eifjksdlfjsd kvmxcm,.v",
      },
      {
        title: "Loren Ipsum",
        content: "lasködfj sklöadfjlöasdfjö",
        box: "jfsdklfjsdklföj eifjksdlfjsd kvmxcm,.v",
      },
    ],
  }
];

window.onload = function () {
  console.log("hello")
  const container = document.querySelector(".container")

  content.forEach((element)=>{
    const parentAccordion = document.createElement("button");
    parentAccordion.classList.add("accordion")
    parentAccordion.innerHTML = element.title

    container.appendChild(parentAccordion)
  })
};

for (i = 0; i < allParentAccordions.length; i++) {
  allParentAccordions[i].addEventListener("click", function () {
    //get all HTML-Elements with the Class-Token "active", and remove "active" if it was previous Accordion
    var activeParentAccordions =
      document.getElementsByClassName("accordion active");

    handleAccordions(this, activeParentAccordions, true);
  });
}

for (i = 0; i < allChildAccordions.length; i++) {
  allChildAccordions[i].addEventListener("click", function () {
    //get all HTML-Elements with the Class-Token "active", and remove "active" if it was previous Accordion
    var activeChildAccordions = document.getElementsByClassName(
      "sub-accordion active"
    );

    handleAccordions(this, activeChildAccordions, false);
  });
}

function handleAccordions(triggeredAccordion, accordionSublist, topLevel) {
  if (accordionSublist.length > 0) {
    var x;
    var y;

    for (x = 0; x < accordionSublist.length; x++) {
      if (triggeredAccordion == accordionSublist[x]) {
        triggeredAccordion.querySelector("img").style.animation =
          "rotationBackwards 0.2s forwards";
        accordionSublist[x].nextElementSibling.style.display = "none";
        accordionSublist[x].classList.toggle("active");

        if (topLevel) {
          handleSubLevelAccordions();
        }

        console.log("same Accordion");
      } else {
        accordionSublist[x].querySelector("img").style.animation =
          "rotationBackwards 0.2s forwards ";
        triggeredAccordion.querySelector("img").style.animation =
          "rotationForwards 0.2s forwards";
        accordionSublist[x].nextElementSibling.style.display = "none";
        accordionSublist[x].classList.toggle("active");
        triggeredAccordion.nextElementSibling.style.display = "block";
        triggeredAccordion.classList.toggle("active");

        if (topLevel) {
          handleSubLevelAccordions();
        }
        console.log("different Accordion");

        //TODO: Handle Sub-Accordions
      }
    }
  } else {
    triggeredAccordion.querySelector("img").style.animation =
      "rotationForwards 0.2s forwards";
    triggeredAccordion.nextElementSibling.style.display = "block";
    triggeredAccordion.classList.toggle("active");
    console.log("first Accordion");
  }
}

function handleSubLevelAccordions() {
  for (y = 0; y < allChildAccordions.length; y++) {
    allChildAccordions[y].querySelector("img").style.animation =
      "rotationBackwards 0.2s";
    allChildAccordions[y].nextElementSibling.style.display = "none";
    allChildAccordions[y].classList.remove("active");
    console.log("removed Subaccordions");
  }
}
