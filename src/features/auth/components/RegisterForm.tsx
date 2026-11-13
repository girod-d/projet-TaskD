'use client';

import React from 'react';
import { useActionState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from 'ui/Input';
import { Button } from 'ui/Button';
import { registerAction, AuthState } from '../actions';

const initialState: AuthState = { ok: false };

export function RegisterForm() {
  const [state, formAction, isPending] = useActionState(registerAction, initialState);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Inscrivez-vous ici</h1>
        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
          Bénéficiez de toutes les honneurs dont<br />vous avez besoin
        </p>
        <div className="flex justify-center">
          <Image src="/images/register-hero.png" alt="Illustration" width={380} height={380} priority />
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <form action={formAction} className="flex flex-col gap-4">
          {state.message && (
            <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg">
              {state.message}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Nom"
              name="nom"
              placeholder="Nom"
              error={state.fieldErrors?.nom?.[0]}
            />
            <Input
              label="Prénoms"
              name="prenoms"
              placeholder="Prénom"
              error={state.fieldErrors?.prenoms?.[0]}
            />
          </div>

          <Input
            label="Téléphone"
            name="telephone"
            placeholder="Téléphone"
            error={state.fieldErrors?.telephone?.[0]}
          />

          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
            error={state.fieldErrors?.email?.[0]}
          />

          <Input
            label="Profession"
            name="profession"
            placeholder="Profession"
            error={state.fieldErrors?.profession?.[0]}
          />

          <Input
            label="Mot de passe"
            name="password"
            type="password"
            placeholder="Minimum 8 caractères, 1 chiffre"
            error={state.fieldErrors?.password?.[0]}
          />

          <div className="mt-4">
            <Button type="submit" isLoading={isPending}>
              S'inscrire
            </Button>
          </div>

          <p className="text-center text-xs text-gray-400 mt-2">
            Déjà inscrit ?{' '}
            <Link href="/login" className="text-[#0092E4] font-medium hover:underline">
              Connectez-vous ici
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}