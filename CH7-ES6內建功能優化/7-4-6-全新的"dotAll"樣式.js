// 使用句點模板，希望比對每個字元，卻無法比對特殊符號 (非u模式) 跟換行符號
const rCharacter = /^.$/
rCharacter.test('a') // <- true
rCharacter.test('\t') // <- true
rCharacter.test('\n') // <- false


// 實作比對所有字元符號的模板
const rCharacter = /^[\s\S]$/
rCharacter.test('a') // <- true
rCharacter.test('\t') // <- true
rCharacter.test('\n') // <- false


// dotAll （s模式)，使句點模板可以比對所有字元
const rCharacter = /^.$/s
rCharacter.test('a') // <- true
rCharacter.test('\t') // <- true
rCharacter.test('\n') // <- true
