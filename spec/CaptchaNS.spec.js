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
describe('Captcha App', function () {
  let p = 1;
  it('Pattern 1', function () {
    var cap = new Captcha(p,1,0,0);
    expect(cap.generate()).toEqual('0 + Zero');
  });
  it('Pattern 1', function () {
    var cap = new Captcha(p,1,1,1);
    expect(cap.generate()).toEqual('1 + One');
  });
  it('Pattern 1', function () {
    var cap = new Captcha(p,1,2,2);
    expect(cap.generate()).toEqual('2 + Two');
  });
  it('Pattern 1', function () {
    var cap = new Captcha(p,1,3,3);
    expect(cap.generate()).toEqual('3 + Three');
    });

});
describe('Captcha App2', function () {
  let p = 2;
  it('Pattern 2', function () {
    var cap = new Captcha(p,1,0,0);
    expect(cap.generate()).toEqual('Zero + 0');
  });
});
