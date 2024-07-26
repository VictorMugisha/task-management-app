
export default function useLocalStorage() {
    const dataStored = JSON.parse(localStorage.getItem("allTasks")) || []
    return dataStored
}