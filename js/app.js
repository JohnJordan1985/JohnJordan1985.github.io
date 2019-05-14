const ghpagesProjects = [
	{
		name: "FizzBuzz",
		description: `<p>After I suggested the 'nth-child' CSS selector to solve a front-end issue for a DevOps colleague,
		they paused for a moment, before stating that <quote>'You could use CSS to solve FizzBuzz'</quote>.<br/>I didn't know what 'FizzBuzz' was, but after having it explained to me,
		I challenged myself to solve it using CSS3 <em>alone</em>: I simultaneously solved it using JavaScript, for comparison.</p>`
	},	{
		name: "Caeser Cipher",
		description: `<p>After I suggested the 'nth-child' CSS selector to solve a front-end issue for a DevOps colleague,
		they paused for a moment, before stating that <quote>'You could use CSS to solve FizzBuzz'</quote>.<br/>I didn't know what 'FizzBuzz' was, but after having it explained to me,
		I challenged myself to solve it using CSS3 <em>alone</em>: I simultaneously solved it using JavaScript, for comparison.</p>`
	}
];

// let listOfProjects = document.getElementById("list_of_projects");
// let project =  document.createElement("li");
// //
// let projectH1 = document.createElement("h1");
// let projectH1Text = document.createTextNode(ghpagesProjects[0].name);
// projectH1.appendChild(projectH1Text);
// //
// let projectDescription = document.createElement("p");
// projectDescription.innerHTML = ghpagesProjects[0].description; // given use of <em>

// project.appendChild(projectH1);
// project.appendChild(projectDescription);
// listOfProjects.appendChild(project);

let appendProjectsToTarget = (projectList, targetID) => {
	let targetElement = document.getElementById(targetID);


	let numProjects = projectList.length;
	for(let i = 0; i < numProjects; i++) {
		let project =  document.createElement("li");
		let projectH1 = document.createElement("h1");
		let projectH1Text = document.createTextNode(ghpagesProjects[i].name);
		projectH1.appendChild(projectH1Text);
		//
		let projectDescription = document.createElement("p");
		projectDescription.innerHTML = ghpagesProjects[i].description; // given use of <em>

		project.appendChild(projectH1);
		project.appendChild(projectDescription);
		targetElement.appendChild(project);

	}
};

appendProjectsToTarget(ghpagesProjects, "list_of_projects");