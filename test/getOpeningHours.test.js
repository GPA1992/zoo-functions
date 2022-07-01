const getOpeningHours = require('../src/getOpeningHours');

const zooClose = 'The zoo is closed';

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
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual(zooClose);
  });

  it('Informar se o zoologico estará aberto na Quarta-Feira as 9h00 horas', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual(zooClose);
  });

  it('Para dias com a escrita incompleta será retornada uma mensagem de erro..', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(/^The day must be valid. Example: Monday$/);
  });

  it('Para abrevição escrita de maneira errada será retornado uma mensagem de erro', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });

  it('Para valores de horas escrito de maneira errada, será retornada uma mensagem de erro.', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(/^The hour should represent a number$/);
  });

  it('Para valores de minutos escrito de maneira errada, será retornada uma mensagem.', () => {
    expect(() => getOpeningHours('Saturday', '09:c0-AM')).toThrow(/^The minutes should represent a number$/);
  });

  it('Para horas inexistentes será retornado uma manesagem de erro.', () => {
    expect(() => getOpeningHours('Saturday', '28:00-AM')).toThrow(/^The hour must be between 0 and 12$/);
  });

  it('Minutos inexistentes será retornado uma mensagem de erro.', () => {
    expect(() => getOpeningHours('Saturday', '08:85-AM')).toThrow(/^The minutes must be between 0 and 59$/);
  });

  it('Testando se um dos parametros indicar um dia que o zoológico está fechado - Hora', () => {
    expect(getOpeningHours('Saturday', '07:00-AM')).toBe(zooClose);
  });

  it('Testando se um dos parametros indicar um dia que o zoológico está fechado - Dia', () => {
    expect(getOpeningHours('Monday', '07:00-AM')).toBe(zooClose);
  });
});
