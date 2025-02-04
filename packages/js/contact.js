document
  .getElementById("sendButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var description = document.getElementById("description").value;

    var message =
      "Name: " +
      name +
      "%0A" +
      "Email: " +
      email +
      "%0A" +
      "Subject: " +
      subject +
      "%0A" +
      "Description: " +
      description;

    var whatsappURL =
      "https://wa.me/6282285512091?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
  });
