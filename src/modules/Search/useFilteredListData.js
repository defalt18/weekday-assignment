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
	const [isMoreResultsAvailable, setIsMoreResultsAvailable] = useState(true)
	const [filterState, setFilterState] = useState(DEFAULT_FILTER_STATE)

	const fetchNext = useCallback(() => {
		if (!loading && metadata.totalCount >= offset + LIMIT + NEXT_OFFSET_SIZE) {
			setOffset((off) => off + NEXT_OFFSET_SIZE)
		} else {
			if (metadata.totalCount <= offset + LIMIT + NEXT_OFFSET_SIZE)
				setIsMoreResultsAvailable(false)
		}
	}, [loading, offset, metadata.totalCount])

	const postFetch = useCallback((data) => {
		setMetadata({ totalCount: data })
	}, [])

	const updateLists = useCallback(({ data, filteredData }) => {
		setListData((prevState) => [...prevState, ...data])
		setFilteredListData((data) => [...data, ...filteredData])
		setLoading(false)
	}, [])

	useEffect(() => {
		setLoading(true)
		getMoreJobs(LIMIT, offset, filterState, postFetch, updateLists)
	}, [offset, postFetch, updateLists])

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

	return {
		fetchNext,
		setFilterState,
		jobList: filteredListData,
		loading,
		isMoreResultsAvailable,
	}
}

export default useFilteredListData
