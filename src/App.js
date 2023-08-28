import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/login.component'
import SignUp from './components/signup_component'
import UserDetails from './components/userDetails'

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//           <div className="container">
//             <Link className="navbar-brand" to={'/sign-in'}>
//               positronX
//             </Link>
//             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//               <ul className="navbar-nav ml-auto">
//                 <li className="nav-item">
//                   <Link className="nav-link" to={'/sign-in'}>
//                     Login
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={'/sign-up'}>
//                     Sign up
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>

//         <div className="auth-wrapper">
//           <div className="auth-inner">
//             <Routes>
//               <Route exact path="/" element={<Login />} />
//               <Route path="/sign-in" element={<Login />} />
//               <Route path="/sign-up" element={<SignUp />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   )
// }

function App() {
  return(
    <Router>
      <div className='App'>
        <div className='auth-wraper'>
          <div className='auth-inner'>
            <Routes>
              <Route exact path='/' element={<Login />}/>
              <Route exact path='/sign-in' element={<Login />}/>
              <Route exact path='/sign-up' element={<SignUp />}/>
              <Route exact path='/userDetails' element={<UserDetails />}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App
