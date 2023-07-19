export function camelCase2KebabCase(str: string) {
  return str.replace(/[A-Z]/g, (i) => {
    return `-${i.toLowerCase()}`
  })
}

export function insertStr(origin: string, start: number, newStr: string) {
  return `${origin.slice(0, start)}${newStr}${origin.slice(start)}`
}
