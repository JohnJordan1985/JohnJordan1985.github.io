"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var allRepos = fetch("https://api.github.com/users/JohnJordan1985/repos").then(function (results) {
  return results.json();
}).then(function (data) {
  console.log(data);
});
var listedRepos = [{
  name: "Caeser Cipher",
  id: 183995858,
  details: "Includes some of the history behind encryption, beginning with the illustrious Julius Caeser, and allows the user to encrypt and decrypt short text-based messages."
}, {
  name: "FizzBuzz",
  id: 182310084,
  details: "I didn't know what 'FizzBuzz' was, but after having it explained to me, I challenged myself to solve it using CSS3 alone: I simultaneously solved it using JavaScript, for comparison. The retro 90's eyeball-bleeding appearance is a bit of an in-joke..."
}, {
  name: "Revamped Confetti",
  id: 133503450,
  details: "Returned to this project to apply my learnings in typography, color theory and content writing, as well as to test out the newly stable Bootstrap 4 framework (the original project had used Bootstrap 3)."
}, {
  name: "List-O-Rama",
  id: 96696380,
  details: "A straight-forward \"To-Do List\" application, which uses localStorage to store user input and allow use offline."
}, {
  name: "Galway Pub Finder",
  id: 66479971,
  details: "My first web application. It was fun to build, but not so fun to use: it doesn't display well on mobile, and only displays a fraction of the pubs in my hometown. Not that pubs are hard to find in my hometown or anything..."
}];
var ghpagesProjects = [{
  name: "Caeser Cipher",
  projectURL: "https://johnjordan1985.github.io/caesar-cipher/",
  description: "A fully functional attempt to explain Public Key Encryption, which is the basis of most of the secure communication over the internet."
}, {
  name: "FizzBuzz",
  projectURL: null,
  description: "After suggesting the 'nth-child' CSS selector to solve a front-end issue for a DevOps colleague, they mused that you could use CSS to solve the 'FizzBuzz' challenge. "
}, {
  name: "Revamped Confetti",
  projectURL: null,
  description: "An update of a university project, where I had to design a landing page for a \"full sprectrum\" wedding service called \"Ready Confetti\" "
}, {
  name: "List-O-Rama",
  projectURL: null,
  description: "A university project to build a simple jQuery \"To-Do List\" application."
}, {
  name: "Galway Pub Finder",
  projectURL: null,
  description: "A project to build a web application using knockout.js, which integrated with Google Maps and the Yelp API, to display various pubs on a map."
}];

var Project =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Project, _React$Component);

  function Project() {
    _classCallCheck(this, Project);

    return _possibleConstructorReturn(this, _getPrototypeOf(Project).apply(this, arguments));
  }

  _createClass(Project, [{
    key: "render",
    value: function render() {
      var project = this.props.project;
      return React.createElement("li", null, React.createElement("h2", null, React.createElement("a", {
        href: project.projectURL
      }, project.name)), React.createElement("p", null, project.description), React.createElement("details", null, React.createElement("summary", null, "Click to read more..."), React.createElement("p", null, project.details)));
    }
  }]);

  return Project;
}(React.Component);

var ProjectList =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(ProjectList, _React$Component2);

  function ProjectList(props) {
    var _this;

    _classCallCheck(this, ProjectList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProjectList).call(this, props));
    _this.state = {
      projects: _this.props.projectList.map(function (project, index) {
        return React.createElement(Project, {
          project: project,
          key: index
        });
      }),
      apiData: []
    };
    return _this;
  }

  _createClass(ProjectList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      fetch("https://api.github.com/users/JohnJordan1985/repos").then(function (results) {
        return results.json();
      }).then(function (data) {
        console.log(data);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("ul", {
        className: "project-list"
      }, this.state.projects);
    }
  }]);

  return ProjectList;
}(React.Component);

ReactDOM.render(React.createElement(ProjectList, {
  projectList: ghpagesProjects
}), document.getElementById("projectList_wrapper"));