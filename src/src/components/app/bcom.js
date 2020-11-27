function getTruthTableBitIndex(xBit, yBit) {
  // 0,0 -> 0
  // 0,1 -> 1
  // 1,0 -> 2
  // 1,1 -> 3
  const truthTableBitIndex = [[0, 1], [2, 3]]
  return truthTableBitIndex[xBit][yBit]
}

function getBitMask(bitIndex) {
  return 2 ** bitIndex
}

function hasBits(value, bitMask) {
  return (value & bitMask) === bitMask
}

function boolToDecBit(boolBit) {
  return boolBit ? 1 : 0
}

function applyOperator(operator, xBit, yBit) {
  const bitIndex = getTruthTableBitIndex(xBit, yBit)
  const bitMask = getBitMask(bitIndex)
  const result = hasBits(operator, bitMask)

  return result
}

function performCoreOperation(operator, x, y) {
  const result = []
  
  for(let bitIndex = 0; bitIndex < 4; bitIndex += 1) {
    const bitMask = getBitMask(bitIndex)

    const xBit = boolToDecBit(hasBits(x, bitMask))
    const yBit = boolToDecBit(hasBits(y, bitMask))

    const boolBit = applyOperator(operator, xBit, yBit)
    const decBit = '' + boolToDecBit(boolBit)
    result[bitIndex] = decBit
  }

  result.reverse()
  const binStr = result.join('')
  const decResult = parseInt(binStr, 2)
  return decResult
}

export function generateBCOM(operator) {
  const opMap = []

  for(let x = 0; x < 16; x += 1) {
    opMap[x] = []

    for(let y = 0; y < 16; y += 1) {
      opMap[x][y] = performCoreOperation(operator, x, y)
    }
  }

  return opMap
}

export function getBCOMs() {
  const BCOMs = []

  for(let operator = 0; operator < 16; operator += 1) {
    BCOMs[operator] = generateBCOM(operator)
  }

  return BCOMs
}

