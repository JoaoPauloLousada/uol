class Calculator {
    #stack = new Stack()
    #memory = new SymbolTable()

    clear() {
        this.clearStack()
        this.clearMemory()
    }

    clearStack() {
        this.#stack = new Stack()
    }

    clearMemory() {
        this.#memory = new SymbolTable()
    }

    addToMemory(calcSymbol) {
        if (!CalcSymbol.is(calcSymbol)) throw new Error("Invalid symbol to save in memory")
        this.#memory.add(calcSymbol)
    }

    input(entry) {
        if (Operand.test(entry)) {
            this.#stack.add(new Operand(entry))
            return
        }
        if (CalcSymbol.isKey(entry)) {
            let calcSymbol
            if (this.#memory.has(entry)) {
                calcSymbol = this.#memory.get(entry)
            } else {
                calcSymbol = new CalcSymbol(entry)
            }
            this.#stack.add(calcSymbol)
            return
        }
        if (Operator.test(entry)) {
            const operator = Operator.create(entry, this)
            this.processOperation(operator)
            return
        }
    }

    processOperation(operator) {
        if (!Operator.is(operator)) throw new Error('invalid argument')
        const v1 = this.#stack.pop()
        const v2 = this.#stack.pop()
        const result = operator.execute(v1, v2)
        if (!result) return
        if (!Operand.is(result)) throw new Error('invalid result')
        this.#stack.add(result)
    }

    result() {
        const result = this.#stack.pop()
        if (!Operand.is(result)) throw new Error('invalid result. Must be an operand')
        return result.value()
    }
}

class Stack {
    #value = []

    add(v) {
        this.#value.push(v)
    }

    pop() {
        return this.#value.pop()
    }
}

class Operand {
    static #allowed = /^-?\d+$/
    #value
    
    constructor(value) {
        if (!Operand.test(value)) throw new Error(`Invalid operand: ${value}`)
        this.#value = Number(value)
    }

    static test(v) {
        return this.#allowed.test(v)
    }

    static is(v) {
        return v instanceof Operand
    }

    value() {
        return this.#value
    }
}

class Operator {
    static #SUM = '+'
    static #SUB = '-'
    static #MULT = '*'
    static #DIV = '/'
    static #EQ = '='
    static #allowed = Object.freeze([this.#SUM, this.#SUB, this.#MULT, this.#DIV, this.#EQ])

    static test(v) {
        return this.#allowed.includes(v)
    }

    static is(v) {
        return v instanceof Operator
    }

    static create(v, calc) {
        if (!this.test(v)) throw new Error('Invalid operator')
        switch(v) {
            case this.#SUM:
                return new SumOperator()
            case this.#SUB:
                return new SubOperator()
            case this.#MULT:
                return new MultOperator()
            case this.#DIV:
                return new DivOperator()
            case this.#EQ:
                return new EqualsOperator(calc)
        }
    }
}

class SumOperator extends Operator {
    execute(o1, o2) {
        return new Operand(o1.value() + o2.value())
    }
}

class SubOperator extends Operator{
    execute(o1, o2) {
        return new Operand(o1.value() - o2.value())
    }
}

class MultOperator extends Operator{
    execute(o1, o2) {
        return new Operand(o1.value() * o2.value())
    }
}

class DivOperator extends Operator{
    execute(o1, o2) {
        if (o2.value() == 0) throw new Error('division by zero')
        return new Operand(o1.value() / o2.value())
    }
}

class EqualsOperator extends Operator {
    #calc

    constructor(calc) {
        super()
        this.#calc = calc
    }

    execute(operand, calcSymbol) {
        if (!CalcSymbol.is(calcSymbol)) throw new Error(`[EqualsOperator] invalid CalcSymbol key: ${calcSymbol.value()}`)
        if (!Operand.is(operand)) throw new Error('[EqualsOperator] invalid operand')
        calcSymbol.setOperand(operand)
        this.#calc.addToMemory(calcSymbol)
    }
}


class CalcSymbol {
    // allows single uppercase letter from A to Z
    static #allowed = /^[A-Z]$/
    #key
    #operand

    constructor(key, operand) {
        if (!CalcSymbol.isKey(key)) throw new Error('[CalcSymbol] Invalid key')
        this.#key = key
        if (operand) {
            if (!Operand.is(operand)) throw new Error("[CalcSymbol] Invalid operand")
            this.#operand = operand
        }
    }


    static isKey(value) {
        return this.#allowed.test(value)
    }    

    static is(value) {
        return value instanceof CalcSymbol
    }

    key() {
        return this.#key
    }

    value() {
        if (!this.#operand) throw new Error(`[CalcSymbol] value not set: ${this.key()}`)
        return this.#operand.value()
    }

    setOperand(operand) {
        if (!Operand.is(operand)) throw new Error("[CalcSymbol] Invalid value")
        this.#operand = operand
    }
}

class SymbolTable {
    #list = new Map()

    add(calcSymbol) {
        if (!CalcSymbol.is(calcSymbol)) throw new Error('[CalcSymbolList] invalid calcSymbol')
        this.#list.set(calcSymbol.key(), calcSymbol)
    }

    get(key) {
        const calcSymbol = this.#list.get(key)
        if (!calcSymbol) throw new Error("[CalcSymbolList] calcSymbol not in memory")
        return calcSymbol
    }

    has(key) {
        return this.#list.has(key)
    }
}

function main() {
    const c = new Calculator()
    const tokens = [3, 4, 5, '+', '*']
    for (const t of tokens) {
        c.input(t)
    }
    const result = c.result()
    console.log("final result:", result)
    c.clear()
    const tokens2 = [3, 'A', 5, '=', 'B', 2, '=', 'A', 'B', '+', '*']
    for (const t of tokens2) {
        c.input(t)
    }
    const result2 = c.result()
    console.log("final result2:", result2)
    c.clear()
    const tokens3 = [3, 'A', 5, '=', 'A', '+', 10, 'A', '-']
    for (const t of tokens3) {
        c.input(t)
    }
    const result3 = c.result()
    console.log("final result3:", result3)
}

main()
