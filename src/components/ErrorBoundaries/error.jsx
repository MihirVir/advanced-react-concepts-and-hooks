import React from "react";

/*
 *
 * This is how it is working 
 *
 *
 * The <ChildError /> component is throwing an error then
 * the child is asking the <ParentError /> that if its the ErrorHandler
 * the Parent Component says nope its not then it goes to <App /> app says its
 * not the ErrorHandler and then ask from the <ErrorHandler /> which is the
 * parent of <App /> the <ErrorHandler /> says yes its the ErrorHandler 
 * and the fallback case gets executed
 *
 * */

export class ErrorHandler extends React.Component {
  state = {hasError: false}
  
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) { return this.props.fallback };

    return this.props.children;
  }
}
