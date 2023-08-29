import { students } from "../data/students.js";

const btnShow = document.getElementById('btnShow');


btnShow.addEventListener('click', () => {
    setColorForLowGrades();
});

const setColorForLowGrades = () => {
    const tableRows = document.querySelectorAll("#studentsTable tbody tr");

    tableRows.forEach((row) => {
        const grade = row.querySelector("td:last-child").innerText;
        if (grade < 40) {
            row.classList.add("table-danger");
        }
    });
};

(() => {
    let html = "";

    students.forEach((student) => {
        html += `<tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.grade}</td>
            </tr>`;
    })

    const tbodyElement = document.querySelector("#studentsTable tbody");
    tbodyElement.innerHTML = html;
})();
