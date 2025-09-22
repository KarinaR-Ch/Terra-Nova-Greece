// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("joinForm");
    const modal = document.getElementById("successModal");
    const closeModalBtn = document.getElementById("closeModal");

    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const formData = new FormData(form);

            try {
                const response = await fetch("https://formspree.io/f/xkgvygww", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                    },
                    body: formData,
                });

                if (response.ok) {
                    modal.classList.add("show");
                    form.reset();
                } else {
                    alert("Помилка при надсиланні. Спробуйте ще раз.");
                }
            } catch (error) {
                console.error("Form error:", error);
                alert("З'єднання не вдалося.");
            }
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", () => {
            modal.classList.remove("show");
        });
    }

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("show");
            }
        });
    }
});