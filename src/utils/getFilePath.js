import { fileURLToPath } from 'url';
import path, { dirname } from "path";

export function getFilePath(moduleUrl, filePath) {
    const __filename = fileURLToPath(moduleUrl);
    const __dirname = dirname(__filename);

    return path.join(__dirname, filePath);
}
