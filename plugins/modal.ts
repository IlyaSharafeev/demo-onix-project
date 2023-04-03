export default defineNuxtPlugin(() => {
    return {
        provide: {
            showModal: (title: string, description: string, href: string) => {
                let dialog = document.querySelector("#dialog") as HTMLElement;
                let overlay = document.querySelector("#overlay") as HTMLElement;
                let titleModal = document.querySelector("#title-modal") as HTMLElement;
                let descriptionModal = document.querySelector("#description-modal") as HTMLElement;
                let donateButtonModal = document.querySelector("#popup-donate-button") as HTMLAnchorElement;
                titleModal.innerHTML = title;
                descriptionModal.innerHTML = description;
                donateButtonModal.href = href;
                dialog.classList.remove('hidden');
                overlay.classList.remove('hidden');
            },

            hideModal: () => {
                let dialog = document.querySelector("#dialog") as HTMLElement;
                let overlay = document.querySelector("#overlay") as HTMLElement;
                dialog.classList.add('hidden');
                overlay.classList.add('hidden');
            }
        }
    }
})
