let message = {
  message: "Hello World",
};

function getMessage(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "http://localhost:3000/message") {
        resolve(message);
      } else {
        reject("Invalid URL");
      }
    }, 2000);
  });
}

let url = "http://localhost:3000/messages";
let btn = document.querySelector("#btnGet");
let msg = document.querySelector("#message");

btn.addEventListener("click", () => {
  getMessage(url)
    .then((res) => (msg.innerHTML = res.message))
    .catch((err) => (msg.innerHTML = err))
    .finally(() => console.log("Completed"));
});
