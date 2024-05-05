import { useCallback, useEffect, useState } from 'react'
import { filterDataBasedOnState, getMoreJobs } from './utils'

const NEXT_OFFSET_SIZE = 25
const LIMIT = 25
const DEFAULT_FILTER_STATE = Object.freeze({
	companyName: '',
	jobRole: [],
	minJdSalary: '',
	minExp: '',
})

function useFilteredListData() {
	const [loading, setLoading] = useState(false)
	const [listData, setListData] = useState([])
	const [metadata, setMetadata] = useState({})
	const [offset, setOffset] = useState(0)
	const [filteredListData, setFilteredListData] = useState([])
	const [filterState, setFilterState] = useState(DEFAULT_FILTER_STATE)

	const fetchNext = useCallback(() => {
		if (!loading && metadata.totalCount >= offset + LIMIT + NEXT_OFFSET_SIZE)
			setOffset((off) => off + NEXT_OFFSET_SIZE)
	}, [loading, offset])

	const postFetch = useCallback((data) => {
		setMetadata({ totalCount: data })
	}, [])

	console.log('filter', filterState)

	const updateLists = ({ data, filteredData }) => {
		setListData((prevState) => [...prevState, ...data])
		setFilteredListData((data) => [...data, ...filteredData])
		setLoading(false)
	}

	useEffect(() => {
		setLoading(true)
		getMoreJobs(LIMIT, offset, filterState, postFetch, updateLists)
	}, [offset])

	useEffect(() => {
		if (listData.length)
			setFilteredListData(
				filterDataBasedOnState(filterState, listData).filteredData
			)
	}, [
		listData,
		filterState.companyName,
		filterState.jobRole?.length,
		filterState.minExp,
		filterState.minJdSalary,
	])

	return { fetchNext, setFilterState, jobList: filteredListData, loading }
}

export default useFilteredListData
