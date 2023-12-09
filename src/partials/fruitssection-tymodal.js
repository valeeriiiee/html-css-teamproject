(() => {
  const refs = {
    openModalBtn: document.querySelector("[ty-modal-open]"),
    closeModalBtn: document.querySelector("[ty-modal-close]"),
    modal: document.querySelector("[ty-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();