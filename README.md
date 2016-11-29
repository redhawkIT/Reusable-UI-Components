Smart/Container Component Characteristics

- Describe how things work
- Provide no DOM markup or styles
- Provide application data, do data fetching
- Top level

Dumb/Presentational Component Characteristics

- Describe how things look
- Low Level
- Have no app dependencies
- Receive only props, providing data and callbacks
- Rarely have own state, when they do, it’s just UI state

Stateless Functional Components (Dumb/Presentational)

- Destructure your props in ES6
- Should state their dependencies. PropType validation is great for this.
- Will soon offer improved performance, no state or lifecycle methods. React team working on.
- Testable:view only renders according to the props passed down

Reusable UI Components

- Dumb/Presentational components
- Often are stateless functional components
- Composing higher-order components
- Styling components based on state or props
- React.PropTypes.node, props.children
- Third-party UI components (Material-UI & React-Bootstrap)
- Don't repeat yourself (DRY)
- Generic & Flexible  
- Building blocks


&lt;SvgIcon/&gt;

&lt;Avatar/&gt;

&lt;List/&gt;

&lt;ListItem/&gt;

&lt;Checkbox/&gt;

[https://medium.com/javascript-inside/some-thoughts-on-function-components-in-react-cb2938686bc7#.prcz9rugq](https://medium.com/javascript-inside/some-thoughts-on-function-components-in-react-cb2938686bc7#.prcz9rugq)

[http://jkaufman.io/reusable-react-components/](http://jkaufman.io/reusable-react-components/)

[https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.lp62ouobn](https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.lp62ouobn)

[https://medium.com/@learnreact/container-components-c0e67432e005#.un8fzfbse](https://medium.com/@learnreact/container-components-c0e67432e005#.un8fzfbse)

[https://www.youtube.com/watch?v=Yy7gFgETp0o](https://www.youtube.com/watch?v=Yy7gFgETp0o) - Netflix JavaScript Talks - React plus X: Best Practices for Reusable UI Components

[http://jaketrent.com/post/smart-dumb-components-react/](http://jaketrent.com/post/smart-dumb-components-react/)

[https://tryolabs.com/blog/2015/04/13/a-reusable-modal-component-in-react/](https://tryolabs.com/blog/2015/04/13/a-reusable-modal-component-in-react/)

[https://www.ibm.com/developerworks/library/wa-react-intro/](https://www.ibm.com/developerworks/library/wa-react-intro/)

[React Storybook Material UI Themi Editor](https://sm-react.github.io/storybook-addon-material-ui/?theme-ind=0&theme-sidebar=true&selectedKind=Material%20App&selectedStory=Airline%20Booking&full=0&down=1&left=1&panelRight=0&downPanel=sm%2Fstorybook-addon-material-ui%2Fmaterial-panel)

Notes

https://babeljs.io/blog/2015/06/07/react-on-es6-plus

ES7 Property Initialiazers
ES7 Object Spread Operator (Object.assign())
ES6 Array Spread Operator (Array.concat())
arrow functions and property initializers
propTypes - typechecking on the props for a component
defaultProps - ensure that this.props[‘name’] will have a value if it was not specified by the parent component
Call super(props) only if you want to access this.props inside the constructor. React automatically set it for you if you want to access it anywhere else
