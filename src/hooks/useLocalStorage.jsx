
export default function useLocalStorage(entry) {
    const dataStored = JSON.parse(localStorage.getItem(entry)) || []
    return dataStored
}