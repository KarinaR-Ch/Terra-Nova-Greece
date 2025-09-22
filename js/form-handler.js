// Form handling functionality
document.addEventListener('DOMContentLoaded', function() {
    initFormHandler();
});

function initFormHandler() {
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
                    alert("Error sending message. Please try again.");
                }
            } catch (error) {
                console.error("Form error:", error);
                alert("Connection failed.");
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
}