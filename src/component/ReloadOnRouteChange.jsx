// // ReloadOnRouteChange.js
// import React, { useEffect } from 'react';
// import { withRouter } from 'react-router-dom';

// function ReloadOnRouteChange({ history }) {
//   useEffect(() => {
//     const unlisten = history.listen(() => {
//       window.location.reload();
//     });
//     return () => {
//       unlisten();
//     };
//   }, [history]);

//   return null;
// }

// export default withRouter(ReloadOnRouteChange);
