# Salute Odontologia

Site de uma página da Salute Odontologia (Ibiraquera, Praia do Rosa, Imbituba/SC).

Stack: Astro, Tailwind CSS, GSAP + ScrollTrigger + SplitText, Lenis, Alpine.js, Lucide e Embla Carousel.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # serve dist/ em http://localhost:4321
```

## Onde mexer

- Dados da clínica (telefone, endereço, links, nota do Google): `src/data/site.ts`
- Cores, fontes e espaçamentos: `tailwind.config.mjs`
- Seções: `src/components/`
- Fotos: `src/assets/fotos/` (substitua mantendo o mesmo nome de arquivo)
- Itens pendentes: procure por `[CONFIRMAR]`

## Publicar no Netlify Drop

1. `npm run build`
2. Abra https://app.netlify.com/drop
3. Arraste a pasta `dist/` para a página
