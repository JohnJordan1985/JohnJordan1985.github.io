const ghpagesProjects = [
	{
		name: "FizzBuzz",
		description: `<p>After suggesting the 'nth-child' CSS selector to solve a front-end issue for a DevOps colleague,
		they mused that you could use CSS to solve the 'FizzBuzz' challenge. </p>`,
		details: `<p>I didn't know what 'FizzBuzz' was, but after having it explained to me, I challenged myself to solve it using CSS3 <em>alone</em>: I simultaneously solved it using JavaScript, for comparison.</p><p>The retro 90's eyeball-bleeding appearance is a bit of an in-joke...`
	},	{
		name: "Caeser Cipher",
		description: `<p>A fully functional attempt to explain Public Key Encryption, which is the basis of most of the secure communication over the internet.</p>`,
		details: `<p>Includes some of the history behind encryption, beginning with the illustrious Julius Caeser, and allows to user to <em>encrypt</em> and <em>decrypt</em> short text-based messages.</p>`
	}
];


let getNodesWithContent = index => {
	// Creates and returns a li, h1 and p element, along with text and innerHTML for the h1 and p elements, respectively
	return [document.createElement("li"), document.createElement("h2"), document.createElement("div"), document.createTextNode(ghpagesProjects[index].name), ghpagesProjects[index].description, document.createElement("details"), document.createElement("summary")];
}

let appendProjectsToTarget = (projectList, targetID) => {
	let docFrag = documentFragment = document.createDocumentFragment();
	let targetElement = document.getElementById(targetID), numProjects = projectList.length;
	let project, projectH2, projectDescription, projectH2Text, projectDescriptionContent, projectDetails, projectSummary;

	for(let i = 0; i < numProjects; i++) {
		[project, projectH2, projectDescription, projectH2Text, projectDescriptionContent,projectDetails, projectSummary] = getNodesWithContent(i);
		projectDescription.innerHTML = projectDescriptionContent; // setting innerHTML to allow use of HTML tags
		projectDetails.innerHTML = projectList[i].details;
		projectDetails.prepend(projectSummary);
		projectH2.appendChild(projectH2Text),
		project.appendChild(projectH2),
		project.appendChild(projectDescription),
		project.appendChild(projectDetails),
		docFrag.appendChild(project);
	}
	targetElement.appendChild(docFrag);
};


appendProjectsToTarget(ghpagesProjects, "list_of_projects");