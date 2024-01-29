/* Desenvolva seu código aqui... */
document.addEventListener('DOMContentLoaded', () => {
    
    const openModalButton = document.querySelector('.form__register-link');
  
    const registerModal = document.getElementById('register_modal');
    const closeModalButton = document.getElementById('closeModal');
  
    
    openModalButton.addEventListener('click', (e) => {
      e.preventDefault(); 
      registerModal.showModal(); 
    });  
    
    closeModalButton.addEventListener('click', () => {
      registerModal.close(); 
    });  
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        registerModal.close();
      }
    });
  });
  
