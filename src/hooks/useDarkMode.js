import useLocalStorage from './useLocalStorage'

function useDarkMode(key) {
    const [storedValue, setValue] = useLocalStorage(key)

    return [storedValue, setValue]
}

export default useDarkMode