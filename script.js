document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".wrapper");
    const qrInput = wrapper.querySelector(".form .input");
    const generateBtn = wrapper.querySelector(".form .generate-btn");
    const qrImg = wrapper.querySelector(".qr-code .qr-img");

    generateBtn.addEventListener("click", () => {
        let qrValue = qrInput.value;
        if (!qrValue) return;

        generateBtn.innerText = "Generating QR Code...";

        // Adding a timestamp to the URL to ensure it's unique for each input
        const timestamp = new Date().getTime();
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}&timestamp=${timestamp}`;

        qrImg.addEventListener("load", () => {
            wrapper.classList.add("active");
            generateBtn.innerText = "Generate QR Code";
        });
    });

    qrInput.addEventListener("input", () => {
        if (qrInput.value) {
            wrapper.classList.remove("active");
        }
    });
});
