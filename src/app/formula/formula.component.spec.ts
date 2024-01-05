import { Formula } from "./formula.component";

describe('Formula', () => {
  it('should return 10 with base 5 and altura 4', () => {
    expect(Formula(5, 4)).toBe(10);
  });
  it('should return 20 with base 10 and altura 4', () => {
    expect(Formula(10, 4)).toBe(20);
  });
  it('should return 30 with base 15 and altura 4', () => {
    expect(Formula(15, 4)).toBe(30);
  });
  it('should return 40 with base 20 and altura 4', () => {
    expect(Formula(20, 4)).toBe(40);
  });
  it('should return 50 with base 25 and altura 4', () => {
    expect(Formula(25, 4)).toBe(50);
  });
  it('should return 60 with base 30 and altura 4', () => {
    expect(Formula(30, 4)).toBe(60);
  });
  it('should return 70 with base 35 and altura 4', () => {
    expect(Formula(35, 4)).toBe(70);
  });
  it('should return 80 with base 40 and altura 4', () => {
    expect(Formula(40, 4)).toBe(80);
  });
  it('should return 90 with base 45 and altura 4', () => {
    expect(Formula(45, 4)).toBe(90);
  });
  it('should return 100 with base 50 and altura 4', () => {
    expect(Formula(50, 4)).toBe(100);
  });
});
