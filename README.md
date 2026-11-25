<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Sobre o jogo</title>
<style>
  :root {
    --fundo: #14161f;
    --painel: #1d2030;
    --texto: #e8e6df;
    --suave: #9a9eb5;
    --destaque: #44b7ff;
    --linha: #2c3047;
  }
  @media (prefers-color-scheme: light) {
    :root {
      --fundo: #eef0f6;
      --painel: #ffffff;
      --texto: #1b1e2b;
      --suave: #5b6078;
      --destaque: #0a76c2;
      --linha: #d3d7e4;
    }
  }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    background: var(--fundo);
    color: var(--texto);
    font: 17px/1.65 Georgia, "Times New Roman", serif;
  }
  main { max-width: 680px; margin: 0 auto; padding: 56px 22px 72px; }
  h1 {
    font: 700 clamp(30px, 7vw, 46px)/1.1 "Courier New", monospace;
    letter-spacing: -0.02em;
    margin: 0 0 10px;
    color: var(--destaque);
  }
  .sub { color: var(--suave); margin: 0 0 40px; }
  h2 {
    font: 700 20px/1.3 "Courier New", monospace;
    margin: 40px 0 10px;
  }
  p { margin: 0 0 14px; }
  .controles {
    background: var(--painel);
    border: 1px solid var(--linha);
    padding: 6px 18px;
  }
  .linha {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 9px 0;
    border-bottom: 1px solid var(--linha);
  }
  .linha:last-child { border-bottom: 0; }
  kbd {
    font: 700 15px "Courier New", monospace;
    color: var(--destaque);
  }
  footer { margin-top: 48px; color: var(--suave); font-size: 15px; }
</style>
</head>
<body>
<main>
  <h1>FRUMBELOOM</h1>
  <p class="sub">Um jogo de plataforma 2D feito em GameMaker.</p>

  <h2>Sobre o jogo</h2>
  <p>Escreva aqui a história e a ideia do jogo: quem é o personagem, o que ele busca e como é o mundo que ele explora.</p>

  <h2>Como o jogo foi feito</h2>
  <p>Conte aqui como foi o desenvolvimento: quando começou, quais ferramentas você usou, o que foi mais difícil e o que você aprendeu.</p>

  <h2>Controles</h2>
  <div class="controles">
    <div class="linha"><span>Andar</span><kbd>A / D ou setas</kbd></div>
    <div class="linha"><span>Pular (segure para pular mais alto)</span><kbd>Espaço</kbd></div>
    <div class="linha"><span>Agachar e descer de plataformas</span><kbd>S</kbd></div>
    <div class="linha"><span>Dash</span><kbd>M</kbd></div>
    <div class="linha"><span>Atacar ou atirar (W mira para cima)</span><kbd>J</kbd></div>
    <div class="linha"><span>Pegar item</span><kbd>E</kbd></div>
    <div class="linha"><span>Trocar de arma</span><kbd>P</kbd></div>
  </div>

  <footer>Criado pelo 1°MIN. Obrigado por jogar.</footer>
</main>
</body>
</html>
