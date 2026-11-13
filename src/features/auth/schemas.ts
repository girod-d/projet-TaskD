import { z } from 'zod';

export const loginSchema = z.object({
  identifier: z.string().min(1, "L'email ou le nom d'utilisateur est requis"),
  password: z.string().min(1, "Le mot de passe est requis"),
});

export const registerSchema = z.object({
  nom: z.string().min(2, "Le nom est requis"),
  prenoms: z.string().min(2, "Le prénom est requis"),
  telephone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Format de téléphone international requis (ex: +229...)"),
  email: z.string().email("Format d'email invalide"),
  profession: z.string().min(2, "La profession est requise"),
  password: z
    .string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .regex(/^(?=.*[A-Za-z])(?=.*\d)/, "Le mot de passe doit contenir au moins une lettre et un chiffre"),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;