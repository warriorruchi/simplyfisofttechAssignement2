const ticket = {
    "Paris": "Skopje",
    "Zurich": "Amsterdam",
    "Prague": "Zurich",
    "Barcelona": "Berlin",
    "Kiev": "Prague",
    "Skopje": "Paris",
    "Amsterdam": "Barcelona",
    "Berlin": "Kiev",
    "Berlin": "Amsterdam"
}

const visited_ticket = {
    "Kiev": false,
    "Amsterdam": false,
    "Zurich": false,
    "Prague": false,
    "Berlin": false,
    "Barcelona": false
}

let count = 0;

let currentTicket = "Kiev"; // Initialize with Kiev
let ans = "";

while (count < 6) {
    count++;

    visited_ticket[currentTicket] = true;
    ans += currentTicket;
    ans += " -> ";

    currentTicket = ticket[currentTicket];
}

console.log(ans);
