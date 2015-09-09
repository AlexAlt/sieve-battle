describe('eratosthenize', function() {
  it('returns 2 if 2 is the argument', function() {
    expect(eratosthenize(2)).to.eql([2]);
  });

  it('returns array of primes less than 10', function() {
    expect(eratosthenize(10)).to.eql([2, 3, 5, 7]);
  });

  it('returns array of primes less than 29', function() {
    expect(eratosthenize(29)).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });
});
