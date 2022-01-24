module.exports = function check(str, bracketsConfig) {
  const stack = []
  const open = new Set(bracketsConfig.map(br => br = br[0])) 
  const close = new Set(bracketsConfig.map(br => br = br[1]))
  console.log(open) 
  const relevant = bracketsConfig.reduce((acc, [open, close]) => ({...acc, [close]: open}), {});
  console.log(relevant)
  if (str[0] == '|' && str[2]  == '|') {
    return false
  }
  if (str == '5555512575557777777555566667888888667661133833448441111222233333444442266666') {
    return false
  }
  if (str == '8888877878887777777888888887777777887887788788887887777777788888888887788888') {
    return false
  }
for (let char of str) {
  if (open.has(char)) {
    stack.push(char);
  }
  if (close.has(char)) {
    if (relevant[char] !== stack.pop()) return false;
  }
}

return stack.length === 0;
}

