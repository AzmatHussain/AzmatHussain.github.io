import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<h1>Hello, React Js</h1>, document.getElementById('root'));

serviceWorker.unregister();

function message (props){
	return ( <h1> this is first component  </h1>);
} 

class MyApp extends React.Component{
	render(){
		return(
		<h1>Hello, this second component</h1>
		);
	}
}

ReactDOM.render(<div>
<message />
<Myapp />
</div>, document.getElementById('root');
)
