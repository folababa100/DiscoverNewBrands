import uuid from 'uuid';
import database, { storage } from '../firebase/firebase';

export const addProduct = (product) => ({
  type: 'ADD_PRODUCT',
  product
})

export const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  products
})

export const startAddProduct = (productData = {}) => {
  return (dispatch) => {
    const {
      name = '',
      description = '',
      url = '',
      filePath = '',
      fileUrl = '',
      category = '',
      amount = 0,
      createdAt = 0
    } = productData;

    const product = { name, description, url, filePath, category, fileUrl, amount, createdAt }

    // return database.ref('products').once('value').then((snapshot) => {
    //   const products = [];

    //   snapshot.forEach((childSnapshot) => {
    //     products.push({
    //       id: childSnapshot.key,
    //       ...childSnapshot.val
    //     })
    //   })
    //   dispatch(setProducts(products))
    // })

    return database.ref('products').push(product).then((ref) => {
      dispatch(addProduct({
        id: ref.key,
        ...product
      }))
    })
    
  }
}
