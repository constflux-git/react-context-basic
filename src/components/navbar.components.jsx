import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';
// export class Navbar extends Component {
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {(authContext) => (
//           <ThemeContext.Consumer>
//             {(themeContext) => {
//               const { isLightTheme, dark, light } = themeContext;
//               const theme = isLightTheme ? light : dark;
//               const { isAuthenticated, toggleAuth } = authContext;
//               return (
//                 <nav style={{ background: theme.ui, color: theme.syntax }}>
//                   <h1>Book List</h1>
//                   <div onClick={toggleAuth}>
//                     {isAuthenticated ? 'Logged In' : 'logged out'}
//                   </div>
//                   <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Content</li>
//                   </ul>
//                 </nav>
//               );
//             }}
//           </ThemeContext.Consumer>
//         )}
//       </AuthContext.Consumer>
//     );
//   }
// }

const Navbar = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { toggleAuth, isAuthenticated } = useContext(AuthContext);
  return (
    <div>
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Book List</h1>
        <div onClick={toggleAuth}>
          {isAuthenticated ? 'Logged In' : 'logged out'}
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Content</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
