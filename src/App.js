import React from 'react'
import Content from './component/Content/Content';
import Header from './component/Header/Header';
import ListContext from './component/ContextApi/ContextApi'

function App() {
  return (
    <div className="App">
      <ListContext>
      <Header />
      <Content />
      </ListContext>
    </div>
  );
}

export default App;
