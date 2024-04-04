
import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import appStore from './Utils/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainComponent from './Components/MainComponent';
import WatchPage from './Components/WatchPage';

function App() {
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:"/",
          element:<MainComponent/>
        },
        {
          path:"watch",
          element:<WatchPage/>
        }

      ],
    },
  ]
  
  )

  return (
    <Provider store={appStore}>
      <div >
        <Header/>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>

  );
}

export default App;
