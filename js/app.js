const ghpagesProjects = [
	{
		name: "Caeser Cipher",
		projectURL: "https://johnjordan1985.github.io/caesar-cipher/",
		description: `<p>A fully functional attempt to explain Public Key Encryption, which is the basis of most of the secure communication over the internet.</p>`,
		details: `<p>Includes some of the history behind encryption, beginning with the illustrious Julius Caeser, and allows to user to <em>encrypt</em> and <em>decrypt</em> short text-based messages.</p>`
	},	{
		name: "FizzBuzz",
		description: `<p>After suggesting the 'nth-child' CSS selector to solve a front-end issue for a DevOps colleague, they mused that you could use CSS to solve the 'FizzBuzz' challenge. </p>`,
		details: `<p>I didn't know what 'FizzBuzz' was, but after having it explained to me, I challenged myself to solve it using CSS3 <em>alone</em>: I simultaneously solved it using JavaScript, for comparison.</p><p>The retro 90's eyeball-bleeding appearance is a bit of an in-joke...</p>`
	},	{
		name: "Revamped Confetti",
		description: `<p>An update of a university project, where I had to design a landing page for a "full sprectrum" wedding service called "Ready Confetti" </p>`,
		details: `<p>Returned to this project to apply my learnings in typography, color theory and content writing, as well as to test out the newly stable Bootstrap 4 framework (the original project had used Bootstrap 3.</p>`
	},{
		name: "List-O-Rama",
		description: `<p>A university project to build a simple jQuery "To-Do List" application.</p>`,
		details: `<p>A straight-forward "To-Do List" application, which uses localStorage to store user input and allow use offline.</p>`
	},	{
		name: "Galway Pub Finder",
		description: `<p>A project to build a web application using knockout.js, which integrated with Google Maps and the Yelp API, to display various pubs on a map.</p>`,
		details: `<p>My first web application. It was fun to build, but not so fun to use: it doesn't display well on mobile, and only displays a fraction of the pubs in my hometown. Not that pubs are <em>hard</em> to find in my hometown or anything...</p>`
	}
];


let getNodesWithContent = index => {
	// Creates and returns a li, h1 and p element, along with text and innerHTML for the h1 and p elements, respectively
	return [
		document.createElement("li"),
		document.createElement("h2"),
		document.createElement("div"),
		document.createElement("a"),
		document.createTextNode(ghpagesProjects[index].name),
		ghpagesProjects[index].description,
		document.createElement("details"),
		document.createElement("summary")
	];
}

let appendProjectsToTarget = (projectList, targetID) => {
	let docFrag = documentFragment = document.createDocumentFragment();
	let targetElement = document.getElementById(targetID), numProjects = projectList.length;
	let project, projectH2, projectDescription, projectH2LinkElement, projectDescriptionContent, projectDetails, projectSummary;

	for(let i = 0; i < numProjects; i++) {
		[project, projectH2, projectDescription, projectH2LinkElement, projectH2Text, projectDescriptionContent,projectDetails, projectSummary] = getNodesWithContent(i);
		projectDescription.innerHTML = projectDescriptionContent; // setting innerHTML to allow use of HTML tags
		projectDetails.innerHTML = projectList[i].details;
		projectDetails.prepend(projectSummary);
		projectH2LinkElement.href = projectList[i].projectURL;
		projectH2LinkElement.appendChild(projectH2Text);

		projectH2.appendChild(projectH2LinkElement),
		project.appendChild(projectH2),
		project.appendChild(projectDescription),
		project.appendChild(projectDetails),
		docFrag.appendChild(project);
	}
	targetElement.appendChild(docFrag);
};


appendProjectsToTarget(ghpagesProjects, "list_of_projects");