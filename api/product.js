import request from '@/utils/request'

/**
 *
 * @param {number} category Product category id
 */
export function fetchProduct(category) {
  return request({
    url: '/api/product',
    method: 'get',
    params: { category },
  })
}

export function fetchProductCategory() {
  return request({
    url: '/api/product-category',
    method: 'get',
  })
}
