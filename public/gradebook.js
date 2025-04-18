// Fetch data from the Node.js backend
async function fetchGradeData() {
  try {
    const response = await fetch("/grades"); // <-- this must match your backend route
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched grade data:", data);
    populateGradebook(data);
  } catch (error) {
    console.error("Error fetching grade data:", error);
  }
}

// Populate the gradebook table with data
function populateGradebook(data) {
  const tableBody = document.getElementById("gradebook-body");

  // Clear previous content
  tableBody.innerHTML = "";

  data.forEach(row => {
    const tr = document.createElement("tr");

    const nameTd = document.createElement("td");
    nameTd.textContent = row.student_name || row.name || "Unnamed";
    tr.appendChild(nameTd);

    const assignmentTd = document.createElement("td");
    assignmentTd.textContent = row.assignment_title || row.title || "Untitled";
    tr.appendChild(assignmentTd);

    const gradeTd = document.createElement("td");
    gradeTd.textContent = row.grade;
    tr.appendChild(gradeTd);

    tableBody.appendChild(tr);
  });
}

// Call fetchGradeData when the page loads
window.addEventListener("DOMContentLoaded", fetchGradeData);
