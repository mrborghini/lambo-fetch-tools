export async function fetchJSON<T>(
  input: string | URL | Request,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(input, init);
  const responseJSON = (await response.json()) as T;
  return responseJSON;
}

export async function fetchText(
  input: string | URL | Request,
  init?: RequestInit,
): Promise<string> {
  const response = await fetch(input, init);
  const responseText = await response.text();
  return responseText;
}

export async function fetchBlob(
  input: string | URL | Request,
  init?: RequestInit,
): Promise<Blob> {
  const response = await fetch(input, init);
  const responseBlob = await response.blob();
  return responseBlob;
}

export async function fetchBytes(
  input: string | URL | Request,
  init?: RequestInit,
): Promise<Uint8Array<ArrayBuffer>> {
  const response = await fetch(input, init);
  const responseBytes = await response.bytes();
  return responseBytes;
}
