'use client'
import { useState } from 'react';  
import Image from "next/image";
// Page d'accueil du projet TaskD
export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* ================= NAVBAR ================= */}
      <header className="w-full bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

          {/* Logo TaskD */}
          <a href="/" className="text-2xl font-extrabold italic text-sky-500">
            TaskD
          </a>

          {/* Liens de navigation */}
          <div className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
            <a href="#tasks" className="transition hover:text-sky-500">
              Chercher une tâche
            </a>

            <a href="#delegate" className="transition hover:text-sky-500">
              Déléguer une tâche
            </a>

            <a href="#about" className="transition hover:text-sky-500">
              Pourquoi TaskD
            </a>
          </div>

          {/* Boutons de connexion et inscription */}
          <div className="flex items-center gap-3">
            <a
              href="/register"
              className="rounded-md border border-gray-300 px-4 py-2 text-xs font-semibold text-gray-800 transition hover:bg-gray-100"
            >
              S'inscrire
            </a>

            <a
              href="/login"
              className="rounded-md bg-sky-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-sky-600"
            >
              Se connecter
            </a>
          </div>

        </nav>
      </header>

      {/* ================= SECTION HERO ================= */}
      <section className="mx-auto max-w-6xl px-6 pb-12">

        {/* Conteneur de la bannière */}
        <div className="relative flex min-h-[420px] items-center overflow-hidden rounded-xl md:min-h-[510px]">

          {/* Image originale envoyée */}
          <Image
            src="/images/image-délégué.jpg"
            alt="Professionnelle travaillant dans son bureau"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover object-center"
          />

          {/* Voile sombre pour rendre le texte lisible */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Contenu textuel de la bannière */}
          <div className="relative z-10 max-w-2xl px-7 py-12 text-white md:px-16">

            <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
              Déléguez facilement les tâches n'importe quand et n'importe où
            </h1>

            <p className="mt-5 text-sm text-gray-200 md:text-base">
              Soyez moins acculés par vos tâches !
            </p>

            {/* Boutons d'action */}
            <div className="mt-8 flex flex-wrap items-center gap-4">

              <a
                href="/register"
                className="rounded-md bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-sky-600"
              >
                Déléguer une tâche
              </a>

              <a
                href="#tasks"
                className="px-6 py-3 border border-white/80 bg-black/40 text-white font-medium text-sm rounded-md hover:bg-white hover:text-gray-900 transition duration-200"
              >
                Trouver une tâche
              </a>

            </div>
          </div>
        </div>
      </section>

{/* SECTION PARTENAIRES */}
<section className="w-full flex flex-wrap justify-center items-center gap-6 py-6 px-4">
  {/* Texte "Accompagné par" */}
  <span className="text-gray-600 text-sm md:text-base font-medium">
    Accompagné par
  </span>

  {/* Logo Sèmè City */}
  <div className="flex items-center gap-2">
    <img src="/images/image-sèmè.png" alt="Sèmè City" className="h-6 md:h-8 object-contain" />
  </div>

  {/* Logo Google */}
  <img src="/images/google.png" alt="Google" className="h-5 md:h-6 object-contain" />

  {/* Logo Amazon */}
  <img src="/images/image-amazon.png" alt="Amazon" className="h-5 md:h-6 object-contain" />

  {/* Logo MTN */}
  <img src="/images/mtn.png" alt="MTN" className="h-5 md:h-6 object-contain" />

  {/* Logo Institutionnel / Ministère */}
  <img src="/images/image-bénin.png" alt="Partenaire institutionnel" className="h-8 md:h-10 object-contain" />
</section>

