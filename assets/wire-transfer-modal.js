document.querySelector(".wti-modal-btn").addEventListener("click", openModal);
document.querySelector(".wire-modal-close-btn").addEventListener("click", closeModal);

function openModal() {
  document.querySelector("#wireTransferModal").classList.add('open');
  document.querySelector('.template-product').style.overflow = "hidden";
}

function closeModal() {
  document.querySelector("#wireTransferModal").classList.remove('open');
  document.querySelector('.template-product').style.overflow = "unset";
}



document.addEventListener("click", function(event) {
  const modal = document.querySelector("#wireTransferModal");
  const modalContent = modal.querySelector(".modal-content"); 
  const wtiButton = document.querySelector('.wti-modal-btn');

  if (!modalContent.contains(event.target) && event.target !== wtiButton) {
    closeModal();
  }
});

  document.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var contactPosted = urlParams.get('contact_posted');
    const form = document.querySelector('.wti-contact-form');
    const successMessage = document.querySelector('.success-message');
    successMessage.classList.remove('hidden');
    
    if (contactPosted === 'true') {
      openModal();
    
      form.classList.add('hidden');
      successMessage.classList.remove('hidden');
    }
    else {
      form.classList.remove('hidden');
      successMessage.classList.add('hidden');
    }
  });

