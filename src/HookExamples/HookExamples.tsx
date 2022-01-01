import React from 'react'
import UseCallBackExplainer from './DifferentHooks/UseCallBackExplainer'
import UseEffectExplainer from './DifferentHooks/UseEffectExplainer'
import UseRefExplainer from './DifferentHooks/UseRefExplainer'

export default function HookExamples() {

  return (
    <div className='hooks-page'>
      <UseEffectExplainer />
      <UseRefExplainer />
      <UseCallBackExplainer />
    </div>
  )
}
