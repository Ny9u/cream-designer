import { defineStore } from 'pinia'

export const useCommandManageStore = defineStore({
  id: 'command',
  state: () => ({
    undoList: [],
    redoList: [],
  }),
  actions: {
    execute(command, immediately = true, save = true) {
      if (save) this.undoList.push(command)
      if (immediately) command.execute()
     
    },
    undo() {
      const cmd = this.undoList.pop()
      cmd.undo()
      this.redoList.push(cmd)
    },
    redo() {
      const cmd = this.redoList.pop()
      cmd.execute()
      this.undoList.push(cmd)
    },
  },
  getters: {
    canUndo: (state) => state.undoList.length > 0,
    canRedo: (state) => state.redoList.length > 0,
  },
})