const storageKey = 'STORAGE_KEY'

export function getItems() {
  // const items = window.localStorage.getItem(storageKey) || '{}'
  // return
}

export function setItems(data) {
  return window.localStorage.set(storageKey, JSON.stringify(data))
}

export function removeToken() {
  // return window.localStorage.remove(TokenKey)
}
