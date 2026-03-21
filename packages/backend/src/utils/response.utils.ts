import { ResponseDto } from 'src/types/response.types';

export async function wrapInResponseDto<T>(
  fn: () => Promise<T>,
): Promise<ResponseDto<T>> {
  try {
    const data = await fn();
    return {
      data,
      error: false,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return {
      data: undefined,
      error: true,
      errorMessage,
    };
  }
}
