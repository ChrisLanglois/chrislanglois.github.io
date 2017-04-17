var technique, datasource, delivery;

technique = ['limited inventory', 'scarcity', 'price volatility', 'discriminatory', 'arousing', 'discount', 'discount timer', 'free shipping', 'predjudice', 'loyalty', 'ratings', 'savings', 'head butt', 'blackmail', 
'inflammatory', 'threat', '1000 yard stare', 'throat clear', 'exploding', 'coercive', 'arm twist', 'hard shove', 'synthwave', 'fake inventory', 'artificially high price', 'secret sauce', 'eyebrow raise', 'ducklips', 
'jump scare', 'hidden camera', 'Nicki Minaj', 'french', 'exaggerated wink', 'the old switch-a-roo', 'reach-around', 'forearm shiver', 'reverse psychology', 'extreme price hike', 'guerrilla', 'feint', 'scorpian attack', 
'shock and awe', 'total war', 'scorched earth', 'loot a burning house', 'create something from nothing', 'if all else fails', 'long term retention','scarcity scare'];

datasource = ['product detail', 'cart item', 'collection item', 'historical', 'aggregator', 'curator', 'personalized', 'location', 'weather', 'horoscope', 'return policy', 'salty breeze', 'dumpster', 'grandpa', 
'cat lady', 'murky swamp', 'empty wrapper', 'alternate dimension', 'empty jug', 'b-side', 'expert', 'nice guy', 'star wars guy', 'faulty intuition', 'tea leaves', 'mystery box item', 'coffin contents', ' a priori', 
'urban dictionary', 'book of the dead', 'burning bush','corrupted cloud','mines of moria', 'shangri la', 'next door neighbour', 'iphone'];

delivery = ['slider', 'modal', 'inline', 'tab notification', 'singing telegram', 'top bar', 'mad lib', 'sidebar', 'wizard', 'alert', 'slapper', 'grinder', 'gurgler', 'splat', 'rapping grandma', 'slimer', 'skidmark', 
'carrier pigeon', 'dear john letter', 'monday boardroom meeting', 'flip off', 'falcon punch', 'fortune cookie', 'rogue wave', 'slam poetry', 'lucid dream', 'tattoo', 'implant', 'injection', 'mind wipe', 'popper', 
'slapshot', 'all night rave', 'full page gif', 'obscure meme', 'site deletor', 'virus downloader', 'hard reset', 'spambot', 'sneak attack', 'swinger', 'worm', 'flusher', 'plunger', 'pill', 'spin cycle', 'frog march', 
'neverending story', 'pizza party', 'spore', 'spontaneous combustion', 'overly complicated handshake', 'uncomfortable handshake', 'fartpuller', 'full volume video ad', 'fine mist spray', 'punch to the gut', 
'twice-a-day pill', 'AI take-over', 'permanent itch', 'choiceforcer', 'threat of divorce', 'body swap', 'life sentence', 'screen-freezer', 'file-deletor', 'snake bite', 'usb drive', 'death ray', 'zapper', 
'unclickable button', 'link to competitor site'];

$('.random').click(function() {
  var index;
  this.technique = $('.technique');
  this.technique.addClass('opacity');
  this.datasource = $('.datasource');
  this.datasource.addClass('opacity');    
  this.delivery = $('.delivery');
  this.delivery.addClass('opacity');
  index = Math.floor(Math.random() * technique.length);
  this.technique.text(technique[index]);
  setTimeout(((function(_this) {
    return function() {
      index = Math.floor(Math.random() * datasource.length);
      return _this.datasource.text(datasource[index]);
    };
  })(this)), 0);
  return setTimeout(((function(_this) {
    return function() {
      index = Math.floor(Math.random() * delivery.length);
      return _this.delivery.text(delivery[index]);
    };
  })(this)), 0);
});

$('.random').click(function() {
  return setTimeout((function() {
    return $('.technique, .delivery, .datasource').removeClass('opacity');
  }), 400);
});