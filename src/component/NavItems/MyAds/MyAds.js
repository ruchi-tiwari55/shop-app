import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const MyAds = () => {
  const [ads, setAds] = useState([
    {
      images: [
        'https://via.placeholder.com/50',
        'https://via.placeholder.com/50',
        'https://via.placeholder.com/50',
        'https://via.placeholder.com/50'
      ],
      category: 'Electronics',
      title: 'Laptop',
      sellingPrice: '500',
      description: 'A used laptop in good condition.',
    },
    {
      images: [
        'https://via.placeholder.com/50',
        'https://via.placeholder.com/50',
        'https://via.placeholder.com/50',
        'https://via.placeholder.com/50'
      ],
      category: 'Furniture',
      title: 'Chair',
      sellingPrice: '50',
      description: 'A wooden chair.',
    },
    {
      images: [
        'https://via.placeholder.com/50',
        'https://via.placeholder.com/50',
        'https://via.placeholder.com/50',
        'https://via.placeholder.com/50'
      ],
      category: 'Automotive',
      title: 'Car',
      sellingPrice: '15000',
      description: 'A used car in excellent condition.',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [adsPerPage] = useState(5);

  const indexOfLastAd = currentPage * adsPerPage;
  const indexOfFirstAd = indexOfLastAd - adsPerPage;

  const currentAds = ads
    .filter((ad) => {
      const values = Object.values(ad).join(' ').toLowerCase();
      return values.includes(searchTerm.toLowerCase());
    })
    .slice(indexOfFirstAd, indexOfLastAd);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ width: '80%', margin: '20px auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333', textTransform: 'uppercase' }}>My Ads</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px', padding: '8px', borderRadius: '5px', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }}
      />

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>S.No.</th>
             <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Image</th>
             <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Category</th>
             <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Title</th>
             <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Selling Price</th>
             <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Description</th>
             <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Edit</th>
            {/* <th>S.No.</th>
            <th>Images</th>
            <th>Category</th>
            <th>Title</th>
            <th>Selling Price</th>
            <th>Description</th>
            <th>Edit</th> */}
          </tr>
        </thead>
        <tbody>
          {currentAds.map((ad, index) => (
            <tr key={index}>
              <td>{index + 1 + (currentPage - 1) * adsPerPage}</td>
              <td>
                {ad.images.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img}
                    alt={`product ${imgIndex}`}
                    style={{ height: '50px', width: '50px', borderRadius: '5px', marginRight: '5px' }}
                  />
                ))}
              </td>
              <td>{ad.category}</td>
              <td>{ad.title}</td>
              <td>{ad.sellingPrice}</td>
              <td>{ad.description}</td>
              <td>
                <button onClick={() => console.log('Edit')} style={{ padding: '5px', borderRadius: '3px', backgroundColor: '#ffcc00', color: '#fff', border: 'none', cursor: 'pointer' }}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {adsPerPage < ads.length && (
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center' }}>
            {Array.from({ length: Math.ceil(ads.length / adsPerPage) }, (_, i) => (
              <li key={i} style={{ marginRight: '10px' }}>
                <button onClick={() => paginate(i + 1)} style={{ padding: '5px 10px', borderRadius: '3px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyAds;








// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

// function MyAds() {
//   const [ads, setAds] = useState([
//     {
//       image: 'https://via.placeholder.com/50',
//       category: 'Electronics',
//       title: 'Laptop',
//       sellingPrice: '500',
//       description: 'A used laptop in good condition.',
//     },
//     {
//       image: 'https://via.placeholder.com/50',
//       category: 'Furniture',
//       title: 'Chair',
//       sellingPrice: '50',
//       description: 'A wooden chair.',
//     },
//     {
//       image: 'https://via.placeholder.com/50',
//       category: 'Automotive',
//       title: 'Car',
//       sellingPrice: '15000',
//       description: 'A used car in excellent condition.',
//     },
//   ]);

//   const [editIndex, setEditIndex] = useState(null);
//   const [adData, setAdData] = useState({
//     image: '',
//     category: '',
//     title: '',
//     sellingPrice: '',
//     description: '',
//   });

//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [adsPerPage] = useState(5); // Number of ads to display per page

//   // Pagination logic
//   const indexOfLastAd = currentPage * adsPerPage;
//   const indexOfFirstAd = indexOfLastAd - adsPerPage;
//   const currentAds = ads
//     .filter((ad) => {
//       const values = Object.values(ad).join(' ').toLowerCase();
//       return values.includes(searchTerm.toLowerCase());
//     })
//     .slice(indexOfFirstAd, indexOfLastAd);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setAdData({ ...adData, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (editIndex !== null) {
//       const updatedAds = [...ads];
//       updatedAds[editIndex] = adData;
//       setAds(updatedAds);
//       setEditIndex(null);
//     } else {
//       setAds([...ads, adData]);
//     }
//     setAdData({
//       image: '',
//       category: '',
//       title: '',
//       sellingPrice: '',
//       description: '',
//     });
//   };

//   const handleEdit = (index) => {
//     setEditIndex(index);
//     setAdData(ads[index]);
//   };

//   const handleDelete = (index) => {
//     setAds(ads.filter((_, i) => i !== index));
//   };

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div style={{ width: '80%', margin: '20px auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
//       <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333', textTransform: 'uppercase' }}>Product Ads</h2>
//       <input 
//         type="text" 
//         placeholder="Search..." 
//         value={searchTerm} 
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{ marginBottom: '20px', padding: '8px', borderRadius: '5px', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }}
//       />

//       {/* <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
//         <input 
//           type="text" 
//           name="image" 
//           placeholder="Image URL" 
//           value={adData.image} 
//           onChange={handleInputChange} 
//           style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd', width: '100%', marginBottom: '10px' }} 
//         />
//         <input 
//           type="text" 
//           name="category" 
//           placeholder="Category" 
//           value={adData.category} 
//           onChange={handleInputChange} 
//           style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd', width: '100%', marginBottom: '10px' }} 
//         />
//         <input 
//           type="text" 
//           name="title" 
//           placeholder="Title" 
//           value={adData.title} 
//           onChange={handleInputChange} 
//           style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd', width: '100%', marginBottom: '10px' }} 
//         />
//         <input 
//           type="text" 
//           name="sellingPrice" 
//           placeholder="Selling Price" 
//           value={adData.sellingPrice} 
//           onChange={handleInputChange} 
//           style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd', width: '100%', marginBottom: '10px' }} 
//         />
//         <textarea 
//           name="description" 
//           placeholder="Description" 
//           value={adData.description} 
//           onChange={handleInputChange} 
//           style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd', width: '100%', marginBottom: '10px', minHeight: '50px' }} 
//         />
//         <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
//           {editIndex !== null ? 'Update' : 'Add'} Ad
//         </button>
//       </form> */}

//       <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//         <thead>
//           <tr>
//             <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>S.No.</th>
//             <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Image</th>
//             <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Category</th>
//             <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Title</th>
//             <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Selling Price</th>
//             <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Description</th>
//             <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Edit</th>
//             {/* <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2' }}>Delete</th> */}
//           </tr>
//         </thead>
//         <tbody>
//           {currentAds.map((ad, index) => (
//             <tr key={index}>
//               <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{index + 1 + (currentPage - 1) * adsPerPage}</td>
//               <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
//                 <img src={ad.image} alt="product" style={{ height: '50px', width: '50px', borderRadius: '5px' }} />
//               </td>
//               <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{ad.category}</td>
//               <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{ad.title}</td>
//               <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{ad.sellingPrice}</td>
//               <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{ad.description}</td>
//               <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
//                 <button onClick={() => handleEdit(index)} style={{ padding: '5px', borderRadius: '3px', backgroundColor: '#ffcc00', color: '#fff', border: 'none', cursor: 'pointer' }}>
//                   <FontAwesomeIcon icon={faEdit} />
//                 </button>
//               </td>
//               {/* <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
//                 <button onClick={() => handleDelete(index)} style={{ padding: '5px', borderRadius: '3px', backgroundColor: '#ff0000', color: '#fff', border: 'none', cursor: 'pointer' }}>
//                   <FontAwesomeIcon icon={faTrashAlt} />
//                 </button>
//               </td> */}
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div style={{ textAlign: 'center', marginTop: '20px' }}>
//         {adsPerPage < ads.length && (
//           <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center' }}>
//             {Array.from({ length: Math.ceil(ads.length / adsPerPage) }, (_, i) => (
//               <li key={i} style={{ marginRight: '10px' }}>
//                 <button onClick={() => paginate(i + 1)} style={{ padding: '5px 10px', borderRadius: '3px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>{i + 1}</button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// export default MyAds;
