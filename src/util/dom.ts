export const cache = new Map<string, HTMLElement>();

export function element<T extends HTMLElement>(query: string) {
    if (cache.get(query)) return cache.get(query);

    const elem = document.querySelector(query) as T;
    cache.set(query, elem);
    return elem;
}