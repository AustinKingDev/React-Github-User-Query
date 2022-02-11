

 const SearchForm = (props) => {

    return (
      <div className='search-form'>
      
      <form className='form' onSubmit={props.onSubmit}>
          <label>Input Github UserName</label>
          <br/>
          <br/>
          <input type="text" value={props.userName} onChange={props.onChange}></input>
          <br/>
          <button className='submit-button' type="submit">Submit</button>
      </form>
      </div>
    )
}

export default SearchForm