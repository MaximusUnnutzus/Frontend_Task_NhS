var allParentAccordions = document.getElementsByClassName("accordion");
var allChildAccordions = document.getElementsByClassName("sub-accordion");


for (i = 0; i < allParentAccordions.length; i++) {
  allParentAccordions[i].addEventListener("click", function() {

    //get all HTML-Elements with the Class-Token "active", and remove "active" if it was previous Accordion
    var activeParentAccordions = document.getElementsByClassName("accordion active")

    handleAccordions(this, activeParentAccordions, true);
    rotatePlus(this);

  });
}

for (i = 0; i < allChildAccordions.length; i++) {
  allChildAccordions[i].addEventListener("click", function() {

    //get all HTML-Elements with the Class-Token "active", and remove "active" if it was previous Accordion
    var activeChildAccordions = document.getElementsByClassName("sub-accordion active")

    handleAccordions(this, activeChildAccordions, false);

  });
}



function handleAccordions(triggeredAccordion, accordionSublist, topLevel) {
  if (accordionSublist.length > 0) {

    var x;
    var y;

    

    for (x = 0; x < accordionSublist.length; x++) {
      if (triggeredAccordion == accordionSublist[x]) {
        accordionSublist[x].nextElementSibling.style.display = "none";
        accordionSublist[x].classList.toggle("active")
        triggeredAccordion.querySelector("img").classList.remove("-active")
        if (topLevel) {
          handleSubLevelAccordions();
        }

        console.log("same Accordion")

        //TODO: Handle Sub-Accordions


      } else {
        triggeredAccordion.querySelector("img").classList.add("-active")
        accordionSublist[x].querySelector("img").classList.remove("-active")
        accordionSublist[x].nextElementSibling.style.display = "none";
        accordionSublist[x].classList.toggle("active");
        triggeredAccordion.nextElementSibling.style.display = "block";
        triggeredAccordion.classList.toggle("active");

        if (topLevel) {
          handleSubLevelAccordions();
        }
        console.log("different Accordion")

        //TODO: Handle Sub-Accordions
      }
    }
  } else {
    triggeredAccordion.nextElementSibling.style.display = "block";
    triggeredAccordion.classList.toggle("active");
    console.log("first Accordion")
    triggeredAccordion.querySelector("img").classList.add("-active")



  }
}

function handleSubLevelAccordions() {
  for (y = 0; y < allChildAccordions.length; y++) {
    allChildAccordions[y].nextElementSibling.style.display = "none";
    allChildAccordions[y].classList.remove("active");
    console.log("removed Subaccordions")
  }
}

function rotatePlus(triggeredAccordion){
    triggeredAccordion.classList.add(".-active")
}
