import React from "react";
import unsplash from "../api/unsplash.js";
import SearchBar from "./SearchBar.js";
import ImageList from "./ImageList.js";


class App extends React.Component {
  state = {images: []};

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    })
    this.setState({ images: response.data.results });
  } 

  render() {
    return <div>
      <SearchBar onSubmit={this.onSearchSubmit} />
      <ImageList images={this.state.images} />
    </div>
  }
}

export default App;