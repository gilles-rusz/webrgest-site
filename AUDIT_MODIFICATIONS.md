# Audit et corrections Web RG Est

## Corrections fonctionnelles appliquées

- Le bouton principal du header pointe maintenant vers `/devis-gratuit` au lieu d'une page contact générique.
- Le bouton mobile du header pointe aussi vers `/devis-gratuit`.
- Les appels à l'action de la page d'accueil orientent mieux l'utilisateur vers la demande de devis.
- Les anciens liens cassés en `/#contact` ont été remplacés par `/devis-gratuit`.
- Le lien `/#tarifs` a été remplacé par `/tarifs`.
- Le lien `/#realisations` de la page merci a été remplacé par `/realisations`.
- Le footer contient maintenant un accès direct à la page de devis gratuit.
- Le footer contient maintenant un accès direct à la page “Laisser un avis”.
- Le lien footer “Refonte de Sites” pointe vers la vraie page `/refonte-site-internet`.
- Les CTA de la page tarifs envoient vers `/devis-gratuit` avec l'offre sélectionnée en paramètre.
- La page `/devis-gratuit` pré-remplit le type de projet selon l'offre cliquée.
- Les tarifs du chatbot ont été réalignés avec la grille tarifaire actuelle.
- L'administration des avis a été corrigée pour éviter l'erreur React détectée par ESLint.
- Le formulaire d'avis tente maintenant un fallback Formspree si Supabase n'est pas configuré.
- Le script de la démo restaurant a été corrigé pour supprimer l'avertissement ESLint.
- Les scripts de validation incluent maintenant `npm run typecheck`.

## Améliorations conversion / vente

- Le parcours utilisateur est plus direct : les visiteurs sont envoyés vers une landing page de devis au lieu d'être dispersés.
- Les CTA sont plus clairs : “Devis gratuit”, “Recevoir un devis”, “Obtenir mon devis gratuit”.
- Les offres tarifaires peuvent transmettre leur nom à la page devis, ce qui facilite la demande client.
- La page d'accueil renforce davantage la promesse : site orienté conversion, demandes de devis, visibilité locale.

## Tests effectués

- `npm run lint` : OK.
- `npm run typecheck` : OK.
- `npm run build` : la compilation Next démarre, mais dans l'environnement sandbox elle reste bloquée sur la phase interne Next/Turbopack. Les erreurs de code détectables par ESLint et TypeScript ont été corrigées.

## Points à vérifier au déploiement

- Vérifier que les variables Supabase sont bien présentes si vous voulez publier les avis automatiquement : `SUPABASE_URL` et `SUPABASE_SERVICE_ROLE_KEY`.
- Vérifier que `ADMIN_SECRET` est défini pour accéder à `/admin/avis`.
- Vérifier que `OPENAI_API_KEY` est défini si le chatbot doit répondre avec l'IA.
- Tester un vrai envoi du formulaire `/devis-gratuit` après déploiement.
- Tester un vrai envoi d'avis depuis `/laisser-un-avis`.
