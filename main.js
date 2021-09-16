const str = ` 
010-1234-5678_
thekubby159@naver.com
https://www.naver.com
hi ! what's up!?
bddbbdddd
동해물과 백두산이 마르고 닳도록
Bitcoin is the world’s first decentralized cryptocurrency – a type of digital asset that uses public-key cryptography to record, sign and send transactions over the Bitcoin blockchain.

Launched on Jan. 3, 2009, by an anonymous computer programmer (or group of programmers) under the pseudonym “Satoshi Nakamoto”, the Bitcoin network (with an uppercase “B”) is a peer-to-peer electronic payment system that uses a native cryptocurrency called bitcoin (lower case “b”) to transfer value over the internet or act as a store of value like gold and silver.

Each bitcoin is made up of 100,000,000 satoshis (the smallest units of bitcoin), making individual bitcoin divisible up to 8 decimal places. This allows people to purchase fractions of a bitcoin with as little as one U.S. dollar.

Bitcoin and other cryptocurrencies are like the email dog of the financial world. The currency does not exist in physical form, value is transacted directly between the sender and the receiver, and there is no need for banking intermediaries to facilitate the transaction. Everything is done publicly through a transparent, immutable, distributed ledger technology called blockchain.

Here are the main features of blockchain technology: fox
http://wwwdd.`




console.log(

    str.match(/(?<=@).{1,}/g) //@를 기준으로 함.
)