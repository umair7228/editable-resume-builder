// Access form, resume, and edit button elements
var form = document.getElementById('resume-form');
var resume = document.getElementById('resume');
var editButton = document.getElementById('edit-button');
var resName = document.getElementById('res-name');
var resContact = document.getElementById('res-contact');
var resAddress = document.getElementById('res-address');
var resObjective = document.getElementById('res-objective');
var resExperience = document.getElementById('res-experience');
var resProjects = document.getElementById('res-projects');
var resCertifications = document.getElementById('res-certifications');
var resSkills = document.getElementById('res-skills');
var resLanguages = document.getElementById('res-languages');
// Handle form submission to generate the resume
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Capture form input values
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var objective = document.getElementById('objective').value;
    var experience = document.getElementById('experience').value;
    var projects = document.getElementById('projects').value;
    var certifications = document.getElementById('certifications').value;
    var skills = document.getElementById('skills').value.split(',');
    var languages = document.getElementById('languages').value.split(',');
    // Display the values dynamically in the resume section
    resName.textContent = name;
    resContact.textContent = "Phone: ".concat(phone, " | Email: ").concat(email);
    resAddress.textContent = "Address: ".concat(address);
    resObjective.textContent = objective;
    resExperience.textContent = experience;
    resProjects.textContent = projects;
    resCertifications.textContent = certifications;
    // Clear and update skills
    resSkills.innerHTML = '';
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill.trim();
        resSkills.appendChild(li);
    });
    // Clear and update languages
    resLanguages.innerHTML = '';
    languages.forEach(function (language) {
        var li = document.createElement('li');
        li.textContent = language.trim();
        resLanguages.appendChild(li);
    });
    // Hide the form and show the resume and edit button
    form.classList.add('hidden');
    resume.classList.remove('hidden');
    editButton.classList.remove('hidden');
});
// Handle clicking the edit button to go back to the form
editButton.addEventListener('click', function () {
    form.classList.remove('hidden');
    resume.classList.add('hidden');
    editButton.classList.add('hidden');
});
