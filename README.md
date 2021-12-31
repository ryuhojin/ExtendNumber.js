# ExtendNumber.js
---
> #### ExtendNumber.js<br/>
> Use it when you want to perform integer and real number arithmetic.<br/>
> The decimal error(IEEE 754) problem has been removed.<br/>
> You can ceil, round, floor perform using this library.<br/>
> You can perform integer and real number with add, sub, multiple, divider .<br/>
> You can use this library IE11, Chrome, Firefox, Edge.<br/>
> You can calculate up to 6 points after the decimal point.<br/>
---
### HOW TO USE
> #### import EN from 'extendnumber'
- EN.add(value1,value2)
- EN.sub(value1,value2)
- EN.div(value1,value2)
- EN.mul(value1,value2)
- EN.floor(value) / EN.floor(value,decimal point)
- EN.round(value) / EN.round(value,decimal point)
- EN.ceil(value) / EN.ceil(value,decimal point)
---
#### Before -> After ExtendNumber.js
EN.floor/ceil/round(value,pointPosition)
- Math.floor(1.33) => 1 / EN.floor(1.33,1) => 1.3, EN.floor(1.33) => 1
- Math.ceil(1.33) => 2 / EN.ceil(1.33,1) => 1.4, EN.ceil(1.3) => 2
- Math.round(1.53) => 2 / EN.round(1.55,1) => 1.6, EN.round(1.55) => 2
---
EN.add/sub/mul/div(value1, value2)
- 1.35 + 0.1 => 1.450000000002 / EN.add(1.35+0.1) => 1.45 / EN.add(1.2,1) => 2.2
- 1.2 - 0.1 => 1.09999999999 / EN.sub(1.2,0.1) => 1.1 / EN.sub(1.2,1) => 0.2
- 1.35 * 1.1 => 1.4850000000003 / EN.mul(1.35,1.1) => 1.485
- 4.3 / 1.1 => 3.909090909090987 / EN.div(4.3,1.1) => 3.9090909090909

### IF YOU WANT CONTRIBUTE THIS LIBRARY<br/>
### JOIN https://github.com/ryuhojin/ExtendNumber.js<br/>

# ExtendNumber.js
---
> #### ExtendNumber.js<br/>
> ExtendNumberJS 라이브러리를 통해서 정수와 실수의 연산을 정확하게 해보세요.<br/>
> 웹환경에서 부동소수점 문제를 정확하게 해결한 라이브러리입니다.<br/>
> 해당 라이브러리는 올림, 내림, 반올림 연산을 정수를 포함한 실수에서 사용할 수 있습니다.<br/>
> 해당 라이브러리를 통해서 정수 및 실수의 덧셈, 뺄셈, 곱셈, 나눗셈 연산을 정확하게 수행하세요.<br/>
> 해당 라이브러리는 IE11, Edge, Chrome, FireFox 까지 크로스 브라우징을 지원합니다.<br/>
---
### HOW TO USE
> #### import EN from 'extendnumber'
- EN.add(value1,value2)
- EN.sub(value1,value2)
- EN.div(value1,value2)
- EN.mul(value1,value2)
- EN.floor(value) / EN.floor(value,decimal point)
- EN.round(value) / EN.round(value,decimal point)
- EN.ceil(value) / EN.ceil(value,decimal point)
---
#### Before -> After ExtendNumber.js
EN.floor/ceil/round(value,pointPosition)
- Math.floor(1.33) => 1 / EN.floor(1.33,1) => 1.3, EN.floor(1.33) => 1
- Math.ceil(1.33) => 2 / EN.ceil(1.33,1) => 1.4, EN.ceil(1.3) => 2
- Math.round(1.53) => 2 / EN.round(1.55,1) => 1.6, EN.round(1.55) => 2
---
EN.add/sub/mul/div(value1, value2)
- 1.35 + 0.1 => 1.450000000002 / EN.add(1.35+0.1) => 1.45 / EN.add(1.2,1) => 2.2
- 1.2 - 0.1 => 1.09999999999 / EN.sub(1.2,0.1) => 1.1 / EN.sub(1.2,1) => 0.2
- 1.35 * 1.1 => 1.4850000000003 / EN.mul(1.35,1.1) => 1.485
- 4.3 / 1.1 => 3.909090909090987 / EN.div(4.3,1.1) => 3.9090909090909

### 라이브러리를 발전시켜 나갈 분을 찾습니다.<br/>
### https://github.com/ryuhojin/ExtendNumber.js<br/>