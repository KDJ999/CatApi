const app = document.getElementById("root");

const logo = document.createElement("img");
logo.src = "logo.png";

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(logo);
app.appendChild(container);

fetch("https://cat-fact.herokuapp.com/facts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.all.slice(0, 9).forEach((facts) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = facts.user.name.first + " " + facts.user.name.last;

      const p = document.createElement("p");
      facts.text = facts.text.substring(0, 300);
      p.textContent = facts.text;
      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  });
