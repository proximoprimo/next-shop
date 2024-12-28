export enum ResponseStatus {
  SUCCESS = 'success',
  ERROR = 'error',
}

export type ActionResponse<T = Record<string, string>> = {
  status: ResponseStatus
  message: string
  data?: T
}
