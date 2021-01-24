const Modal = {
  modalOverlay: document.querySelector('.modal-overlay'),
  open() {
    Modal.modalOverlay.classList.add('active')
  },
  close() {
    Modal.modalOverlay.classList.remove('active')
  }
}