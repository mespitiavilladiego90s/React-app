import {useContext} from 'react'
import CrispyChipsContext from '../context/CrispyChipsProvider'

const useCrispyChips = () => {
    return useContext(CrispyChipsContext)
}

export default useCrispyChips