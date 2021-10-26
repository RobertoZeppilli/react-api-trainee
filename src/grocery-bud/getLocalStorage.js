const getLocalStorage = () => {
    let list = localStorage.getItem('list')
    if (list) {
        list = JSON.parse(localStorage.getItem('list'))
        return list
    } else {
        return []
    }
}
export default getLocalStorage