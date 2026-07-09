const before = [
"> Connecting to bachelor-party.service...",
""
];

const after = [
"",
"[ OK ] Groom detected",
"[ OK ] Groom = Jan Kadlec",
"[ OK ] Beer compatibility: PASS",
"[ OK ] Austria module loaded",
"[ OK ] Mountain package installed",
"",
"Running diagnostics...",
"",
"Physical condition............. WARNING",
"Complaining level.............. MUST BE ZERO",
"Destination knowledge.......... ACCESS DENIED",
"",
"Loading packing dependencies...",
"",
"sudo reveal-destination",
"ERROR 403: Forbidden",
"",
"Mission ready.",
"Press the button below to continue..."
];

const t = document.getElementById("terminal");

let i = 0;

function typeBefore() {
    if (i < before.length) {
        t.innerHTML += before[i] + "\n";
        window.scrollTo(0, document.body.scrollHeight);
        i++;
        setTimeout(typeBefore, 300);
    } else {
        setTimeout(animateBar, 300);
    }
}

function animateBar() {

    let percent = 0;

    const interval = setInterval(() => {

        const blocks = Math.floor(percent / 5);

        const bar =
            "█".repeat(blocks) +
            "░".repeat(20 - blocks);

        if (document.getElementById("progress")) {
            document.getElementById("progress").remove();
        }

        const line = document.createElement("div");
        line.id = "progress";
        line.textContent = `${bar} ${percent}%`;

        t.appendChild(line);

        window.scrollTo(0, document.body.scrollHeight);

        percent++;

        if (percent > 100) {

            clearInterval(interval);

            t.innerHTML += "\n";

            typeAfter();

        }

    }, 25);

}

let j = 0;

function typeAfter() {

    if (j < after.length) {

        t.innerHTML += after[j] + "\n";

        window.scrollTo(0, document.body.scrollHeight);

        j++;

        setTimeout(typeAfter, 250);

    } else {

        document.getElementById("btn").hidden = false;

    }

}

typeBefore();

document.getElementById("btn").onclick = () => {

    document.getElementById("mission").classList.remove("hidden");

    document.getElementById("btn").style.display = "none";

    window.scrollTo(0, document.body.scrollHeight);

};