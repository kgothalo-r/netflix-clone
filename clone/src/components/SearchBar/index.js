import React , {useState} from "react";
import { Wrapper, Content } from "./SearchBar.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDataSearch } from "../../hooks/useDataSearch";

const SearchBar = () => {
    // const initial = useRef(true);
    const [searchSection, setSearchSection] = useState(false);
    const [data, setSearch] = useDataSearch();

    const expand = () => {
        setSearchSection(!searchSection);
    }

    // useEffect(() => {
    //     if(initial.current){
    //         initial.current = false;
    //         return;
    //     }
    //     const timer = setTimeout(() =>{
    //         setSearchTerm(state);
    //     },500)
    //     return () =>  clearTimeout(timer)
    // },[setSearchTerm, state])

    return (
        <Wrapper>
            {!searchSection ?<FontAwesomeIcon icon={faSearch} className='icon' onClick={expand}/>:
            (
                <Content  onMouseLeave={expand}>
                <FontAwesomeIcon icon={faSearch} className='icon' onClick={expand}/>
                <input 
                    type='text'
                    placeholder='Title, People, Genre'
                    onChange = {e => setSearch(e.currentTarget.value)}
                />
                </Content>
                
            )
            }
            {console.log(data)}
        </Wrapper>
    )
};

export default SearchBar;


