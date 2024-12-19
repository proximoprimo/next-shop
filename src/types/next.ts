export interface SuccessResponse<T = string> {
  success: true
  message: T
}

export interface ErrorResponse {
  success: false
  error: string
}

export type ActionResponse<T = string> = SuccessResponse<T> | ErrorResponse
