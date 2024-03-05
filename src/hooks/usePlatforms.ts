import { PlatformProps } from '../modal/FetchResponse'
import useData from "./useData"

const useGenre = () => useData<PlatformProps>('/platforms/lists/parents')

export default useGenre 