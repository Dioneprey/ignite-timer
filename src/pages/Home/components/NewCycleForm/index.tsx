import { FormContainer, MinutesAmountInput, TaskInput } from './style'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        {...register('task')}
        id="task"
        list="task-sugestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
      />

      <datalist id="task-sugestions">
        <option value="Projeto 1" />
        <option value="Sim" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        {...register('minutesAmount', { valueAsNumber: true })}
        id="minutesAmount"
        type="number"
        step={5}
        min={1}
        max={60}
        placeholder="00"
        disabled={!!activeCycle}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
