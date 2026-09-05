# 🚀 Déploiement — Yobante Site Vitrine

Déploiement du site vitrine sur le **même VPS Contabo** que l'API et l'admin.
Une fois la configuration faite (une seule fois), **chaque `git push` sur `main`
déploie automatiquement**.

---

## 📊 Vue d'ensemble

```
push sur main (GitHub)
      ↓
GitHub Actions (.github/workflows/deploy.yml)
      ↓  npm ci → écrit .env → npm run build
      ↓
SCP de dist/* → /var/www/yobante-site        (VPS Contabo)
      ↓  chown www-data
nginx sert https://yobanterek.com
```

| | |
|---|---|
| **Domaine** | `https://yobanterek.com` (+ `www.yobanterek.com`) |
| **Dossier cible sur le VPS** | `/var/www/yobante-site` |
| **Repo GitHub** | `Ibnouthiam0110/Yobante` |
| **Serveur** | Le **même VPS Contabo** que l'API et l'admin |

Les trois services cohabitent sans conflit — nginx les distingue par `server_name` :

| Service | Domaine | Servi par |
|---|---|---|
| API | `api.yobanterek.com` | Docker (port 5000) via proxy nginx |
| Admin | `admin.yobanterek.com` | Fichiers statiques `/var/www/yobante-admin` |
| **Vitrine** | **`yobanterek.com`** | Fichiers statiques `/var/www/yobante-site` |

---

## ⚠️ À lire avant de commencer

Ce repo appartient au compte **`Ibnouthiam0110`**, pas à `jeune-dev` comme l'API
et l'admin. Pour créer les secrets GitHub, il faut être **administrateur** de
`Ibnouthiam0110/Yobante`. Si ce n'est pas ton compte, demande l'accès ou
transfère le repo avant d'aller plus loin.

---

## 1. Prérequis

- Le VPS Contabo tourne déjà (API + admin déployés) → nginx et certbot sont
  déjà installés, rien à réinstaller.
- Tu gères le **DNS** de `yobanterek.com`.
- La **paire de clés SSH** utilisée par GitHub Actions pour l'admin existe déjà :
  tu peux réutiliser exactement la même pour ce repo.

---

## 2. DNS — pointer le domaine racine vers le VPS

Chez ton registrar (là où `yobanterek.com` est enregistré), ajoute ou vérifie :

| Type | Nom | Valeur |
|---|---|---|
| `A` | `@` | `IP_DU_VPS` |
| `A` | `www` | `IP_DU_VPS` |

⚠️ **Un seul `A` sur `@`.** Si le domaine était garé chez l'hébergeur, un ancien
`A` (page « Bravo ! Votre domaine a bien été créé avec LWS ! ») subsiste souvent.
Tant qu'il est là, le trafic alterne au hasard entre les deux serveurs et certbot
échoue : Let's Encrypt tombe une fois sur deux sur la machine qui n'a pas le
fichier de challenge. **Supprime l'ancien enregistrement.**

Vérifie la propagation depuis ton PC (elle peut prendre de quelques minutes à
quelques heures) :

```bash
nslookup yobanterek.com
```

Tu dois voir l'IP de ton VPS. **N'enchaîne pas sur certbot tant que ce n'est pas
le cas** : la génération du certificat échouera.

---

## 3. Secrets GitHub

Va sur **GitHub** → repo `Ibnouthiam0110/Yobante` → **Settings** →
**Secrets and variables** → **Actions** → **New repository secret**.

| Secret | Valeur | Obligatoire |
|---|---|---|
| `VPS_HOST` | IP ou hostname du VPS Contabo | ✅ |
| `VPS_USER` | Utilisateur SSH (`root`) | ✅ |
| `VPS_SSH_KEY` | Clé **privée** SSH complète, de `-----BEGIN` à `-----END-----` | ✅ |
| `VITE_WEB3FORMS_KEY` | Clé du formulaire de contact Web3Forms | ⬜ optionnel |

> **Réutilise les mêmes valeurs** que celles du repo admin pour les trois
> premiers : c'est le même serveur, la même clé.
>
> `VITE_WEB3FORMS_KEY` est facultatif : sans lui, le code utilise la clé écrite
> en dur dans `src/components/sections/Contact.jsx`.

---

## 4. Préparer le VPS (une seule fois)

Connecte-toi :

```bash
ssh root@IP_DU_VPS
```

### 4.1 Créer le dossier du site

```bash
mkdir -p /var/www/yobante-site && chown -R www-data:www-data /var/www/yobante-site
```

### 4.2 Déposer la configuration nginx

Copie le contenu de [`deploy/nginx-yobanterek.com.conf`](deploy/nginx-yobanterek.com.conf)
dans un fichier sur le serveur :

