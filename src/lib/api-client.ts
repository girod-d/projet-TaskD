// src/lib/api-client.ts

const API_URL = process.env.API_URL || 'http://localhost:3000';

interface FetchOptions extends RequestInit {
  token?: string;
}

export async function apiFetch<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  const { token, headers, ...customOptions } = options;

  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...customOptions,
    headers: defaultHeaders,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Une erreur est survenue lors de la communication avec le serveur.');
  }

  return data;
}