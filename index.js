const form = document.getElementById("attendanceForm");
const reportBody = document.getElementById("reportBody");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const empId = document.getElementById("empId").value.trim();
    const empName = document.getElementById("empName").value.trim();
    const department = document.getElementById("department").value.trim();

    const workingDays = Number(document.getElementById("workingDays").value);
    const presentDays = Number(document.getElementById("presentDays").value);
    const leaveDays = Number(document.getElementById("leaveDays").value);

    // Validation
    if (!empId || !empName || !department) {
        alert("Please fill in all mandatory fields.");
        return;
    }

    if (presentDays > workingDays) {
        alert("Present Days cannot exceed Working Days.");
        return;
    }

    if (leaveDays > workingDays) {
        alert("Leave Days cannot exceed Working Days.");
        return;
    }

    // Attendance Percentage
    const attendance = ((presentDays / workingDays) * 100).toFixed(0);

    let status = "";
    let badge = "";

    if (attendance >= 90) {
        status = "Excellent";
        badge = "excellent";
    }
    else if (attendance >= 75) {
        status = "Good";
        badge = "good";
    }
    else if (attendance >= 50) {
        status = "Average";
        badge = "average";
    }
    else {
        status = "Poor";
        badge = "poor";
    }

    reportBody.innerHTML += `
        <tr>
            <td>${empId}</td>
            <td>${empName}</td>
            <td>${department}</td>
            <td>${workingDays}</td>
            <td>${presentDays}</td>
            <td>${leaveDays}</td>
            <td>${attendance}%</td>
            <td><span class="badge ${badge}">${status}</span></td>
        </tr>
    `;

    form.reset();
});