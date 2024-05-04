import { useContext } from 'react'
import { CardContext } from './context'

function useCardContext() {
	return useContext(CardContext)
}

export default useCardContext
