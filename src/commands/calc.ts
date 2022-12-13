import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'calc',
  alias: ['c'],
  description: 'Make simple calcs for you',
  run: async (toolbox) => {

    const { prompt, print } = toolbox

    const ask1 = await prompt.ask([
      {
        type: 'select',
        name: 'ask1Var',
        message: 'Qual tipo de cálculo deseja?',
        choices: ['Porcentagem', 'Regra de três']
      }
    ])

    if (ask1.ask1Var == 'Porcentagem') {
      // print.info(`Você escolheu a opção ${ask1.ask1Var}. Responda as perguntas abaixo para calcular a porcentagem`)
      print.error(`Você escolheu a opção ${ask1.ask1Var}. Essa opção ainda está em desenvolvimento.`)

    } else if (ask1.ask1Var == 'Regra de três') {

      print.info(`Você escolheu a opção ${ask1.ask1Var}. Responda as perguntas abaixo para calcular usando regra de três`)

      const n1 = await prompt.ask([
        {
          type: 'input',
          name: 'value1',
          message: 'Se o primeiro valor é:',
          validate: value => {
            if (!value || value.length == 0) {
              return 'Você não digitou nenhum valor. Por favor, digite um valor numérico'
            } else if (value.includes(',')) {
              return 'Você digitou um valor que contém ",". Por favor, substitua "," por "."'
            } else if (!Number(value)) {
              return 'Você digitou um valor que não é numérico. Por favor, digite um valor numérico'
            } else {
              return true
            }
          },
        }])

      const n2 = await prompt.ask([
        {
          type: 'input',
          name: 'value2',
          message: 'E está para:',
          validate: value => {
            if (!value || value.length == 0) {
              return 'Você não digitou nenhum valor. Por favor, digite um valor numérico'
            } else if (value.includes(',')) {
              return 'Você digitou um valor que contém ",". Por favor, substitua "," por "."'
            } else if (!Number(value)) {
              return 'Você digitou um valor que não é numérico. Por favor, digite um valor numérico'
            } else {
              return true
            }
          },
        }])


      const n3 = await prompt.ask([
        {
          type: 'input',
          name: 'value3',
          message: 'Qual é o valor de "x" para:',
          validate: value => {
            if (!value || value.length == 0) {
              return 'Você não digitou nenhum valor. Por favor, digite um valor numérico'
            } else if (value.includes(',')) {
              return 'Você digitou um valor que contém ",". Por favor, substitua "," por "."'
            } else if (!Number(value)) {
              return 'Você digitou um valor que não é numérico. Por favor, digite um valor numérico'
            } else {
              return true
            }
          },
        }])


      if (n1.value1 && n2.value2 && n3.value3) {
        const input1 = Number(n1.value1)
        const input2 = Number(n2.value2)
        const input3 = Number(n3.value3)
        const result = ((input3 * input2) / input1).toFixed(2)

        print.success(`
              ${input1} --------> ${input2}
              ${input3} --------> ${result}
                      `)

        print.success(`Ou seja ${input1} está para ${input2}, assim como ${input3} está para ${result}`)

      }

    } else {
      return print.error('Opção inválida')
    }

  },
}

module.exports = command
