// src/pages/Products/Products.tsx
import { useState, useMemo } from 'react';
import { 
  FaBacon, 
  FaUtensils,
  FaSearch,
  FaFilter
} from 'react-icons/fa';
import { GiChicken, GiSausage, GiCow, GiSheep } from 'react-icons/gi';
import './Products.css';

// Sample product data - replace with actual products
const sampleProducts = [
  // Beef Products
  {
    id: 1,
    name: "Scotch Fillet Steak",
    category: "beef",
    description: "Premium grass-fed scotch fillet, perfectly marbled for exceptional flavor.",
    price: 42.99,
    unit: "kg",
    image: "/products/scotch_fillet.webp", 
    featured: true
  },
  {
    id: 2,
    name: "Eye Fillet",
    category: "beef",
    description: "Tender eye fillet steaks, ideal for special occasions.",
    price: 55.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop&q=80",
    featured: true
  },
  {
    id: 3,
    name: "T-Bone Steak",
    category: "beef",
    description: "Classic T-bone with both fillet and sirloin, perfect for grilling.",
    price: 38.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Beef Mince",
    category: "beef",
    description: "Fresh premium beef mince, perfect for burgers and pasta sauces.",
    price: 18.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Ribeye Steak",
    category: "beef",
    description: "Well-marbled ribeye with exceptional flavor and tenderness.",
    price: 45.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 6,
    name: "Beef Brisket",
    category: "beef",
    description: "Perfect for slow cooking and smoking, rich and flavorful.",
    price: 28.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop&q=80"
  },

  // Lamb Products
  {
    id: 7,
    name: "Lamb Cutlets",
    category: "lamb",
    description: "French-trimmed lamb cutlets, elegant and flavorful.",
    price: 48.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=600&h=400&fit=crop&q=80",
    featured: true
  },
  {
    id: 8,
    name: "Lamb Leg Roast",
    category: "lamb",
    description: "Boneless lamb leg roast, perfect for Sunday dinner.",
    price: 32.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1619741153646-3b1c0e6d6ab2?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 9,
    name: "Lamb Shoulder",
    category: "lamb",
    description: "Succulent lamb shoulder, ideal for slow roasting.",
    price: 29.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1595777216528-071e0127ccf2?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 10,
    name: "Lamb Rack",
    category: "lamb",
    description: "Premium lamb rack, perfect for special occasions.",
    price: 52.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop&q=80"
  },

  // Pork Products
  {
    id: 11,
    name: "Pork Belly",
    category: "pork",
    description: "Quality pork belly with perfect fat ratio for crispy crackling.",
    price: 26.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=600&h=400&fit=crop&q=80",
    featured: true
  },
  {
    id: 12,
    name: "Pork Loin Chops",
    category: "pork",
    description: "Thick-cut pork loin chops, great for grilling or pan-frying.",
    price: 22.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 13,
    name: "Pork Ribs",
    category: "pork",
    description: "Succulent pork ribs, perfect for BBQ and slow cooking.",
    price: 24.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 14,
    name: "Pork Shoulder",
    category: "pork",
    description: "Versatile cut ideal for pulled pork and roasting.",
    price: 19.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=600&h=400&fit=crop&q=80"
  },

  // Chicken Products
  {
    id: 15,
    name: "Chicken Breast",
    category: "poultry",
    description: "Skinless chicken breast fillets, versatile and lean.",
    price: 16.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 16,
    name: "Whole Chicken",
    category: "poultry",
    description: "Free-range whole chicken, perfect for roasting.",
    price: 14.99,
    unit: "each",
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 17,
    name: "Chicken Thighs",
    category: "poultry",
    description: "Juicy chicken thighs with skin, full of flavor.",
    price: 13.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 18,
    name: "Chicken Wings",
    category: "poultry",
    description: "Fresh chicken wings, perfect for grilling and frying.",
    price: 11.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&h=400&fit=crop&q=80"
  },

  // Sausages
  {
    id: 19,
    name: "Traditional Beef Sausages",
    category: "sausages",
    description: "Classic beef sausages with our secret herb blend.",
    price: 15.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 20,
    name: "Italian Pork Sausages",
    category: "sausages",
    description: "Flavorful Italian-style pork sausages with fennel and herbs.",
    price: 17.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1501959915551-4e8d30928317?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 21,
    name: "Chorizo Sausages",
    category: "sausages",
    description: "Spicy Spanish-style chorizo sausages.",
    price: 19.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1624869365901-5744a2c0b8fc?w=600&h=400&fit=crop&q=80"
  },
  {
    id: 22,
    name: "Breakfast Sausages",
    category: "sausages",
    description: "Mild pork breakfast sausages, a morning favorite.",
    price: 14.99,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1606242420883-dcf8b257a8c6?w=600&h=400&fit=crop&q=80"
  }
];

const categories = [
  { id: 'all', name: 'All Products', icon: <FaUtensils /> },
  { id: 'beef', name: 'Beef', icon: <GiCow /> },
  { id: 'lamb', name: 'Lamb', icon: <GiSheep /> },
  { id: 'pork', name: 'Pork', icon: <FaBacon /> },
  { id: 'poultry', name: 'Poultry', icon: <GiChicken /> },
  { id: 'sausages', name: 'Sausages', icon: <GiSausage /> }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    return sampleProducts.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const featuredProducts = sampleProducts.filter(product => product.featured);

  return (
    <div className="products">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <h1 className="products-title">Our Premium Cuts</h1>
          <p className="products-subtitle">
            Expertly selected and prepared meats for every occasion
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <h2 className="section-title">Featured Cuts</h2>
          <div className="featured-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="featured-card">
                <div className="featured-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="featured-content">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="price">
                    ${product.price}/{product.unit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Filter & Search */}
      <section className="products-filters">
        <div className="container">
          <div className="filter-container">
            {/* Category Filter */}
            <div className="category-filter">
              <FaFilter className="filter-icon" />
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-button ${
                    selectedCategory === category.id ? 'active' : ''
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search cuts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section">
        <div className="container">
          <div className="products-header">
            <h2 className="section-title">
              {selectedCategory === 'all' ? 'All Products' : 
               categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <span className="product-count">
              {filteredProducts.length} products
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="no-results">
              <p>No products found matching your criteria.</p>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-content">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <div className="product-footer">
                      <div className="price">
                        ${product.price}<span>/{product.unit}</span>
                      </div>
                      <button className="inquire-button">
                        Inquire
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="products-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Can't Find What You're Looking For?</h2>
            <p>
              We offer custom cuts and specialty orders. Contact us for 
              wholesale inquiries or special requests.
            </p>
            <div className="cta-buttons">
              <a href="tel:0297425087" className="primary-button">
                Call to Order
              </a>
              <button className="secondary-button">
                Custom Order Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;