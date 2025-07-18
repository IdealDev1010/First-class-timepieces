function openMadeOfferModal() {
  const modal = document.querySelector("#madeOfferModal");
  modal.classList.add('open');
  document.querySelector('.template-product').style.overflow = "hidden";
}


  function closeMadeOfferModal() {
    const modal = document.querySelector("#madeOfferModal");
    modal.classList.remove('open');
    document.querySelector('.template-product').style.overflow = "unset";
  }
  
  document.querySelector(".mao-modal-btn").addEventListener("click", openMadeOfferModal);
  document.querySelector(".offer-modal-close-btn").addEventListener("click", closeMadeOfferModal);


  
  document.addEventListener("click", function(event) {
    const modal = document.querySelector("#madeOfferModal");
    const modalContent = modal.querySelector(".modal-content"); 
    const wtiButton = document.querySelector('.mao-modal-btn');
  
    if (!modalContent.contains(event.target) && event.target !== wtiButton) {
      closeMadeOfferModal();
    }
  });
  
    document.addEventListener("DOMContentLoaded", function () {
      var urlParams = new URLSearchParams(window.location.search);
      var contactPosted = urlParams.get('contact_posted');
      const form = document.querySelector('.mao-contact-form');
      const successMessage = document.querySelector('.modal-success-message');
      successMessage.classList.remove('hidden');
      
      if (contactPosted === 'true') {
        openMadeOfferModal();
        form.classList.add('hidden');
        successMessage.classList.remove('hidden');
      }
      else {
        form.classList.remove('hidden');
        successMessage.classList.add('hidden');
      }
    });
  
  