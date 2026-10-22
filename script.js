const PACOTE_CSS = "/* ==========================================================================\n   Meu Cantinho — style.css\n   Organização:\n   1. Tokens (cores, fontes, medidas)   5. Como funciona e Exemplo\n   2. Base e utilitários                6. Editor e formulário\n   3. Botões                            7. Presente (.gift)\n   4. Cabeçalho e início                8. Movimento reduzido e telas grandes\n   ========================================================================== */\n\n/* ---------- 1. Tokens ---------- */\n:root {\n  --creme: #FBF6EE;\n  --off: #FFFCF7;\n  --papel: #F4EADD;\n  --linha: #E3D3C2;\n  --rosa-pastel: #F6D9D6;\n  --rosa-medio: #E8B4B3;\n  --rosa-queimado: #B0505F;\n  --rosa-queimado-escuro: #93404E;\n  --marrom: #4F352E;\n  --marrom-suave: #7A5C52;\n  --erro: #9B2C3F;\n\n  --sombra: 0 1px 2px rgba(79, 53, 46, .08), 0 10px 28px -10px rgba(79, 53, 46, .22);\n  --sombra-leve: 0 1px 2px rgba(79, 53, 46, .08), 0 4px 12px -6px rgba(79, 53, 46, .2);\n\n  --fonte-titulo: 'Fraunces', 'Iowan Old Style', 'Palatino Linotype', Georgia, serif;\n  --fonte-texto: 'Figtree', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;\n  --fonte-mao: 'Caveat', 'Bradley Hand', 'Segoe Script', 'Comic Sans MS', cursive;\n\n  --altura-cabecalho: 68px;\n}\n\n/* ---------- 2. Base e utilitários ---------- */\n*, *::before, *::after { box-sizing: border-box; }\n\nhtml {\n  scroll-behavior: smooth;\n  -webkit-text-size-adjust: 100%;\n}\n\nbody {\n  margin: 0;\n  font-family: var(--fonte-texto);\n  font-size: 1.0625rem;\n  line-height: 1.6;\n  color: var(--marrom);\n  background-color: var(--creme);\n  /* textura de papel muito sutil, desenhada em SVG (sem arquivo extra) */\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .31 0 0 0 0 .21 0 0 0 0 .18 0 0 0 .06 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\");\n}\n\n[hidden] { display: none !important; }\n\nimg, svg { max-width: 100%; }\n\nh1, h2, h3 {\n  font-family: var(--fonte-titulo);\n  font-optical-sizing: auto;\n  font-weight: 500;\n  line-height: 1.12;\n  letter-spacing: -.012em;\n  margin: 0;\n  text-wrap: balance;\n}\n\np { margin: 0 0 1rem; }\n\na { color: var(--rosa-queimado-escuro); }\n\n:focus-visible {\n  outline: 3px solid var(--rosa-queimado);\n  outline-offset: 3px;\n  border-radius: 4px;\n}\n\n.wrap { width: min(1120px, 100% - 2.5rem); margin-inline: auto; }\n\n.sr-only {\n  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;\n  overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;\n}\n\n.pular-link {\n  position: absolute; left: 1rem; top: -4rem; z-index: 100;\n  background: var(--marrom); color: var(--off); padding: .6rem 1rem; border-radius: 999px;\n}\n.pular-link:focus { top: 1rem; }\n\n.texto-suave { color: var(--marrom-suave); }\n\n/* rolagem suave leva em conta o cabeçalho fixo */\n#como-funciona, #exemplo, #criar, #topo { scroll-margin-top: calc(var(--altura-cabecalho) + 8px); }\n#conteudo:focus { outline: none; }\n\n/* ---------- 3. Botões ---------- */\n.btn {\n  display: inline-flex; align-items: center; justify-content: center; gap: .5rem;\n  font: 600 1rem/1.2 var(--fonte-texto);\n  padding: .9rem 1.6rem;\n  border: 1.5px solid var(--rosa-queimado);\n  border-radius: 999px;\n  background: var(--rosa-queimado);\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n  transition: background-color .2s ease, transform .2s ease, border-color .2s ease;\n}\n.btn:hover { background: var(--rosa-queimado-escuro); border-color: var(--rosa-queimado-escuro); transform: translateY(-1px); }\n.btn:active { transform: translateY(0); }\n\n.btn--contorno { background: transparent; color: var(--marrom); border-color: var(--marrom-suave); }\n.btn--contorno:hover { background: var(--off); border-color: var(--marrom); }\n\n.btn--suave { background: var(--rosa-pastel); color: var(--rosa-queimado-escuro); border-color: var(--rosa-pastel); }\n.btn--suave:hover { background: var(--rosa-medio); border-color: var(--rosa-medio); }\n\n/* ---------- 4. Cabeçalho e início ---------- */\n.site-header {\n  position: sticky; top: 0; z-index: 50;\n  height: var(--altura-cabecalho);\n  background: rgba(251, 246, 238, .94);\n  border-bottom: 1px solid var(--linha);\n}\n.header-inner { height: 100%; display: flex; align-items: center; justify-content: space-between; }\n\n.marca {\n  display: inline-flex; align-items: center; gap: .5rem;\n  font-family: var(--fonte-titulo); font-style: italic; font-weight: 500; font-size: 1.55rem;\n  color: var(--marrom); text-decoration: none; letter-spacing: -.01em;\n}\n.marca-icone { width: 1.5rem; height: 1.5rem; fill: var(--rosa-queimado); transform: rotate(-8deg); }\n\n.menu ul { list-style: none; margin: 0; padding: 0; display: flex; align-items: center; gap: 1.75rem; }\n.menu a { color: var(--marrom); text-decoration: none; font-weight: 500; padding: .35rem 0; border-bottom: 1.5px solid transparent; }\n.menu a:hover { border-bottom-color: var(--rosa-queimado); }\n.menu a.menu-destaque {\n  background: var(--rosa-pastel); color: var(--rosa-queimado-escuro);\n  padding: .5rem 1.1rem; border-radius: 999px; border-bottom: 0;\n}\n.menu a.menu-destaque:hover { background: var(--rosa-medio); }\n\n.menu-botao {\n  display: none; width: 44px; height: 44px; border: 0; background: transparent; cursor: pointer;\n  align-items: center; justify-content: center; border-radius: 12px;\n}\n.menu-barras, .menu-barras::before, .menu-barras::after {\n  display: block; width: 22px; height: 2px; background: var(--marrom); border-radius: 2px;\n  transition: transform .25s ease, opacity .2s ease;\n}\n.menu-barras { position: relative; }\n.menu-barras::before, .menu-barras::after { content: \"\"; position: absolute; left: 0; }\n.menu-barras::before { top: -7px; }\n.menu-barras::after { top: 7px; }\n.menu-aberto .menu-barras { background: transparent; }\n.menu-aberto .menu-barras::before { transform: translateY(7px) rotate(45deg); }\n.menu-aberto .menu-barras::after { transform: translateY(-7px) rotate(-45deg); }\n\n@media (max-width: 779px) {\n  .menu-botao { display: inline-flex; }\n  .menu {\n    position: absolute; top: 100%; left: 0; right: 0;\n    background: var(--creme); border-bottom: 1px solid var(--linha);\n    padding: .5rem 1.25rem 1.25rem;\n    opacity: 0; visibility: hidden; transform: translateY(-8px);\n    transition: opacity .2s ease, transform .2s ease, visibility 0s linear .2s;\n  }\n  .menu-aberto .menu { opacity: 1; visibility: visible; transform: none; transition-delay: 0s; }\n  .menu ul { flex-direction: column; align-items: stretch; gap: .25rem; }\n  .menu a { display: block; padding: .8rem .25rem; font-size: 1.1rem; }\n  .menu a.menu-destaque { text-align: center; margin-top: .5rem; }\n}\n\n.aviso {\n  display: flex; gap: 1rem; align-items: center; justify-content: space-between;\n  margin-top: 1rem; padding: .9rem 1.1rem; border-radius: 14px;\n  background: var(--rosa-pastel); color: var(--marrom);\n}\n.aviso p { margin: 0; }\n.aviso-fechar { font: inherit; font-weight: 600; background: none; border: 0; color: var(--rosa-queimado-escuro); cursor: pointer; text-decoration: underline; }\n\n/* Hero */\n.hero { padding: clamp(2rem, 6vw, 4.5rem) 0 clamp(3rem, 7vw, 5rem); }\n.hero-grade { display: grid; grid-template-columns: 1.05fr .95fr; gap: clamp(2rem, 5vw, 4rem); align-items: center; }\n.hero h1 { font-size: clamp(2.5rem, 5.4vw, 4.1rem); font-weight: 500; }\n.hero-lead { font-size: 1.2rem; max-width: 34em; margin: 1.5rem 0 2rem; color: var(--marrom-suave); }\n.hero-acoes { display: flex; flex-wrap: wrap; gap: .85rem; }\n\n.nota-mao {\n  display: flex; align-items: flex-start; gap: .4rem; margin: 1.25rem 0 0 .5rem;\n  font-family: var(--fonte-mao); font-size: 1.6rem; line-height: 1; color: var(--rosa-queimado);\n  transform: rotate(-3deg);\n}\n.nota-mao svg { width: 54px; height: 40px; flex: none; margin-top: -.35rem; }\n\n.hero-arte { justify-self: center; width: min(100%, 470px); }\n.hero-svg { display: block; width: 100%; height: auto; overflow: visible; }\n.svg-mao { font-family: var(--fonte-mao); font-weight: 600; }\n.hero-polaroid {\n  transform-box: fill-box; transform-origin: center;\n  animation: assentar 1s .3s cubic-bezier(.2, .9, .25, 1) both;\n}\n@keyframes assentar {\n  from { transform: translateY(-22px) rotate(-5deg); opacity: 0; }\n  to   { transform: none; opacity: 1; }\n}\n\n@media (max-width: 859px) {\n  .hero-grade { grid-template-columns: 1fr; }\n  .hero-arte { order: -1; width: min(78%, 340px); }\n}\n\n/* ---------- 5. Seções, como funciona e exemplo ---------- */\n.secao { padding: clamp(3.5rem, 8vw, 6rem) 0; }\n.secao--papel { background-color: var(--papel); border-block: 1px dashed #D8C3AD; }\n.titulo-secao { font-size: clamp(1.9rem, 3.8vw, 2.7rem); max-width: 18em; }\n.secao-lead { margin-top: .75rem; color: var(--marrom-suave); max-width: 38em; }\n\n.passos {\n  list-style: none; margin: 3rem 0 0; padding: 0;\n  display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem;\n}\n.passo { position: relative; }\n.passo:nth-child(2) { margin-top: 2.25rem; }\n.passo:nth-child(3) { margin-top: .75rem; }\n.passo h3 { font-size: 1.45rem; margin: 1.1rem 0 .5rem; }\n.passo p { color: var(--marrom-suave); margin: 0; max-width: 24em; }\n\n.passo-selo {\n  display: grid; place-items: center; width: 3.6rem; height: 3.6rem;\n  border: 2px dashed var(--rosa-queimado); border-radius: 50%;\n  font-family: var(--fonte-titulo); font-style: italic; font-size: 1.7rem; color: var(--rosa-queimado);\n  background: var(--off); transform: rotate(-6deg);\n}\n.passo:nth-child(2) .passo-selo { transform: rotate(5deg); }\n\n@media (max-width: 779px) {\n  .passos { grid-template-columns: 1fr; gap: 2rem; }\n  .passo:nth-child(n) { margin-top: 0; }\n}\n\n.exemplo-grade { display: grid; grid-template-columns: 1fr minmax(0, 380px); gap: clamp(2rem, 6vw, 5rem); align-items: center; }\n.exemplo-texto p { max-width: 30em; margin-top: 1rem; }\n.exemplo-texto .btn { margin-top: .75rem; }\n.exemplo-moldura { position: relative; justify-self: center; width: 100%; max-width: 380px; }\n.exemplo-moldura::before {                     /* fita adesiva */\n  content: \"\"; position: absolute; z-index: 2; top: -.7rem; left: 50%;\n  width: 96px; height: 28px; margin-left: -48px; transform: rotate(-3deg);\n  background: rgba(232, 180, 179, .8);\n}\n\n.aparelho {\n  height: min(78vh, 680px); overflow-y: auto; overscroll-behavior: contain;\n  background: var(--creme);\n  border: 9px solid var(--off); border-radius: 30px;\n  box-shadow: var(--sombra);\n  scrollbar-width: thin; scrollbar-color: var(--rosa-medio) transparent;\n}\n\n@media (max-width: 859px) {\n  .exemplo-grade { grid-template-columns: 1fr; }\n}\n\n/* ---------- 6. Editor e formulário ---------- */\n.editor-abas { display: none; gap: .5rem; margin: 1.5rem 0 0; }\n.editor-aba {\n  flex: 1; font: 600 .98rem var(--fonte-texto); padding: .7rem 1rem; cursor: pointer;\n  border: 1.5px solid var(--linha); border-radius: 999px; background: var(--off); color: var(--marrom);\n}\n.editor-aba[aria-pressed=\"true\"] { background: var(--marrom); border-color: var(--marrom); color: var(--off); }\n\n.editor { display: grid; grid-template-columns: minmax(0, 1fr) 390px; gap: clamp(2rem, 5vw, 4rem); margin-top: 2.5rem; align-items: start; }\n\n.editor-previa { position: sticky; top: calc(var(--altura-cabecalho) + 1rem); }\n.previa-titulo { font-weight: 600; margin: 0 0 .75rem; display: flex; flex-wrap: wrap; gap: .25rem .75rem; align-items: baseline; }\n.previa-titulo .texto-suave { font-weight: 400; font-size: .92rem; }\n.aparelho--previa { height: min(76vh, 700px); }\n\n@media (max-width: 959px) {\n  .editor-abas { display: flex; }\n  .editor { grid-template-columns: 1fr; margin-top: 1.5rem; }\n  .editor[data-view=\"form\"] .editor-previa { display: none; }\n  .editor[data-view=\"preview\"] .editor-form { display: none; }\n  .editor-previa { position: static; }\n  .aparelho--previa { max-width: 420px; margin-inline: auto; }\n}\n\n.grupo { border: 0; margin: 0 0 2rem; padding: 1.75rem 0 0; border-top: 1.5px dashed var(--linha); min-width: 0; }\n.grupo:first-of-type { border-top: 0; padding-top: 0; }\n.grupo legend { padding: 0; font-family: var(--fonte-titulo); font-size: 1.4rem; font-weight: 500; margin-bottom: .9rem; float: left; width: 100%; }\n.grupo legend + * { clear: both; }\n\n.campo { margin-bottom: 1rem; min-width: 0; }\n.campo--curto { max-width: 15rem; }\nlabel { display: block; font-weight: 600; font-size: .96rem; margin-bottom: .4rem; }\n.opcional { font-weight: 400; color: var(--marrom-suave); }\n\ninput[type=\"text\"], input[type=\"url\"], input[type=\"date\"], textarea {\n  width: 100%; font: inherit; color: var(--marrom);\n  padding: .8rem .95rem; background: var(--off);\n  border: 1.5px solid var(--linha); border-radius: 12px;\n  transition: border-color .2s ease, box-shadow .2s ease;\n}\ntextarea { resize: vertical; line-height: 1.55; min-height: 6rem; }\ninput::placeholder, textarea::placeholder { color: #A58F85; }\ninput:focus-visible, textarea:focus-visible {\n  outline: none; border-color: var(--rosa-queimado); box-shadow: 0 0 0 4px rgba(176, 80, 95, .2);\n}\ninput[aria-invalid=\"true\"], textarea[aria-invalid=\"true\"] { border-color: var(--erro); background: #FFF6F6; }\ninput[readonly] { background: var(--papel); }\n\n.dica { font-size: .9rem; color: var(--marrom-suave); margin: .4rem 0 0; }\n.dica--grupo { margin: -.25rem 0 1.1rem; max-width: 40em; }\n.contagem { float: right; font-variant-numeric: tabular-nums; }\n.erro { font-size: .92rem; font-weight: 500; color: var(--erro); margin: .4rem 0 0; }\n.erro:empty { display: none; }\n.erro--resumo { margin: 0 0 1rem; padding: .75rem 1rem; background: #FBE9EA; border-radius: 12px; }\n\n.linha-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 0 1rem; }\n.foto-slot { display: grid; grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr); gap: 0 1rem; }\n@media (max-width: 599px) { .linha-2, .foto-slot { grid-template-columns: 1fr; } }\n\n.gerar { padding-top: .5rem; }\n.resultado { margin-top: 1.75rem; padding: 1.4rem; background: var(--off); border: 1.5px solid var(--linha); border-radius: 18px; box-shadow: var(--sombra-leve); }\n.link-linha { display: flex; gap: .6rem; flex-wrap: wrap; }\n.link-linha input { flex: 1 1 14rem; min-width: 0; }\n.link-simples { font-weight: 600; }\n.aviso-prototipo { margin: 1rem 0 0; padding: .85rem 1rem; font-size: .92rem; background: var(--rosa-pastel); border-radius: 12px; }\n\n.toast {\n  position: fixed; left: 50%; bottom: 1.5rem; z-index: 200;\n  transform: translate(-50%, 20px); opacity: 0; pointer-events: none;\n  background: var(--marrom); color: var(--off); padding: .7rem 1.2rem; border-radius: 999px;\n  font-weight: 500; font-size: .96rem; box-shadow: var(--sombra);\n  transition: opacity .25s ease, transform .25s ease;\n}\n.toast.visivel { opacity: 1; transform: translate(-50%, 0); }\n.toast:empty { display: none; }\n\n.rodape { padding: 3rem 0 3.5rem; border-top: 1px solid var(--linha); text-align: center; }\n.rodape-marca { font-family: var(--fonte-titulo); font-style: italic; font-size: 1.5rem; margin-bottom: .25rem; }\n.rodape p:last-child { margin: 0; font-size: .92rem; }\n\n/* ==========================================================================\n   7. PRESENTE (.gift)\n   Funciona em três lugares: tela cheia (link recebido), moldura de exemplo\n   e pré-visualização. Por isso usa container queries (medidas relativas ao\n   próprio presente, e não à janela do navegador).\n   ========================================================================== */\n.gift {\n  container-type: inline-size;\n  position: relative;\n  min-height: 100%;\n  padding-bottom: 1rem;\n  text-align: center;\n  font-family: var(--fonte-texto);\n  color: var(--marrom);\n  background-color: var(--creme);\n}\n.gift--final { min-height: 100vh; }\n\n.gift-section { padding: 1.5rem 1.5rem 1rem; max-width: 760px; margin-inline: auto; }\n.gift-subtitulo { font-family: var(--fonte-titulo); font-style: italic; font-weight: 400; font-size: 1.7rem; margin-bottom: 1.5rem; }\n\n.gift-divisor { display: flex; align-items: center; justify-content: center; gap: .75rem; margin: 1.25rem auto; width: min(70%, 260px); color: var(--rosa-queimado); }\n.gift-divisor::before, .gift-divisor::after { content: \"\"; flex: 1; border-top: 1.5px dashed var(--rosa-medio); }\n.gift-divisor svg { width: 14px; height: 14px; fill: currentColor; flex: none; }\n\n.gift-vazio {\n  margin: 0 auto; max-width: 28em; padding: 1.5rem 1.25rem;\n  border: 1.5px dashed var(--rosa-medio); border-radius: 16px; color: var(--marrom-suave); font-size: .98rem;\n}\n\n/* --- boas-vindas --- */\n.gift-welcome { padding: 2.5rem 1.25rem 1.5rem; }\n.gift-arch {\n  position: relative; overflow: hidden; width: min(100%, 440px); margin-inline: auto;\n  padding: 5.5rem 1.5rem 2.5rem;\n  background: var(--rosa-pastel);\n  border-radius: 999px 999px 22px 22px;\n}\n.gift-arch > :not(.float-heart) { position: relative; z-index: 1; }\n.gift-title { font-size: 2.3rem; font-size: clamp(2rem, 10cqi, 3.2rem); font-weight: 500; }\n.gift-lead { margin: 1rem auto 0; max-width: 22em; color: var(--marrom); }\n.gift-names {\n  display: flex; align-items: center; justify-content: center; gap: .6rem; flex-wrap: wrap;\n  font-family: var(--fonte-mao); font-size: 1.9rem; line-height: 1.1; margin: 1.1rem 0 1.6rem; color: var(--rosa-queimado-escuro);\n}\n.gift-names-heart { width: 1.1rem; height: 1.1rem; fill: var(--rosa-queimado); }\n\n.float-heart {\n  position: absolute; bottom: -1.5rem; left: var(--left, 50%); width: var(--tam, 14px); height: var(--tam, 14px);\n  fill: var(--rosa-queimado); opacity: 0;\n  animation: flutuar var(--dur, 9s) var(--atraso, 0s) infinite ease-in;\n  pointer-events: none;\n}\n@keyframes flutuar {\n  0%   { transform: translate(0, 0) rotate(-8deg); opacity: 0; }\n  15%  { opacity: .3; }\n  85%  { opacity: .22; }\n  100% { transform: translate(var(--desvio, 14px), -26rem) rotate(10deg); opacity: 0; }\n}\n\n/* --- contador --- */\n.contador-intro { color: var(--marrom-suave); margin: 0 0 .25rem; }\n.contador-numero { margin: 0; display: flex; align-items: baseline; justify-content: center; gap: .6rem; flex-wrap: wrap; line-height: 1; }\n.contador-valor { font-family: var(--fonte-titulo); font-weight: 600; font-size: 4.5rem; font-size: clamp(3.8rem, 24cqi, 6.5rem); color: var(--rosa-queimado); letter-spacing: -.03em; font-variant-numeric: lining-nums; }\n.contador-unidade { font-family: var(--fonte-mao); font-size: 2.1rem; color: var(--marrom); }\n.contador-detalhe { margin: .75rem 0 0; color: var(--marrom-suave); }\n.contador-detalhe:empty { display: none; }\n\n/* --- fotos --- */\n.gift-fotos { display: flex; flex-direction: column; align-items: center; gap: 1.75rem; padding: .5rem 0 1rem; }\n.polaroid {\n  --giro: -2deg;\n  position: relative; margin: 0; width: min(76%, 270px);\n  padding: 10px 10px 12px; background: #fff;\n  box-shadow: var(--sombra);\n  transform: rotate(var(--giro));\n}\n.polaroid::before {                         /* fita adesiva */\n  content: \"\"; position: absolute; top: -11px; left: 50%; width: 64px; height: 22px; margin-left: -32px;\n  background: rgba(232, 180, 179, .75); transform: rotate(-3deg);\n}\n.polaroid img, .polaroid-falha {\n  display: block; width: 100%; aspect-ratio: 1; object-fit: cover; background: var(--rosa-pastel);\n}\n.polaroid-falha { display: grid; place-items: center; padding: 1rem; font-size: .95rem; color: var(--marrom-suave); }\n.polaroid figcaption { font-family: var(--fonte-mao); font-size: 1.45rem; line-height: 1.1; padding-top: .6rem; min-height: 1.1em; }\n.polaroid figcaption:empty { padding-top: 1.1rem; }\n.gift-fotos .polaroid:nth-child(even) { align-self: flex-end; margin-right: 6%; }\n.gift-fotos .polaroid:nth-child(odd)  { align-self: flex-start; margin-left: 6%; }\n.gift-fotos .polaroid:nth-child(3n+2) { --giro: 2.5deg; }\n.gift-fotos .polaroid:nth-child(3n)   { --giro: -1.5deg; }\n\n@container (min-width: 640px) {\n  .gift-fotos { flex-direction: row; justify-content: center; align-items: flex-start; gap: 0; }\n  .gift-fotos .polaroid, .gift-fotos .polaroid:nth-child(n) { align-self: auto; margin: 0 -.5rem; width: 230px; }\n  .gift-fotos .polaroid:nth-child(even) { margin-top: 1.75rem; }\n}\n\n/* --- carta --- */\n.carta-palco { padding-top: 5.3rem; }\n.envelope {\n  display: block; width: min(320px, 86%); margin: 0 auto; padding: 0; border: 0; background: none;\n  font: inherit; color: inherit; cursor: pointer;\n}\n.envelope-corpo { display: block; position: relative; aspect-ratio: 3 / 2; perspective: 900px; filter: drop-shadow(0 8px 10px rgba(79, 53, 46, .16)); }\n.envelope-fundo, .envelope-frente, .envelope-aba { position: absolute; left: 0; width: 100%; }\n.envelope-fundo { top: 0; height: 100%; background: #DFAFA9; border-radius: 6px; }\n.envelope-frente {\n  top: 0; height: 100%; z-index: 2; background: #F1D2CC; border-radius: 6px;\n  clip-path: polygon(0 0, 50% 46%, 100% 0, 100% 100%, 0 100%);\n}\n.envelope-aba {\n  top: 0; height: 46%; z-index: 3; background: #E8C0BA;\n  clip-path: polygon(0 0, 100% 0, 50% 100%);\n  transform-origin: top center;\n  transition: transform .7s cubic-bezier(.4, 0, .2, 1);\n}\n.envelope-selo {\n  position: absolute; z-index: 4; left: 50%; top: 46%; width: 2.6rem; height: 2.6rem; margin: -1.3rem 0 0 -1.3rem;\n  display: grid; place-items: center; border-radius: 50%; background: var(--rosa-queimado);\n  box-shadow: 0 2px 4px rgba(79, 53, 46, .3);\n  transition: opacity .3s ease, transform .3s ease;\n}\n.envelope-selo svg { width: 1.1rem; height: 1.1rem; fill: #fff; }\n.envelope-dica { display: block; margin-top: .9rem; font-family: var(--fonte-mao); font-size: 1.5rem; color: var(--rosa-queimado-escuro); }\n.envelope:hover .envelope-selo { transform: scale(1.08); }\n\n.carta-palco.aberta .envelope-aba { transform: rotateX(180deg); }\n.carta-palco.aberta .envelope-selo { opacity: 0; transform: scale(.6); }\n.carta-palco.aberta .envelope-dica { display: none; }\n\n.carta-folha-wrap {\n  display: grid; grid-template-rows: 0fr; visibility: hidden;\n  max-width: 560px; margin: -.5rem auto 0;\n  transition: grid-template-rows .9s cubic-bezier(.3, .7, .2, 1) .35s, visibility 0s linear 1.25s;\n}\n.carta-palco.aberta .carta-folha-wrap { grid-template-rows: 1fr; visibility: visible; transition-delay: .35s, 0s; }\n.carta-folha-miolo { overflow: hidden; min-height: 0; }\n\n.carta-folha {\n  --lh: 2.05rem;\n  margin: 1.25rem .35rem .5rem; padding: var(--lh) 1.5rem var(--lh);\n  text-align: left; line-height: var(--lh);\n  background-color: #FFFDF8;\n  background-image: repeating-linear-gradient(to bottom, transparent 0, transparent calc(var(--lh) - 1px), rgba(176, 80, 95, .16) calc(var(--lh) - 1px), rgba(176, 80, 95, .16) var(--lh));\n  background-position: 0 0;\n  border-radius: 4px; box-shadow: var(--sombra);\n}\n.carta-saudacao { margin: 0; font-family: var(--fonte-mao); font-size: 2rem; line-height: var(--lh); color: var(--rosa-queimado-escuro); }\n.carta-texto { margin: 0; font-family: var(--fonte-titulo); font-size: 1.08rem; line-height: var(--lh); white-space: pre-line; overflow-wrap: anywhere; }\n.carta-assinatura { margin: var(--lh) 0 0; font-family: var(--fonte-mao); font-size: 1.7rem; line-height: var(--lh); text-align: right; color: var(--rosa-queimado-escuro); }\n\n/* --- surpresa --- */\n.surpresa-palco { position: relative; min-height: 4rem; }\n.surpresa-cartao {\n  margin: 0 auto; max-width: 440px; padding: 1.6rem 1.5rem;\n  background: var(--rosa-pastel); border-radius: 6px; box-shadow: var(--sombra-leve);\n  transform: rotate(-1deg); outline: none;\n  font-family: var(--fonte-titulo); font-style: italic; font-size: 1.2rem; line-height: 1.55;\n  white-space: pre-line; overflow-wrap: anywhere;\n}\n.surpresa-cartao p { margin: 0; }\n.surpresa-cartao.is-novo { animation: abrir-cartao .7s cubic-bezier(.2, .8, .2, 1) both; }\n@keyframes abrir-cartao {\n  from { opacity: 0; transform: translateY(14px) rotate(-4deg) scale(.94); }\n  to   { opacity: 1; transform: rotate(-1deg); }\n}\n.burst-heart {\n  position: absolute; left: 50%; top: 50%; width: 16px; height: 16px; margin: -8px 0 0 -8px;\n  fill: var(--rosa-queimado); pointer-events: none; opacity: 0;\n  animation: subir 1.6s ease-out forwards;\n}\n@keyframes subir {\n  0%   { opacity: 0; transform: translate(0, 0) scale(.5); }\n  20%  { opacity: .85; }\n  100% { opacity: 0; transform: translate(var(--x), var(--y)) rotate(var(--r)) scale(1.1); }\n}\n\n/* --- rodapé e música --- */\n.gift-rodape { padding: 1.5rem 1.5rem 2rem; font-size: .92rem; color: var(--marrom-suave); }\n.gift-rodape p { margin: 0 0 .25rem; }\n\n.musica-ancora { position: sticky; bottom: 0; height: 0; z-index: 5; }\n.musica-pilula {\n  position: absolute; right: .9rem; bottom: .9rem;\n  display: inline-flex; align-items: center; gap: .5rem;\n  font: 600 .92rem var(--fonte-texto); color: var(--marrom);\n  padding: .55rem 1rem .55rem .8rem; border-radius: 999px;\n  background: rgba(255, 252, 247, .96); border: 1.5px solid var(--rosa-medio);\n  box-shadow: var(--sombra-leve); cursor: pointer;\n}\n.musica-pilula svg { width: 1.05rem; height: 1.05rem; fill: var(--rosa-queimado); }\n.musica-pilula.tocando { background: var(--rosa-pastel); }\n.musica-pilula.com-erro { color: var(--erro); border-color: var(--erro); }\n\n/* ---------- 8. Movimento reduzido e ajustes finais ---------- */\n@media (prefers-reduced-motion: reduce) {\n  html { scroll-behavior: auto; }\n  *, *::before, *::after {\n    animation-duration: .01ms !important; animation-iteration-count: 1 !important;\n    transition-duration: .01ms !important; transition-delay: 0s !important;\n  }\n  .float-heart, .burst-heart { display: none; }\n}\n\n@media (min-width: 1100px) {\n  .aparelho { border-width: 10px; }\n}\n\n\n/* ---------- Biblioteca de ocasiões, modelos e cartas ---------- */\n.opcoes-ocasiao, .opcoes-modelo { display: grid; gap: .75rem; grid-template-columns: repeat(3, minmax(0, 1fr)); }\n.opcao-card, .modelo-card { display: flex; flex-direction: column; position: relative; min-width: 0; padding: .9rem; border: 1.5px solid var(--linha); border-radius: 15px; background: var(--off); cursor: pointer; transition: border-color .18s ease, box-shadow .18s ease, transform .18s ease; }\n.opcao-card:hover, .modelo-card:hover { transform: translateY(-2px); border-color: var(--rosa-medio); }\n.opcao-card.selecionado, .modelo-card.selecionado { border-color: var(--rosa-queimado); box-shadow: 0 0 0 2px rgba(176,80,95,.12); background: #fffaf7; }\n.opcao-card input, .modelo-card input { position: absolute; opacity: 0; inset: .5rem auto auto .5rem; }\n.opcao-card:focus-within, .modelo-card:focus-within { outline: 3px solid rgba(176,80,95,.35); outline-offset: 2px; }\n.opcao-icone { font-family: var(--fonte-titulo); font-size: 1.7rem; color: var(--rosa-queimado); line-height: 1.2; margin-bottom: .45rem; }\n.opcao-card strong, .modelo-card > strong { font-size: .93rem; line-height: 1.25; }\n.opcao-card small, .modelo-card > small { font-size: .78rem; line-height: 1.35; color: var(--marrom-suave); margin-top: .25rem; }\n.modelo-amostra { display: flex; flex-direction: column; justify-content: center; align-items: center; gap: .15rem; min-height: 108px; margin-bottom: .7rem; border-radius: 10px; padding: .5rem; color: var(--marrom); background: #f6d9d6; text-align: center; }\n.modelo-amostra i { font-style: normal; font-size: 1.4rem; }\n.modelo-amostra b { font-family: var(--fonte-titulo); font-size: 1rem; font-weight: 500; }\n.modelo-amostra small { font-size: .7rem; color: inherit; opacity: .8; }\n.modelo-album .modelo-amostra { background: #ead9c6; }\n.modelo-album .modelo-amostra i { border: 2px solid currentColor; padding: .1rem .5rem; }\n.modelo-carta .modelo-amostra { background: #fffdf8; border: 1px solid #e5d7c7; }\n.modelo-carta .modelo-amostra b { font-style: italic; }\n.modelo-ceu .modelo-amostra { color: #f8e9c7; background: #26364e; }\n.modelo-jardim .modelo-amostra { background: #e0e8d8; color: #405b45; }\n.modelo-scrap .modelo-amostra { background: #ead8bc; border: 1px dashed #ad8a6e; transform: rotate(-1deg); }\n.modelo-minimal .modelo-amostra { background: #f5f1e9; border-block: 1px solid #c9bba8; border-radius: 0; }\n.modelo-festa .modelo-amostra { background: #f5d9b6; color: #714a37; }\nselect { width: 100%; font: inherit; color: var(--marrom); padding: .8rem .95rem; background: var(--off); border: 1.5px solid var(--linha); border-radius: 12px; }\nselect:focus-visible { outline: none; border-color: var(--rosa-queimado); box-shadow: 0 0 0 4px rgba(176,80,95,.2); }\n/* O modelo escolhido acompanha o presente tanto na prévia quanto no link final. */\n.gift[data-modelo=\"album\"] .gift-arch { border-radius: 24px; background: #ead9c6; }\n.gift[data-modelo=\"album\"] .gift-fotos { gap: 1rem; }\n.gift[data-modelo=\"album\"] .polaroid { transform: none; border: 1px solid #ddc7ad; }\n.gift[data-modelo=\"carta\"] .gift-arch { border-radius: 12px; background: #fffdf8; border: 1px solid #e5d7c7; }\n.gift[data-modelo=\"carta\"] .gift-title, .gift[data-modelo=\"minimal\"] .gift-title { font-style: italic; }\n.gift[data-modelo=\"ceu\"] { --marrom: #f4ead9; --marrom-suave: #d1c3b4; --rosa-queimado: #e8c77e; --rosa-queimado-escuro: #f4dca0; --rosa-pastel: #354661; --off: #26364e; --creme: #1d293c; --papel: #26364e; --linha: #52617a; }\n.gift[data-modelo=\"ceu\"] .gift-arch { background: #354661; border: 1px solid #66748b; }\n.gift[data-modelo=\"ceu\"] .polaroid { background: #f7f0e4; }\n.gift[data-modelo=\"jardim\"] .gift-arch { background: #e0e8d8; border-radius: 48% 48% 20px 20px; }\n.gift[data-modelo=\"scrap\"] .gift-arch { background: #ead8bc; border: 1px dashed #ad8a6e; border-radius: 14px; transform: rotate(-.4deg); }\n.gift[data-modelo=\"scrap\"] .polaroid { box-shadow: 3px 4px 0 #d7bea0, var(--sombra-leve); }\n.gift[data-modelo=\"minimal\"] .gift-arch { background: #f5f1e9; border-radius: 4px; border-block: 1px solid #c9bba8; }\n.gift[data-modelo=\"minimal\"] .gift-fotos .polaroid { box-shadow: none; border: 1px solid #e3d3c2; }\n.gift[data-modelo=\"festa\"] .gift-arch { background: #f5d9b6; border-radius: 28px 28px 8px 8px; }\n.gift[data-modelo=\"festa\"] .gift-title { color: #714a37; }\n@media (max-width: 640px) { .opcoes-ocasiao { grid-template-columns: repeat(2, minmax(0,1fr)); } .opcoes-modelo { grid-template-columns: repeat(2, minmax(0,1fr)); } .opcao-card, .modelo-card { padding: .7rem; } .modelo-amostra { min-height: 92px; } }\n@media (prefers-reduced-motion: reduce) { .opcao-card, .modelo-card { transition: none; } .opcao-card:hover, .modelo-card:hover { transform: none; } }\n\n/* ---------- Temas mais marcantes: o modelo altera a composição, não só o tom ---------- */\n.gift { transition: background-color .25s ease, color .25s ease; }\n.gift .gift-arch { position: relative; isolation: isolate; overflow: hidden; transition: border-radius .25s ease, background .25s ease, border .25s ease; }\n.gift .gift-arch::before { content: '♡'; position: absolute; z-index: -1; right: 7%; top: 4%; font-size: clamp(4rem, 10vw, 8rem); line-height: 1; opacity: .12; font-family: Georgia, serif; pointer-events: none; }\n.gift[data-modelo=\"nosso\"] .gift-arch { border-radius: 48% 48% 22px 22px; box-shadow: inset 0 0 0 8px rgba(255,255,255,.22); }\n.gift[data-modelo=\"album\"] .gift-arch { border-radius: 8px; box-shadow: 8px 8px 0 #d4bea5; }\n.gift[data-modelo=\"album\"] .gift-title { font-family: Georgia, serif; letter-spacing: .04em; }\n.gift[data-modelo=\"album\"] .polaroid { transform: rotate(0) !important; border: 7px solid #fffaf0; border-bottom-width: 20px; box-shadow: 0 5px 0 #d4bea5, 0 10px 20px rgba(70,45,25,.14); }\n.gift[data-modelo=\"carta\"] .gift-arch { border-radius: 3px; background-image: repeating-linear-gradient(to bottom, transparent 0, transparent 31px, rgba(166,143,118,.14) 32px); box-shadow: 0 8px 24px rgba(75,50,30,.08); }\n.gift[data-modelo=\"carta\"] .gift-title { font-family: 'Brush Script MT', 'Segoe Script', cursive; font-size: clamp(2rem, 4vw, 3.2rem); }\n.gift[data-modelo=\"ceu\"] { background: radial-gradient(ellipse at 50% 0%, #3c4d70 0, #1c263d 68%); color: #f6e9c8; }\n.gift[data-modelo=\"ceu\"] .gift-arch { border-radius: 6px; background: linear-gradient(160deg, #283653, #111827); box-shadow: inset 0 0 0 1px #d7bb77, 0 0 34px rgba(215,187,119,.12); }\n.gift[data-modelo=\"ceu\"] .gift-arch::before { content: '✦  ·  ✧  ·  ✦'; right: 4%; top: 7%; width: 92%; text-align: center; font-size: 1.5rem; letter-spacing: .8em; color: #e7cb84; opacity: .8; }\n.gift[data-modelo=\"ceu\"] .gift-title { color: #f4d991; letter-spacing: .08em; }\n.gift[data-modelo=\"jardim\"] .gift-arch { border-radius: 48% 48% 12px 12px; background: linear-gradient(145deg, #edf1e5, #d5e1cd); border: 1px solid #a7b89b; }\n.gift[data-modelo=\"jardim\"] .gift-arch::before { content: '❀  ❁'; color: #66815e; opacity: .35; letter-spacing: .4em; }\n.gift[data-modelo=\"jardim\"] .gift-title { color: #405b45; font-family: Georgia, serif; font-style: italic; }\n.gift[data-modelo=\"scrap\"] .gift-arch { border: 2px dashed #ad8a6e; border-radius: 5px; background: #f0e0c7; box-shadow: 7px 7px 0 #d9c09d; }\n.gift[data-modelo=\"scrap\"] .gift-arch::before { content: '✂  ★  ♡'; top: auto; bottom: 2%; right: 3%; font-size: 2rem; opacity: .35; }\n.gift[data-modelo=\"scrap\"] .polaroid:nth-child(odd) { transform: rotate(-4deg) translateY(4px) !important; }\n.gift[data-modelo=\"scrap\"] .polaroid:nth-child(even) { transform: rotate(4deg) translateY(-3px) !important; }\n.gift[data-modelo=\"minimal\"] { background: #f8f6f0; color: #35332f; }\n.gift[data-modelo=\"minimal\"] .gift-arch { border-radius: 0; background: transparent; border: 0; border-top: 1px solid #b9aa96; border-bottom: 1px solid #b9aa96; box-shadow: none; }\n.gift[data-modelo=\"minimal\"] .gift-arch::before { content: none; }\n.gift[data-modelo=\"minimal\"] .gift-title { font-family: Arial, sans-serif; font-size: clamp(1.4rem, 3vw, 2rem); letter-spacing: .16em; text-transform: uppercase; }\n.gift[data-modelo=\"minimal\"] .polaroid { box-shadow: none !important; border: 1px solid #cfc5b6; transform: none !important; }\n.gift[data-modelo=\"festa\"] .gift-arch { border-radius: 18px 18px 4px 4px; background: repeating-linear-gradient(135deg, #f5d9b6 0 18px, #f9e7d0 18px 36px); border: 2px solid #d2a06b; }\n.gift[data-modelo=\"festa\"] .gift-title { color: #714a37; text-transform: uppercase; letter-spacing: .08em; }\n.gift[data-modelo=\"festa\"] .gift-arch::before { content: '✦  ✧  ✦'; right: 0; width: 100%; text-align: center; font-size: 2rem; opacity: .55; }\n\n/* A ocasião também deixa uma identidade clara no presente final/prévia. */\n.gift[data-ocasiao=\"namoro\"] .gift-title { color: var(--rosa-queimado-escuro); }\n.gift[data-ocasiao=\"aniversario\"] .gift-arch { border-bottom: 5px solid #d6a45f; }\n.gift[data-ocasiao=\"aniversario\"] .gift-arch::before { content: '✦  ✧  ✦'; color: #b77a36; opacity: .55; }\n.gift[data-ocasiao=\"casamento\"] .gift-arch { border: 1px solid #c6ad78; box-shadow: inset 0 0 0 5px rgba(198,173,120,.14); }\n.gift[data-ocasiao=\"casamento\"] .gift-title { font-family: Georgia, serif; font-style: italic; }\n.gift[data-ocasiao=\"amizade\"] .gift-arch { border-radius: 24px; }\n.gift[data-ocasiao=\"amizade\"] .gift-arch::before { content: '✿  ❀'; color: #718b66; opacity: .45; }\n.gift[data-ocasiao=\"agradecimento\"] .gift-arch { border-left: 5px solid #b3a27a; }\n.gift[data-ocasiao=\"desculpas\"] .gift-arch { border-radius: 8px; border: 1px dashed #b99c98; }\n\n/* ---------- Redesign visual: modelos mais elegantes e realmente distintos ---------- */\n.opcoes-modelo { gap: 1rem; }\n.modelo-card {\n  padding: .7rem; border: 1px solid #e9dfd8; border-radius: 18px;\n  background: #fffdfb; box-shadow: 0 3px 12px rgba(73,45,38,.045);\n  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;\n}\n.modelo-card:hover { transform: translateY(-3px); border-color: #d6b5ae; box-shadow: 0 9px 22px rgba(73,45,38,.09); }\n.modelo-card.selecionado { border: 1.5px solid #b86f79; background: #fff9f7; box-shadow: 0 0 0 3px rgba(184,111,121,.12), 0 8px 20px rgba(73,45,38,.06); }\n.modelo-amostra {\n  position: relative; isolation: isolate; overflow: hidden; min-height: 142px; margin-bottom: .8rem;\n  border-radius: 12px; padding: .8rem; gap: .35rem; box-shadow: inset 0 0 0 1px rgba(70,45,35,.05);\n}\n.modelo-amostra::before { content: ''; position: absolute; z-index: -1; inset: 0; opacity: .22; pointer-events: none; }\n.modelo-amostra i { font-size: 1.25rem; line-height: 1; }\n.modelo-amostra b { font-size: 1.05rem; line-height: 1.25; }\n.modelo-amostra small { font-size: .68rem; letter-spacing: .04em; }\n.modelo-card > strong { font-size: .9rem; color: #493a36; }\n.modelo-card > small { color: #8b7770; font-size: .76rem; }\n\n/* 1. Nosso Cantinho — editorial romântico, rosa antigo e moldura delicada */\n.modelo-nosso .modelo-amostra { color: #79515a; background: #f4e2e1; border: 1px solid #e7c9c8; }\n.modelo-nosso .modelo-amostra::before { inset: 9px; border: 1px solid rgba(151,93,105,.35); border-radius: 8px; opacity: 1; }\n.modelo-nosso .modelo-amostra i { color: #b56e7d; font-size: 1.5rem; }\n/* 2. Álbum — papel creme, fotografias instantâneas inclinadas */\n.modelo-album .modelo-amostra { color: #594b3d; background: #e9ddca; }\n.modelo-album .modelo-amostra::before { inset: 18px 23% 12px; background: #fffaf0; box-shadow: -36px 9px 0 -5px #fffaf0, 36px 5px 0 -5px #fffaf0; transform: rotate(-5deg); opacity: .95; }\n.modelo-album .modelo-amostra i { padding: .18rem .5rem .45rem; background: #fffaf0; box-shadow: 0 2px 7px #b8a58c; transform: rotate(-4deg); }\n/* 3. Carta — folha de papel, linhas suaves e assinatura */\n.modelo-carta .modelo-amostra { color: #5e5148; background: #fffdf7; border: 1px solid #e6ddd0; border-radius: 4px; }\n.modelo-carta .modelo-amostra::before { background: repeating-linear-gradient(to bottom, transparent 0 22px, #d8dce0 23px 24px); opacity: .65; }\n.modelo-carta .modelo-amostra b { font-family: Georgia, serif; font-style: italic; font-size: 1.3rem; }\n/* 4. Céu — noite azul profunda com estrelas douradas */\n.modelo-ceu .modelo-amostra { color: #f7e9c5; background: radial-gradient(ellipse at 50% 0%, #455779, #1d2940 78%); border: 1px solid #56617b; }\n.modelo-ceu .modelo-amostra::before { content: '✦   ·   ✧      ·   ✦'; inset: 14px 0 auto; text-align: center; font-size: 1rem; color: #e8ce8b; opacity: .85; }\n.modelo-ceu .modelo-amostra i { margin-top: .6rem; color: #f3d68e; font-size: 1.7rem; }\n/* 5. Jardim — verde sálvia e flores discretas */\n.modelo-jardim .modelo-amostra { color: #526a50; background: linear-gradient(145deg, #f0f2e8, #dce6d5); border: 1px solid #d0ddc8; }\n.modelo-jardim .modelo-amostra::before { content: '❀     ❁'; inset: auto 0 8px; text-align: center; color: #77906e; font-size: 1.7rem; opacity: .6; }\n.modelo-jardim .modelo-amostra i { color: #7c9871; }\n/* 6. Scrapbook — colagem artesanal, fita e fotos */\n.modelo-scrap .modelo-amostra { color: #72543f; background: #f0e2cf; border: 1px dashed #c4a687; border-radius: 5px; transform: none; }\n.modelo-scrap .modelo-amostra::before { inset: 16px 24% 14px; background: #fffaf0; box-shadow: -31px 9px 0 -5px #fffaf0, 31px 5px 0 -5px #fffaf0; transform: rotate(4deg); opacity: .95; }\n.modelo-scrap .modelo-amostra i { color: #ad8064; }\n/* 7. Minimalista — tipografia limpa e espaço em branco */\n.modelo-minimal .modelo-amostra { color: #393a37; background: #f7f6f1; border-radius: 3px; border: 0; border-block: 1px solid #d8d5cc; }\n.modelo-minimal .modelo-amostra::before { inset: 15px 12px; border: 1px solid #e1ded5; opacity: 1; }\n.modelo-minimal .modelo-amostra i { font-size: 1.5rem; color: #777a70; }\n.modelo-minimal .modelo-amostra b { font-family: Arial, sans-serif; font-size: .9rem; letter-spacing: .14em; text-transform: uppercase; }\n/* 8. Celebração — festa delicada, pêssego e pequenos confetes */\n.modelo-festa .modelo-amostra { color: #80533f; background: #f8e4d4; border: 1px solid #efd0b9; }\n.modelo-festa .modelo-amostra::before { content: '✦  ·  ✧  ·  ✦'; inset: 12px 0 auto; text-align: center; color: #c18d55; font-size: 1rem; opacity: .8; }\n.modelo-festa .modelo-amostra i { margin-top: .5rem; color: #bd835d; }\n\n/* A prévia acompanha a linguagem visual de cada cartão, sem depender só da cor. */\n.gift { --tema-fundo: #fffaf8; --tema-texto: #5d4546; --tema-destaque: #b66d7b; background: var(--tema-fundo); color: var(--tema-texto); }\n.gift .gift-welcome { position: relative; }\n.gift .gift-arch { border-radius: 24px; padding: clamp(1.5rem, 4vw, 3rem); transition: all .28s ease; }\n.gift .gift-title { color: var(--tema-destaque); }\n.gift .gift-lead { max-width: 34rem; margin-inline: auto; line-height: 1.8; }\n.gift .gift-names { letter-spacing: .035em; }\n.gift .polaroid { transition: transform .25s ease, box-shadow .25s ease; }\n.gift[data-modelo=\"nosso\"] { --tema-fundo: #fff7f6; --tema-texto: #664b50; --tema-destaque: #b66d7b; }\n.gift[data-modelo=\"nosso\"] .gift-arch { background: linear-gradient(145deg,#fffdfb,#f5e3e3); border: 1px solid #e9cecf; box-shadow: inset 0 0 0 7px rgba(255,255,255,.48), 0 14px 34px rgba(126,75,83,.08); }\n.gift[data-modelo=\"nosso\"] .gift-arch::before { content: '♡'; color: #c9828d; opacity: .15; }\n.gift[data-modelo=\"album\"] { --tema-fundo: #f1e7d8; --tema-texto: #5e5042; --tema-destaque: #8e6d50; }\n.gift[data-modelo=\"album\"] .gift-arch { background: #fffaf0; border: 1px solid #ddcbb5; border-radius: 5px; box-shadow: 7px 7px 0 #d9c7b0, 0 15px 30px rgba(77,58,38,.08); }\n.gift[data-modelo=\"album\"] .gift-title { font-family: Georgia,serif; font-weight: 400; letter-spacing: .025em; }\n.gift[data-modelo=\"album\"] .polaroid { background: #fffdf8; padding: 8px 8px 22px; border: 1px solid #e8ddcb; box-shadow: 0 5px 14px rgba(71,54,36,.12); transform: rotate(0) !important; }\n.gift[data-modelo=\"carta\"] { --tema-fundo: #f5f0e7; --tema-texto: #5f5148; --tema-destaque: #8c665e; }\n.gift[data-modelo=\"carta\"] .gift-arch { background-color: #fffdf7; background-image: repeating-linear-gradient(to bottom, transparent 0 35px, rgba(164,153,137,.12) 36px 37px); border: 1px solid #e6dccd; border-radius: 3px; box-shadow: 0 12px 32px rgba(77,58,38,.08); }\n.gift[data-modelo=\"carta\"] .gift-title { font-family: 'Brush Script MT','Segoe Script',cursive; font-weight: 400; font-size: clamp(2.3rem,5vw,3.6rem); }\n.gift[data-modelo=\"ceu\"] { --tema-fundo: #1f2b43; --tema-texto: #f4e9d2; --tema-destaque: #efd28d; background: radial-gradient(ellipse at 50% 0%,#394968,#1d283e 70%); color: var(--tema-texto); }\n.gift[data-modelo=\"ceu\"] .gift-arch { background: linear-gradient(160deg,#2d3c59,#172236); border: 1px solid rgba(230,202,137,.48); border-radius: 8px; box-shadow: inset 0 0 0 5px rgba(230,202,137,.06), 0 16px 40px rgba(0,0,0,.18); }\n.gift[data-modelo=\"ceu\"] .gift-arch::before { content: '✦   ·   ✧    ·    ✦'; color: #efd28d; opacity: .8; right: 0; width: 100%; text-align: center; font-size: 1.2rem; letter-spacing: .4em; }\n.gift[data-modelo=\"ceu\"] .gift-title { color: #efd28d; font-family: Georgia,serif; font-weight: 400; }\n.gift[data-modelo=\"jardim\"] { --tema-fundo: #edf1e8; --tema-texto: #4e624b; --tema-destaque: #5c7855; }\n.gift[data-modelo=\"jardim\"] .gift-arch { background: linear-gradient(145deg,#fbfcf7,#e1eadb); border: 1px solid #c8d6c0; border-radius: 48% 48% 18px 18px / 14% 14% 18px 18px; box-shadow: 0 14px 30px rgba(65,88,59,.09); }\n.gift[data-modelo=\"jardim\"] .gift-arch::before { content: '❀     ❁'; color: #6e8b64; opacity: .3; }\n.gift[data-modelo=\"jardim\"] .gift-title { color: #526f4c; font-family: Georgia,serif; font-style: italic; font-weight: 400; }\n.gift[data-modelo=\"scrap\"] { --tema-fundo: #efe2d0; --tema-texto: #6e523f; --tema-destaque: #9a6b4e; }\n.gift[data-modelo=\"scrap\"] .gift-arch { background: #fff5e7; border: 1px dashed #c3a184; border-radius: 6px; box-shadow: 7px 7px 0 #dfc8ad; }\n.gift[data-modelo=\"scrap\"] .gift-arch::before { content: '✂   ♡   ✦'; color: #a67a5d; opacity: .28; top: auto; bottom: 4%; right: 5%; }\n.gift[data-modelo=\"scrap\"] .polaroid { border: 6px solid #fffdf6; border-bottom-width: 19px; box-shadow: 2px 5px 0 #d8bea0, 0 8px 18px rgba(71,54,36,.12); }\n.gift[data-modelo=\"scrap\"] .polaroid:nth-child(odd) { transform: rotate(-3deg) translateY(3px) !important; }\n.gift[data-modelo=\"scrap\"] .polaroid:nth-child(even) { transform: rotate(3deg) translateY(-3px) !important; }\n.gift[data-modelo=\"minimal\"] { --tema-fundo: #faf9f5; --tema-texto: #3d3e3a; --tema-destaque: #535650; background: #faf9f5; color: #3d3e3a; }\n.gift[data-modelo=\"minimal\"] .gift-arch { background: transparent; border: 0; border-block: 1px solid #d8d5cb; border-radius: 0; box-shadow: none; }\n.gift[data-modelo=\"minimal\"] .gift-arch::before { content: none; }\n.gift[data-modelo=\"minimal\"] .gift-title { color: #41433e; font-family: Arial,sans-serif; font-size: clamp(1.4rem,3vw,2rem); font-weight: 400; letter-spacing: .15em; text-transform: uppercase; }\n.gift[data-modelo=\"minimal\"] .polaroid { background: transparent; border: 1px solid #d9d5ca; box-shadow: none !important; transform: none !important; }\n.gift[data-modelo=\"festa\"] { --tema-fundo: #fff3e8; --tema-texto: #704a3a; --tema-destaque: #ad704e; }\n.gift[data-modelo=\"festa\"] .gift-arch { background: radial-gradient(circle at 10% 10%,#f1d3b8 0 3px,transparent 4px),radial-gradient(circle at 90% 17%,#e8c6a8 0 4px,transparent 5px),linear-gradient(145deg,#fff9f1,#f8e2d0); border: 1px solid #e9c7ac; border-radius: 28px 28px 10px 10px; box-shadow: 0 14px 30px rgba(135,83,51,.09); }\n.gift[data-modelo=\"festa\"] .gift-arch::before { content: '✦   ✧   ✦'; color: #bc8b55; opacity: .5; width: 100%; text-align: center; right: 0; }\n.gift[data-modelo=\"festa\"] .gift-title { color: #9c6246; letter-spacing: .04em; }\n@media (max-width: 640px) { .modelo-amostra { min-height: 120px; } .opcoes-modelo { gap: .65rem; } }\n\n\n/* Campos de mídia local */\ninput[type=\"file\"] { width: 100%; max-width: 100%; padding: 12px; border: 1px dashed var(--linha, #d8c8c3); border-radius: 12px; background: rgba(255,255,255,.55); color: inherit; font: inherit; }\n#baixar-presente { margin-top: 10px; }\n#status-fotos, #status-musica { overflow-wrap: anywhere; }\n\n\n/* Seletor de arquivos com aparência consistente com o Meu Cantinho */\ninput[type=\"file\"] {\n  display: block; width: 100%; max-width: 100%; padding: 10px;\n  border: 1px solid #e5c9c7; border-radius: 14px; background: #fffaf6;\n  color: #6f514b; font: 500 .95rem/1.4 var(--fonte-texto); cursor: pointer;\n  box-shadow: 0 2px 8px rgba(79,53,46,.04);\n}\ninput[type=\"file\"]::file-selector-button {\n  margin: 0 12px 0 0; padding: 10px 15px; border: 0; border-radius: 999px;\n  background: #b0505f; color: #fff; font: 600 .9rem/1.2 var(--fonte-texto);\n  cursor: pointer; transition: background .18s ease, transform .18s ease;\n}\ninput[type=\"file\"]::file-selector-button:hover { background: #93404e; transform: translateY(-1px); }\ninput[type=\"file\"]:focus-visible { outline: 3px solid #b0505f; outline-offset: 3px; }\n#baixar-presente { margin-top: 10px; }\n#status-fotos, #status-musica { overflow-wrap: anywhere; }\n\n/* ==========================================================================\n   9. POLIMENTO MOBILE — cartões confortáveis em telas pequenas\n   ========================================================================== */\nhtml { -webkit-text-size-adjust: 100%; text-size-adjust: 100%; }\nbody { -webkit-tap-highlight-color: transparent; }\n.gift { overflow-wrap: anywhere; }\n.gift-section { padding-inline: clamp(1rem, 4.5vw, 1.5rem); }\n.gift-welcome { padding-top: clamp(1.5rem, 7vw, 2.5rem); }\n.gift-arch { box-shadow: 0 16px 38px rgba(112, 72, 66, .08); }\n.gift-title { line-height: 1.12; text-wrap: balance; }\n.gift-lead { line-height: 1.65; text-wrap: pretty; }\n.gift-subtitulo { line-height: 1.2; text-wrap: balance; }\n.polaroid { border-radius: 2px; transition: transform .35s ease, box-shadow .35s ease; }\n.polaroid img { border-radius: 1px; }\n.carta-folha { border: 1px solid rgba(176, 80, 95, .12); box-shadow: 0 14px 35px rgba(79, 53, 46, .12); }\n.carta-texto { text-wrap: pretty; }\n.surpresa-cartao { border: 1px solid rgba(176, 80, 95, .14); }\n.musica-estatica audio { min-height: 44px; }\n\n@media (max-width: 600px) {\n  .gift--final { min-height: 100svh; padding-bottom: max(1.25rem, env(safe-area-inset-bottom)); }\n  .gift-section { padding-top: 1.2rem; padding-bottom: .8rem; }\n  .gift-welcome { padding: 1.2rem .85rem .8rem; }\n  .gift-arch { width: 100%; padding: 4.2rem 1rem 1.8rem; border-radius: 999px 999px 18px 18px; }\n  .gift-title { font-size: clamp(1.9rem, 9vw, 2.5rem); }\n  .gift-names { font-size: clamp(1.55rem, 7vw, 1.9rem); gap: .4rem; margin-bottom: 1.15rem; }\n  .contador-valor { font-size: clamp(3rem, 18vw, 4.2rem); }\n  .gift-fotos { gap: 1.35rem; padding: .35rem 0 .75rem; }\n  .gift-fotos .polaroid,\n  .gift-fotos .polaroid:nth-child(n) { width: min(78%, 280px); }\n  .carta-palco { padding-top: 1.5rem; }\n  .carta-folha { --lh: 1.85rem; margin: .75rem 0 .35rem; padding: 1.25rem 1rem; border-radius: 8px; }\n  .carta-saudacao { font-size: 1.75rem; }\n  .carta-texto { font-size: 1rem; line-height: 1.85rem; }\n  .carta-assinatura { font-size: 1.5rem; }\n  .surpresa-cartao { padding: 1.25rem 1rem; font-size: 1.1rem; border-radius: 10px; }\n  .gift-divisor { margin-block: .9rem; }\n  .gift-rodape, .rodape { padding-bottom: max(1.5rem, env(safe-area-inset-bottom)); }\n}\n\n@media (hover: hover) and (pointer: fine) {\n  .polaroid:hover { transform: rotate(0deg) translateY(-3px); box-shadow: 0 16px 32px rgba(79, 53, 46, .16); }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .polaroid { transition: none; }\n  .float-heart { animation: none; display: none; }\n  .surpresa-cartao.is-novo { animation: none; }\n}\n\n\n/* ---------- Personalização visual escolhida no editor ---------- */\n.gift[data-paleta=\"lavanda\"] { --creme:#F7F3FC; --off:#FFFCFF; --papel:#EEE6F8; --linha:#DCCCEB; --rosa-pastel:#E7DDF8; --rosa-medio:#C7B2E7; --rosa-queimado:#8061A8; --rosa-queimado-escuro:#684B90; --marrom:#382D45; --marrom-suave:#756681; }\n.gift[data-paleta=\"ceu\"] { --creme:#F1F7FC; --off:#FBFDFF; --papel:#E1EEF8; --linha:#C8DDEB; --rosa-pastel:#D9EAF7; --rosa-medio:#A8CEE8; --rosa-queimado:#477FA4; --rosa-queimado-escuro:#356783; --marrom:#263B4B; --marrom-suave:#617D90; }\n.gift[data-paleta=\"sage\"] { --creme:#F3F7F0; --off:#FCFFF9; --papel:#E5EDE0; --linha:#CFDCC8; --rosa-pastel:#DCE8D6; --rosa-medio:#B5CBAA; --rosa-queimado:#64815B; --rosa-queimado-escuro:#4D6845; --marrom:#33412F; --marrom-suave:#6D7D66; }\n.gift[data-paleta=\"dourado\"] { --creme:#FBF7EB; --off:#FFFEF8; --papel:#F2E8CB; --linha:#E2D2A6; --rosa-pastel:#F0E2B9; --rosa-medio:#D7BC76; --rosa-queimado:#987A32; --rosa-queimado-escuro:#765D23; --marrom:#493C24; --marrom-suave:#82704A; }\n.gift[data-paleta=\"noite\"] { --creme:#242432; --off:#302F42; --papel:#39364B; --linha:#55516B; --rosa-pastel:#49425F; --rosa-medio:#A18CC9; --rosa-queimado:#D2B8F0; --rosa-queimado-escuro:#E5D5FA; --marrom:#F7F0FF; --marrom-suave:#D0C3E0; }\n.gift[data-fonte=\"manuscrita\"] { --fonte-titulo:var(--fonte-mao); --fonte-texto:var(--fonte-mao); }\n.gift[data-fonte=\"moderna\"] { --fonte-titulo:system-ui, -apple-system, 'Segoe UI', sans-serif; --fonte-texto:system-ui, -apple-system, 'Segoe UI', sans-serif; }\n.gift[data-fonte=\"delicada\"] { --fonte-titulo:'Palatino Linotype', Palatino, Georgia, serif; --fonte-texto:'Trebuchet MS', sans-serif; }\n.gift[data-layout-fotos=\"grade\"] .gift-fotos { display:grid; grid-template-columns:repeat(auto-fit,minmax(125px,1fr)); gap:1rem; align-items:start; }\n.gift[data-layout-fotos=\"grade\"] .gift-fotos .polaroid, .gift[data-layout-fotos=\"grade\"] .gift-fotos .polaroid:nth-child(n) { width:100%; max-width:230px; margin:0 auto; align-self:auto; transform:none; }\n.gift[data-layout-fotos=\"album\"] .gift-fotos { display:flex; flex-direction:row; flex-wrap:wrap; justify-content:center; align-items:flex-start; gap:.85rem; }\n.gift[data-layout-fotos=\"album\"] .gift-fotos .polaroid, .gift[data-layout-fotos=\"album\"] .gift-fotos .polaroid:nth-child(n) { width:min(42%,190px); margin:0; align-self:auto; transform:none; }\n.gift[data-decoracao=\"estrelas\"] .gift-arch::before { content:'✦  ✧  ✦'; display:block; color:var(--rosa-queimado); letter-spacing:.7rem; margin-bottom:.8rem; font-size:1.15rem; }\n.gift[data-decoracao=\"flores\"] .gift-arch::before { content:'✿  ❀  ✿'; display:block; color:var(--rosa-queimado); letter-spacing:.45rem; margin-bottom:.8rem; font-size:1.2rem; }\n.gift[data-decoracao=\"limpa\"] .gift-arch .coracao-flutuante, .gift[data-decoracao=\"limpa\"] .gift-arch [class*=\"coracao-flutuante\"] { display:none !important; }\n\n\n/* Modelos adicionais: quatro estilos completos, sem controles de decoração extra. */\n.modelo-noite .modelo-amostra { color: #f6e8ed; background: linear-gradient(145deg,#4b293d,#211b2c); border: 1px solid #795168; }\n.modelo-noite .modelo-amostra::before { inset: 10px; border: 1px solid rgba(232,185,204,.35); border-radius: 8px; opacity: 1; }\n.modelo-noite .modelo-amostra i { color: #e6b4c7; font-size: 1.6rem; }\n.modelo-botanico .modelo-amostra { color: #405848; background: linear-gradient(145deg,#f8f5e9,#dce7d7); border: 1px solid #c7d5bf; }\n.modelo-botanico .modelo-amostra::before { content: '❧  ·  ❧'; inset: auto 0 8px; text-align: center; color: #719174; font-size: 1.5rem; opacity: .65; }\n.modelo-botanico .modelo-amostra i { color: #66876a; font-size: 1.6rem; }\n.modelo-editorial .modelo-amostra { color: #252525; background: #f5f0e6; border: 1px solid #d7cbb8; border-radius: 2px; }\n.modelo-editorial .modelo-amostra::before { inset: 10px; border-block: 2px solid #2f2c28; opacity: 1; }\n.modelo-editorial .modelo-amostra i { font-family: Georgia,serif; font-size: 1.6rem; }\n.modelo-editorial .modelo-amostra b { letter-spacing: .08em; text-transform: uppercase; font-size: .82rem; }\n.modelo-fofo .modelo-amostra { color: #875d6d; background: linear-gradient(145deg,#fff4f6,#f5e4ef); border: 1px solid #ebcedb; }\n.modelo-fofo .modelo-amostra::before { inset: 9px; border: 1px dashed #dbaebf; border-radius: 14px; opacity: 1; }\n.modelo-fofo .modelo-amostra i { color: #d78fa8; font-size: 1.7rem; }\n.gift[data-modelo=\"noite\"] { --tema-fundo:#f5edf1; --tema-texto:#563747; --tema-destaque:#914f6b; }\n.gift[data-modelo=\"noite\"] .gift-arch { background:linear-gradient(145deg,#fff9fc,#eadbe4); border:1px solid #d9bccd; box-shadow:inset 0 0 0 5px rgba(255,255,255,.45),0 14px 34px rgba(80,39,62,.10); }\n.gift[data-modelo=\"noite\"] .gift-arch::before { content:'☾'; color:#a96d89; opacity:.16; }\n.gift[data-modelo=\"noite\"] .gift-title { color:#864c67; }\n.gift[data-modelo=\"botanico\"] { --tema-fundo:#eff2e9; --tema-texto:#465b49; --tema-destaque:#5f7d61; }\n.gift[data-modelo=\"botanico\"] .gift-arch { background:linear-gradient(145deg,#fcfcf6,#e0e9d9); border:1px solid #c9d6c0; border-radius:8px 32px 8px 32px; box-shadow:0 14px 30px rgba(57,82,58,.08); }\n.gift[data-modelo=\"botanico\"] .gift-arch::before { content:'❧'; color:#769474; opacity:.18; }\n.gift[data-modelo=\"botanico\"] .gift-title { color:#526e53; font-style:italic; }\n.gift[data-modelo=\"editorial\"] { --tema-fundo:#f4f0e7; --tema-texto:#302f2b; --tema-destaque:#3f514b; }\n.gift[data-modelo=\"editorial\"] .gift-arch { background:#fffdf7; border:1px solid #d7d0c4; border-radius:2px; box-shadow:none; }\n.gift[data-modelo=\"editorial\"] .gift-arch::before { content:'01  /  UMA HISTÓRIA'; color:#68796f; opacity:.55; font-size:.75rem; letter-spacing:.2em; }\n.gift[data-modelo=\"editorial\"] .gift-title { text-transform:uppercase; letter-spacing:.1em; font-family:Arial,sans-serif; font-size:clamp(1.5rem,4vw,2.4rem); }\n.gift[data-modelo=\"fofo\"] { --tema-fundo:#fff2f6; --tema-texto:#744f61; --tema-destaque:#bf7895; }\n.gift[data-modelo=\"fofo\"] .gift-arch { background:linear-gradient(145deg,#fffafd,#f8e6ef); border:1px solid #ebcbd9; border-radius:30px; box-shadow:inset 0 0 0 6px rgba(255,255,255,.55),0 14px 32px rgba(147,86,117,.08); }\n.gift[data-modelo=\"fofo\"] .gift-arch::before { content:'♡'; color:#cf91ab; opacity:.2; }\n";
const PACOTE_JS = "/* ==========================================================================\n   Meu Cantinho — script.js\n   Organização:\n   1. Utilitários                      5. Renderização do presente\n   2. Datas e contador                 6. Menu e rolagem suave\n   3. Dados do presente                7. Editor (formulário + pré-visualização)\n   4. GiftRepository (salvar/abrir)    8. Inicialização\n   ========================================================================== */\n(function () {\n  'use strict';\n\n  /* ======================================================================\n     1. UTILITÁRIOS\n     ====================================================================== */\n  const $ = (seletor, raiz = document) => raiz.querySelector(seletor);\n  const $$ = (seletor, raiz = document) => Array.from(raiz.querySelectorAll(seletor));\n\n  const movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)');\n  const comportamentoRolagem = () => (movimentoReduzido.matches ? 'auto' : 'smooth');\n\n  /**\n   * Cria um elemento HTML. Textos entram sempre como texto (nunca como HTML),\n   * o que evita injeção de código vinda de um link malicioso.\n   */\n  function el(tag, atributos = {}, ...filhos) {\n    const no = document.createElement(tag);\n    for (const [chave, valor] of Object.entries(atributos)) {\n      if (valor === null || valor === undefined || valor === false) continue;\n      if (chave === 'class') no.className = valor;\n      else if (chave === 'text') no.textContent = valor;\n      else if (chave.startsWith('on') && typeof valor === 'function') no.addEventListener(chave.slice(2), valor);\n      else no.setAttribute(chave, valor === true ? '' : String(valor));\n    }\n    filhos.flat().forEach((filho) => {\n      if (filho === null || filho === undefined || filho === false) return;\n      no.append(filho.nodeType ? filho : document.createTextNode(String(filho)));\n    });\n    return no;\n  }\n\n  /** Ícones SVG fixos (strings estáticas, sem dados do usuário). */\n  function svg(caminho, classe) {\n    const modelo = document.createElement('template');\n    modelo.innerHTML = `<svg class=\"${classe}\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">${caminho}</svg>`;\n    return modelo.content.firstElementChild;\n  }\n  const CAMINHO_CORACAO = '<path d=\"M12 21C5 15.6 3 12.2 3 9a4.6 4.6 0 0 1 9-1.4A4.6 4.6 0 0 1 21 9c0 3.2-2 6.6-9 12z\"/>';\n  const CAMINHO_NOTA = '<path d=\"M9 3v11.6A3.5 3.5 0 1 0 11 18V7.5l8-1.8v7.9A3.5 3.5 0 1 0 21 17V2z\"/>';\n  const coracao = (classe = '') => svg(CAMINHO_CORACAO, classe);\n\n  /** Rola até um elemento, funcionando também dentro de molduras com rolagem própria. */\n  function rolarPara(alvo) {\n    const rolador = alvo.closest('[data-scroller]');\n    if (rolador) {\n      const topo = alvo.getBoundingClientRect().top - rolador.getBoundingClientRect().top + rolador.scrollTop - 12;\n      rolador.scrollTo({ top: Math.max(0, topo), behavior: comportamentoRolagem() });\n    } else {\n      alvo.scrollIntoView({ behavior: comportamentoRolagem(), block: 'start' });\n    }\n  }\n\n  let temporizadorAviso = 0;\n  function mostrarAviso(mensagem) {\n    const toast = $('#toast');\n    toast.textContent = mensagem;\n    toast.classList.add('visivel');\n    clearTimeout(temporizadorAviso);\n    temporizadorAviso = setTimeout(() => toast.classList.remove('visivel'), 2400);\n  }\n\n  /* ======================================================================\n     2. DATAS E CONTADOR\n     ====================================================================== */\n  /** Lê \"AAAA-MM-DD\" e devolve null se a data não existir. */\n  function lerData(texto) {\n    const m = /^(\\d{4})-(\\d{2})-(\\d{2})$/.exec(texto || '');\n    if (!m) return null;\n    const ano = +m[1], mes = +m[2], dia = +m[3];\n    const data = new Date(ano, mes - 1, dia);\n    if (data.getFullYear() !== ano || data.getMonth() !== mes - 1 || data.getDate() !== dia) return null;\n    return { ano, mes, dia, data };\n  }\n\n  function hoje() {\n    const agora = new Date();\n    return { ano: agora.getFullYear(), mes: agora.getMonth() + 1, dia: agora.getDate() };\n  }\n\n  /** Dias entre duas datas. Usa UTC para o horário de verão não bagunçar a conta. */\n  function diasEntre(inicio, fim) {\n    const a = Date.UTC(inicio.ano, inicio.mes - 1, inicio.dia);\n    const b = Date.UTC(fim.ano, fim.mes - 1, fim.dia);\n    return Math.round((b - a) / 86400000);\n  }\n\n  const plural = (n, singular, pluralTxt) => `${n} ${n === 1 ? singular : pluralTxt}`;\n\n  function juntarLista(partes) {\n    if (partes.length <= 1) return partes.join('');\n    return `${partes.slice(0, -1).join(', ')} e ${partes[partes.length - 1]}`;\n  }\n\n  /** Anos, meses e dias completos desde a data inicial até hoje. */\n  function tempoCompleto(inicio, fim) {\n    let anos = fim.ano - inicio.ano;\n    let meses = fim.mes - inicio.mes;\n    let dias = fim.dia - inicio.dia;\n    if (dias < 0) {\n      meses -= 1;\n      dias += new Date(fim.ano, fim.mes - 1, 0).getDate(); // dias do mês anterior\n    }\n    if (meses < 0) {\n      anos -= 1;\n      meses += 12;\n    }\n    return { anos, meses, dias };\n  }\n\n  const formatadorData = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });\n\n  /** Textos do contador para uma data (passada, de hoje ou futura). */\n  function descreverContador(dataTexto) {\n    const inicio = lerData(dataTexto);\n    if (!inicio) return null;\n    const agora = hoje();\n    const diferenca = diasEntre(inicio, agora);\n    const dataLonga = formatadorData.format(inicio.data);\n\n    if (diferenca > 0) {\n      const t = tempoCompleto(inicio, agora);\n      const partes = [];\n      if (t.anos) partes.push(plural(t.anos, 'ano', 'anos'));\n      if (t.meses) partes.push(plural(t.meses, 'mês', 'meses'));\n      if (t.dias && (t.anos || t.meses)) partes.push(plural(t.dias, 'dia', 'dias'));\n      return {\n        intro: `Desde ${dataLonga}`,\n        valor: diferenca.toLocaleString('pt-BR'),\n        unidade: diferenca === 1 ? 'dia' : 'dias',\n        detalhe: partes.length ? `${juntarLista(partes)} de história` : '',\n      };\n    }\n    if (diferenca === 0) {\n      return { intro: dataLonga, valor: 'Hoje', unidade: 'é o grande dia', detalhe: '' };\n    }\n    const faltam = -diferenca;\n    return {\n      intro: `Até ${dataLonga}`,\n      valor: faltam.toLocaleString('pt-BR'),\n      unidade: faltam === 1 ? 'dia para chegar' : 'dias para chegar',\n      detalhe: '',\n    };\n  }\n\n  function preencherContador(secao) {\n    const info = descreverContador(secao.dataset.contador);\n    if (!info) return;\n    $('.contador-intro', secao).textContent = info.intro;\n    $('.contador-valor', secao).textContent = info.valor;\n    $('.contador-unidade', secao).textContent = info.unidade;\n    $('.contador-detalhe', secao).textContent = info.detalhe;\n  }\n\n  /** Atualiza todos os contadores da página (roda a cada minuto, para virar o dia sozinho). */\n  function atualizarContadores() {\n    $$('[data-contador]').forEach(preencherContador);\n  }\n\n  /* ======================================================================\n     3. DADOS DO PRESENTE\n     Formato (serializado com chaves curtas para o link ficar menor):\n     { v:1, para, de, data:'AAAA-MM-DD', carta, fotos:[{u,l}x10], musica, surpresa }\n     ====================================================================== */\n  const LIMITES = { nome: 40, carta: 2500, surpresa: 600, legenda: 40, url: 600, fotos: 10 };\n  const MODELOS = ['nosso', 'album', 'carta', 'ceu', 'jardim', 'scrap', 'minimal', 'festa', 'noite', 'botanico', 'editorial', 'fofo'];\n  const OCASIOES = ['namoro', 'aniversario', 'casamento', 'amizade', 'agradecimento', 'desculpas'];\n  const CARTA_POR_OCASIAO = { namoro: 'amor', aniversario: 'aniversario-romantico', casamento: 'casamento', amizade: 'amizade', agradecimento: 'obrigado', desculpas: 'desculpas' };\n  const TEXTO_OCASIAO = {\n    namoro: 'preparou este cantinho para celebrar o amor de vocês.',\n    aniversario: 'preparou este cantinho para comemorar um dia muito especial.',\n    casamento: 'preparou este cantinho para celebrar essa nova etapa e todo o amor envolvido.',\n    amizade: 'preparou este cantinho para lembrar o quanto essa amizade é especial.',\n    agradecimento: 'preparou este cantinho para agradecer de coração.',\n    desculpas: 'preparou este cantinho para abrir espaço para uma conversa sincera.'\n  };\n  const CARTAS = {\n    amor: 'Meu amor, às vezes eu queria encontrar palavras capazes de explicar tudo o que sinto por você. Gosto da paz que encontro ao seu lado, das pequenas coisas que viram lembranças e do jeito como a vida fica mais bonita quando podemos dividir os dias. Obrigado por fazer parte da minha história. Quero continuar construindo muitos momentos com você.',\n    namoro: 'Hoje é dia de celebrar a nossa história e tudo o que construímos desde que começamos a caminhar lado a lado. Guardo com carinho cada conversa, cada risada e até os dias difíceis que nos ensinaram a cuidar um do outro. Que a gente continue escolhendo estar junto, com carinho, respeito e vontade de descobrir o que vem pela frente.',\n    pedido: 'Tem uma coisa que venho querendo te dizer há algum tempo: estar perto de você faz meus dias mais felizes. Gosto de quem sou quando estamos juntos e de tudo o que ainda podemos viver. Não quero apressar nada, só quero fazer esse convite com sinceridade: você aceita namorar comigo?',\n    'aniversario-romantico': 'Feliz aniversário! Hoje eu queria que você pudesse se enxergar pelos meus olhos e perceber o quanto é especial. Desejo que seu novo ciclo traga tranquilidade, boas surpresas, sonhos realizados e muitos motivos para sorrir. Obrigado por me deixar fazer parte da sua vida e celebrar mais um ano seu.',\n    'aniversario-amigo': 'Feliz aniversário! Que seu novo ciclo venha cheio de histórias boas, oportunidades, risadas e pessoas que te fazem bem. Obrigado pela amizade, pelas conversas e por todos os momentos que tornam a vida mais leve. Você merece coisas bonitas hoje e sempre.',\n    casamento: 'Que este novo capítulo seja cheio de parceria, respeito, paciência e alegria nas pequenas coisas. Que vocês continuem encontrando um no outro um lugar seguro para celebrar as conquistas e enfrentar os dias difíceis. Desejo uma vida inteira de carinho e boas lembranças.',\n    votos: 'Eu escolho caminhar ao seu lado nos dias leves e nos dias difíceis. Prometo ouvir, aprender, respeitar quem você é e cuidar do que estamos construindo. Não prometo uma vida perfeita, mas prometo presença, honestidade e vontade de continuar escolhendo você, um dia de cada vez.',\n    bodas: 'Olhar para a nossa história é lembrar de tantas versões de nós que cresceram juntas. Obrigado por cada recomeço, cada cuidado e cada sonho dividido. Que a gente continue encontrando motivos para rir, conversar e segurar a mão um do outro por muitos anos.',\n    amizade: 'Queria te lembrar o quanto sua amizade significa para mim. Obrigado por ouvir, por rir comigo e por estar presente de tantas formas, até nas coisas pequenas. Espero que a vida te devolva todo o bem que você espalha e que a gente ainda colecione muitas histórias.',\n    mae: 'Hoje quero agradecer por todo carinho, pelas palavras que me guiaram e pelos cuidados que muitas vezes aparecem nas pequenas coisas. Nem sempre consigo dizer isso como gostaria, mas sua presença tem um lugar enorme na minha vida. Espero que você se sinta tão amada quanto merece.',\n    pai: 'Quero aproveitar este momento para agradecer por tudo o que você me ensinou, pelo apoio e pelas maneiras, grandes ou pequenas, com que esteve presente. Nem sempre encontro as palavras certas, mas tenho muito carinho por você e por tudo o que faz parte da nossa história.',\n    obrigado: 'Quero te agradecer de coração. Talvez eu nem sempre consiga demonstrar o quanto valorizo o que você fez, mas sua atenção e seu carinho fizeram diferença para mim. Obrigado por estar presente e por tornar as coisas um pouco melhores.',\n    desculpas: 'Quero reconhecer que te magoei e sinto muito por isso. Não quero diminuir o que aconteceu nem esperar que tudo se resolva de uma vez. Quero te ouvir, entender melhor o que você sentiu e mostrar com atitudes que posso fazer diferente. Se você estiver disposto(a), gostaria de conversar com calma.',\n    recomeco: 'Sei que nem tudo foi simples entre nós, mas ainda acredito que uma conversa honesta pode abrir espaço para entendermos o que sentimos. Não quero apagar o passado; quero aprender com ele. Se fizer sentido para você, gostaria de tentar construir um próximo capítulo com mais cuidado e sinceridade.',\n    divertida: 'Parabéns por completar mais uma volta ao sol sendo essa pessoa incrível — e um pouquinho teimosa também. Que não faltem comida boa, risadas, planos aleatórios e motivos para comemorar. Hoje a missão é aproveitar muito e aceitar elogios sem discutir!',\n  };\n\n  function presenteVazio() {\n    return {\n      v: 2, para: '', de: '', data: '', carta: '', ocasiao: 'namoro', modelo: 'nosso', tipoCarta: 'livre', paleta: 'rosa', fonte: 'classica', decoracao: 'limpa', layoutFotos: 'polaroid',\n      fotos: Array.from({ length: LIMITES.fotos }, () => ({ u: '', l: '' })),\n      musica: '', surpresa: '',\n    };\n  }\n\n  /** Aceita apenas endereços http(s). Qualquer outra coisa (javascript:, data:...) vira vazio. */\n  function urlSegura(valor) {\n    if (typeof valor !== 'string') return '';\n    const texto = valor.trim().slice(0, LIMITES.url);\n    if (!texto) return '';\n    if (/^media\\/[a-zA-Z0-9._-]+$/.test(texto)) return texto;\n    try {\n      const url = new URL(texto);\n      return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : '';\n    } catch (erro) {\n      return '';\n    }\n  }\n\n  const texto = (valor, max) => (typeof valor === 'string' ? valor.replace(/\\r\\n/g, '\\n').trim().slice(0, max) : '');\n\n  /** Limpa e valida dados vindos de fora (link). Nunca confie no que vem de um link. */\n  function limparPresente(bruto) {\n    if (!bruto || typeof bruto !== 'object') throw new Error('Presente inválido');\n    const presente = presenteVazio();\n    presente.para = texto(bruto.para, LIMITES.nome);\n    presente.ocasiao = OCASIOES.includes(bruto.ocasiao) ? bruto.ocasiao : 'namoro';\n    presente.modelo = MODELOS.includes(bruto.modelo) ? bruto.modelo : 'nosso';\n    presente.paleta = ['rosa','lavanda','ceu','sage','dourado','noite'].includes(bruto.paleta) ? bruto.paleta : 'rosa';\n    presente.fonte = ['classica','manuscrita','moderna','delicada'].includes(bruto.fonte) ? bruto.fonte : 'classica';\n    presente.decoracao = 'limpa';\n    presente.layoutFotos = ['polaroid','grade','album'].includes(bruto.layoutFotos) ? bruto.layoutFotos : 'polaroid';\n    presente.tipoCarta = Object.prototype.hasOwnProperty.call(CARTAS, bruto.tipoCarta) || bruto.tipoCarta === 'livre' ? bruto.tipoCarta : 'livre';\n    presente.de = texto(bruto.de, LIMITES.nome);\n    presente.data = lerData(bruto.data) ? bruto.data : '';\n    presente.carta = texto(bruto.carta, LIMITES.carta);\n    presente.surpresa = texto(bruto.surpresa, LIMITES.surpresa);\n    presente.musica = urlSegura(bruto.musica);\n    if (Array.isArray(bruto.fotos)) {\n      bruto.fotos.slice(0, LIMITES.fotos).forEach((foto, i) => {\n        if (foto && typeof foto === 'object') {\n          presente.fotos[i] = { u: urlSegura(foto.u), l: texto(foto.l, LIMITES.legenda) };\n        }\n      });\n    }\n    if (!presente.para && !presente.de && !presente.carta) throw new Error('Presente vazio');\n    return presente;\n  }\n\n  /* ======================================================================\n     4. GIFTREPOSITORY — onde os presentes são guardados e encontrados\n     ----------------------------------------------------------------------\n     HOJE: o presente inteiro vai dentro do link (?presente=...). Sem servidor.\n     FUTURO: troque apenas os dois métodos abaixo. O resto do site continua igual.\n       salvar(presente)  -> POST /api/presentes  -> { url: \".../p/ab12cd\" }\n       carregar()        -> GET  /api/presentes/ab12cd (id lido de /p/ab12cd)\n     ====================================================================== */\n  const GiftRepository = {\n    PARAMETRO: 'presente',\n\n    /** JSON -> UTF-8 -> Base64 \"URL-safe\" (troca + e / por - e _, remove o =). */\n    codificar(presente) {\n      const bytes = new TextEncoder().encode(JSON.stringify(presente));\n      let binario = '';\n      bytes.forEach((b) => { binario += String.fromCharCode(b); });\n      return btoa(binario).replace(/\\+/g, '-').replace(/\\//g, '_').replace(/=+$/, '');\n    },\n\n    decodificar(codigo) {\n      let b64 = codigo.replace(/-/g, '+').replace(/_/g, '/');\n      while (b64.length % 4) b64 += '=';\n      const binario = atob(b64);\n      const bytes = Uint8Array.from(binario, (c) => c.charCodeAt(0));\n      return JSON.parse(new TextDecoder().decode(bytes));\n    },\n\n    enderecoBase() {\n      return location.href.split(/[?#]/)[0];\n    },\n\n    /** Devolve o endereço do presente. Async de propósito: um servidor real também seria. */\n    async salvar(presente) {\n      const url = `${this.enderecoBase()}?${this.PARAMETRO}=${this.codificar(presente)}`;\n      return { url, permanente: false };\n    },\n\n    /** Procura um presente na página atual. status: 'nenhum' | 'ok' | 'invalido'. */\n    async carregar() {\n      const codigo = new URLSearchParams(location.search).get(this.PARAMETRO) || document.querySelector('meta[name=\"presente-pacote\"]')?.content;\n      if (!codigo) return { status: 'nenhum' };\n      try {\n        return { status: 'ok', presente: limparPresente(this.decodificar(codigo)) };\n      } catch (erro) {\n        return { status: 'invalido' };\n      }\n    },\n  };\n\n  /* ======================================================================\n     5. RENDERIZAÇÃO DO PRESENTE\n     A mesma função desenha o presente em tela cheia, no exemplo e na\n     pré-visualização. No modo preview, campos vazios mostram um convite\n     para preencher; no modo final, seções vazias simplesmente não aparecem.\n     ====================================================================== */\n  let contadorIds = 0;\n  const reprodutores = new Set(); // garante uma música tocando por vez\n\n  function prepararMusica(raiz, url, aoMidia) {\n    if (raiz._musicaUrl === url) return;\n    if (raiz._audio) {\n      raiz._audio.pause();\n      reprodutores.delete(raiz._audio);\n      raiz._audio = null;\n    }\n    raiz._musicaUrl = url;\n    raiz._erroMusica = false;\n    if (!url) return;\n\n    const audio = new Audio();\n    audio.preload = 'none';\n    audio.loop = true;\n    audio.src = url;\n    audio.addEventListener('play', () => {\n      reprodutores.forEach((outro) => { if (outro !== audio) outro.pause(); });\n      if (raiz._sincronizarMusica) raiz._sincronizarMusica();\n    });\n    audio.addEventListener('pause', () => raiz._sincronizarMusica && raiz._sincronizarMusica());\n    audio.addEventListener('playing', () => {\n      raiz._erroMusica = false;\n      aoMidia('musica', false);\n      if (raiz._sincronizarMusica) raiz._sincronizarMusica();\n    });\n    audio.addEventListener('error', () => {\n      raiz._erroMusica = true;\n      aoMidia('musica', true);\n      if (raiz._sincronizarMusica) raiz._sincronizarMusica();\n    });\n    reprodutores.add(audio);\n    raiz._audio = audio;\n  }\n\n  /** Só deve ser chamada a partir de um clique/toque (regra de reprodução automática dos navegadores). */\n  async function tocarMusica(raiz, aoMidia) {\n    const audio = raiz._audio;\n    if (!audio || !audio.paused) return;\n    try {\n      await audio.play();\n    } catch (erro) {\n      raiz._erroMusica = true;\n      aoMidia('musica', true);\n      if (raiz._sincronizarMusica) raiz._sincronizarMusica();\n    }\n  }\n\n  function chuvaDeCoracoes(palco) {\n    if (movimentoReduzido.matches) return;\n    for (let i = 0; i < 9; i += 1) {\n      const c = coracao('burst-heart');\n      c.style.setProperty('--x', `${(Math.random() * 2 - 1) * 110}px`);\n      c.style.setProperty('--y', `${-(70 + Math.random() * 100)}px`);\n      c.style.setProperty('--r', `${(Math.random() * 2 - 1) * 35}deg`);\n      c.style.animationDelay = `${i * 45}ms`;\n      c.addEventListener('animationend', () => c.remove());\n      palco.append(c);\n    }\n  }\n\n  function coracaoFlutuante(i) {\n    const c = coracao('float-heart');\n    c.style.setProperty('--left', `${12 + i * 19}%`);\n    c.style.setProperty('--tam', `${11 + (i % 3) * 4}px`);\n    c.style.setProperty('--dur', `${9 + (i % 3) * 2.5}s`);\n    c.style.setProperty('--atraso', `${i * 1.7}s`);\n    c.style.setProperty('--desvio', `${i % 2 ? 18 : -18}px`);\n    return c;\n  }\n\n  /**\n   * Desenha o presente dentro de `raiz`.\n   * opcoes.preview  -> mostra convites nos campos vazios\n   * opcoes.estado   -> guarda carta/surpresa abertas entre uma renderização e outra\n   * opcoes.aoMidia  -> avisa quando uma foto ou a música falha ou funciona\n   * opcoes.final    -> mostra o convite \"crie o seu\" no rodapé\n   */\n  function renderizarPresente(raiz, presente, opcoes = {}) {\n    const { preview = false, final = false, estado = {}, aoMidia = () => {} } = opcoes;\n    const id = raiz.dataset.uid || (raiz.dataset.uid = `g${++contadorIds}`);\n    const para = presente.para || (preview ? 'meu amor' : 'você');\n    const de = presente.de || (preview ? 'Alguém que te ama' : 'Alguém especial');\n\n    raiz.replaceChildren();\n    raiz.classList.add('gift');\n    raiz.dataset.modelo = MODELOS.includes(presente.modelo) ? presente.modelo : 'nosso';\n    raiz.dataset.ocasiao = OCASIOES.includes(presente.ocasiao) ? presente.ocasiao : 'namoro';\n    raiz.dataset.paleta = ['rosa','lavanda','ceu','sage','dourado','noite'].includes(presente.paleta) ? presente.paleta : 'rosa';\n    raiz.dataset.fonte = ['classica','manuscrita','moderna','delicada'].includes(presente.fonte) ? presente.fonte : 'classica';\n    raiz.dataset.decoracao = 'limpa';\n    raiz.dataset.layoutFotos = ['polaroid','grade','album'].includes(presente.layoutFotos) ? presente.layoutFotos : 'polaroid';\n    prepararMusica(raiz, presente.musica, aoMidia);\n\n    const secoes = [];\n\n    /* ---- Boas-vindas ---- */\n    const botaoAbrir = el('button', { class: 'btn', type: 'button' }, 'Abrir meu presente');\n    botaoAbrir.addEventListener('click', () => {\n      tocarMusica(raiz, aoMidia);\n      const proxima = raiz.querySelector('.gift-welcome ~ .gift-section');\n      if (proxima) rolarPara(proxima);\n    });\n    secoes.push(\n      el('section', { class: 'gift-welcome', 'data-secao': 'boas-vindas' },\n        el('div', { class: 'gift-arch' },\n          [0, 1, 2, 3, 4].map(coracaoFlutuante),\n          el('h2', { class: 'gift-title', text: `Oi, ${para}` }),\n          el('p', { class: 'gift-lead', text: `${de} ${TEXTO_OCASIAO[raiz.dataset.ocasiao] || 'preparou este cantinho para você.'} Leia com calma, no seu tempo.` }),\n          el('p', { class: 'gift-names' }, para, coracao('gift-names-heart'), de),\n          botaoAbrir,\n        ),\n      ),\n    );\n\n    /* ---- Contador ---- */\n    if (lerData(presente.data)) {\n      const secao = el('section', { class: 'gift-section gift-contador', 'data-secao': 'contador', 'data-contador': presente.data },\n        el('p', { class: 'contador-intro' }),\n        el('p', { class: 'contador-numero' }, el('span', { class: 'contador-valor' }), el('span', { class: 'contador-unidade' })),\n        el('p', { class: 'contador-detalhe' }),\n      );\n      preencherContador(secao);\n      secoes.push(secao);\n    } else if (preview) {\n      secoes.push(el('section', { class: 'gift-section', 'data-secao': 'contador' },\n        el('p', { class: 'gift-vazio', text: 'Escolha uma data especial e o contador de dias aparece aqui.' })));\n    }\n\n    /* ---- Fotos ---- */\n    const giros = [-2, 2.5, -1.5];\n    const fotos = presente.fotos.map((f, i) => ({ ...f, i })).filter((f) => f.u);\n    if (fotos.length || preview) {\n      const grade = el('div', { class: 'gift-fotos' });\n      fotos.forEach((f) => {\n        const figura = el('figure', { class: 'polaroid', style: `--giro:${giros[f.i % 3]}deg` });\n        const imagem = el('img', {\n          src: f.u, alt: f.l || `Foto ${f.i + 1} de vocês`, loading: 'lazy', decoding: 'async', referrerpolicy: 'no-referrer',\n        });\n        imagem.addEventListener('load', () => aoMidia(`foto${f.i}`, false));\n        imagem.addEventListener('error', () => {\n          imagem.replaceWith(el('div', { class: 'polaroid-falha', role: 'img', 'aria-label': 'Foto indisponível' }, 'Foto indisponível'));\n          aoMidia(`foto${f.i}`, true);\n        });\n        figura.append(imagem, el('figcaption', { text: f.l }));\n        grade.append(figura);\n      });\n      if (!fotos.length) {\n        ['sua foto aparece aqui', 'e mais uma'].forEach((legenda, i) => {\n          grade.append(el('figure', { class: 'polaroid', style: `--giro:${giros[i]}deg` },\n            el('div', { class: 'polaroid-falha' }, 'Escolha uma foto no formulário'),\n            el('figcaption', { text: legenda })));\n        });\n      }\n      secoes.push(el('section', { class: 'gift-section', 'data-secao': 'fotos', 'aria-label': 'Fotos' },\n        el('h2', { class: 'gift-subtitulo', text: 'Lembranças' }), grade));\n    }\n\n    /* ---- Carta ---- */\n    if (presente.carta || preview) {\n      const idCarta = `${id}-carta`;\n      const palco = el('div', { class: 'carta-palco' });\n      const botaoEnvelope = el('button', {\n        class: 'envelope', type: 'button', 'aria-expanded': String(!!estado.cartaAberta), 'aria-controls': idCarta,\n      },\n      el('span', { class: 'envelope-corpo' },\n        el('span', { class: 'envelope-fundo' }),\n        el('span', { class: 'envelope-frente' }),\n        el('span', { class: 'envelope-aba' }),\n        el('span', { class: 'envelope-selo' }, coracao('')),\n      ),\n      el('span', { class: 'envelope-dica', text: 'Toque para abrir' }),\n      );\n      const folha = el('div', { class: 'carta-folha-wrap', id: idCarta, role: 'region', 'aria-label': `Carta de ${de}` },\n        el('div', { class: 'carta-folha-miolo' },\n          el('article', { class: 'carta-folha' },\n            el('p', { class: 'carta-saudacao', text: `${para},` }),\n            el('div', { class: 'carta-texto', text: presente.carta || 'Sua carta aparece aqui, no papel pautado. Comece a escrever ao lado.' }),\n            el('p', { class: 'carta-assinatura' }, 'Com carinho,', el('br'), de),\n          ),\n        ),\n      );\n      palco.classList.toggle('aberta', !!estado.cartaAberta);\n      botaoEnvelope.addEventListener('click', () => {\n        const abrir = !palco.classList.contains('aberta');\n        palco.classList.toggle('aberta', abrir);\n        botaoEnvelope.setAttribute('aria-expanded', String(abrir));\n        estado.cartaAberta = abrir;\n      });\n      palco.append(botaoEnvelope, folha);\n      secoes.push(el('section', { class: 'gift-section', 'data-secao': 'carta', 'aria-label': 'Carta' },\n        el('h2', { class: 'gift-subtitulo', text: 'Uma carta' }), palco));\n    }\n\n    /* ---- Mensagem surpresa ---- */\n    if (presente.surpresa || preview) {\n      const idSurpresa = `${id}-surpresa`;\n      const aberta = !!estado.surpresaAberta;\n      const palco = el('div', { class: 'surpresa-palco' });\n      const botao = el('button', { class: 'btn btn--suave', type: 'button', 'aria-expanded': String(aberta), 'aria-controls': idSurpresa },\n        'Revelar mensagem surpresa');\n      const cartao = el('div', { class: 'surpresa-cartao', id: idSurpresa, tabindex: '-1', hidden: !aberta },\n        el('p', { text: presente.surpresa || 'Sua mensagem surpresa aparece aqui.' }));\n      botao.hidden = aberta;\n      botao.addEventListener('click', () => {\n        estado.surpresaAberta = true;\n        botao.hidden = true;\n        botao.setAttribute('aria-expanded', 'true');\n        cartao.hidden = false;\n        cartao.classList.add('is-novo');\n        cartao.focus({ preventScroll: true });\n        chuvaDeCoracoes(palco);\n      });\n      palco.append(botao, cartao);\n      secoes.push(el('section', { class: 'gift-section', 'data-secao': 'surpresa', 'aria-label': 'Mensagem surpresa' },\n        el('h2', { class: 'gift-subtitulo', text: 'Ainda tem mais' }), palco));\n    }\n\n    /* ---- Montagem: seções separadas por um fio pontilhado com um coração ---- */\n    secoes.forEach((secao, i) => {\n      if (i > 0) raiz.append(el('div', { class: 'gift-divisor', 'aria-hidden': 'true' }, coracao('')));\n      raiz.append(secao);\n    });\n\n    raiz.append(el('footer', { class: 'gift-rodape' },\n      el('p', { text: 'Feito com carinho no Meu Cantinho.' }),\n      final ? el('a', { href: GiftRepository.enderecoBase(), text: 'Quero criar um presente também' }) : null,\n    ));\n\n    /* ---- Botão discreto de música ---- */\n    if (presente.musica) {\n      const rotulo = el('span');\n      const pilula = el('button', { class: 'musica-pilula', type: 'button', 'aria-pressed': 'false' }, svg(CAMINHO_NOTA, ''), rotulo);\n      pilula.addEventListener('click', () => {\n        const audio = raiz._audio;\n        if (!audio) return;\n        if (audio.paused) tocarMusica(raiz, aoMidia);\n        else audio.pause();\n      });\n      raiz._sincronizarMusica = () => {\n        const audio = raiz._audio;\n        const tocando = !!audio && !audio.paused;\n        pilula.setAttribute('aria-pressed', String(tocando));\n        pilula.classList.toggle('tocando', tocando);\n        pilula.classList.toggle('com-erro', !!raiz._erroMusica);\n        rotulo.textContent = raiz._erroMusica ? 'Música indisponível' : tocando ? 'Pausar música' : 'Tocar música';\n      };\n      raiz._sincronizarMusica();\n      raiz.append(el('div', { class: 'musica-ancora' }, pilula));\n    } else {\n      raiz._sincronizarMusica = null;\n    }\n  }\n\n  /* ======================================================================\n     6. MENU E ROLAGEM SUAVE\n     ====================================================================== */\n  function iniciarNavegacao() {\n    const cabecalho = $('.site-header');\n    const botao = $('.menu-botao');\n    const rotuloBotao = $('.sr-only', botao);\n\n    function definirMenu(aberto) {\n      cabecalho.classList.toggle('menu-aberto', aberto);\n      botao.setAttribute('aria-expanded', String(aberto));\n      rotuloBotao.textContent = aberto ? 'Fechar menu' : 'Abrir menu';\n    }\n\n    botao.addEventListener('click', () => definirMenu(botao.getAttribute('aria-expanded') !== 'true'));\n    document.addEventListener('keydown', (e) => {\n      if (e.key === 'Escape' && cabecalho.classList.contains('menu-aberto')) {\n        definirMenu(false);\n        botao.focus();\n      }\n    });\n    document.addEventListener('click', (e) => {\n      if (cabecalho.classList.contains('menu-aberto') && !cabecalho.contains(e.target)) definirMenu(false);\n    });\n    window.addEventListener('resize', () => { if (window.innerWidth >= 780) definirMenu(false); });\n\n    // Qualquer link interno marcado com data-scroll rola suavemente até a seção.\n    document.addEventListener('click', (e) => {\n      const link = e.target.closest('a[data-scroll]');\n      if (!link) return;\n      const destino = (link.getAttribute('href') || '').slice(1);\n      const alvo = destino && document.getElementById(destino);\n      if (!alvo) return;\n      e.preventDefault();\n      definirMenu(false);\n      rolarPara(alvo);\n      try { history.replaceState(null, '', `#${destino}`); } catch (erro) { /* ignora (ex.: alguns contextos locais) */ }\n      alvo.setAttribute('tabindex', '-1');\n      alvo.focus({ preventScroll: true });\n    });\n  }\n\n  /* ======================================================================\n     7. EDITOR (formulário + pré-visualização + link)\n     ====================================================================== */\n  const EXEMPLO_FOTOS = {\n    cafe: '<rect width=\"400\" height=\"400\" fill=\"#F6D9D6\"/><rect y=\"270\" width=\"400\" height=\"130\" fill=\"#D9AE9B\"/><ellipse cx=\"200\" cy=\"300\" rx=\"120\" ry=\"24\" fill=\"#FFFCF7\"/><path d=\"M140 220h120v30a60 50 0 0 1-120 0z\" fill=\"#FFFCF7\"/><path d=\"M260 232h18a22 22 0 0 1 0 44h-22\" fill=\"none\" stroke=\"#FFFCF7\" stroke-width=\"10\" stroke-linecap=\"round\"/><path d=\"M140 224h120\" stroke=\"#B0505F\" stroke-width=\"8\"/><path d=\"M175 190c-12-16 12-24 0-42M205 190c-12-16 12-24 0-42M235 190c-12-16 12-24 0-42\" fill=\"none\" stroke=\"#B0505F\" stroke-width=\"6\" stroke-linecap=\"round\" opacity=\".6\"/>',\n    chuva: '<rect width=\"400\" height=\"400\" fill=\"#EBD6D0\"/><path d=\"M70 230a130 130 0 0 1 260 0z\" fill=\"#B0505F\"/><path d=\"M70 230q32-24 65 0q32-24 65 0q32-24 65 0q32-24 60 0\" fill=\"#B0505F\"/><path d=\"M200 230v90a20 20 0 0 1-40 0\" fill=\"none\" stroke=\"#4F352E\" stroke-width=\"8\" stroke-linecap=\"round\"/><path d=\"M60 80l-10 30M120 40l-10 30M250 60l-10 30M330 100l-10 30M90 160l-10 30M320 220l-10 30M40 270l-10 30M350 320l-10 30M240 340l-10 30\" stroke=\"#FFFCF7\" stroke-width=\"5\" stroke-linecap=\"round\" opacity=\".9\"/>',\n    viagem: '<rect width=\"400\" height=\"400\" fill=\"#F8E1D6\"/><circle cx=\"285\" cy=\"150\" r=\"58\" fill=\"#F2B9B5\"/><path d=\"M0 262C80 222 160 232 230 252S360 242 400 232V400H0z\" fill=\"#CF8A90\"/><path d=\"M178 400L226 252H236L318 400z\" fill=\"#7A5C52\"/><path d=\"M247 400L231 252\" stroke=\"#FFFCF7\" stroke-width=\"6\" stroke-dasharray=\"18 16\"/>',\n  };\n\n  function fotoExemplo(tipo) {\n    const conteudo = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\">${EXEMPLO_FOTOS[tipo]}</svg>`;\n    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(conteudo)}`;\n  }\n\n  // Este objeto é confiável (escrito aqui), por isso pode usar data: nas fotos.\n  const PRESENTE_EXEMPLO = {\n    v: 2,\n    ocasiao: 'namoro', modelo: 'nosso', tipoCarta: 'amor',\n    para: 'Marina',\n    de: 'Caio',\n    data: '2023-02-14',\n    carta: 'Eu queria escrever uma carta de verdade, dessas que a gente guarda numa caixa e relê em dia de chuva.\\n\\nLembro do primeiro café que tomamos sem pressa, e de como o tempo parou de contar horas. De lá para cá, você virou o meu lugar preferido: o jeito que você ri antes de terminar a piada, o bilhete na geladeira, a mão que procura a minha no escuro do cinema.\\n\\nObrigado por cada dia comum que você transformou em lembrança. Que venham muitos outros, com café, chuva e a gente do mesmo jeito.\\n\\nTe amo do tamanho do que não cabe aqui.',\n    fotos: [\n      { u: fotoExemplo('cafe'), l: 'nosso primeiro café' },\n      { u: fotoExemplo('chuva'), l: 'domingo de chuva' },\n      { u: fotoExemplo('viagem'), l: 'aquela viagem' },\n    ],\n    musica: '',\n    surpresa: 'Separei duas noites em janeiro para a gente viajar. Faça as malas e não me pergunte para onde.',\n  };\n\n\n  /* ZIP simples sem dependências externas: guarda arquivos sem compressão. */\n  function crc32(bytes) {\n    let crc = -1;\n    for (let i = 0; i < bytes.length; i++) {\n      crc ^= bytes[i];\n      for (let j = 0; j < 8; j++) crc = (crc >>> 1) ^ (0xEDB88320 & -(crc & 1));\n    }\n    return (crc ^ -1) >>> 0;\n  }\n  function zipLocal(files) {\n    const enc = new TextEncoder();\n    const chunks = []; const central = []; let offset = 0;\n    const u16 = (v) => [v & 255, (v >>> 8) & 255];\n    const u32 = (v) => [v & 255, (v >>> 8) & 255, (v >>> 16) & 255, (v >>> 24) & 255];\n    for (const file of files) {\n      const name = enc.encode(file.name); const data = file.bytes; const crc = crc32(data);\n      const local = new Uint8Array([...u32(0x04034b50), ...u16(20), ...u16(0x0800), ...u16(0), ...u16(0), ...u16(0), ...u32(crc), ...u32(data.length), ...u32(data.length), ...u16(name.length), ...u16(0), ...name]);\n      chunks.push(local, data);\n      const dir = new Uint8Array([...u32(0x02014b50), ...u16(20), ...u16(20), ...u16(0x0800), ...u16(0), ...u16(0), ...u16(0), ...u32(crc), ...u32(data.length), ...u32(data.length), ...u16(name.length), ...u16(0), ...u16(0), ...u16(0), ...u16(0), ...u32(0), ...u32(offset), ...name]);\n      central.push(dir); offset += local.length + data.length;\n    }\n    const centralSize = central.reduce((n, c) => n + c.length, 0);\n    const end = new Uint8Array([...u32(0x06054b50), ...u16(0), ...u16(0), ...u16(files.length), ...u16(files.length), ...u32(centralSize), ...u32(offset), ...u16(0)]);\n    return new Blob([...chunks, ...central, end], { type: 'application/zip' });\n  }\n\n  function iniciarEditor() {\n    const form = $('#form-presente');\n    const quadro = $('#quadro-previa');\n    const editor = $('#editor');\n    const raizPrevia = el('div');\n    quadro.append(raizPrevia);\n\n    const campos = {\n      para: $('#f-para'), de: $('#f-de'), data: $('#f-data'), carta: $('#f-carta'), tipoCarta: $('#f-tipo-carta'),\n      paleta: $('#f-paleta'), fonte: $('#f-fonte'), layoutFotos: $('#f-layout-fotos'),\n      musica: $('#f-arquivo-musica'), surpresa: $('#f-surpresa'),\n      arquivoFotos: $('#f-arquivos-fotos'),\n      fotos: Array.from({ length: LIMITES.fotos }, (_, i) => ({ legenda: $(`#f-legenda${i + 1}`) })),\n    };\n    const estadoPrevia = { cartaAberta: false, surpresaAberta: false };\n    let arquivosFotos = [];\n    let urlFotos = [];\n    let arquivoMusica = null;\n    let urlMusica = '';\n    function limparUrlsTemporarias() { urlFotos.forEach((u) => URL.revokeObjectURL(u)); urlFotos = []; if (urlMusica) URL.revokeObjectURL(urlMusica); urlMusica = ''; }\n\n    /* ---- Leitura do formulário ---- */\n    function lerFormulario() {\n      return {\n        v: 2,\n        ocasiao: form.querySelector('input[name=\"ocasiao\"]:checked')?.value || 'namoro',\n        modelo: form.querySelector('input[name=\"modelo\"]:checked')?.value || 'nosso',\n        tipoCarta: campos.tipoCarta.value,\n        paleta: campos.paleta.value, fonte: campos.fonte.value, decoracao: 'limpa', layoutFotos: campos.layoutFotos.value,\n        para: campos.para.value.trim(),\n        de: campos.de.value.trim(),\n        data: campos.data.value,\n        carta: campos.carta.value.replace(/\\r\\n/g, '\\n').trim(),\n        fotos: campos.fotos.map((f, i) => ({ u: urlFotos[i] || '', l: f.legenda.value.trim() })),\n        musica: urlMusica,\n        surpresa: campos.surpresa.value.replace(/\\r\\n/g, '\\n').trim(),\n      };\n    }\n\n    /* ---- Validação ---- */\n    const MSG_URL = 'Esse endereço não parece válido. Ele precisa começar com https://';\n    const regras = {\n      para: () => (campos.para.value.trim() ? '' : 'Escreva o nome de quem vai receber o presente.'),\n      de: () => (campos.de.value.trim() ? '' : 'Escreva o seu nome, para a pessoa saber quem enviou.'),\n      data: () => (campos.data.value && !lerData(campos.data.value) ? 'Escolha uma data válida.' : ''),\n      carta: () => (campos.carta.value.trim() ? '' : 'Escreva a carta. Mesmo uma frase já vale.'),\n    };\n    const entradaDe = {\n      para: campos.para, de: campos.de, data: campos.data, carta: campos.carta,\n    };\n\n    function regraUrl(entrada) {\n      const valor = entrada.value.trim();\n      return !valor || urlSegura(valor) ? '' : MSG_URL;\n    }\n\n    function mostrarErro(chave, mensagem) {\n      const entrada = entradaDe[chave];\n      $(`#erro-${chave}`).textContent = mensagem;\n      if (mensagem) entrada.setAttribute('aria-invalid', 'true');\n      else entrada.removeAttribute('aria-invalid');\n    }\n\n    function validarCampo(chave) {\n      const mensagem = regras[chave]();\n      mostrarErro(chave, mensagem);\n      return mensagem;\n    }\n\n    function validarTudo() {\n      return Object.keys(regras).filter((chave) => validarCampo(chave));\n    }\n\n    /* ---- Avisos de foto/música que não carregam ---- */\n    const MSG_FOTO = 'Não conseguimos carregar esta imagem. Confira se o link é público e aponta direto para a foto.';\n    const MSG_MUSICA = 'Não conseguimos tocar este link. Ele precisa apontar direto para um arquivo .mp3.';\n    function aoMidia(chave, falhou) {\n      const campo = chave === 'musica' ? 'musica' : `foto${Number(chave.replace('foto', '')) + 1}`;\n      if (!entradaDe[campo]) return;\n      const mensagem = chave === 'musica' ? MSG_MUSICA : MSG_FOTO;\n      const atual = $(`#erro-${campo}`).textContent;\n      if (falhou) mostrarErro(campo, mensagem);\n      else if (atual === mensagem) mostrarErro(campo, '');\n    }\n\n    /* ---- Pré-visualização ---- */\n    let agendado = 0;\n    function desenharPrevia() {\n      clearTimeout(agendado);\n      renderizarPresente(raizPrevia, lerFormulario(), { preview: true, estado: estadoPrevia, aoMidia });\n    }\n    function agendarPrevia() {\n      clearTimeout(agendado);\n      agendado = setTimeout(desenharPrevia, 110);\n    }\n\n    /* ---- Seleção de ocasião, modelo e inspiração de carta ---- */\n    function atualizarSelecoes() {\n      $$('#opcoes-ocasiao .opcao-card').forEach((card) => card.classList.toggle('selecionado', !!$('input:checked', card)));\n      $$('#opcoes-modelo .modelo-card').forEach((card) => card.classList.toggle('selecionado', !!$('input:checked', card)));\n    }\n    form.querySelectorAll('input[name=\"ocasiao\"], input[name=\"modelo\"]').forEach((radio) => radio.addEventListener('change', () => {\n      atualizarSelecoes();\n      // A ocasião também sugere uma carta compatível, em vez de só trocar a seleção visual.\n      if (radio.name === 'ocasiao') {\n        const tipoSugerido = CARTA_POR_OCASIAO[radio.value] || 'livre';\n        campos.tipoCarta.value = tipoSugerido;\n        campos.carta.value = CARTAS[tipoSugerido] || '';\n        $('#contagem-carta').textContent = `${campos.carta.value.length}/${LIMITES.carta}`;\n      }\n      $('#resultado').hidden = true;\n      agendarPrevia();\n    }));\n    [campos.paleta, campos.fonte, campos.layoutFotos].forEach((campo) => campo.addEventListener('change', () => { $('#resultado').hidden = true; agendarPrevia(); }));\n\n    campos.tipoCarta.addEventListener('change', () => {\n      const tipo = campos.tipoCarta.value;\n      if (tipo === 'livre') {\n        if (!campos.carta.value.trim()) campos.carta.value = '';\n      } else {\n        campos.carta.value = CARTAS[tipo] || '';\n      }\n      $('#contagem-carta').textContent = `${campos.carta.value.length}/${LIMITES.carta}`;\n      $('#resultado').hidden = true;\n      agendarPrevia();\n    });\n    atualizarSelecoes();\n\n    /* ---- Seleção de arquivos locais ---- */\n    campos.arquivoFotos.addEventListener('change', () => {\n      const selecionados = Array.from(campos.arquivoFotos.files || []);\n      const vagas = Math.max(0, LIMITES.fotos - arquivosFotos.length);\n      const novos = selecionados.slice(0, vagas);\n      if (selecionados.length > vagas) mostrarAviso('Você pode adicionar até 10 fotos no total. As fotos já escolhidas foram mantidas.');\n      novos.forEach((arquivo) => {\n        arquivosFotos.push(arquivo);\n        urlFotos.push(URL.createObjectURL(arquivo));\n      });\n      // Limpa o input para permitir escolher mais fotos, inclusive o mesmo arquivo, numa próxima vez.\n      campos.arquivoFotos.value = '';\n      $('#status-fotos').textContent = arquivosFotos.length ? `${arquivosFotos.length}/10 foto(s): ${arquivosFotos.map((f, i) => `${i + 1}. ${f.name}`).join(' • ')}` : 'Nenhuma foto selecionada.';\n      agendarPrevia();\n    });\n    campos.musica.addEventListener('change', () => {\n      if (urlMusica) URL.revokeObjectURL(urlMusica);\n      arquivoMusica = campos.musica.files && campos.musica.files[0] || null;\n      urlMusica = arquivoMusica ? URL.createObjectURL(arquivoMusica) : '';\n      $('#status-musica').textContent = arquivoMusica ? `Música selecionada: ${arquivoMusica.name}` : 'Nenhuma música selecionada. MP3 é recomendado.';\n      agendarPrevia();\n    });\n\n    /* ---- Eventos do formulário ---- */\n    form.addEventListener('input', (e) => {\n      const alvo = e.target;\n      const chave = Object.keys(entradaDe).find((k) => entradaDe[k] === alvo);\n      if (chave && alvo.getAttribute('aria-invalid') === 'true') mostrarErro(chave, regras[chave]());\n      $('#contagem-carta').textContent = `${campos.carta.value.length}/${LIMITES.carta}`;\n      $('#contagem-surpresa').textContent = `${campos.surpresa.value.length}/${LIMITES.surpresa}`;\n      $('#resultado').hidden = true;\n      agendarPrevia();\n    });\n\n    form.addEventListener('focusout', (e) => {\n      const chave = Object.keys(entradaDe).find((k) => entradaDe[k] === e.target);\n      if (chave && e.target.value.trim()) validarCampo(chave);\n    });\n\n    // Ao focar um campo, a pré-visualização rola até a parte correspondente.\n    form.addEventListener('focusin', (e) => {\n      const area = e.target.closest('[data-alvo]');\n      if (!area) return;\n      const nome = area.dataset.alvo;\n      if (nome === 'carta') estadoPrevia.cartaAberta = true;\n      if (nome === 'surpresa') estadoPrevia.surpresaAberta = true;\n      if (nome === 'carta' || nome === 'surpresa') desenharPrevia();\n      const secao = raizPrevia.querySelector(`[data-secao=\"${nome}\"]`);\n      if (secao && quadro.offsetParent !== null) rolarPara(secao);\n    });\n\n    /* ---- Abas (celular) ---- */\n    $$('.editor-aba').forEach((aba) => {\n      aba.addEventListener('click', () => {\n        editor.dataset.view = aba.dataset.view;\n        $$('.editor-aba').forEach((outra) => outra.setAttribute('aria-pressed', String(outra === aba)));\n        if (aba.dataset.view === 'preview') desenharPrevia();\n      });\n    });\n\n    /* ---- Gerar e copiar link ---- */\n    const resumo = $('#resumo-erros');\n    form.addEventListener('submit', async (e) => {\n      e.preventDefault();\n      resumo.textContent = '';\n      const invalidos = validarTudo();\n      if (invalidos.length) {\n        resumo.textContent = invalidos.length === 1\n          ? 'Falta ajustar 1 campo para gerar o link.'\n          : `Faltam ajustar ${invalidos.length} campos para gerar o link.`;\n        $('#resultado').hidden = true;\n        if (editor.dataset.view !== 'form') editor.dataset.view = 'form';\n        entradaDe[invalidos[0]].focus();\n        return;\n      }\n      const { url } = await GiftRepository.salvar(lerFormulario());\n      $('#campo-link').value = url;\n      $('#abrir-link').href = url;\n      $('#aviso-tamanho').hidden = url.length <= 2000;\n      $('#resultado').hidden = false;\n      $('#resultado').scrollIntoView({ behavior: comportamentoRolagem(), block: 'nearest' });\n    });\n\n    $('#baixar-presente').addEventListener('click', async () => {\n      const invalidos = validarTudo();\n      if (invalidos.length) {\n        $('#resumo-erros').textContent = invalidos.length === 1 ? 'Falta ajustar 1 campo para baixar o presente.' : `Faltam ajustar ${invalidos.length} campos para baixar o presente.`;\n        entradaDe[invalidos[0]].focus(); return;\n      }\n      const presente = lerFormulario();\n      const arquivoParaDataURL = (arquivo) => new Promise((resolve, reject) => {\n        const leitor = new FileReader();\n        leitor.onload = () => resolve(String(leitor.result));\n        leitor.onerror = () => reject(new Error(`Não foi possível ler ${arquivo.name}`));\n        leitor.readAsDataURL(arquivo);\n      });\n      try {\n        // Incorpora fotos e música no próprio HTML, sem arquivos externos.\n        for (let i = 0; i < arquivosFotos.length; i++) {\n          presente.fotos[i].u = await arquivoParaDataURL(arquivosFotos[i]);\n        }\n        if (arquivoMusica) presente.musica = await arquivoParaDataURL(arquivoMusica);\n\n        // Renderiza o presente agora e salva o HTML já pronto: o destinatário\n        // não precisa executar JavaScript para ver a carta (compatível com prévias do iPhone).\n        const raiz = document.createElement('main');\n        raiz.className = 'gift gift--final';\n        renderizarPresente(raiz, presente, { final: false, estado: { cartaAberta: true, surpresaAberta: true } });\n\n        // Remove controles que dependem de JavaScript e deixa o conteúdo visível.\n        const boasVindas = raiz.querySelector('.gift-welcome');\n        if (boasVindas) {\n          const botao = boasVindas.querySelector('button');\n          if (botao) botao.remove();\n        }\n        const palcoCarta = raiz.querySelector('.carta-palco');\n        if (palcoCarta) {\n          palcoCarta.classList.add('aberta');\n          const envelope = palcoCarta.querySelector('.envelope');\n          if (envelope) envelope.remove();\n          const folha = palcoCarta.querySelector('.carta-folha-wrap');\n          if (folha) {\n            folha.style.display = 'block';\n            folha.style.visibility = 'visible';\n            folha.style.gridTemplateRows = '1fr';\n            folha.style.maxWidth = '560px';\n          }\n        }\n        const cartaoSurpresa = raiz.querySelector('.surpresa-cartao');\n        if (cartaoSurpresa) cartaoSurpresa.hidden = false;\n        const botaoSurpresa = raiz.querySelector('.surpresa-palco button');\n        if (botaoSurpresa) botaoSurpresa.remove();\n        raiz.querySelectorAll('img').forEach((img) => {\n          img.loading = 'eager';\n          img.removeAttribute('decoding');\n        });\n\n        // Usa o controle nativo de áudio, que não depende do JavaScript do site.\n        const ancoraMusica = raiz.querySelector('.musica-ancora');\n        if (ancoraMusica) ancoraMusica.remove();\n        if (presente.musica) {\n          const musica = document.createElement('section');\n          musica.className = 'gift-section musica-estatica';\n          const titulo = document.createElement('h2');\n          titulo.className = 'gift-subtitulo';\n          titulo.textContent = 'Uma música para acompanhar';\n          const audio = document.createElement('audio');\n          audio.controls = true;\n          audio.preload = 'metadata';\n          audio.src = presente.musica;\n          audio.style.display = 'block';\n          audio.style.width = 'min(100%, 420px)';\n          audio.style.margin = '1rem auto';\n          musica.append(titulo, audio);\n          const rodape = raiz.querySelector('.gift-rodape');\n          if (rodape) raiz.insertBefore(musica, rodape);\n          else raiz.append(musica);\n        }\n\n        const tituloSeguro = String(presente.para || 'você').replace(/[&<>\"']/g, '');\n        const htmlPrincipal = `<!doctype html>\n<html lang=\"pt-BR\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, viewport-fit=cover\">\n  <meta name=\"theme-color\" content=\"#FBF6EE\">\n  <title>Um presente para ${tituloSeguro}</title>\n  <style>${PACOTE_CSS}\n    html, body { min-height: 100%; }\n    body { margin: 0; background-color: #FBF6EE; }\n    .gift--final { width: 100%; max-width: 900px; margin: 0 auto; }\n    .carta-folha-wrap { display: block !important; visibility: visible !important; grid-template-rows: 1fr !important; }\n    .musica-estatica { padding-top: 1rem; }\n    audio { max-width: calc(100% - 2rem); }\n    @media (max-width: 600px) { .carta-folha { padding-inline: 1rem; } .gift-section { padding-inline: 1rem; } }\n  </style>\n</head>\n<body>\n${raiz.outerHTML}\n</body>\n</html>`;\n        const nome = `meu-cantinho-${(presente.para || 'presente').normalize('NFD').replace(/[\\u0300-\\u036f]/g, '').replace(/[^a-zA-Z0-9_-]/g, '-').toLowerCase()}.html`;\n        const blob = new Blob(['\\uFEFF', htmlPrincipal], { type: 'text/html;charset=utf-8' });\n        const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = nome; link.click();\n        setTimeout(() => URL.revokeObjectURL(link.href), 60000);\n        mostrarAviso('Cartão completo baixado! O arquivo já vem pronto para abrir e enviar.');\n      } catch (erro) {\n        console.error(erro);\n        mostrarAviso('Não foi possível montar o HTML. Tente usar fotos menores ou um arquivo de música menor.');\n      }\n    });\n\n    $('#copiar-link').addEventListener('click', async () => {\n      const campo = $('#campo-link');\n      const botao = $('#copiar-link');\n      let copiou = false;\n      try {\n        await navigator.clipboard.writeText(campo.value);\n        copiou = true;\n      } catch (erro) {\n        campo.focus();\n        campo.select();\n        try { copiou = document.execCommand('copy'); } catch (erro2) { copiou = false; }\n      }\n      if (copiou) {\n        botao.textContent = 'Link copiado!';\n        mostrarAviso('Link copiado! Agora é só enviar.');\n        setTimeout(() => { botao.textContent = 'Copiar link'; }, 2200);\n      } else {\n        mostrarAviso('Não deu para copiar sozinho. Selecione o link e copie manualmente.');\n      }\n    });\n\n    /* ---- Usar exemplo como ponto de partida ---- */\n    $('#usar-exemplo').addEventListener('click', () => {\n      const temConteudo = [campos.para, campos.de, campos.carta, campos.surpresa].some((c) => c.value.trim());\n      if (temConteudo && !window.confirm('Isso vai substituir o que você já escreveu. Continuar?')) return;\n      campos.para.value = PRESENTE_EXEMPLO.para;\n      campos.de.value = PRESENTE_EXEMPLO.de;\n      campos.data.value = PRESENTE_EXEMPLO.data;\n      campos.carta.value = PRESENTE_EXEMPLO.carta;\n      campos.surpresa.value = PRESENTE_EXEMPLO.surpresa;\n      campos.tipoCarta.value = PRESENTE_EXEMPLO.tipoCarta || 'amor';\n      form.querySelector('input[name=\"ocasiao\"][value=\"namoro\"]').checked = true;\n      form.querySelector('input[name=\"modelo\"][value=\"nosso\"]').checked = true;\n      campos.paleta.value = 'rosa'; campos.fonte.value = 'classica'; campos.layoutFotos.value = 'polaroid';\n      atualizarSelecoes();\n      limparUrlsTemporarias(); arquivosFotos = []; arquivoMusica = null;\n      campos.arquivoFotos.value = ''; campos.musica.value = '';\n      campos.fotos.forEach((f) => { f.legenda.value = ''; });\n      $('#status-fotos').textContent = 'Nenhuma foto selecionada.'; $('#status-musica').textContent = 'Nenhuma música selecionada. MP3 é recomendado.';\n      Object.keys(regras).forEach((chave) => mostrarErro(chave, ''));\n      $('#contagem-carta').textContent = `${campos.carta.value.length}/${LIMITES.carta}`;\n      $('#contagem-surpresa').textContent = `${campos.surpresa.value.length}/${LIMITES.surpresa}`;\n      $('#resultado').hidden = true;\n      desenharPrevia();\n      rolarPara($('#criar'));\n      mostrarAviso('Exemplo carregado. Troque pelos seus textos.');\n    });\n\n    desenharPrevia();\n  }\n\n  /* ======================================================================\n     8. INICIALIZAÇÃO\n     ====================================================================== */\n  function abrirModoPresente(presente) {\n    $('#site').hidden = true;\n    const area = $('#presente-final');\n    area.hidden = false;\n    const raiz = el('main', { class: 'gift gift--final' });\n    area.append(raiz);\n    document.body.style.background = 'var(--creme)';\n    document.title = `Um presente para ${presente.para || 'você'}`;\n    renderizarPresente(raiz, presente, { final: true });\n    window.scrollTo(0, 0);\n  }\n\n  function iniciarSite() {\n    iniciarNavegacao();\n    iniciarEditor();\n    renderizarPresente($('#presente-exemplo'), PRESENTE_EXEMPLO);\n    $('.aviso-fechar').addEventListener('click', () => { $('#aviso-link').hidden = true; });\n  }\n\n  async function iniciar() {\n    if (window.__MEU_CANTINHO_PRESENTE__) {\n      abrirModoPresente(window.__MEU_CANTINHO_PRESENTE__);\n      atualizarContadores();\n      setInterval(atualizarContadores, 60 * 1000);\n      return;\n    }\n    const resultado = await GiftRepository.carregar();\n    if (resultado.status === 'ok') {\n      abrirModoPresente(resultado.presente);\n    } else {\n      if (resultado.status === 'invalido') $('#aviso-link').hidden = false;\n      iniciarSite();\n    }\n    atualizarContadores();\n    setInterval(atualizarContadores, 60 * 1000); // vira o dia sozinho se a página ficar aberta\n  }\n\n  iniciar();\n})();\n";
/* ==========================================================================
   Meu Cantinho — script.js
   Organização:
   1. Utilitários                      5. Renderização do presente
   2. Datas e contador                 6. Menu e rolagem suave
   3. Dados do presente                7. Editor (formulário + pré-visualização)
   4. GiftRepository (salvar/abrir)    8. Inicialização
   ========================================================================== */
