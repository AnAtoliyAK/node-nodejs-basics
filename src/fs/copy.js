import { mkdirSync, readdirSync, lstatSync, copyFileSync } from "fs";
import path from "path";
import { getFilePath } from "../utils/getFilePath.js";
import { TEXT_COLORS, TEXT_MESSAGES } from "../constants/common.js";

export const copy = async () => {
    const copyFolderSync = (from, to) => {
        mkdirSync(to);

        readdirSync(from).forEach((element) => {
            if (lstatSync(path.join(from, element)).isFile()) {
                copyFileSync(path.join(from, element), path.join(to, element));
            } else {
                copyFolderSync(path.join(from, element), path.join(to, element));
            }
        });
    };

    const fromPath = getFilePath(import.meta.url, "files");
    const toPath = getFilePath(import.meta.url, "files_copy");

    try {
        copyFolderSync(fromPath, toPath);
        console.log(TEXT_COLORS.SUCCESS, TEXT_MESSAGES.COPY_SUCCESSFUL)
    } catch (err) {
        console.error(TEXT_COLORS.ERROR, TEXT_MESSAGES.FS_OPERATION_FAILED)
    }
};

copy();
