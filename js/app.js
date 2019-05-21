const ghpagesProjects = [
  {
    name: "Caeser Cipher",
    projectURL: "https://johnjordan1985.github.io/caesar-cipher/",
    description: `A fully functional attempt to explain Public Key Encryption, which is the basis of most of the secure communication over the internet.`,
    details: `Includes some of the history behind encryption, beginning with the illustrious Julius Caeser, and allows to user to <em>encrypt</em> and <em>decrypt</em> short text-based messages.`
  },  {
    name: "FizzBuzz",
    projectURL: null,
    description: `After suggesting the 'nth-child' CSS selector to solve a front-end issue for a DevOps colleague, they mused that you could use CSS to solve the 'FizzBuzz' challenge. `,
    details: `I didn't know what 'FizzBuzz' was, but after having it explained to me, I challenged myself to solve it using CSS3 <em>alone</em>: I simultaneously solved it using JavaScript, for comparison. The retro 90's eyeball-bleeding appearance is a bit of an in-joke...`
  },  {
    name: "Revamped Confetti",
    projectURL: null,
    description: `An update of a university project, where I had to design a landing page for a "full sprectrum" wedding service called "Ready Confetti" `,
    details: `Returned to this project to apply my learnings in typography, color theory and content writing, as well as to test out the newly stable Bootstrap 4 framework (the original project had used Bootstrap 3.`
  },{
    name: "List-O-Rama",
    projectURL: null,
    description: `A university project to build a simple jQuery "To-Do List" application.`,
    details: `A straight-forward "To-Do List" application, which uses localStorage to store user input and allow use offline.`
  },  {
    name: "Galway Pub Finder",
    projectURL: null,
    description: `A project to build a web application using knockout.js, which integrated with Google Maps and the Yelp API, to display various pubs on a map.`,
    details: `My first web application. It was fun to build, but not so fun to use: it doesn't display well on mobile, and only displays a fraction of the pubs in my hometown. Not that pubs are <em>hard</em> to find in my hometown or anything...`
  }
];

class Project extends React.Component {

	// constructor(argument) {
	// 	// code...
	// }
	render() {
		const project = this.props.project;
		return (
			<li>
				<h2>
					<a href={project.projectURL}>{project.name}</a>
				</h2>
				<p>
					{project.description}
				</p>
				<details>
					<summary>
						Click to read more...
					</summary>
					<p>
						{project.details}
					</p>
				</details>
			</li>
		);
	}
}

class ProjectList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			projects: this.props.projectList.map((project, index) => <Project project={project} key={index} />)
		};
	}

	render() {
		return (
			<ul className="project-list">{this.state.projects}</ul>
		);
	}
}

ReactDOM.render(<ProjectList projectList={ghpagesProjects} />, document.getElementById("projectList_wrapper"));