import React, { Component } from 'react';
import marked from 'marked';
import '../styles/markdown.css'

marked.setOptions({
  breaks: true
});
const placeholder =
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`
class MarkdownPreviewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: placeholder,
      output: marked(placeholder)
     }
  }
  
  convertToMarkdown = (e) => {
    let { value } = e.target
    this.setState({
      input: value,
      output: marked(value)
    })
  }

  render() {
    return (
    <div>
      <textarea id="editor" value={this.state.input} onChange={this.convertToMarkdown}/>
      <div id="preview" dangerouslySetInnerHTML={{ __html: this.state.output }}>
      </div>
    </div> );
  }
}

export default MarkdownPreviewer;