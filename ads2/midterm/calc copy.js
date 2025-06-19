class Calculator {
    #stack = new Stack()
    #memory = new CalcSymbolList()

    input(entry) {
        if (Operand.test(entry)) {
            this.#stack.add(new Operand(entry))
            return
        }
        if (CalcSymbol.test(entry)) {
            this.#stack.add(entry)
            return
        }
        if (Operator.test(entry)) {
            const operator = Operator.create(entry)
            this.processOperation(operator)
            return
        }
    }

    processOperation(operator) {
        if (!Operator.is(operator)) throw new Error('invalid argument')
        const v1 = this.#stack.pop()
        const v2 = this.#stack.pop()
        const result = operator.execute(v1, v2)
        if (CalcSymbol.is(result)) {
            this.#memory.add(result)
            return
        }
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
    static #allowed = /^\d+$/
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

    static create(v) {
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
                return new EqualsOperator()
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
    execute(calcSymbolKey, operand) {
        if (!CalcSymbol.test(calcSymbolKey)) throw new Error('[EqualsOperator] invalid CalcSymbol key')
        if (!Operand.is(operand)) throw new Error('[EqualsOperator] invalid operand')
        return new CalcSymbol(calcSymbolKey, operand)
    }
}


class CalcSymbol {
    // allows single uppercase letter from A to Z
    static #allowed = /^[A-Z]$/
    #key
    #value

    constructor(key, value) {
        if (!CalcSymbol.test(key)) throw new Error('[CalcSymbol] Invalid key')
        if (Operand.is(value)) throw new Error("[CalcSymbol] Invalid value")
        this.#value = value
        this.#key = key
    }

    static test(value) {
        return this.#allowed.test(value)
    }    

    static is(value) {
        return value instanceof CalcSymbol
    }

    get key() {
        return this.#key
    }

    get value() {
        return this.#value
    }
}

class CalcSymbolList {
    #list = new Map()

    add(calcSymbol) {
        if (!CalcSymbol.is(calcSymbol)) throw new Error('[CalcSymbolList] invalid calcSymbol')
        this.#list.set(calcSymbol.key, calcSymbol)
    }

    get(key) {
        const calcSymbol = this.#list.get(key)
        if (!calcSymbol) throw new Error("[CalcSymbolList] calcSymbol not in memory")
        return calcSymbol
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
}

main()
