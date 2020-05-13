import React from 'react';
import './App.scss';

import Topbar from './components/Topbar';
import Contacts from './components/Contacts';

const App = () => {
  return (
    <div className="app" data-testid="app">
    	<div className='github__icon'>
    		<div className='container'>
					<a href='https://github.com/arilsonsouza/codenation-aceleradev-react/tree/master/react-14'>
						<i className='fab fa-github'></i>
    			</a>
    		</div>
    	</div>

			<Topbar/>
			
			<div>
     		<Contacts/>
			</div>

    </div>
  )

}

export default App;
