const data = '{"ticker":{"base":"BTC","target":"USD","price":"25042.49309422","volume":"2793.76805592","change":"87.44892377"},"timestamp":1676767564,"success":true,"error":""}'

const parsedData = JSON.parse(data);
console.log(parsedData);
console.log(parsedData.ticker.price)

const stringedData = JSON.stringify(parsedData);
console.log(stringedData);