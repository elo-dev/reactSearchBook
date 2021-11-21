import { useSelector } from 'react-redux'
import { Error } from '../components/Error/Error'

export const withError = View => {
    return props =>{
        const error = useSelector(state => state.booksReducer.error)
        return(
            <>
            {error 
            ? <Error />
            : <View {...props} />
            }
            </>
        )
    }
}