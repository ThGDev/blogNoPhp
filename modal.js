// activation MODAL au bout de 3 secondes
// VOIR LIGNE 25 -> ACTIVATION MODAL AVEC SESSIONSTORAGE
// const activeModal = (time) => {
//     setTimeout(() => {
//             document.querySelector('.modal').classList.add('is-active');
//         }, time);
        
// }
// activeModal(3000);
// FERMETURE MODAL
const modalClose = document.querySelector('.modal-close');
const modalClose2 = document.querySelector('.modal-background');

const closeModal = () => {
    modalClose.addEventListener('click', () => {
        document.querySelector('.modal').classList.remove('is-active');
    });
    modalClose2.addEventListener('click', () => {
        document.querySelector('.modal').classList.remove('is-active');
    });
}
closeModal();


const session = () => {
    if (!sessionStorage.count) {    // si rien n'est stocké en mémoire de session
        sessionStorage.count = 0;   // alors j'enregistre "pageLoadCount" à zéro
        // activation MODAL au bout de 3 secondes
        const activeModal = (time) => {
            setTimeout(() => {
                    document.querySelector('.modal').classList.add('is-active');
                }, time);
                
        }
        activeModal(3000);
    }
// Maintenant que j'ai un item enregistré en mémoire session, le code "activeModal()" ne s'exécutera plus
}
session();