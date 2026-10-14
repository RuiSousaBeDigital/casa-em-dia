// Regras locais em português: sem chamadas externas nem dependências.
const productEmojiRules = [
 ['🧻','papel higienico|rolo de cozinha|rolos de cozinha|guardanapos'],
 ['🧴','lava loica|lava louca|detergente da loica|detergente de loica|champ[oô]|shampoo|amaciador|gel de banho'],
 ['🫧','detergente|lixivia|limpa vidros|desinfetante'],
 ['🥣','iogurte|iogurtes|cereais|aveia|granola'],['🥛','leite|leites|bebida vegetal|bebida de soja|bebida de aveia'],
 ['🧀','queijo|queijos'],['🧈','manteiga|margarina'],['🥚','ovo|ovos'],
 ['🍌','banana|bananas'],['🍎','maca|macas'],['🍐','pera|peras'],['🍊','laranja|laranjas|tangerina|tangerinas'],
 ['🍋','limao|limoes|lima|limas'],['🍓','morango|morangos'],['🍇','uva|uvas'],['🍉','melancia'],['🍈','melao|meloes'],
 ['🍍','ananas|abacaxi'],['🥝','kiwi|kiwis'],['🍑','pessego|pessegos'],['🍒','cereja|cerejas'],['🥭','manga|mangas'],
 ['🥑','abacate|abacates'],['🍅','tomate|tomates'],['🥕','cenoura|cenouras'],['🥔','batata|batatas'],
 ['🧅','cebola|cebolas'],['🧄','alho|alhos'],['🥦','brocolo|brocolos'],['🥬','alface|couve|espinafre|espinafres'],
 ['🥒','pepino|pepinos|courgette|courgettes'],['🫑','pimento|pimentos'],['🍄','cogumelo|cogumelos'],['🌽','milho'],
 ['🫒','azeite|azeitona|azeitonas'],['☕','cafe|cafes'],['🫖','cha|chas'],['💧','agua|aguas'],
 ['🧃','sumo|sumos'],['🥤','refrigerante|refrigerantes|coca cola'],['🍺','cerveja|cervejas'],['🍷','vinho|vinhos'],
 ['🍚','arroz'],['🍝','massa|massas|esparguete|macarrao'],['🍞','pao|paes'],['🥖','baguete|baguetes'],
 ['🥐','croissant|croissants'],['🍪','bolacha|bolachas|biscoito|biscoitos'],['🍫','chocolate|chocolates'],['🍯','mel'],
 ['🧂','sal'],['🌾','farinha'],['🍬','acucar|rebuçado|rebucados'],['🥫','feijao|grao|lentilhas|conserva|conservas'],
 ['🐟','peixe|bacalhau|salmao|atum|sardinha|sardinhas'],['🍗','frango|peru'],['🥩','carne|bife|bifes|vaca|porco'],
 ['🥓','bacon|fiambre'],['🌭','salsicha|salsichas'],['🍤','camarao|camarões|marisco'],['🧊','gelo'],
 ['🪥','pasta de dentes|escova de dentes'],['🧼','sabonete|sabao'],['🧽','esponja|esponjas'],['🗑️','sacos do lixo|sacos de lixo'],
 ['🐈','comida de gato|racao de gato'],['🐕','comida de cao|racao de cao']
].map(([emoji,words])=>[emoji,new RegExp('(?:^| )('+words+')(?: |$)')]);
function productEmoji(name) {
 const normalized=String(name||'').toLocaleLowerCase('pt').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
 return productEmojiRules.find(([,pattern])=>pattern.test(normalized))?.[0] || '🛒';
}
