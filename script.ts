// Access form, resume, and edit button elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const resume = document.getElementById('resume') as HTMLElement;
const editButton = document.getElementById('edit-button') as HTMLButtonElement;

const resName = document.getElementById('res-name') as HTMLElement;
const resContact = document.getElementById('res-contact') as HTMLElement;
const resAddress = document.getElementById('res-address') as HTMLElement;
const resObjective = document.getElementById('res-objective') as HTMLElement;
const resExperience = document.getElementById('res-experience') as HTMLElement;
const resProjects = document.getElementById('res-projects') as HTMLElement;
const resCertifications = document.getElementById('res-certifications') as HTMLElement;
const resSkills = document.getElementById('res-skills') as HTMLElement;
const resLanguages = document.getElementById('res-languages') as HTMLElement;

// Handle form submission to generate the resume
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Capture form input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLTextAreaElement).value;
    const objective = (document.getElementById('objective') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const projects = (document.getElementById('projects') as HTMLTextAreaElement).value;
    const certifications = (document.getElementById('certifications') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
    const languages = (document.getElementById('languages') as HTMLInputElement).value.split(',');

    // Display the values dynamically in the resume section
    resName.textContent = name;
    resContact.textContent = `Phone: ${phone} | Email: ${email}`;
    resAddress.textContent = `Address: ${address}`;
    resObjective.textContent = objective;
    resExperience.textContent = experience;
    resProjects.textContent = projects;
    resCertifications.textContent = certifications;

    // Clear and update skills
    resSkills.innerHTML = '';
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        resSkills.appendChild(li);
    });

    // Clear and update languages
    resLanguages.innerHTML = '';
    languages.forEach(language => {
        const li = document.createElement('li');
        li.textContent = language.trim();
        resLanguages.appendChild(li);
    });

    // Hide the form and show the resume and edit button
    form.classList.add('hidden');
    resume.classList.remove('hidden');
    editButton.classList.remove('hidden');
});

// Handle clicking the edit button to go back to the form
editButton.addEventListener('click', () => {
    form.classList.remove('hidden');
    resume.classList.add('hidden');
    editButton.classList.add('hidden');
});
