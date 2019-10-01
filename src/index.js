import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter, Route } from 'react-router-dom';
import Blog from './components/pages/blog';
import Contact from './components/pages/contact';
import Newsletter from './components/pages/newsletter';
import Services from './components/pages/services';
import Tools from './components/pages/tools';




ReactDOM.render(
 <div>
<BrowserRouter>
   <div>
   <Route path='/' component={App} />
   <Route path='/blog' component={Blog} />
   <Route path='/contact' component={Contact} />
   <Route path='/newsletter' component={Contact} />
   <Route path='/services' component={Services} />
   <Route path='/tools' component={Tools} />
  </div>
</BrowserRouter>
</div>
 ,document.getElementById('root') );
