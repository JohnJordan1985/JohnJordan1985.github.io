const ghpagesProjects = [
	{
		name: "FizzBuzz",
		description: `<p>After suggesting the 'nth-child' CSS selector to solve a front-end issue for a DevOps colleague,
		they mused that you could use CSS to solve the 'FizzBuzz' challenge. I didn't know what 'FizzBuzz' was, but after having it explained to me,
		I challenged myself to solve it using CSS3 <em>alone</em>: I simultaneously solved it using JavaScript, for comparison.</p>`
	},	{
		name: "Caeser Cipher",
		description: `<p>A fully functional attempt to explain Public Key Encryption, which is the basis of most of the secure communication over the internet.
		Includes some of the history behind encryption, beginning with the illustrious Julius Caeser, and allows to user to <em>encrypt</em> and <em>decrypt</em> short text-based messages.</p>`
	}
];


let getNodesWithContent = index => {
	// Creates and returns a li, h1 and p element, along with text and innerHTML for the h1 and p elements, respectively
	return [document.createElement("li"), document.createElement("h1"), document.createElement("p"), document.createTextNode(ghpagesProjects[index].name), ghpagesProjects[index].description];
}

let appendProjectsToTarget = (projectList, targetID) => {
	let docFrag = documentFragment = document.createDocumentFragment();
	let targetElement = document.getElementById(targetID), numProjects = projectList.length;
	let project, projectH1, projectDescription, projectH1Text, projectDescriptionContent;

	for(let i = 0; i < numProjects; i++) {
		[project, projectH1, projectDescription, projectH1Text, projectDescriptionContent] = getNodesWithContent(i);
		projectDescription.innerHTML = projectDescriptionContent; // setting innerHTML to allow use of HTML tags
		projectH1.appendChild(projectH1Text), project.appendChild(projectH1), project.appendChild(projectDescription), docFrag.appendChild(project);
	}
	targetElement.appendChild(docFrag);
};

appendProjectsToTarget(ghpagesProjects, "list_of_projects");