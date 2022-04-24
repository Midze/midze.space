document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav__list");
  const form = document.getElementById("form");
  const policy = form.querySelector("#policy");
  const policyCheckbox = form.querySelector(".form__checkbox");
  const policyLabel = form.querySelector(".form__checkbox-label");
  const errorText = form.querySelector(".errorText");
  const formMessage = form.querySelector(".form__message");

  burger.addEventListener("click", function () {
    if (burger.classList.contains("active")) {
      burger.classList.remove("active");
      nav.classList.remove("active");
    } else {
      burger.classList.add("active");
      nav.classList.add("active");
    }
  });

  const scrollUp = function (h, elemHeight, height, speed) {
    let i = h;
    let s = speed || 1;
    if (i >= elemHeight - 55) {
      setTimeout(function () {
        window.scrollTo(0, i);
        scrollUp(i - 10 * speed, elemHeight, height, s);
      }, 0);
    }
  };
  const scrollDown = function (h, elemHeight, height, speed) {
    let i = h;
    let s = speed || 1;

    if (i <= elemHeight - 65) {
      setTimeout(function () {
        window.scrollTo(0, i);
        scrollDown(i + 10 * speed, elemHeight, height, s);
      }, 0);
    }
  };

  const scroll = function (h, elemHeight, height) {
    let i = h || 0;
    let length =
      height > elemHeight ? height - elemHeight : elemHeight - height;
    let speed = Math.floor(length / window.innerHeight);
    if (height < elemHeight) {
      scrollDown(i, elemHeight, height, speed);
    } else if (elemHeight < height) {
      scrollUp(i, elemHeight, height, speed);
    }
  };

  nav.addEventListener("click", function (e) {
    if (burger.classList.contains("active")) {
      burger.classList.remove("active");
      nav.classList.remove("active");
    } else {
      burger.classList.add("active");
      nav.classList.add("active");
    }
    if (e.target.classList.contains("nav__list-item__link")) {
      const targetId = "." + e.target.id;
      const target = document.querySelector(targetId);
      const windowPosition = window.scrollY;
      const targetPosition = target.offsetTop;

      scroll(windowPosition, targetPosition, windowPosition);
    }
  });

  const sendData = (formData) => {
    return fetch("send.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response)
      .catch((error) => console.error(error));
  };

  policy.addEventListener("change", function () {
    console.log(policyCheckbox);
    if (policyCheckbox.classList.contains("error")) {
      policyCheckbox.classList.remove("error");
      policyLabel.classList.remove("error");
    }
  });

  form.onsubmit = function (e) {
    e.preventDefault();

    const captcha = grecaptcha.getResponse();

    if (!policy.checked) {
      policyCheckbox.classList.add("error");
      policyLabel.classList.add("error");
      return;
    }

    if (!captcha.length) {
      errorText.innerText = "her tebe v rilo";
      return;
    } else {
      errorText.innerText = "";
    }

    const data = new FormData(document.querySelector("#form"));
    const formData = Object.fromEntries(data);

    sendData(formData)
      .then((response) => {
        if (response.ok) {
          formMessage.classList.add("show");
          formMessage.innerText = "Message sent successfully";
          form.reset();
          setTimeout(function () {
            formMessage.classList.remove("show");
          }, 5000);
        }
      })
      .catch((err) => {
        console.error(err);
        if (!response.ok) {
          formMessage.classList.add("error");
          formMessage.innerText = "Sorry, something went wrong";
          setTimeout(function () {
            formMessage.classList.remove("error");
          }, 5000);
        }
      });

    grecaptcha.reset();
  };
});
