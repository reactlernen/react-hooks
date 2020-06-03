import { useState } from 'react';

export interface StringEncode<T> {
    (value: T): string;
}

export interface StringDecode<T> {
    (stringValue: string): T;
}

export function jsonStringEncode<T>(value: T): string {
    return JSON.stringify(value);
}

export function jsonStringDecode<T>(stringValue: string): T {
    return JSON.parse(stringValue);
};

export type UsePersistentStateResult<T> = [T, { (valueToStore: T): void }]; 

const usePersistentState = <T>(key: string, initialValue: T, stringEncode: StringEncode<T> = jsonStringEncode, stringDecode: StringDecode<T> = jsonStringDecode) => {
    const storedValue = window.localStorage.getItem(key);
    const [ value, setValue ] = useState(storedValue ? stringDecode(storedValue) : initialValue);

    const storeValue = (valueToStore: T) => {
        if (value === valueToStore) {
            return;
        }
        window.localStorage.setItem(key, stringEncode(valueToStore));
        setValue(valueToStore);
    }

    return [ value, storeValue ] as UsePersistentStateResult<T>;
};

export default usePersistentState;
