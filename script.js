function calculateResult() {
    alert("Button is working!");

    const name = document.getElementById("studentName").value;
    const registerNumber = document.getElementById("registerNumber").value;

    const devops = Number(document.getElementById("devops").value);
    const cloud = Number(document.getElementById("cloud").value);
    const database = Number(document.getElementById("database").value);
    const networks = Number(document.getElementById("networks").value);

    const total = devops + cloud + database + networks;
    const percentage = total / 4;

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    const status =
        devops >= 40 &&
        cloud >= 40 &&
        database >= 40 &&
        networks >= 40
            ? "PASS"
            : "FAIL";

    document.getElementById("resultName").textContent = name;
    document.getElementById("resultRegister").textContent = registerNumber;
    document.getElementById("total").textContent = total + "/400";
    document.getElementById("percentage").textContent =
        percentage.toFixed(2) + "%";
    document.getElementById("grade").textContent = grade;
    document.getElementById("status").textContent = status;

    document.getElementById("message").textContent =
        status === "PASS"
            ? "Congratulations! Student has passed all subjects."
            : "Student has failed one or more subjects.";
}