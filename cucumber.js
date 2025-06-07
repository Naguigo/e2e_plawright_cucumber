module.exports = {
    default: [
      '--require-module ts-node/register',         // Permite usar TypeScript
      '--require steps/**/*.ts',                   // Aponta para os steps
      'features/**/*.feature',                     // Aponta para as features
      '--format progress-bar',                     // Exibe barra de progresso
      '--format html:reports/cucumber-report.html' // Gera relatório HTML
    ].join(' ')
  };