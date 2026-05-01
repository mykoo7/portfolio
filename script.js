const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

    function openModal(src) {
    modal.classList.remove("hidden");
    modalImg.src = src;
    }

    modal.addEventListener("click", () => {
    modal.classList.add("hidden");
    });
