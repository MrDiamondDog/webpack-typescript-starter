import { Timer } from "@type/util/logger";

const ctxStyle = `
    background-color: #003fb5; 
    padding: 5px; 
    height: 5px;
    font-size: 12px;
    margin-right: 0;
`.replaceAll(/\s/g, "");

export function toStringHandler(obj: any): string {
    if (obj instanceof HTMLElement) return obj.outerHTML;
    if (obj instanceof Object) return JSON.stringify(obj, undefined, 4);

    return obj.toString();
}

export function Log(ctx: string, arg: any) {
    console.log(`%c${ctx}`, ctxStyle, arg);
}

export function LogAll(ctx: string, ...args: any[]) {
    args.forEach(arg => Log(ctx, arg));
}

export async function time(func: () => any): Promise<Timer> {
    const start = performance.now();
    const result = await func();
    const end = performance.now();
    return { result, time: end - start };
}