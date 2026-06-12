const { expect, test } = require('@jest/globals');

function classificarAlerta(nivel) {
  if (nivel > 80) return 'Crítico';
  if (nivel > 50) return 'Alto';
  return 'Moderado';
}

test("alerta alto", () => {
    expect(classificarAlerta(70)).toBe("Alto");
});