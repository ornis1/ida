export function formatImgUrl(url = '') {
  if (!url || !url.startsWith('/')) return url

  return `${process.env.API_URL}${url}`
}

export function formatPrice(price) {
  const formater = new Intl.NumberFormat('ru-RU', {
    currency: 'RUB',
  })

  return formater.format(price) + '₽'
}
