let Oper = ['+', '-', '*', '/'];
let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let mes = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
function Captcha(pattern , operator , leftoperand , rightoperand)
{
  this.generate = function(){
    return new LeftOperand(pattern , leftoperand) + ' ' + new Operator(operator) + ' ' + new RightOperand(pattern , rightoperand);
  }
}
function Operator(Op)
{
  this.toString = function(){
    return Oper[Op-1];
  }
}
function LeftOperand(pat , leop)
{
  this.toString = function(){
    if(pat === 1){
      return num[leop];
    }
    else if (pat === 2) {
      return mes[leop];
    }
  }
}
function RightOperand(pat , riop)
{
  this.toString = function(){
    if(pat === 1){
      return mes[riop];
    }
    else if (pat === 2) {
      return num[riop];
    }
}
}
describe('Captcha App Pattern 1', function () {
  let p = 1;
  it('Generate 0 + Zero', function () {
    var cap = new Captcha(p,1,0,0);
    expect(cap.generate()).toEqual('0 + Zero');
  });
  it('Generate 1 + One', function () {
    var cap = new Captcha(p,1,1,1);
    expect(cap.generate()).toEqual('1 + One');
  });
  it('Generate 2 + Two', function () {
    var cap = new Captcha(p,1,2,2);
    expect(cap.generate()).toEqual('2 + Two');
  });
  it('Generate 3 + Three', function () {
    var cap = new Captcha(p,1,3,3);
    expect(cap.generate()).toEqual('3 + Three');
  });
  it('Generate 4 * Three', function () {
    var cap = new Captcha(p,3,4,3);
    expect(cap.generate()).toEqual('4 * Three');
  });
  it('Generate 9 - Zero', function () {
    var cap = new Captcha(p,2,9,0);
    expect(cap.generate()).toEqual('9 - Zero');
  });

});
describe('Captcha App Pattern 2', function () {
  let p = 2;
  it('Generate Zero + 0', function () {
    var cap = new Captcha(p,1,0,0);
    expect(cap.generate()).toEqual('Zero + 0');
  });
  it('Generate Five + 5', function () {
    var cap = new Captcha(p,1,5,5);
    expect(cap.generate()).toEqual('Five + 5');
  });
  it('Generate Nine / 0', function () {
    var cap = new Captcha(p,4,9,0);
    expect(cap.generate()).toEqual('Nine / 0');
  });
});
