import fs from 'fs'
import sizeOf from 'image-size'
import mime from 'mime'
import path from 'path'
import { promisify } from 'util'

interface FileInfo {
  name: string
  height: number
  width: number
  url: string
  mimeType: string
  size: number
}

const asyncSizeOf = promisify(sizeOf)

export class FileHelper {
  static publicPath = path.join(process.cwd(), 'public')

  /**
   * Retrieves file information, including dimensions and mime type.
   * @param filePath - Path to the file
   * @returns {Promise<FileInfo>} file info
   * @throws {FileHelperError} an error if file does not exist or its mime type cannot be determined.
   */
  static async getInfo(filePath: string): Promise<FileInfo> {
    const absolutePath = this.resolveFilePath(filePath)
    await this.checkIfExists(absolutePath)
    const dimensions = await this.getDimensions(absolutePath)
    const url = this.getPublicUrl(absolutePath)
    const mimeType = this.getMimeType(absolutePath)
    const name = this.getName(absolutePath)
    const size = await this.getSize(absolutePath)
    return {
      name: name,
      height: dimensions.height,
      width: dimensions.width,
      url: url,
      mimeType: mimeType,
      size: size,
    }
  }

  private static async getDimensions(
    filePath: string
  ): Promise<{ height: number; width: number }> {
    try {
      const dimensions = await asyncSizeOf(filePath)
      return { width: dimensions?.width || 0, height: dimensions?.height || 0 }
    } catch (err) {
      throw new FileHelperError(
        `Unable to get dimensions for file: ${filePath}`,
        { cause: err }
      )
    }
  }

  private static async getSize(filePath: string): Promise<number> {
    const stat = await fs.promises.stat(filePath)
    return stat.size
  }

  private static getMimeType(filePath: string): string {
    const type = mime.getType(filePath)

    if (!type) {
      throw new FileHelperError(
        `File mime type cannot be determined at ${filePath}`
      )
    }

    return type
  }

  private static getName(filePath: string): string {
    return path.basename(filePath)
  }

  private static async checkIfExists(filePath: string): Promise<void> {
    const isExist = await fs.promises
      .access(filePath)
      .then(() => true)
      .catch(() => false)
    if (!isExist) {
      throw new FileHelperError(`File does not exist at ${filePath}`)
    }
  }

  private static getPublicUrl(filePath: string): string {
    const relativePath = path.relative(this.publicPath, filePath)
    return '/' + relativePath.split(path.sep).join('/')
  }

  private static resolveFilePath(filePath: string): string {
    const resolvedPath = path.resolve(this.publicPath, filePath)
    if (!resolvedPath.startsWith(this.publicPath)) {
      throw new FileHelperError(`Invalid file path: ${filePath}`)
    }
    return resolvedPath
  }
}

class FileHelperError extends Error {
  constructor(message = '', args?: ErrorOptions) {
    super(message, args)
    this.name = 'FileHelperError'
  }
}
