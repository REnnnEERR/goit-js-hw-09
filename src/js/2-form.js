const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

let formData = { email: "", message: "" };

const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
    formData = JSON.parse(savedData);

    Object.entries(formData).forEach(([key, value]) => {
        form.elements[key].value = value;
    });
}

form.addEventListener("input", (event) => {
    const { name, value } = event.target;

    formData[name] = value.trim();

    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log("Submitted Data:", formData);

    localStorage.removeItem(localStorageKey);
    formData = { email: "", message: "" };
    form.reset();
});