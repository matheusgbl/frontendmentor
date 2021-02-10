const accordionItemHeader = document.querySelectorAll('.accordion-item-header');

accordionItemHeader.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener('click', event => {
    const currentActiveAccordionItem = document.querySelector('.accordion-item-header.active');
    if (currentActiveAccordionItem && currentActiveAccordionItem !== accordionItemHeader) {
      currentActiveAccordionItem.classList.toggle('active');
      currentActiveAccordionItem.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle('active');
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains('active')) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});