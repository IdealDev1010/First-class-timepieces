document.addEventListener("DOMContentLoaded", function () {
    const descriptionContainer  = document.querySelector('.product-single__description');
    if (descriptionContainer.querySelectorAll('table')) {
    const tableWrappers = descriptionContainer.querySelectorAll('table');
    const accordionTitles = [
      "Specifications",
      "Band",
      "Case",
      "Dial",
      "Features"
    ];
  
    tableWrappers.forEach((wrapper, index) => {

      const accordionWrapper = document.createElement('div');
      accordionWrapper.classList.add('accordion-item');
  
      const header = document.createElement('div');
      header.classList.add('accordion-header');
      header.innerText = accordionTitles[index] || `Details ${index + 1}`;
  
      const icon = document.createElement('span');
      icon.classList.add('accordion-icon');
      icon.innerHTML = '+';
      header.appendChild(icon);

      const body = document.createElement('div');
      body.classList.add('accordion-body');
  
      body.appendChild(wrapper.cloneNode(true));
      wrapper.replaceWith(accordionWrapper); 
  
      accordionWrapper.appendChild(header);
      accordionWrapper.appendChild(body);
  
      header.addEventListener('click', () => {
        accordionWrapper.classList.toggle('active');
        const isActive = accordionWrapper.classList.contains('active');
        icon.innerHTML = isActive ? '−' : '+'; 
      });
    });

    const allParagraphs = Array.from(descriptionContainer.querySelectorAll('p'));
    const matchingParagraphs = allParagraphs.filter(p => {
        const span = p.querySelector('span');
        return (
          span &&
          !p.closest('table') &&
          span.textContent.trim().replace(/\u00A0/g, '') !== ''
        );
      });

    if (matchingParagraphs.length > 0) {
      const accordionWrapper = document.createElement('div');
      accordionWrapper.classList.add('accordion-item');
  
      const header = document.createElement('div');
      header.classList.add('accordion-header');
      header.innerText = 'Description';
  
      const icon = document.createElement('span');
      icon.classList.add('accordion-icon');
      icon.innerHTML = '+'; // Initially plus icon
      header.appendChild(icon);

      const body = document.createElement('div');
      body.classList.add('accordion-body');
  
      matchingParagraphs.forEach(p => {
        body.appendChild(p);
      });
  
      accordionWrapper.appendChild(header);
      accordionWrapper.appendChild(body);
      descriptionContainer.appendChild(accordionWrapper);
  
      header.addEventListener('click', () => {
        accordionWrapper.classList.toggle('active');
        const isActive = accordionWrapper.classList.contains('active');
        icon.innerHTML = isActive ? '−' : '+'; // Change the icon
      });
    }
  }
  });
  