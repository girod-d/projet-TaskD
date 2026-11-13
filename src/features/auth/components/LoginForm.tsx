'use client';

import React from 'react';
import { useActionState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from 'ui/Input';
import { Button } from 'ui/Button';
import { loginAction, AuthState } from '../actions';

const initialState: AuthState = { ok: false };

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, initialState);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Connectez vous</h1>
        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
          Bienvenue à vous. Accédez maintenant à<br />votre univers
        </p>
        <div className="flex justify-center">
          <Image src="/images/login-hero.png" alt="Illustration" width={380} height={380} priority />
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <form action={formAction} className="flex flex-col gap-4">
          {state.message && (
            <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg">
              {state.message}
            </div>
          )}

          <Input
            label="Nom d'utilisateur ou email"
            name="identifier"
            placeholder="Nom d'utilisateur ou email"
            error={state.fieldErrors?.identifier?.[0]}
          />

          <Input
            label="Mot de passe"
            name="password"
            type="password"
            placeholder="••••••••"
            error={state.fieldErrors?.password?.[0]}
          />

          <div className="mt-2">
            <Button type="submit" isLoading={isPending}>
              Se connecter
            </Button>
          </div>

          <p className="text-center text-xs text-gray-400 mt-2">
            Pas encore inscrit ?{' '}
            <Link href="/register" className="text-[#0092E4] font-medium hover:underline">
              Inscrivez-vous ici
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}