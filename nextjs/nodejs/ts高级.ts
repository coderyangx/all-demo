// 实现一个函数的重载
function overloadFun(): void;
function overloadFun(n: string): void;
function overloadFun(n: number): void;
function overloadFun(n?: any): void {
  if (typeof n === 'string') {
    console.log('string');
  } else if (typeof n === 'number') {
    console.log('number');
  } else {
    console.log('object');
  }
}

type Fun = {
  (n: string): void;
  (n: number): void;
  (n: object): void;
};

const fun: Fun = function (n: any) {
  if (typeof n === 'string') {
    console.log('string');
  } else if (typeof n === 'number') {
    console.log('number');
  } else {
    console.log('object');
  }
};

/**
 * 实现jest的toBe方法
 */
// expect(3).toBe(3) // ✅
// expect(4).toBe(3) // ❌

function expect(n: any) {
  return {
    tobe(value: any) {
      if (n === value) {
        console.log('✅');
      } else {
        console.log('❌');
      }
    },
  };
}

expect(3).tobe(3);
