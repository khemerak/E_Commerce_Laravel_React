import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import BestSelling from '../components/BestSelling'

export default function Shop() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Psychology of Money",
      author: "Morgan Housel",
      price: 870,
      category: "Finance",
      image: "src/images/product-item1.png",
      rating: 5,
      discount: 10
    },
    {
      id: 2,
      title: "The Two Towers",
      author: "J.R.R Tolkien",
      price: 870,
      category: "Fantasy",
      image: "src/images/product-item2.png",
      rating: 5
    },
    // Add more products as needed
  ])

  const [sortBy, setSortBy] = useState('default')
  const [filterCategory, setFilterCategory] = useState('all')
  const [priceRange, setPriceRange] = useState('all')

  const categories = ['all', 'Romance', 'Fantasy', 'Finance', 'Manga', 'Manhwa']
  const priceRanges = [
    { label: 'All', value: 'all' },
    { label: 'Under $500', value: '0-500' },
    { label: '$500 - $1000', value: '500-1000' },
    { label: 'Over $1000', value: '1000+' }
  ]

  const filterProducts = () => {
    let filtered = [...products]

    // Filter by category
    if (filterCategory !== 'all') {
      filtered = filtered.filter(product => product.category === filterCategory)
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-')
      filtered = filtered.filter(product => {
        if (max === '+') return product.price >= parseInt(min)
        return product.price >= parseInt(min) && product.price <= parseInt(max)
      })
    }

    // Sort products
    switch (sortBy) {
      case 'price-low-high':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high-low':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'name-a-z':
        filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
      case 'name-z-a':
        filtered.sort((a, b) => b.title.localeCompare(a.title))
        break
      default:
        break
    }

    return filtered
  }

  const filteredProducts = filterProducts()

  const sortOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Price: Low to High', value: 'price-low-high' },
    { label: 'Price: High to Low', value: 'price-high-low' },
    { label: 'Name: A to Z', value: 'name-a-z' },
    { label: 'Name: Z to A', value: 'name-z-a' }
  ]

  return (
    <div className="padding-large">
      <div className="container">
        {/* Page Header */}
        <div className="section-header d-flex justify-content-between align-items-center mb-5">
          <h2>Shop Books</h2>
          <div className="d-flex align-items-center">
            <label className="me-2">Sort by:</label>
            <select 
              className="form-select" 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="name-a-z">Name: A to Z</option>
              <option value="name-z-a">Name: Z to A</option>
            </select>
          </div>
        </div>

        <div className="row">
          {/* Sidebar Filters */}
          <div className="col-lg-3">
            <div className="shop-filters">
              <div className="filter-section mb-4">
                <h5 className="mb-3">Categories</h5>
                <div className="list-group">
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`list-group-item list-group-item-action ${filterCategory === category ? 'active' : ''}`}
                      onClick={() => setFilterCategory(category)}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-section mb-4">
                <h5 className="mb-3">Price Range</h5>
                <div className="list-group">
                  {priceRanges.map(range => (
                    <button
                      key={range.value}
                      className={`list-group-item list-group-item-action ${priceRange === range.value ? 'active' : ''}`}
                      onClick={() => setPriceRange(range.value)}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="col-lg-9">
            <div className="row g-4">
              {filteredProducts.map(product => (
                <div key={product.id} className="col-md-4">
                  <div className="card position-relative h-100">
                    {product.discount && (
                      <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                        {product.discount}% off
                      </span>
                    )}
                    <img 
                      src={product.image} 
                      className="card-img-top p-3" 
                      alt={product.title} 
                    />
                    <div className="card-body p-3 pt-0">
                      <h6 className="card-title">{product.title}</h6>
                      <p className="text-muted mb-1">{product.author}</p>
                      <div className="d-flex align-items-center mb-2">
                        <div className="text-warning me-2">
                          {'★'.repeat(product.rating)}
                        </div>
                      </div>
                      <p className="text-primary fw-bold mb-0">${product.price}</p>
                    </div>
                    <div className="card-footer bg-transparent border-0 p-3">
                      <NavLink to="/" className="btn btn-primary w-100">Add to Cart</NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BestSelling />
    </div>
  )
}
