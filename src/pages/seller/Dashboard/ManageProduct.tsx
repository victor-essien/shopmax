


import React, {useState} from 'react'

import { Plus, Pencil, Trash2 } from 'lucide-react';


const initialProducts = [
  { id: 1, name: 'Oraimo Power Bank', price: 12000, stock: 10 },
  { id: 2, name: 'iPhone Charger', price: 7000, stock: 25 },
];
const ManageProduct: React.FC = () => {
    const [products, setProducts] = useState(initialProducts);
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', price: '', stock: '' });
  const [editId, setEditId] = useState(null);

  const toggleForm = () => {
    setFormOpen(!formOpen);
    setFormData({ name: '', price: '', stock: '' });
    setEditId(null);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (editId) {
      setProducts(products);
    } else {
      const newProduct = {
        id: Date.now(),
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock)
      };
      setProducts([...products, newProduct]);
    }
    toggleForm();
  };

  const handleEdit = (product: any) => {
    setFormData(product);
    setEditId(product.id);
    setFormOpen(true);
  };

  const handleDelete = (id:any) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
     <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Product Management</h1>
        <button onClick={toggleForm} className="flex items-center gap-1">
          <Plus className="w-4 h-4" /> Add Product
        </button>
      </div>

      {formOpen && (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow p-4 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Product Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border rounded p-2"
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="border rounded p-2"
            required
          />
          <input
            type="number"
            placeholder="Stock"
            value={formData.stock}
            onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
            className="border rounded p-2"
            required
          />
          <button type="submit" className="col-span-full md:col-auto">{editId ? 'Update' : 'Add'} Product</button>
        </form>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-left bg-white rounded-2xl shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Product</th>
              <th className="p-3">Price (₦)</th>
              <th className="p-3">Stock</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className="border-t">
                <td className="p-3">{product.name}</td>
                <td className="p-3">{product.price}</td>
                <td className="p-3">{product.stock}</td>
                <td className="p-3 text-right space-x-2">
                  <button onClick={() => handleEdit(product)} >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(product.id)} >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">No products available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageProduct