declare namespace ts {
    interface IteratorShim<T> {
        next(): {
            value: T;
            done?: false;
        } | {
            value: never;
            done: true;
        };
    }
    interface MapShim<T> {
        readonly size: number;
        get(key: string): T | undefined;
        set(key: string, value: T): this;
        has(key: string): boolean;
        delete(key: string): boolean;
        clear(): void;
        keys(): IteratorShim<string>;
        values(): IteratorShim<T>;
        entries(): IteratorShim<[string, T]>;
        forEach(action: (value: T, key: string) => void): void;
    }
    export function createMapShim(): new <T>() => MapShim<T>;
    export {};
}
//# sourceMappingURL=shims.d.ts.map