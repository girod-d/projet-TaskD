'use server';

import { redirect } from 'next/navigation';
import { loginSchema, registerSchema } from './schemas';

export type AuthState = {
  ok: boolean;
  message?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function loginAction(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const parsed = loginSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return {
      ok: false,
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    const response = await fetch(`${process.env.API_URL}/api/v1/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsed.data),
    });

    if (!response.ok) {
      return { ok: false, message: 'Identifiants incorrects' }; // US-05 : message générique de sécurité
    }
  } catch (error) {
    return { ok: false, message: 'Erreur de connexion au serveur' };
  }

  redirect('/offers');
}

export async function registerAction(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const parsed = registerSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return {
      ok: false,
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    const response = await fetch(`${process.env.API_URL}/api/v1/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsed.data),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      return { ok: false, message: errData.message || 'Cet email est déjà associé à un compte' };
    }
  } catch (error) {
    return { ok: false, message: 'Erreur de connexion au serveur' };
  }

  redirect('/offers');
}