{/* SECTION POURQUOI TASKD */}
<section className="w-full max-w-[1100px] mx-auto px-4 py-10">
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">

    {/* BLOC AVANTAGES */}
    <div className="bg-[#F0F9FD] p-8 rounded-sm">

      <h2 className="text-2xl font-extrabold text-[#292929] mb-12">
        Pourquoi TaskD vous sera-t-il bénéfique ?
      </h2>

      {/* AVANTAGE 1 */}
      <div className="flex items-start gap-4 mb-9">
        <div className="w-7 h-7 bg-[#F45145] rounded-lg flex items-center justify-center text-white shrink-0">
          ✓
        </div>
        <div>
          <h3 className="font-bold text-lg text-[#292929]">
            Qualité de travail
          </h3>
          <p className="text-xs text-gray-500 mt-2 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Adipiscing at convallis justo, pellentesque aliquet.
          </p>
        </div>
      </div>

      {/* AVANTAGE 2 */}
      <div className="flex items-start gap-4 mb-9">
        <div className="w-7 h-7 bg-[#FFD600] rounded-lg flex items-center justify-center text-white shrink-0">
          ⚡
        </div>
        <div>
          <h3 className="font-bold text-lg text-[#292929]">
            Optimiser vos tâches
          </h3>
          <p className="text-xs text-gray-500 mt-2 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Adipiscing at convallis justo, pellentesque aliquet.
          </p>
        </div>
      </div>

      {/* AVANTAGE 3 */}
      <div className="flex items-start gap-4">
        <div className="w-7 h-7 bg-[#55B968] rounded-lg flex items-center justify-center text-white shrink-0">
          🔑
        </div>
        <div>
          <h3 className="font-bold text-lg text-[#292929]">
            Transaction sécurisée
          </h3>
          <p className="text-xs text-gray-500 mt-2 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Adipiscing at convallis justo, pellentesque aliquet.
          </p>
        </div>
      </div>

    </div>

    {/* IMAGE */}
    <div className="flex justify-center items-center">
      <img
        src="/images/image-3D.jpg"
        alt="TaskD"
        className="w-full max-w-[480px] h-auto object-contain"
      />
    </div>

  </div>
</section>
{/* ================= BANNIÈRE BLEUE ================= */}
<div className="mx-auto my-20 max-w-6xl px-6">
  <section className="relative flex min-h-[340px] items-center overflow-hidden rounded-2xl">
    {/* Image de fond */}
    <Image
      src="/images/image-tâche.jpg"
      alt=""
      fill
      className="object-cover"
    />

    {/* Dégradé bleu sombre pour la lisibilité */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#03142d]/90 via-[#03142d]/70 to-[#03142d]/15" />

    {/* Contenu */}
    <div className="relative z-10 flex max-w-xl flex-col items-start gap-8 px-8 py-12 md:px-14">
      <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
        Donnez des tâches et gagnez en temps et en productivité
      </h2>

      <a
        href="/register"
        className="w-full rounded-md bg-sky-500 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-sky-600 md:w-80"
      >
        Déléguer une tâche
      </a>
    </div>
  </section>
</div>
   {/* ================= SECTION PROFESSIONNELS ================= */}
<section className="mx-auto my-20 grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
  {/* Image */}
  <div>
    <Image
      src="/images/image-pc.jpg"
      alt="Un professionnel satisfait devant son ordinateur"
      width={530}
      height={500}
      className="w-full h-auto object-cover rounded-br-[120px] rounded-tr-lg
      "
    />
  </div>

  {/* Texte */}
  <div>
    <h2 className="text-2xl font-bold leading-snug text-gray-900 md:text-3xl">
      Faites partie des 
    </h2>
     <h2 className="text-2xl font-bold leading-snug text-gray-900 md:text-3xl">
      professionnels les plus 
     </h2>
     <h2 className="text-2xl font-bold leading-snug text-gray-900 md:text-3xl">
           sollicités
     </h2>
    <p className="mt-4 text-sm leading-relaxed text-gray-500">
      Recevez des tâches rapides à réaliser et gagnez en ressources
      financières autant que vous voulez
    </p>

    <ul className="mt-8 space-y-5">
      {[
        "Trouvez des collaborateurs facilement",
        "Gagnez en expérience et en réflexe sur les tâches qui vous sont confiées",
        "Restez productif",
        "Économisez votre énergie et gagnez en finance comme vous voulez",
      ].map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
          <svg
            className="mt-0.5 h-5 w-5 shrink-0 text-green-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
</section>
 {/* ================= BLOC APPEL À L'ACTION ================= */}
<div className="mx-auto mb-32 max-w-6xl px-6">
  <section className="flex min-h-[130px] flex-col items-start justify-between gap-5 rounded-lg border border-[#b9dcf3] bg-[#eef7fd] px-8 py-6 md:flex-row md:items-center md:px-[6%]">
    <h3 className="max-w-[440px] text-lg font-bold leading-snug text-[#0f1f3d]">
      Relevez les défis et surpassez vous en compétences
    </h3>

    <button
      type="button"
      onClick={() => setAuthModal("register")}
      className="flex h-11 w-full cursor-pointer items-center justify-center rounded bg-[#0b8be8] text-sm font-semibold text-white shadow-md shadow-sky-500/30 transition hover:bg-sky-600 md:w-[340px]"
    >
      Trouver une tâche
    </button>
  </section>
</div>
      <Temoignages />
      <Footer />
    </main>
  );
}
const temoignages = [
  {
    nom: 'Marc Tayson',
    role: 'Ingénieur en informatique',
    photo: '/images/image-tayson.jpg',
    texte:
      'Recevez des tâches rapides à réaliser et gagnez en ressources financières autant que vous voulez',
  },
  {
    nom: 'Ella TOKO',
    role: "Gestionnaire d'entreprises",
    photo: '/images/image-Elia.jpg',
    texte:
      'Recevez des tâches rapides à réaliser et gagnez en ressources financières autant que vous voulez',
  },
];