```bash
nano /etc/nginx/sites-available/yobante-site
```

Colle le contenu, enregistre (`Ctrl+O`, `Entrée`, `Ctrl+X`), puis active le site :

```bash
ln -sf /etc/nginx/sites-available/yobante-site /etc/nginx/sites-enabled/yobante-site
```

### 4.3 Retirer le site par défaut de nginx

Important : le site `default` de nginx capte le domaine racine et affiche la page
« Welcome to nginx ». Il faut le désactiver.

```bash
rm -f /etc/nginx/sites-enabled/default
```

### 4.4 Tester et recharger

```bash
nginx -t && systemctl reload nginx
```

`nginx -t` doit répondre `syntax is ok` / `test is successful`. En cas d'erreur,
**ne recharge pas** : corrige d'abord le fichier.

---

## 5. HTTPS avec Let's Encrypt

```bash
certbot --nginx -d yobanterek.com -d www.yobanterek.com
```

Certbot :
1. vérifie que le domaine pointe bien sur ce serveur,
2. génère le certificat,
3. **réécrit lui-même** `/etc/nginx/sites-available/yobante-site` pour ajouter
   le bloc `443` et la redirection HTTP → HTTPS.

Quand il demande la redirection, choisis **`2` (Redirect)**.

Vérifie le renouvellement automatique :

```bash
certbot renew --dry-run
```

---

## 6. Premier déploiement

Tout est prêt côté serveur. Depuis ton PC :

```bash
cd C:\Users\vPro\Desktop\fait_maison\Yobante
```

```bash
git add -A && git commit -m "chore: ajout du déploiement automatique VPS" && git push origin main
```

Puis suis le déploiement : **GitHub → repo → onglet Actions → « Deploy Site
Vitrine to VPS »**.

Le workflow enchaîne : `npm ci` → build → vérification que `dist/` n'est pas vide
→ envoi SCP → correction des droits → `curl` de contrôle sur
`https://yobanterek.com`.

Si l'étape finale est verte, le site est en ligne. 🎉

---

## 7. Déploiements suivants

Plus rien à faire : **chaque push sur `main` redéploie**.

```bash
git add -A && git commit -m "feat: nouvelle section" && git push origin main
```

Pour redéployer sans nouveau commit : **Actions** → « Deploy Site Vitrine to VPS »
→ **Run workflow**.

---

## 8. Vérifier que tout fonctionne

Depuis ton PC :

```bash
curl -I https://yobanterek.com
```

Attendu : `HTTP/2 200`.

Sur le VPS, vérifier que les fichiers sont bien arrivés :

```bash
ls -la /var/www/yobante-site && ls /var/www/yobante-site/assets | head
```

Tu dois voir `index.html`, `favicon.png` et un dossier `assets/`.

---

## 9. Dépannage

| Symptôme | Cause probable | Solution |
|---|---|---|
| Page « Welcome to nginx » | Site `default` encore actif | `rm -f /etc/nginx/sites-enabled/default && systemctl reload nginx` |
| `403 Forbidden` | Droits des fichiers | `chown -R www-data:www-data /var/www/yobante-site` |
| `404` sur tout | Mauvais `root` ou dossier vide | `ls /var/www/yobante-site` ; relancer le workflow |
| Certbot : « challenge failed », `404` sur une IP inattendue | Plusieurs `A` sur `@` : Let's Encrypt interroge la mauvaise machine | Ne garder qu'un seul `A` sur `@`, celui du VPS |
| Certbot : « challenge failed » | DNS pas encore propagé | `nslookup yobanterek.com`, attendre, réessayer |
| Actions : `Permission denied (publickey)` | `VPS_SSH_KEY` incorrect | Recoller la clé **privée** entière, `-----BEGIN`/`-----END` inclus |
| Actions : `missing server host` | `VPS_HOST` absent | Créer le secret dans **ce** repo (les secrets ne sont pas partagés entre repos) |
| Le site ne change pas après un push | Cache navigateur | `Ctrl+Shift+R`. `index.html` est en `no-cache`, les assets sont hashés |
| Actions : `npm ci` échoue | `package-lock.json` désynchronisé | `npm install` en local, committer le lock |

Consulter les logs nginx sur le VPS :

```bash
tail -n 50 /var/log/nginx/error.log
```

---

## 10. Rollback

Le déploiement écrase le contenu de `/var/www/yobante-site`. Pour revenir en
arrière, redéploie le commit précédent :

```bash
git revert HEAD && git push origin main
```

Pour garder un filet de sécurité, tu peux sauvegarder la version en ligne avant
un déploiement risqué, depuis le VPS :

```bash
cp -a /var/www/yobante-site /var/www/yobante-site.bak
```
