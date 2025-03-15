document
  .getElementById("contactFormTeams")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const loader = document.getElementById("loader");
    const statusMessage = document.getElementById("statusMessage");
    statusMessage.innerText = "";
    loader.style.display = "block";

    const demoCORSurl = "https://cors-anywhere.herokuapp.com/";
    const teamsWebhookURL =
      "https://uwprod.webhook.office.com/webhookb2/6a03ad30-c770-4955-b28f-763caa75c448@2ca68321-0eda-4908-88b2-424a8cb4b0f9/IncomingWebhook/f51fced44aca4c2ab2b0def2bbce7276/2cb6e2a1-9847-4d6c-842b-0959445ea61f/V21VW-MWY99_ZanWS5rzByoaHzc6G8kOZBxeDtys43ays1";
    const contactName = document.getElementById("name").value;
    const contactEmail = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const formatMessage = `Name: ${contactName}\n\nEmail: ${contactEmail}\n\nMessage: ${message}`;
    const payload = { text: formatMessage };
    try {
      const response = await fetch(demoCORSurl + teamsWebhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        statusMessage.innerText = "Message Sent Successfully!";
        loader.style.display = "none";
      } else {
        statusMessage.innerText = "Error Sending Message, please email us.";
      }
    } catch (error) {
      statusMessage.innerText = "Microsoft Teams Error, please email us.";
    }
  });
