export class InternalCache {
    public static Set(key: string, value: string): void {
        localStorage.setItem(key, value);
    }


    public static Get(key: string): any {
        const cache = localStorage.getItem(key);
        if (!cache) {
            return undefined;
        }

        let parse = cache;
        try {
            parse = JSON.parse(cache);
        } catch (error) { /* empty */ }
        return parse;
    }

    public static Delete(key: string): void {
        localStorage.removeItem(key);
    }

    public static DeleteAll(): void {
        localStorage.clear();
    }
}
