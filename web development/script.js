// Sample template data
const templates = [
    {
        name: "Template 1",
        content: "<h1>Resume Template 1</h1><p>Replace this with your resume content.</p>",
    },
    {
        name: "Template 2",
        content: "<h1>Resume Template 2</h1><p>Replace this with your resume content.</p>",
    },
];

// Sample resume data
let resumeData = {
    template: null,
    personalInfo: {
        fullName: "",
        email: "",
        // Add more fields as needed
    },
    // Add more sections and fields as needed
};

// Function to update the preview
function updatePreview() {
    const templateContent = resumeData.template ? resumeData.template.content : "";
    const personalInfo = resumeData.personalInfo;
    // Build the resume preview content using the selected template and user data
    const previewContent = templateContent + `<h2>${personalInfo.fullName}</h2><p>Email: ${personalInfo.email}</p>`;
    document.getElementById("resume-preview").innerHTML = previewContent;
}

// Function to handle template selection
function selectTemplate(templateIndex) {
    resumeData.template = templates[templateIndex];
    updatePreview();
}

// Function to handle form input changes
function handleInputChange(event) {
    const field = event.target.name;
    const value = event.target.value;

    if (field.startsWith("personalInfo")) {
        resumeData.personalInfo[field.split(".")[1]] = value;
    }
    // Handle other sections and fields similarly

    updatePreview();
}

// Function to download the resume as a PDF (for simplicity, this is a placeholder)
function downloadResume() {
    // Replace this with actual PDF generation and download logic
    alert("Downloading resume...");
}

// Add event listeners
document.addEventListener("DOMContentLoaded", () => {
    // Populate template selection options
    const templateSelection = document.getElementById("template-selection");
    templates.forEach((template, index) => {
        const templateButton = document.createElement("button");
        templateButton.textContent = template.name;
        templateButton.addEventListener("click", () => selectTemplate(index));
        templateSelection.appendChild(templateButton);
    });

    // Add event listeners for form inputs
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
        input.addEventListener("input", handleInputChange);
    });

    // Add event listener for the download button
    document.getElementById("download-button").addEventListener("click", downloadResume);
});

