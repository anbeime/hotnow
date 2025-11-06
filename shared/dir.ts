import { fileURLToPath } from "node:url"
import { dirname } from "node:path"

export const projectDir = dirname(dirname(fileURLToPath(import.meta.url)))
