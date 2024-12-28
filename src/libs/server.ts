export class ServerError extends Error {
  public show: boolean

  constructor(message: string, options?: { show: boolean }) {
    super(message)
    this.name = 'Server Error'
    this.show = options?.show || false
  }
}
