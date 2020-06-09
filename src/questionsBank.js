const questionsBank = [
    {
      question: "React is mainly for building ___",
      answers: ["Databases", "Plug-ins", "User interfaces", "Design platforms"],
      correct: "User interfaces"
    },
    {
      question: "___ can be done when more than one element needs to be returned from a component",
      answers: ["Abstraction", "Packing", "Insulation", "Wrapping"],
      correct: "Wrapping"
    },
    {
      question: "How do you access a function fetch() in an h1 element in JSX?",
      answers: ["<h1>{fetch}</h1>", "<h1>{fetch()}</h1>", "<h1>{this.fetch()}</h1>", "<h1>fetch()</h1>"],
      correct: "<h1>{fetch()}</h1>"
    },
    {
      question: "Lifecycle Methods are mainly used to ___",
      answers: ["Keep track of event histoy", "Enhance components", "Free-up resources", "None of the above"],
      correct: "Free-up resources"
    },
    {
      question: "Which method in a React Component should you override to stop the component from updating?",
      answers: ["willComponentUpdate", "shouldComponentUpdate", "componentDidUpdate", "componentDidMount"],
      correct: "shouldComponentUpdate"
    },
    {
      question: "What is used to pass data to a component?",
      answers: ["setState", "Render with arguments", "PropTypes", "props"],
      correct: "props"
    },
    {
      question: "Which method in a React Component is called after the component is rendered for the first time?",
      answers: ["componentDidUpdate", "componentDidMount", "componentMounted", "componentUpdated"],
      correct: "componentDidMount"
    },
    {
      question: "Which of the following is correct syntax for a button click event handler foo?",
      answers: ["<button onclick={this.foo()}>", "<button onclick={this.foo}>", "<button onClick={this.foo()}>", "<button onClick={this.foo}>"],
      correct: "<button onClick={this.foo}>"
    },
    {
      question: "What happens when you call setState() inside render() method?",
      answers: ["Repetitive output appears on the screen", "Duplicate key error", "Stack overflow error", "The state gets updated"],
      correct: "Stack overflow error"
    },
    {
      question: "How do you write an inline style specifying the font-size:12px and color:red; in JSX",
      answers: ["style={{font-size:12,color:'red'}}", "style={{fontSize:'12px',color:'red'}}", "style={fontSize:'12px',color:'red'}", "style={{font-size:12px,color:'red'}}"],
      correct: "style={{fontSize:'12px',color:'red'}}"
    },
    {
      question: "What are the advantages of ReactJS?",
      answers: ["Increases the application’s performance with Virtual DOM", "JSX makes a code that is easy to read and write", "It renders both on client and server side", "All of the above"],
      correct: "All of the above"
    },
    {
      question: "What is state in React?",
      answers: ["A persistant storage", "An internal data store (object) of a component", "An object of functions accessible within Render", "None of the above"],
      correct: "An internal data store (object) of a component"
    },
    {
      question: "What is ReactJS?",
      answers: ["A server-side framework", "A user-interface framework", "A library for building interaction interfaces", "A functional programming language"],
      correct: "A library for building interaction interfaces"
    },
    {
      question: "What are the two ways that data gets handled in React?",
      answers: ["Services and components", "Class and functional components", "The data is rendered or stored in state", "State and props"],
      correct: "State and props"
    },
    {
      question: "What are the disadvantages of ReactJS?",
      answers: ["It is only a view layer, you have still to plug your code for Ajax requests, events and so on. Some people get surprised by that", "The library itself is pretty large", "The learning curve can be slow", "All of the above"],
      correct: "All of the above"
    },
    {
      question: "JSX __",
      answers: ["is fast because it performs optimization while compiling code to JavaScript", "Is a syntax notation for JavaScript XML", "Provides expressiveness of JavaScript along with HTML-like template syntax", "All of the above"],
      correct: "All of the above"
    },
    {
      question: "React merges the object you provide into the current state using ___",
      answers: ["setState()", "Render()", "props", "State()"],
      correct: "setState()"
    },
    {
      question: "Arbitrary inputs of components are called ___",
      answers: ["Keys", "Props", "Elements", "Ref"],
      correct: "Props"
    },
    {
      question: "ref is used to refer to an element / component returned by ___",
      answers: ["react()", "render()", "reduce()", "refer()"],
      correct: "render()"
    },
    {
      question: "React is a framework for the programming language ___",
      answers: ["Java", "Python", "C++", "JavaScript"],
      correct: "JavaScript"
    },
    {
      question: "What is the correct order of the lifecycle of components?",
      answers: ["render(), constructor(), componentDidMount(), componentDidUpdate(), ComponentWillUnmount()", "componentDidMount(), constructor(), render(), componentDidUpdate(), ComponentWillUnmount()", "constructor(), componentDidMount(), render(), componentDidUpdate(), ComponentWillUnmount()", "constructor(), render(), componentDidMount(), componentDidUpdate(), ComponentWillUnmount()"],
      correct: "constructor(), render(), componentDidMount(), componentDidUpdate(), ComponentWillUnmount()"
    },
    {
      question: "Which way does data flow in React?",
      answers: ["Parent to child", "Child to parent", "Two-way data flow", "None of the above"],
      correct: "Parent to child"
    },
    {
      question: "Which is used to keep the value of components unique?",
      answers: ["Ref", "Key", "State", "Data"],
      correct: "Key"
    },
    {
      question: "Which of the following API is necessary for React.js component?",
      answers: ["State", "RenderComponent", "Render", "Props"],
      correct: "Render"
    },
    {
      question: "Which of the following mounting methods are invoked before the component is inserted into DOM?",
      answers: ["getInitialState, componentWillMount", "componentWillMount", "getInitialState", "getInitialState, componentDidMount"],
      correct: "componentWillMount"
    },
    {
      question: "Components rendered in React must start with ___",
      answers: ["Variable", "Uppercase", "Lowercase", "Curly braces"],
      correct: "Uppercase"
    },
    {
      question: "Which of the following method define default values for properties using props?",
      answers: ["getPropsValue", "getInitialState", "getWillState", "getDefaultProps"],
      correct: "getDefaultProps"
    },
    {
      question: "To achieve dynamic UI updates, which of the following needs to be updated?",
      answers: ["props", "state", "renderComponent", "render"],
      correct: "state"
    },
    {
      question: "In a component's lifecycle, which is executed before render?",
      answers: ["componentDidMount", "componentWillMount", "shouldComponentUpdate", "componentWillReceiveProps"],
      correct: "componentWillMount"
    },
    {
      question: "How do you access the state of a component from within a member function?",
      answers: ["this.getState()", "this.state.value", "this.state", "this.value"],
      correct: "this.state"
    },
    {
      question: "How can a child pass data to a parent?",
      answers: ["State", "Props", "Call a function declared in the parent", "A child cannot pass data to a parent"],
      correct: "Call a function declared in the parent"
    },
    {
      question: "How can a child pass data to a parent?",
      answers: ["State", "Props", "Call a function declared in the parent", "A child cannot pass data to a parent"],
      correct: "Call a function declared in the parent"
    },
    {
      question: "What is the smallest building block of React?",
      answers: ["Props", "Elements", "Components", "None of the above"],
      correct: "Elements"
    },
    {
      question: "React considers everything as ___",
      answers: ["User Interface", "Elements", "Components", "Objects"],
      correct: "Components"
    },
    {
      question: "React keeps track of what items have changed, been added, or been removed from a list using ___",
      answers: ["State", "Props", "Keys", "Ref"],
      correct: "Keys"
    },
    {
      question: "React support all the syntax of",
      answers: ["ES6", "Redux", "Native Java", "All of the above"],
      correct: "ES6"
    },
    {
      question: "What is a difference between function components and class components?",
      answers: ["Only class components can receive props", "Function components cannot have state", "Class components require render", "All of the above"],
      correct: "Class components require render"
    },
    {
      question: "What are the options for styling a React application?",
      answers: ["CSS Classes", "Inline CSS", "CSS-in-JS", "All of the above"],
      correct: "All of the above"
    },
    {
      question: "At the highest level, React components have lifecycle events that fall into",
      answers: ["Initialization", "State/Property updates", "Destruction", "All of the above"],
      correct: "All of the above"
    },
  ]
 
  const generateRandomQuestion = () => questionsBank[Math.floor(Math.random() * questionsBank.length)]
 
  const checkForDuplicate = (element, array) => {
    if (array.includes(element)) {
      const newElement = generateRandomQuestion()
      checkForDuplicate(newElement, array)
    } else {
      array.push(element)
    }
  }
 
  export const questionsFromBank = (numberOfQuestions) => {
    const quizQuestions = []
    for (let i = 0; i < numberOfQuestions; i++) {
      const question = generateRandomQuestion()
      checkForDuplicate(question, quizQuestions)
    }
    return quizQuestions
  }