function Temoignages() {
  const [index, setIndex] = useState(0);
  const nbVisible = 2;

  const precedent = () =>
    setIndex((prev) =>
      prev === 0 ? temoignages.length - nbVisible : prev - 1
    );

  const suivant = () =>
    setIndex((prev) =>
      prev >= temoignages.length - nbVisible ? 0 : prev + 1
    );

  const visible = Array.from({ length: nbVisible }, (_, i) =>
    temoignages[(index + i) % temoignages.length]
  );

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Nos utilisateurs disent
          </h2>

          <div className="flex gap-3">
            <button
              onClick={precedent}
              aria-label="Précédent"
              className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={suivant}
              aria-label="Suivant"
              className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visible.map((t, i) => (
            <div key={`${t.nom}-${i}`} className="bg-gray-100 rounded-2xl p-4 flex items-center gap-5">
              <img
                src={t.photo}
                alt={t.nom}
                className="w-28 h-32 md:w-36 md:h-44 object-cover rounded-xl shrink-0"
              />
              <div>
                <h3 className="text-xl font-extrabold text-gray-900">{t.nom}</h3>
                <p className="text-gray-800 font-medium mb-4">{t.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{t.texte}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-14 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Colonne 1 : Logo + réseaux sociaux */}
          <div>
            <h2 className="text-3xl font-extrabold italic mb-6">TaskD</h2>
            <p className="text-gray-300 text-sm mb-4">Suivez nous sur:</p>
            <div className="flex gap-3">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="hover:opacity-70 transition">
                <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="hover:opacity-70 transition">
                <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.2 2.4 4.2 5.4v6.3zM5.3 7.4a2 2 0 1 1 0-4.1 2 2 0 0 1 0 4.1zM7.1 20.4H3.6V9h3.5v11.4z" />
                </svg>
              </a>
              {/* Twitter / X */}
              <a href="#" aria-label="Twitter" className="hover:opacity-70 transition">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="white">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
               </svg>
              </a>
            </div>
          </div>

          {/* Colonne 2 : A propos */}
          <div>
            <h3 className="font-bold mb-6">A propos</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition">Qui sommes nous</a></li>
              <li><a href="#" className="hover:text-white transition">Ce que nous proposons</a></li>
              <li><a href="#" className="hover:text-white transition">Fonctionnement</a></li>
              <li><a href="#" className="hover:text-white transition">Nouveauté</a></li>
            </ul>
          </div>

          {/* Colonne 3 : Termes */}
          <div>
            <h3 className="font-bold mb-6">Termes</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition">Confidentialité et sécurité</a></li>
              <li><a href="#" className="hover:text-white transition">Conditions d'utilisations</a></li>
              <li><a href="#" className="hover:text-white transition">Informations supplémentaires</a></li>
              <li><a href="#" className="hover:text-white transition">Devis d'échange</a></li>
            </ul>
          </div>

          {/* Colonne 4 : Partenaires */}
          <div>
            <h3 className="font-bold mb-6">Partenaires</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition">MTN</a></li>
              <li><a href="#" className="hover:text-white transition">Google</a></li>
              <li><a href="#" className="hover:text-white transition">Alibaba</a></li>
              <li><a href="#" className="hover:text-white transition">Amazone</a></li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation */}
        <hr className="border-gray-600 my-10" />

        {/* Copyright */}
        <p className="text-center text-gray-300 text-sm">
          Student, Copyright 2022 - Tout droits réservés
        </p>
      </div>
    </footer>
  );
}