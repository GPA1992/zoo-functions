/* eslint-disable sonarjs/no-duplicate-string */
const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Caso a função não receba nenhum parametro deverá retornar um objeto contendo a hora de abertura e fechamento', () => {
    const obj = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(obj);
  });

  it('Informar se o zoologico estará aberto na terça-Feira as 9h00 horas', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });

  it('Informar se o zoologico estará aberto na Quarta-Feira as 9h00 horas', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });

  it('Informar se o zoologico estará aberto na Quarta-Feira as 9h00 horas', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });

  it('Para argumentos escritos de maneira errada, ele deve retornar uma mensagem de erro e um exemplo de um texto correto.', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(/^The day must be valid. Example: Monday$/);
  });

  it('Para argumentos escritos de maneira errada, ele deve retornar uma mensagem de erro e um exemplo de um texto correto.', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });

  it('Para argumentos escritos de maneira errada, ele deve retornar uma mensagem de erro e um exemplo de um texto correto.', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(/^The hour should represent a number$/);
  });

  it('Para argumentos escritos de maneira errada, ele deve retornar uma mensagem de erro e um exemplo de um texto correto.', () => {
    expect(() => getOpeningHours('Saturday', '09:c0-AM')).toThrow(/^The minutes should represent a number$/);
  });

  it('Para argumentos escritos de maneira errada, ele deve retornar uma mensagem de erro e um exemplo de um texto correto.', () => {
    expect(() => getOpeningHours('Saturday', '28:00-AM')).toThrow(/^The hour must be between 0 and 12$/);
  });

  it('Para argumentos escritos de maneira errada, ele deve retornar uma mensagem de erro e um exemplo de um texto correto.', () => {
    expect(() => getOpeningHours('Saturday', '08:85-AM')).toThrow(/^The minutes must be between 0 and 59$/);
  });

  it('Se um dos argumentos for de um dia ou hora que o zoológico estiver fechado, retorne a mensagem de aviso', () => {
    expect(getOpeningHours('Saturday', '07:00-AM')).toBe('The zoo is closed');
  });

  it('Se um dos argumentos for de um dia ou hora que o zoológico estiver fechado, retorne a mensagem de aviso', () => {
    expect(getOpeningHours('Monday', '07:00-AM')).toBe('The zoo is closed');
  });

});
