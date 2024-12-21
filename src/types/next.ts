export enum ResponseStatus {
  SUCCESS = 'success',
  ERROR = 'error',
  PENDING = 'pending',
}

export interface SuccessResponse<T = string> {
  status: ResponseStatus.SUCCESS
  message: string
  data?: T
}

export interface ErrorResponse {
  status: ResponseStatus.ERROR
  error: string
}

export interface PendingResponse {
  status: ResponseStatus.PENDING
}

export type ActionResponse<T = Record<string, string>> =
  | SuccessResponse<T>
  | ErrorResponse
  | PendingResponse
