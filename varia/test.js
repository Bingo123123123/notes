//send the amout
//to all the adresses in adress.js


function test(amount,times) {
loadScript("bot/adressList.js");
loadScript("scripts/transferXeth.js");
  for(var i = 0; i < adress.length; i = i +1)
    {
   for(var x = 0; x < times; x = x + 1)
    {
  transferXeth(eth.coinbase,adress[i],amount);

   };
   }
};