(function () {
  'use strict';

  /* ======================================================================
     1. UTILITÁRIOS
     ====================================================================== */
  const $ = (seletor, raiz = document) => raiz.querySelector(seletor);
  const $$ = (seletor, raiz = document) => Array.from(raiz.querySelectorAll(seletor));

  const movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)');
  const comportamentoRolagem = () => (movimentoReduzido.matches ? 'auto' : 'smooth');

  /**
   * Cria um elemento HTML. Textos entram sempre como texto (nunca como HTML),
   * o que evita injeção de código vinda de um link malicioso.
   */
  function el(tag, atributos = {}, ...filhos) {
    const no = document.createElement(tag);
    for (const [chave, valor] of Object.entries(atributos)) {
      if (valor === null || valor === undefined || valor === false) continue;
      if (chave === 'class') no.className = valor;
      else if (chave === 'text') no.textContent = valor;
      else if (chave.startsWith('on') && typeof valor === 'function') no.addEventListener(chave.slice(2), valor);
      else no.setAttribute(chave, valor === true ? '' : String(valor));
    }
    filhos.flat().forEach((filho) => {
      if (filho === null || filho === undefined || filho === false) return;
      no.append(filho.nodeType ? filho : document.createTextNode(String(filho)));
    });
    return no;
  }

  /** Ícones SVG fixos (strings estáticas, sem dados do usuário). */
  function svg(caminho, classe) {
    const modelo = document.createElement('template');
    modelo.innerHTML = `<svg class="${classe}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${caminho}</svg>`;
    return modelo.content.firstElementChild;
  }
  const CAMINHO_CORACAO = '<path d="M12 21C5 15.6 3 12.2 3 9a4.6 4.6 0 0 1 9-1.4A4.6 4.6 0 0 1 21 9c0 3.2-2 6.6-9 12z"/>';
  const CAMINHO_NOTA = '<path d="M9 3v11.6A3.5 3.5 0 1 0 11 18V7.5l8-1.8v7.9A3.5 3.5 0 1 0 21 17V2z"/>';
  const coracao = (classe = '') => svg(CAMINHO_CORACAO, classe);

  /** Rola até um elemento, funcionando também dentro de molduras com rolagem própria. */
  function rolarPara(alvo) {
    const rolador = alvo.closest('[data-scroller]');
    if (rolador) {
      const topo = alvo.getBoundingClientRect().top - rolador.getBoundingClientRect().top + rolador.scrollTop - 12;
      rolador.scrollTo({ top: Math.max(0, topo), behavior: comportamentoRolagem() });
    } else {
      alvo.scrollIntoView({ behavior: comportamentoRolagem(), block: 'start' });
    }
  }

  let temporizadorAviso = 0;
  function mostrarAviso(mensagem) {
    const toast = $('#toast');
    toast.textContent = mensagem;
    toast.classList.add('visivel');
    clearTimeout(temporizadorAviso);
    temporizadorAviso = setTimeout(() => toast.classList.remove('visivel'), 2400);
  }

  /* ======================================================================
     2. DATAS E CONTADOR
     ====================================================================== */
  /** Lê "AAAA-MM-DD" e devolve null se a data não existir. */
  function lerData(texto) {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(texto || '');
    if (!m) return null;
    const ano = +m[1], mes = +m[2], dia = +m[3];
    const data = new Date(ano, mes - 1, dia);
    if (data.getFullYear() !== ano || data.getMonth() !== mes - 1 || data.getDate() !== dia) return null;
    return { ano, mes, dia, data };
  }

  function hoje() {
    const agora = new Date();
    return { ano: agora.getFullYear(), mes: agora.getMonth() + 1, dia: agora.getDate() };
  }

  /** Dias entre duas datas. Usa UTC para o horário de verão não bagunçar a conta. */
  function diasEntre(inicio, fim) {
    const a = Date.UTC(inicio.ano, inicio.mes - 1, inicio.dia);
    const b = Date.UTC(fim.ano, fim.mes - 1, fim.dia);
    return Math.round((b - a) / 86400000);
  }

  const plural = (n, singular, pluralTxt) => `${n} ${n === 1 ? singular : pluralTxt}`;

  function juntarLista(partes) {
    if (partes.length <= 1) return partes.join('');
    return `${partes.slice(0, -1).join(', ')} e ${partes[partes.length - 1]}`;
  }

  /** Anos, meses e dias completos desde a data inicial até hoje. */
  function tempoCompleto(inicio, fim) {
    let anos = fim.ano - inicio.ano;
    let meses = fim.mes - inicio.mes;
    let dias = fim.dia - inicio.dia;
    if (dias < 0) {
      meses -= 1;
      dias += new Date(fim.ano, fim.mes - 1, 0).getDate(); // dias do mês anterior
    }
    if (meses < 0) {
      anos -= 1;
      meses += 12;
    }
    return { anos, meses, dias };
  }

  const formatadorData = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });

  /** Textos do contador para uma data (passada, de hoje ou futura). */
  function descreverContador(dataTexto) {
    const inicio = lerData(dataTexto);
    if (!inicio) return null;
    const agora = hoje();
    const diferenca = diasEntre(inicio, agora);
    const dataLonga = formatadorData.format(inicio.data);

    if (diferenca > 0) {
      const t = tempoCompleto(inicio, agora);
      const partes = [];
      if (t.anos) partes.push(plural(t.anos, 'ano', 'anos'));
      if (t.meses) partes.push(plural(t.meses, 'mês', 'meses'));
      if (t.dias && (t.anos || t.meses)) partes.push(plural(t.dias, 'dia', 'dias'));
      return {
        intro: `Desde ${dataLonga}`,
        valor: diferenca.toLocaleString('pt-BR'),
        unidade: diferenca === 1 ? 'dia' : 'dias',
        detalhe: partes.length ? `${juntarLista(partes)} de história` : '',
      };
    }
    if (diferenca === 0) {
      return { intro: dataLonga, valor: 'Hoje', unidade: 'é o grande dia', detalhe: '' };
    }
    const faltam = -diferenca;
    return {
      intro: `Até ${dataLonga}`,
      valor: faltam.toLocaleString('pt-BR'),
      unidade: faltam === 1 ? 'dia para chegar' : 'dias para chegar',
      detalhe: '',
    };
  }

  function preencherContador(secao) {
    const info = descreverContador(secao.dataset.contador);
    if (!info) return;
    $('.contador-intro', secao).textContent = info.intro;
    $('.contador-valor', secao).textContent = info.valor;
    $('.contador-unidade', secao).textContent = info.unidade;
    $('.contador-detalhe', secao).textContent = info.detalhe;
  }

  /** Atualiza todos os contadores da página (roda a cada minuto, para virar o dia sozinho). */
  function atualizarContadores() {
    $$('[data-contador]').forEach(preencherContador);
  }

  /* ======================================================================
     3. DADOS DO PRESENTE
     Formato (serializado com chaves curtas para o link ficar menor):
     { v:1, para, de, data:'AAAA-MM-DD', carta, fotos:[{u,l}x10], musica, surpresa }
     ====================================================================== */
  const LIMITES = { nome: 40, carta: 2500, surpresa: 600, legenda: 40, url: 600, fotos: 10 };
  const MODELOS = ['nosso', 'album', 'carta', 'ceu', 'jardim', 'scrap', 'minimal', 'festa', 'noite', 'botanico', 'editorial', 'fofo'];
  const OCASIOES = ['namoro', 'aniversario', 'casamento', 'amizade', 'agradecimento', 'desculpas'];
  const CARTA_POR_OCASIAO = { namoro: 'amor', aniversario: 'aniversario-romantico', casamento: 'casamento', amizade: 'amizade', agradecimento: 'obrigado', desculpas: 'desculpas' };
  const TEXTO_OCASIAO = {
    namoro: 'preparou este cantinho para celebrar o amor de vocês.',
    aniversario: 'preparou este cantinho para comemorar um dia muito especial.',
    casamento: 'preparou este cantinho para celebrar essa nova etapa e todo o amor envolvido.',
    amizade: 'preparou este cantinho para lembrar o quanto essa amizade é especial.',
    agradecimento: 'preparou este cantinho para agradecer de coração.',
    desculpas: 'preparou este cantinho para abrir espaço para uma conversa sincera.'
  };
  const CARTAS = {
    amor: 'Meu amor, às vezes eu queria encontrar palavras capazes de explicar tudo o que sinto por você. Gosto da paz que encontro ao seu lado, das pequenas coisas que viram lembranças e do jeito como a vida fica mais bonita quando podemos dividir os dias. Obrigado por fazer parte da minha história. Quero continuar construindo muitos momentos com você.',
    namoro: 'Hoje é dia de celebrar a nossa história e tudo o que construímos desde que começamos a caminhar lado a lado. Guardo com carinho cada conversa, cada risada e até os dias difíceis que nos ensinaram a cuidar um do outro. Que a gente continue escolhendo estar junto, com carinho, respeito e vontade de descobrir o que vem pela frente.',
    pedido: 'Tem uma coisa que venho querendo te dizer há algum tempo: estar perto de você faz meus dias mais felizes. Gosto de quem sou quando estamos juntos e de tudo o que ainda podemos viver. Não quero apressar nada, só quero fazer esse convite com sinceridade: você aceita namorar comigo?',
    'aniversario-romantico': 'Feliz aniversário! Hoje eu queria que você pudesse se enxergar pelos meus olhos e perceber o quanto é especial. Desejo que seu novo ciclo traga tranquilidade, boas surpresas, sonhos realizados e muitos motivos para sorrir. Obrigado por me deixar fazer parte da sua vida e celebrar mais um ano seu.',
    'aniversario-amigo': 'Feliz aniversário! Que seu novo ciclo venha cheio de histórias boas, oportunidades, risadas e pessoas que te fazem bem. Obrigado pela amizade, pelas conversas e por todos os momentos que tornam a vida mais leve. Você merece coisas bonitas hoje e sempre.',
    casamento: 'Que este novo capítulo seja cheio de parceria, respeito, paciência e alegria nas pequenas coisas. Que vocês continuem encontrando um no outro um lugar seguro para celebrar as conquistas e enfrentar os dias difíceis. Desejo uma vida inteira de carinho e boas lembranças.',
    votos: 'Eu escolho caminhar ao seu lado nos dias leves e nos dias difíceis. Prometo ouvir, aprender, respeitar quem você é e cuidar do que estamos construindo. Não prometo uma vida perfeita, mas prometo presença, honestidade e vontade de continuar escolhendo você, um dia de cada vez.',
    bodas: 'Olhar para a nossa história é lembrar de tantas versões de nós que cresceram juntas. Obrigado por cada recomeço, cada cuidado e cada sonho dividido. Que a gente continue encontrando motivos para rir, conversar e segurar a mão um do outro por muitos anos.',
    amizade: 'Queria te lembrar o quanto sua amizade significa para mim. Obrigado por ouvir, por rir comigo e por estar presente de tantas formas, até nas coisas pequenas. Espero que a vida te devolva todo o bem que você espalha e que a gente ainda colecione muitas histórias.',
    mae: 'Hoje quero agradecer por todo carinho, pelas palavras que me guiaram e pelos cuidados que muitas vezes aparecem nas pequenas coisas. Nem sempre consigo dizer isso como gostaria, mas sua presença tem um lugar enorme na minha vida. Espero que você se sinta tão amada quanto merece.',
    pai: 'Quero aproveitar este momento para agradecer por tudo o que você me ensinou, pelo apoio e pelas maneiras, grandes ou pequenas, com que esteve presente. Nem sempre encontro as palavras certas, mas tenho muito carinho por você e por tudo o que faz parte da nossa história.',
    obrigado: 'Quero te agradecer de coração. Talvez eu nem sempre consiga demonstrar o quanto valorizo o que você fez, mas sua atenção e seu carinho fizeram diferença para mim. Obrigado por estar presente e por tornar as coisas um pouco melhores.',
    desculpas: 'Quero reconhecer que te magoei e sinto muito por isso. Não quero diminuir o que aconteceu nem esperar que tudo se resolva de uma vez. Quero te ouvir, entender melhor o que você sentiu e mostrar com atitudes que posso fazer diferente. Se você estiver disposto(a), gostaria de conversar com calma.',
    recomeco: 'Sei que nem tudo foi simples entre nós, mas ainda acredito que uma conversa honesta pode abrir espaço para entendermos o que sentimos. Não quero apagar o passado; quero aprender com ele. Se fizer sentido para você, gostaria de tentar construir um próximo capítulo com mais cuidado e sinceridade.',
    divertida: 'Parabéns por completar mais uma volta ao sol sendo essa pessoa incrível — e um pouquinho teimosa também. Que não faltem comida boa, risadas, planos aleatórios e motivos para comemorar. Hoje a missão é aproveitar muito e aceitar elogios sem discutir!',
  };

  function presenteVazio() {
    return {
      v: 2, para: '', de: '', data: '', carta: '', ocasiao: 'namoro', modelo: 'nosso', tipoCarta: 'livre', paleta: 'rosa', fonte: 'classica', decoracao: 'limpa', layoutFotos: 'polaroid',
      fotos: Array.from({ length: LIMITES.fotos }, () => ({ u: '', l: '' })),
      musica: '', surpresa: '',
    };
  }

  /** Aceita apenas endereços http(s). Qualquer outra coisa (javascript:, data:...) vira vazio. */
  function urlSegura(valor) {
    if (typeof valor !== 'string') return '';
    const texto = valor.trim().slice(0, LIMITES.url);
    if (!texto) return '';
    if (/^media\/[a-zA-Z0-9._-]+$/.test(texto)) return texto;
    try {
      const url = new URL(texto);
      return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : '';
    } catch (erro) {
      return '';
    }
  }

  const texto = (valor, max) => (typeof valor === 'string' ? valor.replace(/\r\n/g, '\n').trim().slice(0, max) : '');

  /** Limpa e valida dados vindos de fora (link). Nunca confie no que vem de um link. */
  function limparPresente(bruto) {
    if (!bruto || typeof bruto !== 'object') throw new Error('Presente inválido');
    const presente = presenteVazio();
    presente.para = texto(bruto.para, LIMITES.nome);
    presente.ocasiao = OCASIOES.includes(bruto.ocasiao) ? bruto.ocasiao : 'namoro';
    presente.modelo = MODELOS.includes(bruto.modelo) ? bruto.modelo : 'nosso';
    presente.paleta = ['rosa','lavanda','ceu','sage','dourado','noite'].includes(bruto.paleta) ? bruto.paleta : 'rosa';
    presente.fonte = ['classica','manuscrita','moderna','delicada'].includes(bruto.fonte) ? bruto.fonte : 'classica';
    presente.decoracao = 'limpa';
    presente.layoutFotos = ['polaroid','grade','album'].includes(bruto.layoutFotos) ? bruto.layoutFotos : 'polaroid';
    presente.tipoCarta = Object.prototype.hasOwnProperty.call(CARTAS, bruto.tipoCarta) || bruto.tipoCarta === 'livre' ? bruto.tipoCarta : 'livre';
    presente.de = texto(bruto.de, LIMITES.nome);
    presente.data = lerData(bruto.data) ? bruto.data : '';
    presente.carta = texto(bruto.carta, LIMITES.carta);
    presente.surpresa = texto(bruto.surpresa, LIMITES.surpresa);
    presente.musica = urlSegura(bruto.musica);
    if (Array.isArray(bruto.fotos)) {
      bruto.fotos.slice(0, LIMITES.fotos).forEach((foto, i) => {
        if (foto && typeof foto === 'object') {
          presente.fotos[i] = { u: urlSegura(foto.u), l: texto(foto.l, LIMITES.legenda) };
        }
      });
    }
    if (!presente.para && !presente.de && !presente.carta) throw new Error('Presente vazio');
    return presente;
  }

  /* ======================================================================
     4. GIFTREPOSITORY — onde os presentes são guardados e encontrados
     ----------------------------------------------------------------------
     HOJE: o presente inteiro vai dentro do link (?presente=...). Sem servidor.
     FUTURO: troque apenas os dois métodos abaixo. O resto do site continua igual.
       salvar(presente)  -> POST /api/presentes  -> { url: ".../p/ab12cd" }
       carregar()        -> GET  /api/presentes/ab12cd (id lido de /p/ab12cd)
     ====================================================================== */
  const GiftRepository = {
    PARAMETRO: 'presente',

    /** JSON -> UTF-8 -> Base64 "URL-safe" (troca + e / por - e _, remove o =). */
    codificar(presente) {
      const bytes = new TextEncoder().encode(JSON.stringify(presente));
      let binario = '';
      bytes.forEach((b) => { binario += String.fromCharCode(b); });
      return btoa(binario).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    },

    decodificar(codigo) {
      let b64 = codigo.replace(/-/g, '+').replace(/_/g, '/');
      while (b64.length % 4) b64 += '=';
      const binario = atob(b64);
      const bytes = Uint8Array.from(binario, (c) => c.charCodeAt(0));
      return JSON.parse(new TextDecoder().decode(bytes));
    },

    enderecoBase() {
      return location.href.split(/[?#]/)[0];
    },

    /** Devolve o endereço do presente. Async de propósito: um servidor real também seria. */
    async salvar(presente) {
      const url = `${this.enderecoBase()}?${this.PARAMETRO}=${this.codificar(presente)}`;
      return { url, permanente: false };
    },

    /** Procura um presente na página atual. status: 'nenhum' | 'ok' | 'invalido'. */
    async carregar() {
      const codigo = new URLSearchParams(location.search).get(this.PARAMETRO) || document.querySelector('meta[name="presente-pacote"]')?.content;
      if (!codigo) return { status: 'nenhum' };
      try {
        return { status: 'ok', presente: limparPresente(this.decodificar(codigo)) };
      } catch (erro) {
        return { status: 'invalido' };
      }
    },
  };

  /* ======================================================================
     5. RENDERIZAÇÃO DO PRESENTE
     A mesma função desenha o presente em tela cheia, no exemplo e na
     pré-visualização. No modo preview, campos vazios mostram um convite
     para preencher; no modo final, seções vazias simplesmente não aparecem.
     ====================================================================== */
  let contadorIds = 0;
  const reprodutores = new Set(); // garante uma música tocando por vez

  function prepararMusica(raiz, url, aoMidia) {
    if (raiz._musicaUrl === url) return;
    if (raiz._audio) {
      raiz._audio.pause();
      reprodutores.delete(raiz._audio);
      raiz._audio = null;
    }
    raiz._musicaUrl = url;
    raiz._erroMusica = false;
    if (!url) return;

    const audio = new Audio();
    audio.preload = 'none';
    audio.loop = true;
    audio.src = url;
    audio.addEventListener('play', () => {
      reprodutores.forEach((outro) => { if (outro !== audio) outro.pause(); });
      if (raiz._sincronizarMusica) raiz._sincronizarMusica();
    });
    audio.addEventListener('pause', () => raiz._sincronizarMusica && raiz._sincronizarMusica());
    audio.addEventListener('playing', () => {
      raiz._erroMusica = false;
      aoMidia('musica', false);
      if (raiz._sincronizarMusica) raiz._sincronizarMusica();
    });
    audio.addEventListener('error', () => {
      raiz._erroMusica = true;
      aoMidia('musica', true);
      if (raiz._sincronizarMusica) raiz._sincronizarMusica();
    });
    reprodutores.add(audio);
    raiz._audio = audio;
  }

  /** Só deve ser chamada a partir de um clique/toque (regra de reprodução automática dos navegadores). */
  async function tocarMusica(raiz, aoMidia) {
    const audio = raiz._audio;
    if (!audio || !audio.paused) return;
    try {
      await audio.play();
    } catch (erro) {
      raiz._erroMusica = true;
      aoMidia('musica', true);
      if (raiz._sincronizarMusica) raiz._sincronizarMusica();
    }
  }

  function chuvaDeCoracoes(palco) {
    if (movimentoReduzido.matches) return;
    for (let i = 0; i < 9; i += 1) {
      const c = coracao('burst-heart');
      c.style.setProperty('--x', `${(Math.random() * 2 - 1) * 110}px`);
      c.style.setProperty('--y', `${-(70 + Math.random() * 100)}px`);
      c.style.setProperty('--r', `${(Math.random() * 2 - 1) * 35}deg`);
      c.style.animationDelay = `${i * 45}ms`;
      c.addEventListener('animationend', () => c.remove());
      palco.append(c);
    }
  }

  function coracaoFlutuante(i) {
    const c = coracao('float-heart');
    c.style.setProperty('--left', `${12 + i * 19}%`);
    c.style.setProperty('--tam', `${11 + (i % 3) * 4}px`);
    c.style.setProperty('--dur', `${9 + (i % 3) * 2.5}s`);
    c.style.setProperty('--atraso', `${i * 1.7}s`);
    c.style.setProperty('--desvio', `${i % 2 ? 18 : -18}px`);
    return c;
  }

  /**
   * Desenha o presente dentro de `raiz`.
   * opcoes.preview  -> mostra convites nos campos vazios
   * opcoes.estado   -> guarda carta/surpresa abertas entre uma renderização e outra
   * opcoes.aoMidia  -> avisa quando uma foto ou a música falha ou funciona
   * opcoes.final    -> mostra o convite "crie o seu" no rodapé
   */
  function renderizarPresente(raiz, presente, opcoes = {}) {
    const { preview = false, final = false, estado = {}, aoMidia = () => {} } = opcoes;
    const id = raiz.dataset.uid || (raiz.dataset.uid = `g${++contadorIds}`);
    const para = presente.para || (preview ? 'meu amor' : 'você');
    const de = presente.de || (preview ? 'Alguém que te ama' : 'Alguém especial');

    raiz.replaceChildren();
    raiz.classList.add('gift');
    raiz.dataset.modelo = MODELOS.includes(presente.modelo) ? presente.modelo : 'nosso';
    raiz.dataset.ocasiao = OCASIOES.includes(presente.ocasiao) ? presente.ocasiao : 'namoro';
    raiz.dataset.paleta = ['rosa','lavanda','ceu','sage','dourado','noite'].includes(presente.paleta) ? presente.paleta : 'rosa';
    raiz.dataset.fonte = ['classica','manuscrita','moderna','delicada'].includes(presente.fonte) ? presente.fonte : 'classica';
    raiz.dataset.decoracao = 'limpa';
    raiz.dataset.layoutFotos = ['polaroid','grade','album'].includes(presente.layoutFotos) ? presente.layoutFotos : 'polaroid';
    prepararMusica(raiz, presente.musica, aoMidia);

    const secoes = [];

    /* ---- Boas-vindas ---- */
    const botaoAbrir = el('button', { class: 'btn', type: 'button' }, 'Abrir meu presente');
    botaoAbrir.addEventListener('click', () => {
      tocarMusica(raiz, aoMidia);
      const proxima = raiz.querySelector('.gift-welcome ~ .gift-section');
      if (proxima) rolarPara(proxima);
    });
    secoes.push(
      el('section', { class: 'gift-welcome', 'data-secao': 'boas-vindas' },
        el('div', { class: 'gift-arch' },
          [0, 1, 2, 3, 4].map(coracaoFlutuante),
          el('h2', { class: 'gift-title', text: `Oi, ${para}` }),
          el('p', { class: 'gift-lead', text: `${de} ${TEXTO_OCASIAO[raiz.dataset.ocasiao] || 'preparou este cantinho para você.'} Leia com calma, no seu tempo.` }),
          el('p', { class: 'gift-names' }, para, coracao('gift-names-heart'), de),
          botaoAbrir,
        ),
      ),
    );

    /* ---- Contador ---- */
    if (lerData(presente.data)) {
      const secao = el('section', { class: 'gift-section gift-contador', 'data-secao': 'contador', 'data-contador': presente.data },
        el('p', { class: 'contador-intro' }),
        el('p', { class: 'contador-numero' }, el('span', { class: 'contador-valor' }), el('span', { class: 'contador-unidade' })),
        el('p', { class: 'contador-detalhe' }),
      );
      preencherContador(secao);
      secoes.push(secao);
    } else if (preview) {
      secoes.push(el('section', { class: 'gift-section', 'data-secao': 'contador' },
        el('p', { class: 'gift-vazio', text: 'Escolha uma data especial e o contador de dias aparece aqui.' })));
    }

    /* ---- Fotos ---- */
    const giros = [-2, 2.5, -1.5];
    const fotos = presente.fotos.map((f, i) => ({ ...f, i })).filter((f) => f.u);
    if (fotos.length || preview) {
      const grade = el('div', { class: 'gift-fotos' });
      fotos.forEach((f) => {
        const figura = el('figure', { class: 'polaroid', style: `--giro:${giros[f.i % 3]}deg` });
        const imagem = el('img', {
          src: f.u, alt: f.l || `Foto ${f.i + 1} de vocês`, loading: 'lazy', decoding: 'async', referrerpolicy: 'no-referrer',
        });
        imagem.addEventListener('load', () => aoMidia(`foto${f.i}`, false));
        imagem.addEventListener('error', () => {
          imagem.replaceWith(el('div', { class: 'polaroid-falha', role: 'img', 'aria-label': 'Foto indisponível' }, 'Foto indisponível'));
          aoMidia(`foto${f.i}`, true);
        });
        figura.append(imagem, el('figcaption', { text: f.l }));
        grade.append(figura);
      });
      if (!fotos.length) {
        ['sua foto aparece aqui', 'e mais uma'].forEach((legenda, i) => {
          grade.append(el('figure', { class: 'polaroid', style: `--giro:${giros[i]}deg` },
            el('div', { class: 'polaroid-falha' }, 'Escolha uma foto no formulário'),
            el('figcaption', { text: legenda })));
        });
      }
      secoes.push(el('section', { class: 'gift-section', 'data-secao': 'fotos', 'aria-label': 'Fotos' },
        el('h2', { class: 'gift-subtitulo', text: 'Lembranças' }), grade));
    }

    /* ---- Carta ---- */
    if (presente.carta || preview) {
      const idCarta = `${id}-carta`;
      const palco = el('div', { class: 'carta-palco' });
      const botaoEnvelope = el('button', {
        class: 'envelope', type: 'button', 'aria-expanded': String(!!estado.cartaAberta), 'aria-controls': idCarta,
      },
      el('span', { class: 'envelope-corpo' },
        el('span', { class: 'envelope-fundo' }),
        el('span', { class: 'envelope-frente' }),
        el('span', { class: 'envelope-aba' }),
        el('span', { class: 'envelope-selo' }, coracao('')),
      ),
      el('span', { class: 'envelope-dica', text: 'Toque para abrir' }),
      );
      const folha = el('div', { class: 'carta-folha-wrap', id: idCarta, role: 'region', 'aria-label': `Carta de ${de}` },
        el('div', { class: 'carta-folha-miolo' },
          el('article', { class: 'carta-folha' },
            el('p', { class: 'carta-saudacao', text: `${para},` }),
            el('div', { class: 'carta-texto', text: presente.carta || 'Sua carta aparece aqui, no papel pautado. Comece a escrever ao lado.' }),
            el('p', { class: 'carta-assinatura' }, 'Com carinho,', el('br'), de),
          ),
        ),
      );
      palco.classList.toggle('aberta', !!estado.cartaAberta);
      botaoEnvelope.addEventListener('click', () => {
        const abrir = !palco.classList.contains('aberta');
        palco.classList.toggle('aberta', abrir);
        botaoEnvelope.setAttribute('aria-expanded', String(abrir));
        estado.cartaAberta = abrir;
      });
      palco.append(botaoEnvelope, folha);
      secoes.push(el('section', { class: 'gift-section', 'data-secao': 'carta', 'aria-label': 'Carta' },
        el('h2', { class: 'gift-subtitulo', text: 'Uma carta' }), palco));
    }

    /* ---- Mensagem surpresa ---- */
    if (presente.surpresa || preview) {
      const idSurpresa = `${id}-surpresa`;
      const aberta = !!estado.surpresaAberta;
      const palco = el('div', { class: 'surpresa-palco' });
      const botao = el('button', { class: 'btn btn--suave', type: 'button', 'aria-expanded': String(aberta), 'aria-controls': idSurpresa },
        'Revelar mensagem surpresa');
      const cartao = el('div', { class: 'surpresa-cartao', id: idSurpresa, tabindex: '-1', hidden: !aberta },
        el('p', { text: presente.surpresa || 'Sua mensagem surpresa aparece aqui.' }));
      botao.hidden = aberta;
      botao.addEventListener('click', () => {
        estado.surpresaAberta = true;
        botao.hidden = true;
        botao.setAttribute('aria-expanded', 'true');
        cartao.hidden = false;
        cartao.classList.add('is-novo');
        cartao.focus({ preventScroll: true });
        chuvaDeCoracoes(palco);
      });
      palco.append(botao, cartao);
      secoes.push(el('section', { class: 'gift-section', 'data-secao': 'surpresa', 'aria-label': 'Mensagem surpresa' },
        el('h2', { class: 'gift-subtitulo', text: 'Ainda tem mais' }), palco));
    }

    /* ---- Montagem: seções separadas por um fio pontilhado com um coração ---- */
    secoes.forEach((secao, i) => {
      if (i > 0) raiz.append(el('div', { class: 'gift-divisor', 'aria-hidden': 'true' }, coracao('')));
      raiz.append(secao);
    });

    raiz.append(el('footer', { class: 'gift-rodape' },
      el('p', { text: 'Feito com carinho no Meu Cantinho.' }),
      final ? el('a', { href: GiftRepository.enderecoBase(), text: 'Quero criar um presente também' }) : null,
    ));

    /* ---- Botão discreto de música ---- */
    if (presente.musica) {
      const rotulo = el('span');
      const pilula = el('button', { class: 'musica-pilula', type: 'button', 'aria-pressed': 'false' }, svg(CAMINHO_NOTA, ''), rotulo);
      pilula.addEventListener('click', () => {
        const audio = raiz._audio;
        if (!audio) return;
        if (audio.paused) tocarMusica(raiz, aoMidia);
        else audio.pause();
      });
      raiz._sincronizarMusica = () => {
        const audio = raiz._audio;
        const tocando = !!audio && !audio.paused;
        pilula.setAttribute('aria-pressed', String(tocando));
        pilula.classList.toggle('tocando', tocando);
        pilula.classList.toggle('com-erro', !!raiz._erroMusica);
        rotulo.textContent = raiz._erroMusica ? 'Música indisponível' : tocando ? 'Pausar música' : 'Tocar música';
      };
      raiz._sincronizarMusica();
      raiz.append(el('div', { class: 'musica-ancora' }, pilula));
    } else {
      raiz._sincronizarMusica = null;
    }
  }

  /* ======================================================================
     6. MENU E ROLAGEM SUAVE
     ====================================================================== */
  function iniciarNavegacao() {
    const cabecalho = $('.site-header');
    const botao = $('.menu-botao');
    const rotuloBotao = $('.sr-only', botao);

    function definirMenu(aberto) {
      cabecalho.classList.toggle('menu-aberto', aberto);
      botao.setAttribute('aria-expanded', String(aberto));
      rotuloBotao.textContent = aberto ? 'Fechar menu' : 'Abrir menu';
    }

    botao.addEventListener('click', () => definirMenu(botao.getAttribute('aria-expanded') !== 'true'));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && cabecalho.classList.contains('menu-aberto')) {
        definirMenu(false);
        botao.focus();
      }
    });
    document.addEventListener('click', (e) => {
      if (cabecalho.classList.contains('menu-aberto') && !cabecalho.contains(e.target)) definirMenu(false);
    });
    window.addEventListener('resize', () => { if (window.innerWidth >= 780) definirMenu(false); });

    // Qualquer link interno marcado com data-scroll rola suavemente até a seção.
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[data-scroll]');
      if (!link) return;
      const destino = (link.getAttribute('href') || '').slice(1);
      const alvo = destino && document.getElementById(destino);
      if (!alvo) return;
      e.preventDefault();
      definirMenu(false);
      rolarPara(alvo);
      try { history.replaceState(null, '', `#${destino}`); } catch (erro) { /* ignora (ex.: alguns contextos locais) */ }
      alvo.setAttribute('tabindex', '-1');
      alvo.focus({ preventScroll: true });
    });
  }

  /* ======================================================================
     7. EDITOR (formulário + pré-visualização + link)
     ====================================================================== */
  const EXEMPLO_FOTOS = {
    cafe: '<rect width="400" height="400" fill="#F6D9D6"/><rect y="270" width="400" height="130" fill="#D9AE9B"/><ellipse cx="200" cy="300" rx="120" ry="24" fill="#FFFCF7"/><path d="M140 220h120v30a60 50 0 0 1-120 0z" fill="#FFFCF7"/><path d="M260 232h18a22 22 0 0 1 0 44h-22" fill="none" stroke="#FFFCF7" stroke-width="10" stroke-linecap="round"/><path d="M140 224h120" stroke="#B0505F" stroke-width="8"/><path d="M175 190c-12-16 12-24 0-42M205 190c-12-16 12-24 0-42M235 190c-12-16 12-24 0-42" fill="none" stroke="#B0505F" stroke-width="6" stroke-linecap="round" opacity=".6"/>',
    chuva: '<rect width="400" height="400" fill="#EBD6D0"/><path d="M70 230a130 130 0 0 1 260 0z" fill="#B0505F"/><path d="M70 230q32-24 65 0q32-24 65 0q32-24 65 0q32-24 60 0" fill="#B0505F"/><path d="M200 230v90a20 20 0 0 1-40 0" fill="none" stroke="#4F352E" stroke-width="8" stroke-linecap="round"/><path d="M60 80l-10 30M120 40l-10 30M250 60l-10 30M330 100l-10 30M90 160l-10 30M320 220l-10 30M40 270l-10 30M350 320l-10 30M240 340l-10 30" stroke="#FFFCF7" stroke-width="5" stroke-linecap="round" opacity=".9"/>',
    viagem: '<rect width="400" height="400" fill="#F8E1D6"/><circle cx="285" cy="150" r="58" fill="#F2B9B5"/><path d="M0 262C80 222 160 232 230 252S360 242 400 232V400H0z" fill="#CF8A90"/><path d="M178 400L226 252H236L318 400z" fill="#7A5C52"/><path d="M247 400L231 252" stroke="#FFFCF7" stroke-width="6" stroke-dasharray="18 16"/>',
  };

  function fotoExemplo(tipo) {
    const conteudo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">${EXEMPLO_FOTOS[tipo]}</svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(conteudo)}`;
  }

  // Este objeto é confiável (escrito aqui), por isso pode usar data: nas fotos.
  const PRESENTE_EXEMPLO = {
    v: 2,
    ocasiao: 'namoro', modelo: 'nosso', tipoCarta: 'amor',
    para: 'Marina',
    de: 'Caio',
    data: '2023-02-14',
    carta: 'Eu queria escrever uma carta de verdade, dessas que a gente guarda numa caixa e relê em dia de chuva.\n\nLembro do primeiro café que tomamos sem pressa, e de como o tempo parou de contar horas. De lá para cá, você virou o meu lugar preferido: o jeito que você ri antes de terminar a piada, o bilhete na geladeira, a mão que procura a minha no escuro do cinema.\n\nObrigado por cada dia comum que você transformou em lembrança. Que venham muitos outros, com café, chuva e a gente do mesmo jeito.\n\nTe amo do tamanho do que não cabe aqui.',
    fotos: [
      { u: fotoExemplo('cafe'), l: 'nosso primeiro café' },
      { u: fotoExemplo('chuva'), l: 'domingo de chuva' },
      { u: fotoExemplo('viagem'), l: 'aquela viagem' },
    ],
    musica: '',
    surpresa: 'Separei duas noites em janeiro para a gente viajar. Faça as malas e não me pergunte para onde.',
  };


  /* ZIP simples sem dependências externas: guarda arquivos sem compressão. */
  function crc32(bytes) {
    let crc = -1;
    for (let i = 0; i < bytes.length; i++) {
      crc ^= bytes[i];
      for (let j = 0; j < 8; j++) crc = (crc >>> 1) ^ (0xEDB88320 & -(crc & 1));
    }
    return (crc ^ -1) >>> 0;
  }
  function zipLocal(files) {
    const enc = new TextEncoder();
    const chunks = []; const central = []; let offset = 0;
    const u16 = (v) => [v & 255, (v >>> 8) & 255];
    const u32 = (v) => [v & 255, (v >>> 8) & 255, (v >>> 16) & 255, (v >>> 24) & 255];
    for (const file of files) {
      const name = enc.encode(file.name); const data = file.bytes; const crc = crc32(data);
      const local = new Uint8Array([...u32(0x04034b50), ...u16(20), ...u16(0x0800), ...u16(0), ...u16(0), ...u16(0), ...u32(crc), ...u32(data.length), ...u32(data.length), ...u16(name.length), ...u16(0), ...name]);
      chunks.push(local, data);
      const dir = new Uint8Array([...u32(0x02014b50), ...u16(20), ...u16(20), ...u16(0x0800), ...u16(0), ...u16(0), ...u16(0), ...u32(crc), ...u32(data.length), ...u32(data.length), ...u16(name.length), ...u16(0), ...u16(0), ...u16(0), ...u16(0), ...u32(0), ...u32(offset), ...name]);
      central.push(dir); offset += local.length + data.length;
    }
    const centralSize = central.reduce((n, c) => n + c.length, 0);
    const end = new Uint8Array([...u32(0x06054b50), ...u16(0), ...u16(0), ...u16(files.length), ...u16(files.length), ...u32(centralSize), ...u32(offset), ...u16(0)]);
    return new Blob([...chunks, ...central, end], { type: 'application/zip' });
  }

  function iniciarEditor() {
    const form = $('#form-presente');
    const quadro = $('#quadro-previa');
    const editor = $('#editor');
    const raizPrevia = el('div');
    quadro.append(raizPrevia);

    const campos = {
      para: $('#f-para'), de: $('#f-de'), data: $('#f-data'), carta: $('#f-carta'), tipoCarta: $('#f-tipo-carta'),
      paleta: $('#f-paleta'), fonte: $('#f-fonte'), layoutFotos: $('#f-layout-fotos'),
      musica: $('#f-arquivo-musica'), surpresa: $('#f-surpresa'),
      arquivoFotos: $('#f-arquivos-fotos'),
      fotos: Array.from({ length: LIMITES.fotos }, (_, i) => ({ legenda: $(`#f-legenda${i + 1}`) })),
    };
    const estadoPrevia = { cartaAberta: false, surpresaAberta: false };
    let arquivosFotos = [];
    let urlFotos = [];
    let arquivoMusica = null;
    let urlMusica = '';
    function limparUrlsTemporarias() { urlFotos.forEach((u) => URL.revokeObjectURL(u)); urlFotos = []; if (urlMusica) URL.revokeObjectURL(urlMusica); urlMusica = ''; }

    /* ---- Leitura do formulário ---- */
    function lerFormulario() {
      return {
        v: 2,
        ocasiao: form.querySelector('input[name="ocasiao"]:checked')?.value || 'namoro',
        modelo: form.querySelector('input[name="modelo"]:checked')?.value || 'nosso',
        tipoCarta: campos.tipoCarta.value,
        paleta: campos.paleta.value, fonte: campos.fonte.value, decoracao: 'limpa', layoutFotos: campos.layoutFotos.value,
        para: campos.para.value.trim(),
        de: campos.de.value.trim(),
        data: campos.data.value,
        carta: campos.carta.value.replace(/\r\n/g, '\n').trim(),
        fotos: campos.fotos.map((f, i) => ({ u: urlFotos[i] || '', l: f.legenda.value.trim() })),
        musica: urlMusica,
        surpresa: campos.surpresa.value.replace(/\r\n/g, '\n').trim(),
      };
    }

    /* ---- Validação ---- */
    const MSG_URL = 'Esse endereço não parece válido. Ele precisa começar com https://';
    const regras = {
      para: () => (campos.para.value.trim() ? '' : 'Escreva o nome de quem vai receber o presente.'),
      de: () => (campos.de.value.trim() ? '' : 'Escreva o seu nome, para a pessoa saber quem enviou.'),
      data: () => (campos.data.value && !lerData(campos.data.value) ? 'Escolha uma data válida.' : ''),
      carta: () => (campos.carta.value.trim() ? '' : 'Escreva a carta. Mesmo uma frase já vale.'),
    };
    const entradaDe = {
      para: campos.para, de: campos.de, data: campos.data, carta: campos.carta,
    };

    function regraUrl(entrada) {
      const valor = entrada.value.trim();
      return !valor || urlSegura(valor) ? '' : MSG_URL;
    }

    function mostrarErro(chave, mensagem) {
      const entrada = entradaDe[chave];
      $(`#erro-${chave}`).textContent = mensagem;
      if (mensagem) entrada.setAttribute('aria-invalid', 'true');
      else entrada.removeAttribute('aria-invalid');
    }

    function validarCampo(chave) {
      const mensagem = regras[chave]();
      mostrarErro(chave, mensagem);
      return mensagem;
    }

    function validarTudo() {
      return Object.keys(regras).filter((chave) => validarCampo(chave));
    }

    /* ---- Avisos de foto/música que não carregam ---- */
    const MSG_FOTO = 'Não conseguimos carregar esta imagem. Confira se o link é público e aponta direto para a foto.';
    const MSG_MUSICA = 'Não conseguimos tocar este link. Ele precisa apontar direto para um arquivo .mp3.';
    function aoMidia(chave, falhou) {
      const campo = chave === 'musica' ? 'musica' : `foto${Number(chave.replace('foto', '')) + 1}`;
      if (!entradaDe[campo]) return;
      const mensagem = chave === 'musica' ? MSG_MUSICA : MSG_FOTO;
      const atual = $(`#erro-${campo}`).textContent;
      if (falhou) mostrarErro(campo, mensagem);
      else if (atual === mensagem) mostrarErro(campo, '');
    }

    /* ---- Pré-visualização ---- */
    let agendado = 0;
    function desenharPrevia() {
      clearTimeout(agendado);
      renderizarPresente(raizPrevia, lerFormulario(), { preview: true, estado: estadoPrevia, aoMidia });
    }
    function agendarPrevia() {
      clearTimeout(agendado);
      agendado = setTimeout(desenharPrevia, 110);
    }

    /* ---- Seleção de ocasião, modelo e inspiração de carta ---- */
    function atualizarSelecoes() {
      $$('#opcoes-ocasiao .opcao-card').forEach((card) => card.classList.toggle('selecionado', !!$('input:checked', card)));
      $$('#opcoes-modelo .modelo-card').forEach((card) => card.classList.toggle('selecionado', !!$('input:checked', card)));
    }
    form.querySelectorAll('input[name="ocasiao"], input[name="modelo"]').forEach((radio) => radio.addEventListener('change', () => {
      atualizarSelecoes();
      // A ocasião também sugere uma carta compatível, em vez de só trocar a seleção visual.
      if (radio.name === 'ocasiao') {
        const tipoSugerido = CARTA_POR_OCASIAO[radio.value] || 'livre';
        campos.tipoCarta.value = tipoSugerido;
        campos.carta.value = CARTAS[tipoSugerido] || '';
        $('#contagem-carta').textContent = `${campos.carta.value.length}/${LIMITES.carta}`;
      }
      $('#resultado').hidden = true;
      agendarPrevia();
    }));
    [campos.paleta, campos.fonte, campos.layoutFotos].forEach((campo) => campo.addEventListener('change', () => { $('#resultado').hidden = true; agendarPrevia(); }));

    campos.tipoCarta.addEventListener('change', () => {
      const tipo = campos.tipoCarta.value;
      if (tipo === 'livre') {
        if (!campos.carta.value.trim()) campos.carta.value = '';
      } else {
        campos.carta.value = CARTAS[tipo] || '';
      }
      $('#contagem-carta').textContent = `${campos.carta.value.length}/${LIMITES.carta}`;
      $('#resultado').hidden = true;
      agendarPrevia();
    });
    atualizarSelecoes();

    /* ---- Seleção de arquivos locais ---- */
    campos.arquivoFotos.addEventListener('change', () => {
      const selecionados = Array.from(campos.arquivoFotos.files || []);
      const vagas = Math.max(0, LIMITES.fotos - arquivosFotos.length);
      const novos = selecionados.slice(0, vagas);
      if (selecionados.length > vagas) mostrarAviso('Você pode adicionar até 10 fotos no total. As fotos já escolhidas foram mantidas.');
      novos.forEach((arquivo) => {
        arquivosFotos.push(arquivo);
        urlFotos.push(URL.createObjectURL(arquivo));
      });
      // Limpa o input para permitir escolher mais fotos, inclusive o mesmo arquivo, numa próxima vez.
      campos.arquivoFotos.value = '';
      $('#status-fotos').textContent = arquivosFotos.length ? `${arquivosFotos.length}/10 foto(s): ${arquivosFotos.map((f, i) => `${i + 1}. ${f.name}`).join(' • ')}` : 'Nenhuma foto selecionada.';
      agendarPrevia();
    });
    campos.musica.addEventListener('change', () => {
      if (urlMusica) URL.revokeObjectURL(urlMusica);
      arquivoMusica = campos.musica.files && campos.musica.files[0] || null;
      urlMusica = arquivoMusica ? URL.createObjectURL(arquivoMusica) : '';
      $('#status-musica').textContent = arquivoMusica ? `Música selecionada: ${arquivoMusica.name}` : 'Nenhuma música selecionada. MP3 é recomendado.';
      agendarPrevia();
    });

    /* ---- Eventos do formulário ---- */
    form.addEventListener('input', (e) => {
      const alvo = e.target;
      const chave = Object.keys(entradaDe).find((k) => entradaDe[k] === alvo);
      if (chave && alvo.getAttribute('aria-invalid') === 'true') mostrarErro(chave, regras[chave]());
      $('#contagem-carta').textContent = `${campos.carta.value.length}/${LIMITES.carta}`;
      $('#contagem-surpresa').textContent = `${campos.surpresa.value.length}/${LIMITES.surpresa}`;
      $('#resultado').hidden = true;
      agendarPrevia();
    });

    form.addEventListener('focusout', (e) => {
      const chave = Object.keys(entradaDe).find((k) => entradaDe[k] === e.target);
      if (chave && e.target.value.trim()) validarCampo(chave);
    });

    // Ao focar um campo, a pré-visualização rola até a parte correspondente.
    form.addEventListener('focusin', (e) => {
      const area = e.target.closest('[data-alvo]');
      if (!area) return;
      const nome = area.dataset.alvo;
      if (nome === 'carta') estadoPrevia.cartaAberta = true;
      if (nome === 'surpresa') estadoPrevia.surpresaAberta = true;
      if (nome === 'carta' || nome === 'surpresa') desenharPrevia();
      const secao = raizPrevia.querySelector(`[data-secao="${nome}"]`);
      if (secao && quadro.offsetParent !== null) rolarPara(secao);
    });

    /* ---- Abas (celular) ---- */
    $$('.editor-aba').forEach((aba) => {
      aba.addEventListener('click', () => {
        editor.dataset.view = aba.dataset.view;
        $$('.editor-aba').forEach((outra) => outra.setAttribute('aria-pressed', String(outra === aba)));
        if (aba.dataset.view === 'preview') desenharPrevia();
      });
    });

    /* ---- Gerar e copiar link ---- */
    const resumo = $('#resumo-erros');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      resumo.textContent = '';
      const invalidos = validarTudo();
      if (invalidos.length) {
        resumo.textContent = invalidos.length === 1
          ? 'Falta ajustar 1 campo para gerar o link.'
          : `Faltam ajustar ${invalidos.length} campos para gerar o link.`;
        $('#resultado').hidden = true;
        if (editor.dataset.view !== 'form') editor.dataset.view = 'form';
        entradaDe[invalidos[0]].focus();
        return;
      }
      const { url } = await GiftRepository.salvar(lerFormulario());
      $('#campo-link').value = url;
      $('#abrir-link').href = url;
      $('#aviso-tamanho').hidden = url.length <= 2000;
      $('#resultado').hidden = false;
      $('#resultado').scrollIntoView({ behavior: comportamentoRolagem(), block: 'nearest' });
    });

    $('#baixar-presente').addEventListener('click', async () => {
      const invalidos = validarTudo();
      if (invalidos.length) {
        $('#resumo-erros').textContent = invalidos.length === 1 ? 'Falta ajustar 1 campo para baixar o presente.' : `Faltam ajustar ${invalidos.length} campos para baixar o presente.`;
        entradaDe[invalidos[0]].focus(); return;
      }
      const presente = lerFormulario();
      const arquivoParaDataURL = (arquivo) => new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => resolve(String(leitor.result));
        leitor.onerror = () => reject(new Error(`Não foi possível ler ${arquivo.name}`));
        leitor.readAsDataURL(arquivo);
      });
      try {
        // Incorpora fotos e música no próprio HTML, sem arquivos externos.
        for (let i = 0; i < arquivosFotos.length; i++) {
          presente.fotos[i].u = await arquivoParaDataURL(arquivosFotos[i]);
        }
        if (arquivoMusica) presente.musica = await arquivoParaDataURL(arquivoMusica);

        // Renderiza o presente agora e salva o HTML já pronto: o destinatário
        // não precisa executar JavaScript para ver a carta (compatível com prévias do iPhone).
        const raiz = document.createElement('main');
        raiz.className = 'gift gift--final';
        renderizarPresente(raiz, presente, { final: false, estado: { cartaAberta: true, surpresaAberta: true } });

        // Remove controles que dependem de JavaScript e deixa o conteúdo visível.
        const boasVindas = raiz.querySelector('.gift-welcome');
        if (boasVindas) {
          const botao = boasVindas.querySelector('button');
          if (botao) botao.remove();
        }
        const palcoCarta = raiz.querySelector('.carta-palco');
        if (palcoCarta) {
          palcoCarta.classList.add('aberta');
          const envelope = palcoCarta.querySelector('.envelope');
          if (envelope) envelope.remove();
          const folha = palcoCarta.querySelector('.carta-folha-wrap');
          if (folha) {
            folha.style.display = 'block';
            folha.style.visibility = 'visible';
            folha.style.gridTemplateRows = '1fr';
            folha.style.maxWidth = '560px';
          }
        }
        const cartaoSurpresa = raiz.querySelector('.surpresa-cartao');
        if (cartaoSurpresa) cartaoSurpresa.hidden = false;
        const botaoSurpresa = raiz.querySelector('.surpresa-palco button');
        if (botaoSurpresa) botaoSurpresa.remove();
        raiz.querySelectorAll('img').forEach((img) => {
          img.loading = 'eager';
          img.removeAttribute('decoding');
        });

        // Usa o controle nativo de áudio, que não depende do JavaScript do site.
        const ancoraMusica = raiz.querySelector('.musica-ancora');
        if (ancoraMusica) ancoraMusica.remove();
        if (presente.musica) {
          const musica = document.createElement('section');
          musica.className = 'gift-section musica-estatica';
          const titulo = document.createElement('h2');
          titulo.className = 'gift-subtitulo';
          titulo.textContent = 'Uma música para acompanhar';
          const audio = document.createElement('audio');
          audio.controls = true;
          audio.preload = 'metadata';
          audio.src = presente.musica;
          audio.style.display = 'block';
          audio.style.width = 'min(100%, 420px)';
          audio.style.margin = '1rem auto';
          musica.append(titulo, audio);
          const rodape = raiz.querySelector('.gift-rodape');
          if (rodape) raiz.insertBefore(musica, rodape);
          else raiz.append(musica);
        }

        const tituloSeguro = String(presente.para || 'você').replace(/[&<>"']/g, '');
        const htmlPrincipal = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#FBF6EE">
  <title>Um presente para ${tituloSeguro}</title>
  <style>${PACOTE_CSS}
    html, body { min-height: 100%; }
    body { margin: 0; background-color: #FBF6EE; }
    .gift--final { width: 100%; max-width: 900px; margin: 0 auto; }
    .carta-folha-wrap { display: block !important; visibility: visible !important; grid-template-rows: 1fr !important; }
    .musica-estatica { padding-top: 1rem; }
    audio { max-width: calc(100% - 2rem); }
    @media (max-width: 600px) { .carta-folha { padding-inline: 1rem; } .gift-section { padding-inline: 1rem; } }
  </style>
</head>
<body>
${raiz.outerHTML}
</body>
</html>`;
        const nome = `meu-cantinho-${(presente.para || 'presente').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9_-]/g, '-').toLowerCase()}.html`;
        const blob = new Blob(['\uFEFF', htmlPrincipal], { type: 'text/html;charset=utf-8' });
        const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = nome; link.click();
        setTimeout(() => URL.revokeObjectURL(link.href), 60000);
        mostrarAviso('Cartão completo baixado! O arquivo já vem pronto para abrir e enviar.');
      } catch (erro) {
        console.error(erro);
        mostrarAviso('Não foi possível montar o HTML. Tente usar fotos menores ou um arquivo de música menor.');
      }
    });

    $('#copiar-link').addEventListener('click', async () => {
      const campo = $('#campo-link');
      const botao = $('#copiar-link');
      let copiou = false;
      try {
        await navigator.clipboard.writeText(campo.value);
        copiou = true;
      } catch (erro) {
        campo.focus();
        campo.select();
        try { copiou = document.execCommand('copy'); } catch (erro2) { copiou = false; }
      }
      if (copiou) {
        botao.textContent = 'Link copiado!';
        mostrarAviso('Link copiado! Agora é só enviar.');
        setTimeout(() => { botao.textContent = 'Copiar link'; }, 2200);
      } else {
        mostrarAviso('Não deu para copiar sozinho. Selecione o link e copie manualmente.');
      }
    });

    /* ---- Usar exemplo como ponto de partida ---- */
    $('#usar-exemplo').addEventListener('click', () => {
      const temConteudo = [campos.para, campos.de, campos.carta, campos.surpresa].some((c) => c.value.trim());
      if (temConteudo && !window.confirm('Isso vai substituir o que você já escreveu. Continuar?')) return;
      campos.para.value = PRESENTE_EXEMPLO.para;
      campos.de.value = PRESENTE_EXEMPLO.de;
      campos.data.value = PRESENTE_EXEMPLO.data;
      campos.carta.value = PRESENTE_EXEMPLO.carta;
      campos.surpresa.value = PRESENTE_EXEMPLO.surpresa;
      campos.tipoCarta.value = PRESENTE_EXEMPLO.tipoCarta || 'amor';
      form.querySelector('input[name="ocasiao"][value="namoro"]').checked = true;
      form.querySelector('input[name="modelo"][value="nosso"]').checked = true;
      campos.paleta.value = 'rosa'; campos.fonte.value = 'classica'; campos.layoutFotos.value = 'polaroid';
      atualizarSelecoes();
      limparUrlsTemporarias(); arquivosFotos = []; arquivoMusica = null;
      campos.arquivoFotos.value = ''; campos.musica.value = '';
      campos.fotos.forEach((f) => { f.legenda.value = ''; });
      $('#status-fotos').textContent = 'Nenhuma foto selecionada.'; $('#status-musica').textContent = 'Nenhuma música selecionada. MP3 é recomendado.';
      Object.keys(regras).forEach((chave) => mostrarErro(chave, ''));
      $('#contagem-carta').textContent = `${campos.carta.value.length}/${LIMITES.carta}`;
      $('#contagem-surpresa').textContent = `${campos.surpresa.value.length}/${LIMITES.surpresa}`;
      $('#resultado').hidden = true;
      desenharPrevia();
      rolarPara($('#criar'));
      mostrarAviso('Exemplo carregado. Troque pelos seus textos.');
    });

    desenharPrevia();
  }

  /* ======================================================================
     8. INICIALIZAÇÃO
     ====================================================================== */
  function abrirModoPresente(presente) {
    $('#site').hidden = true;
    const area = $('#presente-final');
    area.hidden = false;
    const raiz = el('main', { class: 'gift gift--final' });
    area.append(raiz);
    document.body.style.background = 'var(--creme)';
    document.title = `Um presente para ${presente.para || 'você'}`;
    renderizarPresente(raiz, presente, { final: true });
    window.scrollTo(0, 0);
  }

  function iniciarSite() {
    iniciarNavegacao();
    iniciarEditor();
    renderizarPresente($('#presente-exemplo'), PRESENTE_EXEMPLO);
    $('.aviso-fechar').addEventListener('click', () => { $('#aviso-link').hidden = true; });
  }

  async function iniciar() {
    if (window.__MEU_CANTINHO_PRESENTE__) {
      abrirModoPresente(window.__MEU_CANTINHO_PRESENTE__);
      atualizarContadores();
      setInterval(atualizarContadores, 60 * 1000);
      return;
    }
    const resultado = await GiftRepository.carregar();
    if (resultado.status === 'ok') {
      abrirModoPresente(resultado.presente);
    } else {
      if (resultado.status === 'invalido') $('#aviso-link').hidden = false;
      iniciarSite();
    }
    atualizarContadores();
    setInterval(atualizarContadores, 60 * 1000); // vira o dia sozinho se a página ficar aberta
  }

  iniciar();
})();
