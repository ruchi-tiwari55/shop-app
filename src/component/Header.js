import React from 'react';
import Logo from '../../src/assest/logo.png';

export default function Header() {
   return (
      <header className="d-flex shadow p-3 bg-white rounded">
      <img src={Logo} alt="Logo" className="" />
      <h3 className='pt-4 px-4'>Welcome to NHS Home Service</h3>
    </header>
   );
}


// import React from 'react';
// import Logo from '../../src/assest/logo.png';

// export default function Header() {
//   return (
//     <header
//       className="d-flex shadow p-3 bg-white rounded fixed-top"
//       style={{ zIndex: 1000 }} // Ensures the header stays on top
//     >
//       <img src={Logo} alt="Logo" />
//       <h3 className="pt-4 px-4">Welcome to NHS Home Service</h3>
//     </header>
//   );
// }
