import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'phastos',
  run: async (toolbox) => {
    const { print } = toolbox

    print.info('Welcome to your CLI')
  },
}

module.exports = command
