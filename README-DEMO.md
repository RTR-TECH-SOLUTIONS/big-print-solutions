# Big Print Solutions: demo de prezentare

Demo pentru SC Ilustrator SRL (bigprintsolutions.ro), Râmnicu Vâlcea. Astro 7 + Tailwind 4, output static.

    npm install
    npm run dev        # dezvoltare
    npm run build      # dist/ static, se urcă pe Hostinger
    npm run preview

## Pagini
Acasă, Print format mare, Firme și litere volumetrice, Colantări auto, Alte servicii, Prețuri (cu calculator), Portofoliu (cu filtru), Despre noi, Contact, Termeni și condiții, Despre cookies.

## Ce este real (preluat de pe bigprintsolutions.ro)
- Logo-ul original (`public/logo.png`, doar 110 x 120 px).
- Datele firmei: adresă, mobil, fix, fax, e-mail, CUI, J, cont bancar: `src/data/site.ts`.
- 174 de poze din galeriile paginilor de servicii, în `public/lucrari/`. Originalele sunt în `_client-material/galerii/`. Pe site sunt folosite aproximativ 100, cu legendă, definite în `src/data/lucrari.ts`.
- Textul „Despre noi", lista de producție publicitară, textul despre imprimante eco-solvent, lista de clienți, utilajele, clipurile Vimeo.
- Termeni și condiții + Despre cookies: text preluat ca atare în `src/legal/`.

## Ce este doar pentru demo (caută `TODO(real)`)
- **Toate prețurile** din `src/data/preturi.ts` sunt orientative, puse după nivelul pieței. Clientul nu avea prețuri pe site. Se înlocuiesc cu lista lui.
- **Programul** (Luni - Vineri, 9-17) este presupus, de confirmat.
- **Al doilea mobil, 0773 925 407**, nu apare în pagina de contact veche, ci pe materialele firmei din poze. E folosit și ca număr de WhatsApp. De confirmat.
- Legendele lucrărilor (client + ce s-a executat) sunt deduse din poze, de verificat cu clientul.
- Formularul de contact și calculatorul deschid WhatsApp cu mesaj precompletat, fără backend.
- Domeniul ilustrator.ro (trecut pe contactul vechi) este azi parcat, deci nu e legat nicăieri.

## Ce urmează dacă acceptă
1. Prețuri reale, program, logo vectorial, poze noi unde e cazul.
2. Research SEO: „producție publicitară Vâlcea", „litere volumetrice Râmnicu Vâlcea", „colantări auto Vâlcea", „print banner Vâlcea"; title/meta/H1 pe pagină, `LocalBusiness` JSON-LD, sitemap, robots.
3. Pachet legal: banner cookie, rescrierea paginilor Termeni și Cookies, Politica de confidențialitate, credit RTR în footer.
4. Opțional: prețuri editabile de client (Keystatic peste `src/data/preturi.ts`), pagini separate pentru serigrafie și promoționale.
5. Optimizare imagini (AVIF, srcset) și deploy pe Hostinger.
