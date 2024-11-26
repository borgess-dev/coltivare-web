export default function useLocalStorage(key: string){
    const item = (): string => {
        return JSON.stringify(localStorage.getItem(key));
    }

    const setItem = (value: string) => {
        localStorage.setItem(key, value);
    }

    return [ item, setItem ];
}