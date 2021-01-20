import request from '@/utils/request'
import NetworkError from '@/errors/network'
/**
 *
 * @param {number} category Product category id
 */
export async function fetchProduct(category) {
  try {
    const response = await request({
      url: '/api/product',
      method: 'get',
      params: { category },
    })
    return Promise.resolve(response)
  } catch (error) {
    return Promise.reject(new NetworkError(error))
  }
}

export async function fetchProductCategory() {
  try {
    const response = await request({
      url: '/api/product-category',
      method: 'get',
    })
    return Promise.resolve(response)
  } catch (error) {
    return Promise.reject(new NetworkError(error))
  }
}
