# Configuration Brevo — formulaires BrittAssist

Les pages `/contact` et `/questionnaire` envoient leurs demandes à
**brittanydreanocm@gmail.com** via `api/contact.js`, une fonction Vercel.
L’adresse du visiteur est placée dans `replyTo` : répondre à la notification
répond directement au visiteur. La copie AxdiaOS existante est envoyée par le
navigateur après acceptation de l’e-mail par Brevo.

## Activation

1. Dans Brevo, créer un expéditeur nommé **BrittAssist**, avec l’adresse
   **brittanydreanocm@gmail.com**, puis saisir le code de validation reçu dans
   cette boîte. Vérifier que l’envoi transactionnel est activé sur le compte.
2. Dans **SMTP & API → Clés API**, créer une clé API pour le site. Il faut une
   **clé API**, et non une clé SMTP.
3. Dans le projet Vercel → **Settings → Environment Variables**, ajouter :

   | Variable | Valeur |
   | --- | --- |
   | `BREVO_API_KEY` | La clé API privée Brevo |
   | `BREVO_SENDER_EMAIL` | `brittanydreanocm@gmail.com` |
   | `BREVO_SENDER_NAME` | `BrittAssist` |

   Configurer les environnements utilisés (Production, et Preview si nécessaire).
   La clé reste exclusivement côté serveur : ne pas utiliser de variable `PUBLIC_`.
4. Redéployer le projet pour prendre en compte le code et les variables.
5. Envoyer une demande de test depuis `/contact`, puis depuis `/questionnaire`.
   Vérifier la réception dans Gmail (y compris les indésirables), le contenu de
   la notification, la réponse vers le visiteur et la copie dans AxdiaOS.
   Les journaux transactionnels Brevo permettent de vérifier la livraison.

Brevo peut remplacer l’adresse d’expéditeur Gmail par une adresse technique
conforme. Pour utiliser un expéditeur sur `brittassist.fr`, authentifier ce
domaine dans Brevo et renseigner cet expéditeur validé dans `BREVO_SENDER_EMAIL`.
La boîte destinataire reste **brittanydreanocm@gmail.com**.

## Fonctionnement et vérification locale

- Le serveur vérifie les champs obligatoires, le consentement, les longueurs,
  l’origine des requêtes navigateur et le champ piège anti-spam.
- Le sujet et le destinataire sont fixés côté serveur.
- Si Brevo refuse l’envoi ou si la configuration manque, aucune confirmation
  de succès n’est affichée. Avec JavaScript, le formulaire conserve la saisie.
- Sans JavaScript, la fonction renvoie une page de confirmation ou d’erreur.
  La copie AxdiaOS nécessite JavaScript, comme avant cette modification.
- Aucun contact marketing n’est créé et aucun accusé de réception automatique
  n’est envoyé au visiteur. Brevo est utilisé comme relais transactionnel.
- `npm run dev` et `npm run preview` servent Astro sans la fonction Vercel.
  Pour essayer le parcours complet localement, utiliser `vercel dev` avec les
  variables privées dans `.env.local` (port 3000), ou un déploiement Preview.
- `npm test`, `npm run check` et `npm run qa` vérifient le code et le build.
  Les tests de l’API simulent Brevo ; ils n’envoient aucun e-mail.

La préparation du code ne valide pas l’expéditeur et ne configure pas le compte
Brevo. Un test de réception réel est nécessaire après activation.

## Documentation officielle

- [API d’envoi transactionnel](https://developers.brevo.com/reference/send-transac-email)
- [Créer et valider un expéditeur](https://help.brevo.com/hc/en-us/articles/208836149-Create-a-new-sender-From-name-and-From-email)
- [Activation des e-mails transactionnels](https://help.brevo.com/hc/en-us/articles/115000188150-Troubleshooting-Issues-with-Brevo-SMTP)
- [Exigences Gmail et expéditeurs gratuits](https://help.brevo.com/hc/en-us/articles/14925263522578-Comply-with-Gmail-Yahoo-and-Microsoft-s-requirements-for-email-senders)
- [Fonctions Node.js Vercel](https://vercel.com/docs/functions/runtimes/node-js)
