import useLocalStorage from './useLocalStorage'

export function useDarkMode(key) {
    const [storedValue, setValue] = useLocalStorage(key)

    return [storedValue, setValue]
}