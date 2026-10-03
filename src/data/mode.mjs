/**
 * Mode de build — le seul endroit du site qui lit une variable d'environnement.
 *
 * `BROUILLONS=1` (commande `npm run build:apercu`) demande de générer aussi les
 * pages qui ne sont pas encore inscrites au registre de relecture. Ce n'est pas
 * un secret : c'est un interrupteur de build, sans effet sur ce qui est servi
 * aux visiteurs une fois le site construit.
 *
 * Il vit dans son propre module pour que cette lecture reste isolée et facile à
 * auditer : aucune autre donnée d'environnement n'entre dans le code du site.
 */
export const APERCU = process.env.BROUILLONS === '1';
