import {configure, setAddon, addDecorator} from '@storybook/react';
import React from 'react';
import JSXAddon from 'storybook-addon-jsx';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../src/index.css';
setAddon(JSXAddon);

Enzyme.configure({adapter: new Adapter()});

const req = require.context('../src/stories', true, /\.stories\.js$/)
const styles = {
  "margin": '0 auto',
  "marginTop": '100px',
  "display": 'block',
  "textAlign": 'center',
  "width": '100%'
}
const CenterDecorator = (storyFn) => (<div className="clearfix center" style={styles}>
  {storyFn()}
</div>)
const ErrorDecorator = (storyFn) => (<ErrorBoundary>
  {storyFn()}
</ErrorBoundary>)

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

addDecorator(CenterDecorator);
addDecorator(ErrorDecorator);

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
