# 정규표현식(RegExp)

정규식, Regular Expression

## 역할

- 문자 검색(Search)
- 문자 대체(replace)
- 문자 추출(extract)

## 테스트 사이트

https://regexr.com/

## 정규식 생성

```js
// 생성자
new RegExp("표현", "옵션");
new RegExp("[a-z]", "gi");
//리터럴
표현 / 옵션 / [a - z] / gi;
```

## 예제문자

```js
const str = ` 
010-1234-5678
thekubby159@naver.com
https://www.naver.com
hi ! what's up!?
aabbddcc
Bitcoin is the world’s first decentralized cryptocurrency – a type of digital asset that uses public-key cryptography to record, sign and send transactions over the Bitcoin blockchain.

Launched on Jan. 3, 2009, by an anonymous computer programmer (or group of programmers) under the pseudonym “Satoshi Nakamoto”, the Bitcoin network (with an uppercase “B”) is a peer-to-peer electronic payment system that uses a native cryptocurrency called bitcoin (lower case “b”) to transfer value over the internet or act as a store of value like gold and silver.

Each bitcoin is made up of 100,000,000 satoshis (the smallest units of bitcoin), making individual bitcoin divisible up to 8 decimal places. This allows people to purchase fractions of a bitcoin with as little as one U.S. dollar.

Bitcoin and other cryptocurrencies are like the email of the financial world. The currency does not exist in physical form, value is transacted directly between the sender and the receiver, and there is no need for banking intermediaries to facilitate the transaction. Everything is done publicly through a transparent, immutable, distributed ledger technology called blockchain.

Here are the main features of blockchain technology:
`;
```

## 메소드

| 메소드  | 문법                               | 설명                             |
| ------- | ---------------------------------- | -------------------------------- |
| test    | `정규식.test(문자열)`              | 일치 여부(Boolean) 반환          |
| match   | `문자열.match(정규식)`             | 일치하는 문자의 배열(Array) 반환 |
| replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체             |

ex)

```js
const regexp = /fox/gi;
console.log(regexp.test(str));
console.log(str.replace(regexp, "AAA"));
```

## 플래그(옵션)

| 플래그 | 설명                                        |
| ------ | ------------------------------------------- |
| g      | 모든 문자 일치(global)                      |
| i      | 영어 대소문자를 구분 않고 일치(ignore case) |
| m      | 여러 줄 일치(multi line)                    |

ex)

```js
const regexp = /\.$/gim;
console.log(str.match(regexp));
```

\*이스케이프 문자(Escape Character) 란 \ (백슬래시)기호를 통해 <br/>
본래의 기능에서 벗어나 상태가 바뀌는 문자를 말합니다.

## 패턴(표현)

| 패턴       | 설명                                                    |
| ---------- | ------------------------------------------------------- |
| ^ab        | 줄(Line) 시작에 있는 ab와 일치                          |
| ab$        | 줄(Line) 끝에 있는 ab와 일치                            |
| .          | 임의의 한 문자와 일치                                   |
| a&verbar;b | a또는 b와일치                                           |
| ab?        | b가 없거나 b와 일치                                     |
| {3}        | 3개 연속일치                                            |
| {3,}       | 3개 이상 연속 일치                                      |
| {3,5}      | 3개 이상 5개 이하(3~5개) 연속 일치                      |
| [abc]      | a 또는 b 또는 c                                         |
| [a-z]      | a 부터 z사이의 문자 구간에 일치(영어 소문자)            |
| [A-Z]      | A부터 Z사이의 문자 구간에 일치(영어 대문자)             |
| [0-9]      | 0부터 9사이의 문자 구간에 일치(숫자)                    |
| [가-힣]    | 가부터 힣 사이의 문자 구간에 일치(한글)                 |
| \w         | 63개 문자(Word, 대소영문 52개 + 숫자 10개 + \_ )에 일치 |
| \b         | 63개 문자에 일치하지 않는 문자 경계(Boundary)           |
| \d         | 숫자(Digit)에 일치                                      |
| \s         | 공백(Space, Tab 등)에 일치                              |
| (?=)       | 앞쪽 일치(Lookahead)                                    |
| (?<=)      | 뒤쪽 일치(Lookbehind)                                   |

```js
console.log(
  str.match(/https?/g) //글자의 끝 s가 있을 수도 있고 없을 수도 있고.
);

console.log(str.match(/d{2}/g));

console.log(str.match(/d{2,}/g));

console.log(str.match(/d{2,3}/g));

console.log(str.match(/\b\w{2,3}\b/g));

console.log(
  str.match(/\bf\w{1,}\b/g) // \b는 경계를 구분지어줌.
);

console.log(
  str.match(/.{1,}(?=@)/g) //@를 기준으로 앞쪽을 출력함.
);

console.log(
  str.match(/(?<=@).{1,}/g) //@를 기준으로 뒤쪽을 출력함.
);
```
