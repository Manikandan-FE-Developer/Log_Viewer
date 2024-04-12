import './Search.css';

export default function Search(){  

    return  <div className="searchBar">
                <div className="input-group">
                    <input type="text" placeholder="Search logs..."/>
                    <i className="fa fa-search"></i>
                </div>
            </div>
}