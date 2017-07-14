// declare var require: {
//     <T>(path: string): T;
//     (paths: string[], callback: (...modules: any[]) => void): void;
//     ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void, chunkName?: string) => void;
// };
interface NodeRequire {
   ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void, chunkName?: string) => void;
}