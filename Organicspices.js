import React, { useState } from 'react';

const marqueeSpices = [
   { id: 1, name: 'Star Anise', image: 'https://occasionsdryfruit.com/wp-content/uploads/2022/12/Badiyaan-Phool-3-1-jpg.webp' },
  { id: 2, name: 'Cardamom', image: 'https://www.wayanadgreenfresh.com/cdn/shop/files/gps_generated.png?v=1736392087' },
  { id: 3, name: 'Cloves', image: 'https://tildaricelive.s3.eu-central-1.amazonaws.com/wp-content/uploads/2022/01/18135455/Cloves%402440x1200px-1024x504.jpg' },
  { id: 4, name: 'Cinnamon', image: 'https://images.immediate.co.uk/production/volatile/sites/30/2016/08/cinnamon-benefits44-724deaf.jpg?quality=90&resize=440,400' },
  { id: 5, name: 'Bay Leaf', image: 'https://images.healthshots.com/healthshots/en/uploads/2024/10/22153857/Bay-leaf.jpg' },
  { id: 6, name: 'Black Pepper', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI4ET0vFJ1qhu1rKxGFP-uPlsZm4Tf02oh5A&s' },
  { id: 7, name: 'Turmeric', image: 'https://elthecook.co.in/cdn/shop/products/haldi-powder.jpg?v=1602868426' },
  { id: 8, name: 'Ajwaein', image: 'https://m.media-amazon.com/images/I/517HMVrreFL.AC_UF1000,1000_QL80.jpg' },
  { id: 9, name: 'Rai', image: 'https://images.herzindagi.info/image/2020/Sep/mustard-seeds-beauty-main.jpg' },
  { id: 10, name: 'Fennel seed', image: 'https://m.media-amazon.com/images/I/51zRlm2sEXL.AC_UF1000,1000_QL80.jpg' }
];
const products = [{ id: 1, name: 'Star Anise', price: 120, image: 'https://spiceberries.in/wp-content/uploads/2023/08/staranise.webp' },
  {id: 2, name: 'Red Chilli', price: 80, image: 'https://www.neonaturalindustries.com/wp-content/uploads/2022/06/red-chillies.jpg' },
  { id: 3, name: 'Turmeric', price: 60, image: 'https://lloydspharmacy.com/cdn/shop/articles/Turmeric.jpg?v=1624027015' },
   { id: 4, name: 'Parsely', price: 80, image: 'https://weaveskart.com/wp-content/uploads/2023/05/Dried-Parsley-Leaves_700x700-5.jpg' },
  { id: 5, name: 'Cardamom', price: 90, image: 'https://thewholesaler.in/cdn/shop/products/Green-Cardamon-Powder-Choti-Elaichi-Ilayachi-Elettaria-cardamomum-TheWholesalerCo-35821298.jpg' },
  { id: 6, name: 'Cloves', price: 110, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpjsg9Nro3vZYpR84gPskMhHG8CWrtW4tQUA&s' },
  { id: 7, name: 'Cinnamon', price: 80, image: 'https://media.istockphoto.com/id/153827056/photo/cinnamon-sticks-and-powder.jpg?s=612x612&w=0&k=20&c=kElz_57Nd0bWeGIVgCiY2GF5XepTcB_TyNuIy6R8wUQ=' },
  { id: 5, name: 'Bay Leaf', price: 60, image: 'https://www.thetakeout.com/img/gallery/is-it-dangerous-to-eat-bay-leaves/intro-1728667848.jpg' },
  { id: 9, name: 'Coriander', price: 60, image: 'https://adukkalaonline.in/cdn/shop/products/CorianderPowder.jpg?v=1644263197' },
  { id: 10, name: 'Fennel seeds', price: 60, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzqNWL6TJLqvwcknMjnJ99xAgKxJyMg4_PAw&s' },
   { id: 11, name: 'Nutmeg', price: 80, image: 'https://images.meesho.com/images/products/312964011/io7hv_512.webp' },
  { id: 12, name: 'Cumin', price: 60, image: 'https://5.imimg.com/data5/SELLER/Default/2024/7/438570590/CK/GS/CV/225644287/cumin-powder.jpg' },
];
const reviews = [ {
    id: 1,
    name: 'Amit Sharma',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    review: 'Loved the quality of spices! Will buy again.'
  },
  {
    id: 2,
    name: 'Priya Verma',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    review: 'Super fresh and aromatic. Fast delivery too!'
  },
  {
    id: 3,
    name: 'Rahul Singh',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
    review: 'Great packaging and value for money.'
  }
];
function ReviewsSection() {
  return (
    <div style={{ padding: '2rem', background: '#fdf6f0' }}>
      <h2 style={{ color: '#d35400', marginBottom: '1.5rem' }}>Customer Reviews</h2>
      <div style={{
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap'
      }}>
        {reviews.map(r => (
          <div key={r.id} style={{
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            padding: '1rem',
            width: '330px',
            textAlign: 'center'
          }}>
            <img
              src={r.image}
              alt={r.name}
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '1rem'
              }}
            />
            <h4 style={{ margin: '0.5rem 0', color: '#d35400' }}>{r.name}</h4>
            <p style={{ fontStyle: 'italic', color: '#555' }}>{r.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div style={{ fontFamily: 'sans-serif', background: '#fff8f0', minHeight: '100vh' }}>
      {/* Navbar */}
      {<nav style={{
        background: '#d35400',
        color: '#fff',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'auto',
        fontWeight: 'bold',
        fontSize: '1rem',
        letterSpacing: '1px',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <span style={{fontSize: '1.9rem',}}>SpiceBazaar🌶</span>
         <span>👤My Account&nbsp;&nbsp; 💁🏻‍♀Customer Help&nbsp;&nbsp; 🛒 Cart ({cart.length})</span>
      </nav>
};

      {/* Marquee Section */}
       { <div style={{
        overflow: 'hidden', // Hides parts of the inner div that are outside
        whiteSpace: 'nowrap', // Keeps images in a single line
        background: '#fdf2e9',
        padding: '1rem 0',
      }}>
        <div style={{
          display: 'inline-block', // Allows the div to be as wide as its content
          animation: 'marquee-scroll 20s linear infinite' // The CSS animation
        }}>
          {/* Map through your spice images */}
          {marqueeSpices.map(spice => (
            <img
              key={spice.id}
              src={spice.image}
              alt={spice.name}
              style={{
                height: '100px',
                width: '100px',
                objectFit: 'cover',
                margin: '0 1rem',
                borderRadius: '10px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
              }}
            />
          ))}
          {/* Duplicate the images for a seamless loop */}
           {marqueeSpices.map(spice => (
            <img
              key={spice.id + '-dup'} // Important to have unique keys
              src={spice.image}
              alt={spice.name}
              style={{
                height: '100px',
                width: '100px',
                objectFit: 'cover',
                margin: '0 1rem',
                borderRadius: '10px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
              }}
            />
          ))}
        </div>
      </div>
};

      {/* Product List */}
      <h2 style={{ margin: '2rem 0 1rem 2rem', color: '#d35400' }}>Our Spices</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(2, auto)',
        gap: '2rem',
        padding: '1rem 2rem'
      }}>
        {products.map(product => (
          <div key={product.id} style={{
            background: '#fff',
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            textAlign: 'center',
            padding: '1rem'
          }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '180px',
                height: '170px',
                objectFit: 'cover',
                borderRadius: '12px',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{ color: '#d35400' }}>{product.name}</h3>
            <p style={{ fontWeight: 'bold', margin: '0.5rem 0' }}>₹{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              style={{
                background: '#d35400',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '0.5rem 1rem',
                cursor: 'pointer'
              }}> Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Reviews Section */}
      <ReviewsSection />
    </div>
  );
}

export default App;
