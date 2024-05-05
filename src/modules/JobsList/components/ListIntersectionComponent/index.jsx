import React, { memo, useEffect, useRef } from 'react'

function ListIntersectionComponent({ fetchNext }) {
	const lastEleRef = useRef(null)
	useEffect(() => {
		const intersectionObserver = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) fetchNext()
		})

		if (lastEleRef.current) intersectionObserver.observe(lastEleRef.current)

		return () => intersectionObserver.disconnect()
	}, [fetchNext])

	return (
		<>
			<div className='spacer' />
			<div id='intersection-point' ref={lastEleRef} />
		</>
	)
}

export default memo(ListIntersectionComponent)
