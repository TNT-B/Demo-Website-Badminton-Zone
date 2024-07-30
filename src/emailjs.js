// import emailjs from "emailjs-com";
// import ContactPage from "./ContactPage/ContactPage";

// const publicKey = "xyrQyqfAbQXOm7Tzu";
// const serviceID = "service_h32qf5l";
// const templateID = "template_94wijvg";

// emailjs.init(publicKey);
// const contactForm = document.getElementById("contact-form");

// document.addEventListener("DOMContentLoaded", function () {
//   const contactForm = document.querySelector("#contact-form");
//   const submitBtn = document.querySelector("#submit-btn");
//   const nameInput = document.querySelector("#user_name");
//   const emailInput = document.querySelector("#user_email");
//   const messageInput = document.querySelector("#message");

//   contactForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     submitBtn.innerText = "Sending...";

//     const inputFields = {
//       name: nameInput.value,
//       email: emailInput.value,
//       message: messageInput.value,
//     };

//     emailjs.send(serviceID, templateID, inputFields).then(
//       () => {
//         submitBtn.innerText = "Message sent successfully";
//         nameInput.value = "";
//         emailInput.value = "";
//         messageInput.value = "";
//       },
//       (error) => {
//         console.log(error);
//         submitBtn.innerText = "Something went wrong";
//       }
//     );
//   });
// });
